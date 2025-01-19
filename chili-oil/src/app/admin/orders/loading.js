// app/admin/orders/loading.js
export default function Loading() {
    return (
      <div className="animate-pulse">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
          <div className="h-10 w-64 bg-gray-200 rounded"></div>
        </div>
  
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }