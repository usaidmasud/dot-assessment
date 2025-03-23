export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface ProductCart {
  id?: string;
  product: Product;
  count: number;
}

export interface ProductFavorite {
  id?: string;
  product: Product;
}
