'use client';
import { Shop } from '@/types';
import Link from 'next/link';

interface ShopGridProps {
  shops: Shop[];
}

export default function ShopGrid({ shops }: ShopGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {shops.map((shop) => (
        <Link 
          key={shop.id} 
          href={`/shops/${shop.slug}`}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-100 to-purple-100 h-48 relative flex items-center justify-center">
            {shop.image ? (
              <img
                src={shop.image}
                alt={shop.name}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-indigo-600 text-4xl font-bold">
                {shop.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{shop.name}</h3>
              <span className="flex items-center text-sm text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                ⭐ {shop.rating}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{shop.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded-md">{shop.category}</span>
              <span>{shop.productCount} products</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Remove the ProductGrid function from here - it should be in a separate component