import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  tableId: string | null;
  selectedCategory: number;
  isHeroVisible: boolean;
  setTableId: (id: string | null) => void;
  setSelectedCategory: (id: number) => void;
  setHeroVisible: (visible: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      tableId: null,
      selectedCategory: 1,
      isHeroVisible: true,
      setTableId: (id) => set({ tableId: id }),
      setSelectedCategory: (id) => set({ selectedCategory: id }),
      setHeroVisible: (visible) => set({ isHeroVisible: visible }),
    }),
    {
      name: 'simple-app-storage',
    }
  )
);