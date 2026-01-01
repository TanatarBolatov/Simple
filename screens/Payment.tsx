import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { useAppStore } from '../store/useAppStore';
import { PaymentMethod } from '../types';

const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<PaymentMethod>('kaspi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { clearCart, getTotalPrice } = useCartStore();
  const tableId = useAppStore((state) => state.tableId);
  const total = getTotalPrice();
  const finalTotal = total + Math.round(total * 0.1);

  const handleCheckout = () => {
    setIsProcessing(true);
    // Mock API call
    setTimeout(() => {
        setIsProcessing(false);
        setIsSuccess(true);
        setTimeout(() => {
            clearCart();
            navigate('/');
        }, 2000);
    }, 1500);
  };

  if (isSuccess) {
      return (
          <div className="fixed inset-0 bg-brand-green flex flex-col items-center justify-center text-white z-50">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12 text-brand-green">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
              </motion.div>
              <h2 className="text-3xl font-display font-bold mb-2">Заказ принят!</h2>
              <p className="opacity-90">Кухня уже начала готовить</p>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       {/* Header */}
       <div className="bg-white px-4 py-4 shadow-sm flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>
            <h1 className="font-display text-xl font-bold">Оплата</h1>
       </div>

       <div className="flex-1 p-4">
           <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 text-center">
               <p className="text-gray-500 mb-1">К оплате (Стол #{tableId || '??'})</p>
               <div className="text-4xl font-bold text-gray-900">{finalTotal} ₸</div>
           </div>

           <h3 className="font-bold text-gray-800 mb-3 px-1">Выберите способ оплаты</h3>
           <div className="space-y-3">
               <button 
                onClick={() => setMethod('kaspi')}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${method === 'kaspi' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}
               >
                   <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs mr-4">QR</div>
                   <span className="font-semibold text-gray-800 flex-1 text-left">Kaspi QR</span>
                   {method === 'kaspi' && <div className="w-4 h-4 rounded-full bg-red-500"></div>}
               </button>

               <button 
                onClick={() => setMethod('card')}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${method === 'card' ? 'border-brand-dark bg-gray-50' : 'border-gray-200 bg-white'}`}
               >
                   <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>
                   </div>
                   <span className="font-semibold text-gray-800 flex-1 text-left">Банковская карта</span>
                   {method === 'card' && <div className="w-4 h-4 rounded-full bg-brand-dark"></div>}
               </button>

               <button 
                onClick={() => setMethod('cash')}
                className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${method === 'cash' ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}
               >
                   <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                   </div>
                   <span className="font-semibold text-gray-800 flex-1 text-left">Наличные</span>
                   {method === 'cash' && <div className="w-4 h-4 rounded-full bg-green-500"></div>}
               </button>
           </div>
       </div>

       <div className="p-4 bg-white border-t border-gray-100">
           <button 
            disabled={isProcessing}
            onClick={handleCheckout}
            className="w-full bg-brand-dark text-white font-bold h-14 rounded-xl flex items-center justify-center text-lg shadow-lg active:scale-[0.98] transition-transform disabled:opacity-70 disabled:scale-100"
           >
                {isProcessing ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                    `Оплатить ${finalTotal} ₸`
                )}
           </button>
       </div>
    </div>
  );
};

export default Payment;