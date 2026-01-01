import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ICartItem, IProduct } from '../types';

interface CartState {
  items: ICartItem[];
  addToCart: (product: IProduct, quantity: number) => void;
  updateQuantity: (tempId: string, quantity: number) => void;
  removeFromCart: (tempId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, quantity) => {
        set((state) => {
          // Simple logic: if product ID matches (ignoring modifiers for simplicity in this demo),
          // update quantity. In a real app with modifiers, we'd check deep equality.
          const existingItemIndex = state.items.findIndex((item) => item.id === product.id);
          
          if (existingItemIndex > -1) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems };
          }

          const newItem: ICartItem = {
            ...product,
            quantity,
            tempId: `${product.id}-${Date.now()}`,
          };
          return { items: [...state.items, newItem] };
        });
      },
      updateQuantity: (tempId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((i) => i.tempId !== tempId) };
          }
          return {
            items: state.items.map((item) =>
              item.tempId === tempId ? { ...item, quantity } : item
            ),
          };
        });
      },
      removeFromCart: (tempId) => {
        set((state) => ({
          items: state.items.filter((item) => item.tempId !== tempId),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      getTotalItems: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'simple-cart-storage',
    }
  )
);