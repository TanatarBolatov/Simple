import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAppStore } from './store/useAppStore';

import Hero from './screens/Hero';
import Menu from './screens/Menu';
import Cart from './screens/Cart';
import Payment from './screens/Payment';

// Wrapper component to handle URL params
const AppLogic: React.FC = () => {
  const [searchParams] = useSearchParams();
  const setTableId = useAppStore((state) => state.setTableId);
  const isHeroVisible = useAppStore((state) => state.isHeroVisible);

  useEffect(() => {
    const tableParam = searchParams.get('table');
    if (tableParam) {
      setTableId(tableParam);
    }
  }, [searchParams, setTableId]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isHeroVisible && <Hero />}
      </AnimatePresence>
      
      {!isHeroVisible && (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 max-w-md mx-auto shadow-2xl relative">
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLogic />
    </HashRouter>
  );
};

export default App;