import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CATEGORIES, PRODUCTS, UI_TEXT } from '../constants';
import { useAppStore } from '../store/useAppStore';
import { useCartStore } from '../store/useCartStore';
import { IProduct } from '../types';
import ProductModal from '../components/ProductModal';
import BannerSlider from '../components/BannerSlider';

const Menu: React.FC = () => {
    const { selectedCategory, setSelectedCategory, language } = useAppStore();
    const cartItemCount = useCartStore((state) => state.getTotalItems());
    const cartTotal = useCartStore((state) => state.getTotalPrice());

    const [activeProduct, setActiveProduct] = useState<IProduct | null>(null);

    const filteredProducts = PRODUCTS.filter(p => p.categoryId === selectedCategory);
    const t = UI_TEXT[language];

    return (
        <div className="min-h-screen pb-24">
            {/* Top Bar */}
            <div className="sticky top-0 z-20 bg-gray-50/80 backdrop-blur-md px-4 py-3 flex items-center justify-center shadow-sm h-[60px]">
                {/* Logo - Center */}
                <h1 className="font-display text-3xl tracking-tight">
                    <span className="text-red-500 drop-shadow-sm">i'</span><span className="text-brand-green drop-shadow-sm">simple</span>
                </h1>
            </div>

            {/* Banner Slider */}
            <div className="mt-4 px-4 mb-8">
                <BannerSlider />
            </div>

            {/* Categories */}
            <div className="sticky top-16 z-10 bg-gray-50 py-2 mb-4">
                <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar pb-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${selectedCategory === cat.id
                                    ? 'bg-brand-green text-white scale-105 shadow-brand-green/30'
                                    : 'bg-white text-gray-600 border border-gray-100'
                                }`}
                        >
                            {language === 'kz' && cat.name_kz ? cat.name_kz : cat.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="px-4 grid grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                    <motion.div
                        key={product.id}
                        layoutId={`product-${product.id}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setActiveProduct(product)}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col active:scale-95 transition-transform"
                    >
                        <div className="h-32 w-full overflow-hidden bg-gray-100">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3 flex flex-col flex-1">
                            <h3 className="font-bold text-gray-800 text-sm leading-tight mb-1 line-clamp-2">
                                {language === 'kz' && product.name_kz ? product.name_kz : product.name}
                            </h3>
                            <p className="text-[10px] text-gray-400 line-clamp-2 mb-2 flex-1">
                                {language === 'kz' && product.description_kz ? product.description_kz : product.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="font-bold text-brand-dark">{product.price} ₸</span>
                                <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-brand-green font-bold text-lg leading-none pb-0.5">+</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Floating Cart Button */}
            {cartItemCount > 0 && (
                <div className="fixed bottom-6 left-4 right-4 z-20">
                    <Link to="/cart">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-brand-green text-white rounded-2xl p-4 shadow-xl shadow-brand-green/30 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 px-3 py-1 rounded-lg font-bold">{cartItemCount}</div>
                                <span className="font-medium">{t.yourOrder}</span>
                            </div>
                            <span className="font-bold text-lg">{cartTotal} ₸</span>
                        </motion.div>
                    </Link>
                </div>
            )}

            {/* Product Detail Modal */}
            <ProductModal
                product={activeProduct}
                onClose={() => setActiveProduct(null)}
            />
        </div>
    );
};

export default Menu;