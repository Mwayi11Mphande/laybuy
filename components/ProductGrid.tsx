'use client';
import { Product } from '@/types';
import Link from 'next/link';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link 
          key={product.id} 
          href={`/products/${product.id}`} // Update this to your product detail page
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-100 to-purple-100 h-48 relative flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="text-indigo-600 text-4xl font-bold">
                {product.category.charAt(0)}
              </div>
            )}
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">
                ${product.price}
              </h3>
              <span className="flex items-center text-sm text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
                ⭐ {product.rating.rate} 
                {product.rating.count && ` (${product.rating.count})`}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.title}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="bg-gray-100 px-2 py-1 rounded-md">{product.category}</span>
              <span className="text-green-600 font-medium">
                {product.laybuyAvailable ? 'Laybuy Available' : 'Pay in Full'}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}