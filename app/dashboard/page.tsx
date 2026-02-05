// app/dashboard/page.tsx
'use client';
import { useState } from 'react';

// Define interfaces at the top
interface User {
  name: string;
  role: 'buyer' | 'seller' | 'admin';
  email: string;
}

interface Tab {
  id: string;
  name: string;
  role: 'all' | 'buyer' | 'seller' | 'admin';
  icon: string;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - in real app, this would come from auth context
  const user: User = {
    name: 'John Doe',
    role: 'buyer',
    email: 'john@example.com'
  };

  const tabs: Tab[] = [
    { id: 'overview', name: 'Overview', role: 'all', icon: '📊' },
    { id: 'laybuys', name: 'My Laybuys', role: 'buyer', icon: '🛒' },
    { id: 'products', name: 'My Products', role: 'seller', icon: '📦' },
    { id: 'orders', name: 'Orders', role: 'seller', icon: '📋' },
    { id: 'messages', name: 'Messages', role: 'all', icon: '💬' },
    { id: 'settings', name: 'Settings', role: 'all', icon: '⚙️' },
    { id: 'admin', name: 'Admin Panel', role: 'admin', icon: '👨‍💼' },
  ];

  const filteredTabs = tabs.filter(tab => 
    tab.role === 'all' || tab.role === user.role || user.role === 'admin'
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar Spacer */}
      <div className="h-16 bg-white/80 backdrop-blur-sm border-b border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-gray-600 mt-2">
                  Welcome back, <span className="font-semibold text-indigo-600">{user.name}</span>! Here&apos;s what&apos;s happening today.
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-3 bg-indigo-100 rounded-xl px-4 py-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-indigo-700 font-medium capitalize">{user.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
          <nav className="flex flex-wrap gap-2">
            {filteredTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab user={user} />}
            {activeTab === 'laybuys' && <LaybuysTab />}
            {activeTab === 'products' && <ProductsTab />}
            {activeTab === 'orders' && <OrdersTab />}
            {activeTab === 'messages' && <MessagesTab />}
            {activeTab === 'settings' && <SettingsTab />}
            {activeTab === 'admin' && <AdminTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab Components
function OverviewTab({ user }: { user: User }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>
      
      {user.role === 'buyer' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Active Laybuys</h3>
                <p className="text-3xl font-bold">3</p>
              </div>
              <div className="text-3xl">🛒</div>
            </div>
            <p className="text-indigo-100 text-sm mt-3">Ongoing payment plans</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Paid</h3>
                <p className="text-3xl font-bold">$450</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
            <p className="text-green-100 text-sm mt-3">Amount paid so far</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Remaining Balance</h3>
                <p className="text-3xl font-bold">$150</p>
              </div>
              <div className="text-3xl">⚖️</div>
            </div>
            <p className="text-blue-100 text-sm mt-3">Outstanding amount</p>
          </div>
        </div>
      )}

      {user.role === 'seller' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Products</h3>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="text-3xl">📦</div>
            </div>
            <p className="text-indigo-100 text-sm mt-3">Active listings</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Active Orders</h3>
                <p className="text-3xl font-bold">8</p>
              </div>
              <div className="text-3xl">📋</div>
            </div>
            <p className="text-green-100 text-sm mt-3">Pending fulfillment</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
                <p className="text-3xl font-bold">$2,450</p>
              </div>
              <div className="text-3xl">💳</div>
            </div>
            <p className="text-blue-100 text-sm mt-3">Lifetime earnings</p>
          </div>
        </div>
      )}

      {user.role === 'admin' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold">1,234</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
            <p className="text-indigo-100 text-sm mt-3">Registered users</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Active Shops</h3>
                <p className="text-3xl font-bold">89</p>
              </div>
              <div className="text-3xl">🏪</div>
            </div>
            <p className="text-green-100 text-sm mt-3">Verified sellers</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                <p className="text-3xl font-bold">$45,678</p>
              </div>
              <div className="text-3xl">💸</div>
            </div>
            <p className="text-blue-100 text-sm mt-3">Total volume</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Pending Actions</h3>
                <p className="text-3xl font-bold">5</p>
              </div>
              <div className="text-3xl">⏰</div>
            </div>
            <p className="text-yellow-100 text-sm mt-3">Requires attention</p>
          </div>
        </div>
      )}

      {/* Recent Activity Section */}
      <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-2xl p-6 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-indigo-600">📦</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">New order received</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Completed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LaybuysTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Laybuys</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Product Name {item}</h3>
                  <p className="text-gray-600">Shop: Example Shop</p>
                  <p className="text-2xl font-bold text-indigo-600 mt-1">$200</p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-right">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Progress
                </span>
                <p className="text-gray-500 text-sm mt-2">Next payment: Dec 15</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-3">
                <span className="text-gray-600">Progress: $150 / $200</span>
                <span className="font-semibold text-indigo-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full shadow-inner" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Paid: $150</span>
                <span>Remaining: $50</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">My Products</h2>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-200">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Your Products</h3>
        <p className="text-gray-600 mb-6">Add, edit, and manage your product listings with Laybuy options</p>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
          Add New Product
        </button>
      </div>
    </div>
  );
}

function OrdersTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders Management</h2>
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Management</h3>
        <p className="text-gray-600 mb-6">View and manage customer orders with Laybuy payment tracking</p>
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300">
          View All Orders
        </button>
      </div>
    </div>
  );
}

function MessagesTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages</h2>
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-200">
        <div className="text-6xl mb-4">💬</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Messages</h3>
        <p className="text-gray-600 mb-6">Communicate with customers about orders and Laybuy payments</p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300">
          Open Messages
        </button>
      </div>
    </div>
  );
}

function SettingsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center border border-gray-200">
        <div className="text-6xl mb-4">⚙️</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Account Settings</h3>
        <p className="text-gray-600 mb-6">Manage your profile, payment methods, and notification preferences</p>
        <button className="bg-gradient-to-r from-gray-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

function AdminTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Panel</h2>
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center border border-red-200">
        <div className="text-6xl mb-4">👨‍💼</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Administration</h3>
        <p className="text-gray-600 mb-6">Manage platform settings, users, shops, and system configuration</p>
        <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300">
          Access Admin Tools
        </button>
      </div>
    </div>
  );
}