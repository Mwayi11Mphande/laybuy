// app/seller/dashboard/page.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import ChatInterface from '@/components/ChatInterface';
import OrderList from '@/components/OrderList';
import ProductList from '@/components/ProductList';

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Demo seller data
  const sellerData = {
    name: 'John Doe',
    shopName: 'Fjallraven Shop',
    totalSales: 12450,
    activeProducts: 8,
    pendingOrders: 3,
    unreadMessages: 5
  };

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
              <p className="text-gray-600">Welcome back, {sellerData.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900"
              >
                View Shop
              </Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">MK{sellerData.totalSales}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <span className="text-blue-600 text-2xl">📦</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active Products</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.activeProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-orange-100 p-3 rounded-lg">
                <span className="text-orange-600 text-2xl">🛒</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Pending Orders</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.pendingOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-lg">
                <span className="text-purple-600 text-2xl">💬</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Unread Messages</p>
                <p className="text-2xl font-bold text-gray-900">{sellerData.unreadMessages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border mb-8">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: '📊' },
                { id: 'products', name: 'Products', icon: '📦' },
                { id: 'orders', name: 'Orders', icon: '🛒' },
                { id: 'messages', name: 'Messages', icon: '💬' },
                { id: 'analytics', name: 'Analytics', icon: '📈' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'products' && <ProductsTab />}
            {activeTab === 'orders' && <OrdersTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'analytics' && <AnalyticsTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab Components
function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/seller/products/add"
              className="block bg-white border-2 border-indigo-600 text-indigo-600 py-3 px-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center"
            >
              ➕ Add New Product
            </Link>
            <Link
              href="/seller/orders"
              className="block bg-white border-2 border-green-600 text-green-600 py-3 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
            >
              🛒 View All Orders
            </Link>
            <Link
              href="/seller/messages"
              className="block bg-white border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              💬 Check Messages
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl border p-6">
          <h3 className="text-lg text-black font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { text: 'New order received for "Fjallraven Backpack"', time: '2 minutes ago' },
              { text: 'Sarah Johnson sent you a message', time: '1 hour ago' },
              { text: 'Product "Mens Casual Shirt" was added to cart 5 times', time: '3 hours ago' },
              { text: 'Laybuy payment completed for order #1234', time: '5 hours ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductsTab() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg text-black font-semibold">Your Products</h3>
        <Link
          href="/seller/products/add"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold"
        >
          ➕ Add Product
        </Link>
      </div>
      <ProductList />
    </div>
  );
}

function OrdersTab() {
  return (
    <div>
      <h3 className="text-lg text-black font-semibold mb-6">Recent Orders</h3>
      <OrderList />
    </div>
  );
}

function MessagesTab() {
  return (
    <div>
      <h3 className="text-lg text-black font-semibold mb-6">Customer Messages</h3>
      <ChatInterface />
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Sales Analytics</h3>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center border border-blue-200">
        <div className="text-blue-600 text-6xl mb-4">📈</div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Analytics Coming Soon</h4>
        <p className="text-gray-600">Detailed sales analytics and insights will be available soon.</p>
      </div>
    </div>
  );
}