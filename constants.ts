import { IBranch, ICategory, IProduct } from "./types";

export const UI_TEXT = {
  ru: {
    branches: "Наши филиалы",
    menu: "Меню",
    cart: "Корзина",
    yourOrder: "Ваш заказ",
    addToCart: "В корзину",
    cartEmpty: "Корзина пуста",
    cartEmptyDesc: "Добавьте вкусные блюда из меню, чтобы сделать заказ",
    goToMenu: "Перейти в меню",
    delete: "Удалить",
    total: "Итого",
    toPayment: "Перейти к оплате",
    payment: "Оплата",
    toPay: "К оплате",
    choosePayment: "Выберите способ оплаты",
    pay: "Оплатить",
    orderAccepted: "Заказ принят!",
    kitchenCooking: "Кухня уже начала готовить",
    table: "Стол",
    card: "Банковская карта",
    new: "Новинка",
    seasonal: "Сезонное меню",
    seasonalDesc: "Попробуйте наши летние новинки из свежих продуктов",
    breakfast: "Завтраки",
    morning: "Бодрое утро",
    morningDesc: "Кофе в подарок при заказе любого завтрака до 11:00",
    discount: "Скидка 15%",
    sweetHour: "Сладкий час",
    sweetHourDesc: "Скидка на все десерты и выпечку после 20:00"
  },
  kz: {
    branches: "Біздің филиалдар",
    menu: "Мәзір",
    cart: "Себет",
    yourOrder: "Сіздің тапсырысыңыз",
    addToCart: "Себетке қосу",
    cartEmpty: "Себет бос",
    cartEmptyDesc: "Тапсырыс беру үшін мәзірден дәмді тағамдар қосыңыз",
    goToMenu: "Мәзірге өту",
    delete: "Жою",
    total: "Барлығы",
    toPayment: "Төлемге өту",
    payment: "Төлем",
    toPay: "Төлем сомасы",
    choosePayment: "Төлем әдісін таңдаңыз",
    pay: "Төлеу",
    orderAccepted: "Тапсырыс қабылданды!",
    kitchenCooking: "Асхана дайындауды бастады",
    table: "Үстел",
    card: "Банк картасы",
    new: "Жаңа",
    seasonal: "Маусымдық мәзір",
    seasonalDesc: "Жаңа өнімдерден жасалған жазғы жаңалықтарымызды байқап көріңіз",
    breakfast: "Таңғы астар",
    morning: "Сергек таң",
    morningDesc: "Сағат 11:00-ге дейін кез келген таңғы асқа кофе сыйлыққа",
    discount: "15% жеңілдік",
    sweetHour: "Тәтті сағат",
    sweetHourDesc: "Сағат 20:00-ден кейін барлық десерттер мен нан өнімдеріне жеңілдік"
  }
};

export const CATEGORIES: ICategory[] = [
  { id: 1, name: "Завтраки", name_kz: "Таңғы астар", slug: "breakfast" },
  { id: 2, name: "Супы", name_kz: "Сорпалар", slug: "soups" },
  { id: 3, name: "Горячее", name_kz: "Негізгі тағамдар", slug: "main-courses" },
  { id: 4, name: "Салаты", name_kz: "Салаттар", slug: "salads" },
  { id: 5, name: "Гарниры", name_kz: "Гарнирлер", slug: "sides" },
  { id: 6, name: "Выпечка", name_kz: "Нан өнімдері", slug: "bakery" },
  { id: 7, name: "Десерты", name_kz: "Тәттілер", slug: "desserts" },
];

export const BRANCHES: IBranch[] = [
  { id: '1', address: "Мангилик ел 51/2", address_kz: "Мәңгілік ел 51/2" },
  { id: '2', address: "Улы дала 56/2", address_kz: "Ұлы дала 56/2" },
  { id: '3', address: "Туран 55", address_kz: "Тұран 55" },
  { id: '4', address: "Абикен Бектуров 1/2", address_kz: "Әбікен Бектұров 1/2" },
  { id: '5', address: "Санжара Асфендиярова 10", address_kz: "Санжар Асфендияров 10" },
];

