import { IBranch, ICategory, IProduct } from "./types";

export const CATEGORIES: ICategory[] = [
  { id: 1, name: "Завтраки", slug: "breakfast" },
  { id: 2, name: "Супы", slug: "soups" },
  { id: 3, name: "Горячее", slug: "main-courses" },
  { id: 4, name: "Салаты", slug: "salads" },
  { id: 5, name: "Гарниры", slug: "sides" },
  { id: 6, name: "Выпечка", slug: "bakery" },
  { id: 7, name: "Десерты", slug: "desserts" },
];

export const BRANCHES: IBranch[] = [
  { id: '1', address: "Мангилик ел 51/2" },
  { id: '2', address: "Улы дала 56/2" },
  { id: '3', address: "Туран 55" },
  { id: '4', address: "Абикен Бектуров 1/2" },
  { id: '5', address: "Санжара Асфендиярова 10" },
];

export const PRODUCTS: IProduct[] = [
  // Breakfast
  { id: '101', categoryId: 1, name: "Овсяная каша", description: "На кокосовом молоке с ягодами", price: 1200, image: "https://picsum.photos/400/400?random=1" },
  { id: '102', categoryId: 1, name: "Бенедикт с лососем", description: "Яйцо пашот на бриоши с голландским соусом", price: 2400, image: "https://picsum.photos/400/400?random=2" },
  // Soups
  { id: '201', categoryId: 2, name: "Том Ям", description: "Классический тайский суп с креветками", price: 3200, image: "https://picsum.photos/400/400?random=3" },
  { id: '202', categoryId: 2, name: "Грибной крем-суп", description: "Из шампиньонов с трюфельным маслом", price: 1800, image: "https://picsum.photos/400/400?random=4" },
  // Main
  { id: '301', categoryId: 3, name: "Стейк Рибай", description: "Зерновой откорм, прожарка Medium", price: 6500, image: "https://picsum.photos/400/400?random=5" },
  { id: '302', categoryId: 3, name: "Паста Карбонара", description: "С беконом и пармезаном", price: 2800, image: "https://picsum.photos/400/400?random=6" },
  // Salads
  { id: '401', categoryId: 4, name: "Цезарь с курицей", description: "Классический рецепт", price: 2600, image: "https://picsum.photos/400/400?random=7" },
  { id: '402', categoryId: 4, name: "Греческий", description: "Свежие овощи и сыр фета", price: 2200, image: "https://picsum.photos/400/400?random=8" },
  // Sides
  { id: '501', categoryId: 5, name: "Картофель фри", description: "Хрустящий картофель", price: 900, image: "https://picsum.photos/400/400?random=9" },
  { id: '502', categoryId: 5, name: "Овощи гриль", description: "Сезонные овощи", price: 1500, image: "https://picsum.photos/400/400?random=10" },
  // Bakery
  { id: '601', categoryId: 6, name: "Круассан", description: "Сливочный круассан", price: 800, image: "https://picsum.photos/400/400?random=11" },
  { id: '602', categoryId: 6, name: "Багет", description: "Свежеиспеченный французский хлеб", price: 600, image: "https://picsum.photos/400/400?random=12" },
  // Desserts
  { id: '701', categoryId: 7, name: "Чизкейк Нью-Йорк", description: "Классический вкус", price: 1900, image: "https://picsum.photos/400/400?random=13" },
  { id: '702', categoryId: 7, name: "Тирамису", description: "Итальянский десерт", price: 2100, image: "https://picsum.photos/400/400?random=14" },
];