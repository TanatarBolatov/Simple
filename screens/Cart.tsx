import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useAppStore } from '../store/useAppStore';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();
  const tableId = useAppStore((state) => state.tableId);

  const total = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
       {/* Header */}
       <div className="bg-white sticky top-0 z-10 px-4 py-4 shadow-sm flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <h1 className="font-display text-xl font-bold">Корзина {tableId ? `(Стол ${tableId})` : ''}</h1>
       </div>

       {items.length === 0 ? (
           <div className="flex flex-col items-center justify-center h-[60vh] text-center px-8">
               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6 text-4xl">🛒</div>
               <h2 className="text-xl font-bold text-gray-800 mb-2">Корзина пуста</h2>
               <p className="text-gray-500 mb-8">Добавьте вкусные блюда из меню, чтобы сделать заказ</p>
               <Link to="/" className="px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-colors">Перейти в меню</Link>
           </div>
       ) : (
           <div className="p-4 space-y-4">
               <AnimatePresence>
                {items.map((item) => (
                    <motion.div
                        key={item.tempId}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="bg-white rounded-2xl p-4 shadow-sm flex gap-4 overflow-hidden"
                    >
                        <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-gray-800">{item.name}</h3>
                                <p className="text-brand-dark font-semibold">{item.price} ₸</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center bg-gray-100 rounded-lg h-8">
                                    <button 
                                        onClick={() => updateQuantity(item.tempId, item.quantity - 1)}
                                        className="w-8 flex items-center justify-center text-lg text-gray-600 font-bold"
                                    >-</button>
                                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.tempId, item.quantity + 1)}
                                        className="w-8 flex items-center justify-center text-lg text-gray-600 font-bold"
                                    >+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.tempId)} className="text-xs text-red-500 font-medium px-2">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
               </AnimatePresence>

                {/* Summary */}
                <div className="mt-8 bg-white rounded-2xl p-5 shadow-sm space-y-3">
                    <div className="flex justify-between text-gray-500 text-sm">
                        <span>Подытог</span>
                        <span>{total} ₸</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                        <span>Обслуживание (10%)</span>
                        <span>{Math.round(total * 0.1)} ₸</span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 pt-3 flex justify-between font-bold text-xl text-gray-800">
                        <span>Итого</span>
                        <span>{total + Math.round(total * 0.1)} ₸</span>
                    </div>
                </div>
           </div>
       )}

       {items.length > 0 && (
           <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-100 z-20">
               <Link to="/payment" className="w-full bg-brand-dark text-white font-bold h-14 rounded-xl flex items-center justify-center text-lg shadow-lg active:scale-[0.98] transition-transform">
                    Перейти к оплате
               </Link>
           </div>
       )}
    </div>
  );
};

export default Cart;