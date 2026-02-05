// lib/shop-utils.ts
import { Product, Shop } from "@/types";

export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-')         // Replace spaces with hyphens
    .replace(/-+/g, '-')          // Remove consecutive hyphens
    .trim();
}

export function transformProductToShop(product: Product): Shop {
  return {
    id: product.id,
    name: product.title,
    slug: createSlug(product.title),
    description: product.description.substring(0, 150) + '...', // Truncate description
    category: product.category,
    image: product.image,
    rating: product.rating.rate,
    productCount: Math.floor(Math.random() * 50) + 10
  };
}

export function enhanceProductsWithShopData(products: Product[]): Product[] {
  return products.map(product => ({
    ...product,
    laybuyAvailable: true,
    stock: Math.floor(Math.random() * 100) + 1,
    shopSlug: createSlug(product.title) // Add shopSlug for navigation
  }));
}

export function getShopBySlug(products: Product[], slug: string): Shop | null {
  const product = products.find(p => createSlug(p.title) === slug);
  
  if (!product) {
    // Try alternative slug formats
    const alternativeProduct = products.find(p => {
      const altSlug = p.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      return altSlug === slug;
    });
    
    return alternativeProduct ? transformProductToShop(alternativeProduct) : null;
  }
  
  return transformProductToShop(product);
}

// Helper function to get all shops
export function getAllShops(products: Product[]): Shop[] {
  return products.map(product => transformProductToShop(product));
}