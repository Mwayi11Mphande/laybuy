// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">Laybyt</span>
            <span className="text-gray-600">| Shop Now, Pay Later</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link href="/shops" className="text-gray-700 hover:text-indigo-600 font-medium">
              Shops
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-indigo-600 font-medium">
              Products
            </Link>
            
            {/* Seller Dashboard Link - Add this */}
            <Link 
              href="/seller/dashboard" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold transition-colors"
            >
              Seller Dashboard
            </Link>

            <Link href="/cart" className="text-gray-700 hover:text-indigo-600 font-medium flex items-center space-x-1">
              <span>🛒</span>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <Link href="/" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link href="/shops" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Shops
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Products
            </Link>
            
            {/* Seller Dashboard Link for Mobile - Add this */}
            <Link 
              href="/seller/dashboard" 
              className="block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold transition-colors text-center"
            >
              Seller Dashboard
            </Link>

            <Link href="/cart" className="block text-gray-700 hover:text-indigo-600 font-medium">
              Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}