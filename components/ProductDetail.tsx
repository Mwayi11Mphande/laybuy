// components/ProductDetail.tsx
'use client';
import { Product } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedInstallment, setSelectedInstallment] = useState('4-weeks');

  const installmentOptions = [
    { id: '4-weeks', label: '4 Payments', amount: (product.price / 4).toFixed(2), frequency: 'Every 2 weeks' },
    { id: '8-weeks', label: '8 Payments', amount: (product.price / 8).toFixed(2), frequency: 'Weekly' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {product.laybuyAvailable && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                Laybuy Available ✅
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-4xl font-bold text-indigo-600">MK{product.price}</span>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="flex items-center text-yellow-600 font-semibold">
                      ⭐ {product.rating.rate} <span className="text-gray-500 ml-1">({product.rating.count} reviews)</span>
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-32 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            {/* Installment Options */}
            {product.laybuyAvailable && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Choose Laybuy Plan</h3>
                <div className="space-y-2">
                  {installmentOptions.map((option) => (
                    <label 
                      key={option.id}
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedInstallment === option.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="installment-plan"
                          value={option.id}
                          checked={selectedInstallment === option.id}
                          onChange={(e) => setSelectedInstallment(e.target.value)}
                          className="text-indigo-600 focus:ring-indigo-500"
                        />
                        <div>
                          <div className="font-medium">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.frequency}</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-indigo-600">
                        MK{option.amount}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <AddToCartButton 
                product={product}
                quantity={quantity}
                installmentPlan={selectedInstallment}
              />
              
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                Buy Now with Laybuy 💳
              </button>
              
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Add to Wishlist ♡
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900">{product.category}</span>
                </div>
                <div>
                  <span className="text-gray-500">Rating:</span>
                  <span className="ml-2 text-gray-900">{product.rating.rate} ⭐</span>
                </div>
                <div>
                  <span className="text-gray-500">Reviews:</span>
                  <span className="ml-2 text-gray-900">{product.rating.count}</span>
                </div>
                <div>
                  <span className="text-gray-500">Payment:</span>
                  <span className="ml-2 text-green-600 font-medium">Laybuy Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}