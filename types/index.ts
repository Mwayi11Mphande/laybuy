export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  // Add these properties to match your ProductGrid expectations
  name?: string;
  laybuyAvailable?: boolean;
  stock?: number;
}

export interface Shop {
  id: number;
  name: string;
  slug: string; // Add slug to Shop interface
  description: string;
  category: string;
  image: string;
  rating: number;
  productCount: number;
}