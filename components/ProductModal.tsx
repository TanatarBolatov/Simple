import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IProduct } from '../types';
import { useCartStore } from '../store/useCartStore';
import { useAppStore } from '../store/useAppStore';
import { UI_TEXT } from '../constants';

interface ProductModalProps {
  product: IProduct | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const language = useAppStore((state) => state.language);
  const t = UI_TEXT[language];

  // Reset quantity when product changes
  React.useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
          >
            {/* Image Header */}
            <div className="relative h-64 w-full shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto pb-32">
              <h2 className="text-2xl font-display font-bold text-brand-dark mb-2">
                {language === 'kz' && product.name_kz ? product.name_kz : product.name}
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {language === 'kz' && product.description_kz ? product.description_kz : product.description}
              </p>
            </div>

            {/* Sticky Action Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-xl px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 active:scale-90 transition-transform"
                >-</button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-lg font-bold text-gray-600 active:scale-90 transition-transform"
                >+</button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-brand-green text-white font-semibold h-12 rounded-xl flex items-center justify-between px-6 active:scale-95 transition-transform shadow-lg shadow-brand-green/20"
              >
                <span>{t.addToCart}</span>
                <span>{product.price * quantity} ₸</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;