import React from 'react';
import Hero from './components/Header';
import Packages from './components/Package';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-pink-50 text-rose-900">
      <Hero />
      <Packages />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default App;
