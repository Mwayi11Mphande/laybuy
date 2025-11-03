// components/ProductList.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

interface SellerProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  laybuyAvailable: boolean;
  status: 'active' | 'inactive';
}

export default function ProductList() {
  const [products] = useState<SellerProduct[]>([
    {
      id: 1,
      name: 'Fjallraven Backpack',
      price: 109.95,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 25,
      laybuyAvailable: true,
      status: 'active'
    },
    {
      id: 2,
      name: 'Mens Casual Shirt',
      price: 22.3,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 40,
      laybuyAvailable: true,
      status: 'active'
    }
  ]);

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 truncate">{product.name}</h4>
              <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                <span>MK{product.price}</span>
                <span>•</span>
                <span>{product.stock} in stock</span>
                <span>•</span>
                <span className="bg-gray-100 px-2 py-1 rounded-md">{product.category}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {product.laybuyAvailable && (
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  Laybuy
                </span>
              )}
              <span className={`text-xs px-2 py-1 rounded-full ${
                product.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {product.status}
              </span>
              
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}