// components/AddToCartButton.tsx
'use client';

import { useState } from 'react';
import { Product } from '@/types';

interface AddToCartButtonProps {
  product: Product;
  shopName: string;
  shopSlug: string;
}

export default function AddToCartButton({ product, shopName, shopSlug }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = () => {
    setIsAdding(true);
    
    // Get existing cart or initialize empty array
    const existingCart = localStorage.getItem('laybuy-cart');
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    
    // Check if product already in cart
    const existingItem = cartItems.find((item: any) => item.productId === product.id);
    
    if (existingItem) {
      // Update quantity if already in cart
      existingItem.quantity += 1;
    } else {
      // Add new item to cart
      const newItem = {
        id: Date.now(), // Simple ID generation
        productId: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
        shopName: shopName,
        shopSlug: shopSlug,
        laybuyAvailable: true, // Assuming all products support Laybuy
        category: product.category
      };
      cartItems.push(newItem);
    }
    
    // Save back to localStorage
    localStorage.setItem('laybuy-cart', JSON.stringify(cartItems));
    
    // Show success feedback
    setTimeout(() => {
      setIsAdding(false);
      // You could add a toast notification here
      alert(`${product.title} added to cart!`);
    }, 500);
  };

  return (
    <button
      onClick={addToCart}
      disabled={isAdding}
      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
  );
}