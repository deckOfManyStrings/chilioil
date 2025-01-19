'use client'

import React, { useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { jarSizes } from '../data/jarSizes';
import { ingredients } from '../data/ingredients';
import SizeSelector from './SizeSelector';
import IngredientCard from './IngredientCard';
import HeatLevel from './HeatLevel';

export default function ChiliOilCustomizer() {
  const [selectedSize, setSelectedSize] = useState(jarSizes[1]); // Default to medium
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [price, setPrice] = useState(jarSizes[1].basePrice);

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customize Your Chili Oil
          </h1>
          <p className="text-lg text-gray-700">
            Start with our signature blend and add your favorite ingredients
          </p>
        </div>

        {/* Size Selector - Full Width */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
          <SizeSelector
            sizes={jarSizes}
            selectedSize={selectedSize}
            onSizeChange={handleSizeChange}
          />
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Ingredients */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Product */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <div className="bg-red-50 rounded-xl p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Signature Chili Oil Base
                    </h3>
                    <p className="text-gray-700">
                      Our perfectly balanced blend of premium chilies, 
                      aromatic spices, and cold-pressed oil.
                    </p>
                    <div className="mt-4">
                      <HeatLevel level={3} />
                      <p className="text-sm text-gray-600 mt-1">Base Heat Level: Medium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Options */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Add Extra Ingredients
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

          {/* Right Column - Selections & Checkout */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Custom Blend</h3>
              
              {/* Selected Size */}
              <div className="mb-6 pb-6 border-b">
                <div className="flex justify-between text-gray-900">
                  <span className="font-medium">{selectedSize.name} Jar</span>
                  <span>${selectedSize.basePrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{selectedSize.size}</p>
              </div>

              {/* Selected Ingredients */}
              {selectedIngredients.length > 0 ? (
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-medium text-gray-900 mb-4">Added Ingredients:</h4>
                  <div className="space-y-2">
                    {selectedIngredients.map((ingredient) => (
                      <div key={ingredient.id} className="flex justify-between text-gray-700">
                        <span>{ingredient.name}</span>
                        <span>${ingredient.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mb-6 pb-6 border-b">
                  <p className="text-gray-600 text-sm">
                    No extra ingredients added yet. Customize your blend by selecting ingredients from the list.
                  </p>
                </div>
              )}

              {/* Total Price */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Total:</h3>
                  <div className="text-2xl font-bold text-gray-900">
                    ${price.toFixed(2)}
                  </div>
                </div>
                
                <button
                  className="w-full py-4 bg-red-600 text-white rounded-lg font-semibold 
                           hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}