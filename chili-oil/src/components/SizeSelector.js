export default function SizeSelector({ sizes, selectedSize, onSizeChange }) {
    return (
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Choose Your Size
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedSize.id === size.id
                  ? 'border-red-600 bg-red-50'
                  : 'border-gray-200 hover:border-red-200'
              }`}
            >
              <div className="text-lg font-semibold text-gray-900">{size.name}</div>
              <div className="text-sm text-gray-600">{size.size}</div>
              <div className="mt-2 text-lg font-bold text-gray-900">
                ${size.basePrice.toFixed(2)}
              </div>
              <div className="mt-1 text-sm text-gray-600">{size.description}</div>
            </button>
          ))}
        </div>
      </div>
    );
  }