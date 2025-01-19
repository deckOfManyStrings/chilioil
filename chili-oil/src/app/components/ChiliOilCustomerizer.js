// components/ChiliSpiceCustomizer.js
'use client';

import React, { useState } from 'react';
import { ShoppingCartIcon, Flame, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { ingredients, baseBlend } from '../data/ingredients';
import SizeSelector from './SizeSelector';
import IngredientCard from './IngredientCard';
import HeatLevel from './HeatLevel';
import { jarSizes } from '@/data/jarSizes';

export default function ChiliSpiceCustomizer() {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(jarSizes[1]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [price, setPrice] = useState(jarSizes[1].basePrice);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    const ingredientTotal = selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);
    setPrice(size.basePrice + ingredientTotal);
  };

  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
    setPrice(prevPrice => prevPrice + ingredient.price);
  };

  const removeIngredient = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter(item => item.id !== ingredient.id));
    setPrice(prevPrice => prevPrice - ingredient.price);
  };

  const isIngredientSelected = (ingredient) => {
    return selectedIngredients.some(item => item.id === ingredient.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Create Your Custom Chili Oil Kit
          </h1>
          <p className="text-lg text-slate-800">
            Choose your spices and make fresh chili oil at home
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="bg-rose-50 rounded-xl p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Signature Spice Blend Base
                    </h3>
                    <p className="text-slate-800 mb-4">{baseBlend.description}</p>
                    <div className="mb-4">
                      <HeatLevel level={baseBlend.heatLevel} />
                      <p className="text-sm text-slate-700 mt-1">Base Heat Level: Medium</p>
                    </div>
                    <button
                      onClick={() => setShowInstructions(!showInstructions)}
                      className="text-rose-600 hover:text-rose-700 flex items-center text-sm"
                    >
                      <Info className="h-4 w-4 mr-1" />
                      {showInstructions ? 'Hide Instructions' : 'View Instructions'}
                    </button>
                  </div>
                </div>
              </div>

              {showInstructions && (
                <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                  <h4 className="font-semibold text-slate-900 mb-4">Instructions:</h4>
                  <ol className="list-decimal pl-4 space-y-2 mb-6">
                    {baseBlend.instructions.map((instruction, index) => (
                      <li key={index} className="text-slate-800">{instruction}</li>
                    ))}
                  </ol>
                  
                  <h4 className="font-semibold text-slate-900 mb-2 mt-4">Pro Tips:</h4>
                  <ul className="list-disc pl-4 space-y-2 mb-6">
                    {baseBlend.tips.map((tip, index) => (
                      <li key={index} className="text-slate-800">{tip}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-slate-900 mb-2">Recommended Oils:</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    {baseBlend.oilRecommendations.map((oil, index) => (
                      <li key={index} className="text-slate-800">{oil}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <SizeSelector
                sizes={jarSizes}
                selectedSize={selectedSize}
                onSizeChange={handleSizeChange}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Add Extra Spices
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {ingredients.map((ingredient) => (
                  <IngredientCard
                    key={ingredient.id}
                    ingredient={ingredient}
                    isSelected={isIngredientSelected(ingredient)}
                    onAdd={addIngredient}
                    onRemove={removeIngredient}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Your Kit Includes</h3>
              
              <div className="mb-6 pb-6 border-b">
                <div className="flex justify-between text-slate-900">
                  <span className="font-medium">{selectedSize.name} Kit</span>
                  <span>${selectedSize.basePrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-slate-700 mt-1">Includes jar and base blend</p>
              </div>

              {selectedIngredients.length > 0 ? (
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-medium text-slate-900 mb-4">Added Spices:</h4>
                  <div className="space-y-2">
                    {selectedIngredients.map((ingredient) => (
                      <div key={ingredient.id} className="flex justify-between text-slate-800">
                        <span>{ingredient.name}</span>
                        <span>${ingredient.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-6 pb-6 border-b">
                  <p className="text-slate-700 text-sm">
                    No extra spices added yet. Customize your blend by selecting spices from the list.
                  </p>
                </div>
              )}

              <div className="mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Total:</h3>
                  <div className="text-2xl font-bold text-slate-900">
                    ${price.toFixed(2)}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    addItem({
                      id: 'custom-chili-kit',
                      name: 'Custom Chili Oil Kit',
                      price: price,
                      customizations: {
                        size: `${selectedSize.name} (${selectedSize.size})`,
                        ingredients: selectedIngredients
                      }
                    });
                    toast.success('Kit added to cart!', {
                      duration: 2000,
                      style: {
                        border: '1px solid #10B981',
                        padding: '16px',
                      },
                    });
                  }}
                  className="w-full py-4 bg-rose-600 text-white rounded-lg font-semibold 
                           hover:bg-rose-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="text-sm text-slate-700">
                * Oil not included. See instructions for recommended types.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}