export const PRODUCTS: IProduct[] = [
  // Breakfast
  { id: '101', categoryId: 1, name: "Овсяная каша", name_kz: "Сұлы ботқасы", description: "На кокосовом молоке с ягодами", description_kz: "Кокос сүтінде, жидектермен", price: 1200, image: "https://www.corpdidi.ru/upload/iblock/397/397cc7a8b43ebe4002a10e5479c7c117.jpg" },
  { id: '102', categoryId: 1, name: "Бенедикт с лососем", name_kz: "Лосось қосылған Бенедикт", description: "Яйцо пашот на бриоши с голландским соусом", description_kz: "Голланд соусы қосылған бриошь нанындағы пашот жұмыртқасы", price: 2400, image: "https://images.gastronom.ru/1tAr_upzvdNTnlxIfm9pzvyyG3M7A7BRJSYwrgWqUOQ/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzk1ODI5OTEwLTUxZmEtNDM1Yi1iNWViLWNiNDYwZGI3NDBiMi5qcGc.webp" },
  // Soups
  { id: '201', categoryId: 2, name: "Том Ям", name_kz: "Том Ям", description: "Классический тайский суп с креветками", description_kz: "Асшаяндар қосылған классикалық тай сорпасы", price: 3200, image: "https://www.patee.ru/r/x6/19/7a/dc/960m.jpg" },
  { id: '202', categoryId: 2, name: "Грибной крем-суп", name_kz: "Саңырауқұлақ крем-сорпасы", description: "Из шампиньонов с трюфельным маслом", description_kz: "Шампиньоннан жасалған, трюфель майы қосылған", price: 1800, image: "https://lifehacker.ru/wp-content/uploads/2020/04/shutterstock_562737943_1588005524-e1588005568972-scaled.jpg" },
  // Main
  { id: '301', categoryId: 3, name: "Стейк Рибай", name_kz: "Рибай стейкі", description: "Зерновой откорм, прожарка Medium", description_kz: "Дәнді бордақылау, Medium қуыру", price: 6500, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80" },
  { id: '302', categoryId: 3, name: "Паста Карбонара", name_kz: "Карбонара пастасы", description: "С беконом и пармезаном", description_kz: "Бекон және пармезанмен", price: 2800, image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80" },
  // Salads
  { id: '401', categoryId: 4, name: "Цезарь с курицей", name_kz: "Тауық қосылған Цезарь", description: "Классический рецепт", description_kz: "Классикалық рецепт", price: 2600, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" },
  { id: '402', categoryId: 4, name: "Греческий", name_kz: "Грек салаты", description: "Свежие овощи и сыр фета", description_kz: "Жаңа піскен көкөністер мен фета ірімшігі", price: 2200, image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" },
  // Sides
  { id: '501', categoryId: 5, name: "Картофель фри", name_kz: "Фри картобы", description: "Хрустящий картофель", description_kz: "Қытырлақ картоп", price: 900, image: "https://img.povar.ru/mobile/09/71/a5/2a/kartofel_fri_v_aerogrile-859618.jpg" },
  { id: '502', categoryId: 5, name: "Овощи гриль", name_kz: "Гриль көкөністері", description: "Сезонные овощи", description_kz: "Маусымдық көкөністер", price: 1500, image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=800&q=80" },
  // Bakery
  { id: '601', categoryId: 6, name: "Круассан", name_kz: "Круассан", description: "Сливочный круассан", description_kz: "Сары май қосылған круассан", price: 800, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { id: '602', categoryId: 6, name: "Багет", name_kz: "Багет", description: "Свежеиспеченный французский хлеб", description_kz: "Жаңа піскен француз наны", price: 600, image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80" },
  // Desserts
  { id: '701', categoryId: 7, name: "Чизкейк Нью-Йорк", name_kz: "Нью-Йорк чизкейкі", description: "Классический вкус", description_kz: "Классикалық дәм", price: 1900, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80" },
  { id: '702', categoryId: 7, name: "Тирамису", name_kz: "Тирамису", description: "Итальянский десерт", description_kz: "Итальяндық десерт", price: 2100, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80" },
];