// components/IngredientCard.js
import { PlusIcon, MinusIcon } from 'lucide-react';
import HeatLevel from './HeatLevel';

export default function IngredientCard({ 
  ingredient, 
  isSelected, 
  onAdd, 
  onRemove 
}) {
  return (
    <div className="border rounded-lg p-4 bg-white hover:border-red-200 transition-colors">
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
              <HeatLevel level={ingredient.heatLevel} />
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
          onClick={() => isSelected ? onRemove(ingredient) : onAdd(ingredient)}
          className={`ml-4 p-2 rounded-lg transition-colors h-fit ${
            isSelected
              ? 'bg-red-100 text-red-600 hover:bg-red-200'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isSelected ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}