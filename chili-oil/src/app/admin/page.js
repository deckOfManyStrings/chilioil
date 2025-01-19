// app/admin/page.js
'use client';

import { DollarSign, Package, ShoppingCart, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Total Revenue', value: '$12,345', icon: DollarSign },
    { name: 'Orders', value: '156', icon: Package },
    { name: 'Customers', value: '89', icon: Users },
    { name: 'Products Sold', value: '234', icon: ShoppingCart },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Icon className="h-6 w-6 text-gray-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600">
                <th className="pb-4">Order ID</th>
                <th className="pb-4">Customer</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="border-t">
                  <td className="py-4">#1234{i}</td>
                  <td className="py-4">John Doe</td>
                  <td className="py-4">Custom Chili Oil (8 oz)</td>
                  <td className="py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      Completed
                    </span>
                  </td>
                  <td className="py-4">$24.99</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}