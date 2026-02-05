// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with PNG */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-auto h-12"> {/* Increased height and made width auto */}
              <Image
                src="/laybuy6.png"
                alt="Laybyt Logo"
                width={300} // Adjust these values based on your logo's aspect ratio
                height={408} // Should match the parent height (h-12 = 48px)
                className="object-contain h-full w-auto" // Full height, auto width
                priority
              />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-2xl font-bold text-indigo-600 leading-tight">Laybyt</span> */}
              <span className="text-sm text-gray-500">Shop Now, Pay Later</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/shops" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Shops
            </Link>
            {/* <Link href="/products" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Products
            </Link> */}
            
            {/* Seller Dashboard Link */}
            <Link 
              href="/seller/dashboard" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Seller Dashboard
            </Link>

            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              My Account
            </Link>

            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg"
            >
              <span className="text-xl">🛒</span>
              <span>Cart</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-indigo-600 p-2"
            >
              <span className="text-xl">🛒</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/shops" 
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shops
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/dashboard" 
              className="block text-gray-700 hover:text-indigo-600 font-medium py-2.5 px-4 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              My Account
            </Link>
            
            {/* Seller Dashboard Link for Mobile */}
            <Link 
              href="/seller/dashboard" 
              className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 font-semibold transition-colors text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Seller Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}