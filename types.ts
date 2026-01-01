export interface IModifier {
  id: string;
  name: string;
  price: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
  modifiers?: IModifier[];
}

export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
  selectedModifiers?: IModifier[];
  tempId: string; // unique id for cart item (product + modifiers combination)
}

export type PaymentMethod = 'cash' | 'kaspi' | 'card';

export interface IBranch {
  id: string;
  address: string;
}