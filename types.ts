export type Language = 'ru' | 'kz';

export interface IModifier {
  id: string;
  name: string;
  name_kz?: string;
  price: number;
}

export interface IProduct {
  id: string;
  name: string;
  name_kz?: string;
  description: string;
  description_kz?: string;
  price: number;
  image: string;
  categoryId: number;
  modifiers?: IModifier[];
}

export interface ICategory {
  id: number;
  name: string;
  name_kz?: string;
  slug: string;
}

export interface ICartItem extends IProduct {
  quantity: number;
  selectedModifiers?: IModifier[];
  tempId: string; // unique id for cart item (product + modifiers combination)
}

export type PaymentMethod = 'kaspi' | 'card';

export interface IBranch {
  id: string;
  address: string;
  address_kz?: string;
}