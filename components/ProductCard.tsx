// components/ProductCard.tsx
'use client';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define CartItem interface
interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  shopName: string;
  shopSlug: string;
  laybuyAvailable: boolean;
  category: string;
}

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  shopName?: string;
  shopSlug?: string;
}

export default function ProductCard({ 
  product, 
  showAddToCart = true,
  shopName,
  shopSlug 
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = () => {
    if (!shopName || !shopSlug) {
      alert('Shop information missing');
      return;
    }

    setIsAdding(true);
    
    try {
      // Get existing cart or initialize empty array
      const existingCart = localStorage.getItem('laybuy-cart');
      const cartItems: CartItem[] = existingCart ? JSON.parse(existingCart) : [];
      
      // Check if product already in cart
      const existingItem = cartItems.find((item: CartItem) => item.productId === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem: CartItem = {
          id: Date.now(),
          productId: product.id,
          name: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
          shopName: shopName,
          shopSlug: shopSlug,
          laybuyAvailable: product.laybuyAvailable || true,
          category: product.category
        };
        cartItems.push(newItem);
      }
      
      localStorage.setItem('laybuy-cart', JSON.stringify(cartItems));
      
      setTimeout(() => {
        setIsAdding(false);
        alert(`✅ ${product.title} added to cart!`);
      }, 500);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setIsAdding(false);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-100 group">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              width={192}
              height={192}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
              MK{product.price}
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
      
      {/* Add to Cart Button */}
      {showAddToCart && shopName && shopSlug && (
        <div className="p-4 pt-0">
          <button
            onClick={addToCart}
            disabled={isAdding}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mt-2"
          >
            {isAdding ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Adding...</span>
              </>
            ) : (
              <>
                <span>🛒</span>
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}