import React, { useState } from 'react';
import { PlusIcon, MinusIcon, ShoppingCartIcon, FlameIcon } from 'lucide-react';
import Link from 'next/link';

const ChiliOilCustomizer = () => {
  const basePrice = 12.99;
  
  const [price, setPrice] = useState(basePrice);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  
  const availableIngredients = [
    {
      id: 1,
      name: 'Dried Garlic',
      price: 1.50,
      description: 'Adds a rich, savory depth',
      effect: 'Infuses the oil with a mellow, roasted garlic flavor that adds complexity and umami. Perfect for those who love a garlicky punch in their condiments.',
      heatLevel: 0
    },
    {
      id: 2,
      name: 'Sesame Seeds',
      price: 1.00,
      description: 'Nutty flavor and texture',
      effect: 'Creates a toasted, nutty undertone and adds a pleasant crunch. Enhances the overall mouth feel and provides a subtle richness.',
      heatLevel: 0
    },
    {
      id: 3,
      name: 'Sichuan Peppercorns',
      price: 2.00,
      description: 'Unique numbing spiciness',
      effect: 'Provides the signature "má" numbing sensation along with citrusy notes. Creates a tingling effect that dances on your tongue.',
      heatLevel: 2
    },
    {
      id: 4,
      name: 'Dried Shallots',
      price: 1.50,
      description: 'Sweet and aromatic',
      effect: 'Contributes a sweet, oniony flavor that's more delicate than garlic. Adds layers of subtle sweetness and aroma.',
      heatLevel: 0
    },
    {
      id: 5,
      name: 'Star Anise',
      price: 1.75,
      description: 'Subtle licorice notes',
      effect: 'Imparts warm, sweet notes with hints of licorice and fennel. Adds complexity and a traditional Chinese flavor profile.',
      heatLevel: 0
    },
    {
      id: 6,
      name: 'Thai Chilies',
      price: 2.00,
      description: 'Intense, sharp heat',
      effect: 'Delivers an immediate, bright heat with subtle fruity undertones. These chilies create a quick, sharp burn that doesn't linger too long.',
      heatLevel: 4
    },
    {
      id: 7,
      name: 'Jalapeños',
      price: 1.75,
      description: 'Medium heat with fresh notes',
      effect: 'Provides a gradual, accessible heat with a fresh, green pepper flavor. Adds a familiar spiciness that builds slowly.',
      heatLevel: 2
    },
    {
      id: 8,
      name: 'Bird's Eye Chilies',
      price: 2.25,
      description: 'Bright, fiery heat',
      effect: 'Creates an intense, sharp heat with citrusy notes. These small chilies pack a serious punch with their concentrated spiciness.',
      heatLevel: 5
    },
    {
      id: 9,
      name: 'Carolina Reaper',
      price: 3.00,
      description: 'Extreme heat - handle with care',
      effect: 'The world\'s hottest pepper. Adds incredible heat with a sweet, fruity undertone. Warning: Extremely spicy - even a small amount will significantly increase the heat level of your oil.',
      heatLevel: 5,
      warning: true
    },
  ];

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

  const renderHeatLevel = (level) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FlameIcon
            key={index}
            className={`h-4 w-4 ${
              index < level 
                ? 'text-red-500' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customize Your Chili Oil
          </h1>
          <p className="text-lg text-gray-700">
            Start with our signature blend and add your favorite ingredients
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Base Product */}
          <div className="bg-red-50 rounded-xl p-6 mb-8">
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
                  {renderHeatLevel(3)}
                  <p className="text-sm text-gray-600 mt-1">Base Heat Level: Medium</p>
                </div>
              </div>
              <div className="text-xl font-bold text-gray-900">
                ${basePrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Add Extra Ingredients
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {availableIngredients.map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="border rounded-lg p-4 bg-white hover:border-red-200 transition-colors"
                >
                  <div className="flex justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{ingredient.name}</h4>
                        <p className="text-sm text-gray-700 font-medium">
                          +${ingredient.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{ingredient.description}</p>
                      <p className="text-sm text-gray-700">{ingredient.effect}</p>
                      {ingredient.heatLevel > 0 && (
                        <div className="mt-2">
                          {renderHeatLevel(ingredient.heatLevel)}
                          <p className="text-sm text-gray-600 mt-1">
                            Heat Contribution: {
                              ingredient.heatLevel === 1 ? 'Mild' :
                              ingredient.heatLevel === 2 ? 'Medium' :
                              ingredient.heatLevel === 3 ? 'Medium-Hot' :
                              ingredient.heatLevel === 4 ? 'Hot' :
                              'Extra Hot'
                            }
                          </p>
                          {ingredient.warning && (
                            <p className="text-sm text-red-600 font-medium mt-2">
                              ⚠️ Extremely Hot: Use sparingly - this pepper is significantly hotter than others
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => 
                        isIngredientSelected(ingredient) 
                          ? removeIngredient(ingredient)
                          : addIngredient(ingredient)
                      }
                      className={`ml-4 p-2 rounded-lg transition-colors h-fit ${
                        isIngredientSelected(ingredient)
                          ? 'bg-red-100 text-red-600 hover:bg-red-200'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {isIngredientSelected(ingredient) ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Ingredients Summary */}
          {selectedIngredients.length > 0 && (
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Selections:</h3>
              <div className="space-y-2">
                {selectedIngredients.map((ingredient) => (
                  <div key={ingredient.id} className="flex justify-between text-gray-700">
                    <span>{ingredient.name}</span>
                    <span>${ingredient.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price and Cart */}
          <div className="border-t pt-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Total Price:</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Includes base oil and all additions
                </p>
              </div>
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
  );
};

export default ChiliOilCustomizer;