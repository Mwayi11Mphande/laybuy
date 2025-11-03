// components/ShopHeader.tsx
'use client';

import Link from "next/link";

interface Shop {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  productCount: number;
  image?: string;
}

interface ShopHeaderProps {
  shop: Shop;
}

export default function ShopHeader({ shop }: ShopHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 relative">
      {/* Cart Button - Fixed positioning */}
      <div className="absolute top-6 right-6">
        <Link
          href="/cart"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 hover:bg-indigo-700"
        >
          <span>🛒</span>
          <span>View Cart</span>
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Shop Avatar */}
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center">
          {shop.image ? (
            <img src={shop.image} alt={shop.name} className="w-20 h-20 rounded-lg object-cover" />
          ) : (
            <span className="text-3xl font-bold text-indigo-600">{shop.name.charAt(0)}</span>
          )}
        </div>

        {/* Shop Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{shop.name}</h1>
          <p className="text-gray-600 mb-4 max-w-2xl">{shop.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-600">⭐</span>
              <span className="font-semibold">{shop.rating}</span>
              <span className="text-gray-500">({Math.floor(shop.rating * 10)} reviews)</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-gray-600">{shop.productCount} products</span>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">
              {shop.category}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 font-semibold">
            Contact Seller
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 font-semibold">
            Follow Shop
          </button>
        </div>
      </div>
    </div>
  );
}