'use client';

import { useState } from 'react';
import { Search, Printer } from 'lucide-react';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  
  const orders = [
    {
      id: '12345',
      customer: 'John Doe',
      email: 'john@example.com',
      shippingAddress: {
        street: '123 Main St',
        city: 'Seattle',
        state: 'WA',
        zip: '98101'
      },
      date: '2024-01-19',
      status: 'pending',
      items: [
        {
          name: 'Custom Chili Oil',
          size: '8 oz',
          baseHeat: 'Medium',
          ingredients: ['Dried Garlic', 'Sichuan Peppercorns']
        }
      ]
    }
  ];

  const OrderDetails = ({ order }) => (
    <div className="fixed inset-0 bg-slate-50/90 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-bold text-slate-900">Order #{order.id}</h2>
          <button 
            onClick={() => setSelectedOrder(null)}
            className="text-slate-500 hover:text-slate-700"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Shipping Address</h3>
            <div className="bg-rose-50 p-3 rounded">
              <p className="text-slate-900">{order.customer}</p>
              <p className="text-slate-800">{order.shippingAddress.street}</p>
              <p className="text-slate-800">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Order Contents</h3>
            {order.items.map((item, index) => (
              <div key={index} className="bg-rose-50 p-3 rounded mb-2">
                <p className="font-medium text-slate-900">{item.name} - {item.size}</p>
                <p className="text-slate-800">Base Heat Level: {item.baseHeat}</p>
                <p className="text-slate-800">
                  Added Ingredients: {item.ingredients.join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={() => window.print()}
              className="flex items-center px-4 py-2 bg-slate-100 rounded hover:bg-slate-200 text-slate-900"
            >
              <Printer className="h-4 w-4 mr-2" />
              Print Label
            </button>
            <button 
              className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700"
            >
              Mark as Shipped
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Orders to Pack</h1>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-rose-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-rose-50 border-b text-left text-sm font-medium text-slate-900">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {orders.map((order) => (
                <tr key={order.id} className="text-sm text-slate-800">
                  <td className="px-6 py-4">#{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{order.customer}</div>
                    <div className="text-xs text-slate-600">{order.shippingAddress.city}, {order.shippingAddress.state}</div>
                  </td>
                  <td className="px-6 py-4">
                    {order.items.map((item, index) => (
                      <div key={index}>
                        <div className="text-slate-900">{item.name} ({item.size})</div>
                        <div className="text-xs text-slate-600">
                          + {item.ingredients.join(', ')}
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 text-slate-900">{order.date}</td>
                  <td className="px-6 py-4">
                    <button 
                      className="text-rose-600 hover:text-rose-800 font-medium"
                      onClick={() => setSelectedOrder(order)}
                    >
                      Pack Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && <OrderDetails order={selectedOrder} />}
    </div>
  );
}