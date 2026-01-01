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
  { id: '101', categoryId: 1, name: "Овсяная каша", description: "На кокосовом молоке с ягодами", price: 1200, image: "https://polinka.online/upload/dev2fun.imagecompress/webp/iblock/aa9/u1yt2302z13fmnqyvnxrm0tznpwvieqa.webp" },
  { id: '102', categoryId: 1, name: "Бенедикт с лососем", description: "Яйцо пашот на бриоши с голландским соусом", price: 2400, image: "https://images.gastronom.ru/1tAr_upzvdNTnlxIfm9pzvyyG3M7A7BRJSYwrgWqUOQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1ODI5OTEwLTUxZmEtNDM1Yi1iNWViLWNiNDYwZGI3NDBiMi5qcGc.webp" },
  // Soups
  { id: '201', categoryId: 2, name: "Том Ям", description: "Классический тайский суп с креветками", price: 3200, image: "https://hi-food.ru/wp-content/uploads/2024/10/frame-13.png" },
  { id: '202', categoryId: 2, name: "Грибной крем-суп", description: "Из шампиньонов с трюфельным маслом", price: 1800, image: "https://www.russianfood.com/dycontent/images_upl/411/big_410539.jpg" },
  // Main
  { id: '301', categoryId: 3, name: "Стейк Рибай", description: "Зерновой откорм, прожарка Medium", price: 6500, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },
  { id: '302', categoryId: 3, name: "Паста Карбонара", description: "С беконом и пармезаном", price: 2800, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80" },
  // Salads
  { id: '401', categoryId: 4, name: "Цезарь с курицей", description: "Классический рецепт", price: 2600, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" },
  { id: '402', categoryId: 4, name: "Греческий", description: "Свежие овощи и сыр фета", price: 2200, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" },
  // Sides
  { id: '501', categoryId: 5, name: "Картофель фри", description: "Хрустящий картофель", price: 900, image: "https://rutxt.ru/files/21480/final/762480a162.JPG" },
  { id: '502', categoryId: 5, name: "Овощи гриль", description: "Сезонные овощи", price: 1500, image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80" },
  // Bakery
  { id: '601', categoryId: 6, name: "Круассан", description: "Сливочный круассан", price: 800, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { id: '602', categoryId: 6, name: "Багет", description: "Свежеиспеченный французский хлеб", price: 600, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80" },
  // Desserts
  { id: '701', categoryId: 7, name: "Чизкейк Нью-Йорк", description: "Классический вкус", price: 1900, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80" },
  { id: '702', categoryId: 7, name: "Тирамису", description: "Итальянский десерт", price: 2100, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80" },
];