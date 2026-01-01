import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from '../types';

interface AppState {
  tableId: string | null;
  selectedCategory: number;
  isHeroVisible: boolean;
  language: Language;
  setTableId: (id: string | null) => void;
  setSelectedCategory: (id: number) => void;
  setHeroVisible: (visible: boolean) => void;
  setLanguage: (lang: Language) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      tableId: null,
      selectedCategory: 1,
      isHeroVisible: true,
      language: 'ru',
      setTableId: (id) => set({ tableId: id }),
      setSelectedCategory: (id) => set({ selectedCategory: id }),
      setHeroVisible: (visible) => set({ isHeroVisible: visible }),
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'simple-app-storage',
    }
  )
);