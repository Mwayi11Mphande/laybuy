// "use server"

// import { Product } from "@/types";


// export async function getProducts() {
 
//     return fetch('https://fakestoreapi.com/products')
//   .then(response => response.json()) as Promise<Product[]>;
// }   

"use server"

import { Product } from "@/types";
import { transformProductToShop } from "@/lib/shop-utils";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    return products as Product[];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export async function getShops(): Promise<any[]> {
  try {
    const products = await getProducts();
    return products.map(transformProductToShop);
  } catch (error) {
    console.error('Failed to fetch shops:', error);
    return [];
  }
}