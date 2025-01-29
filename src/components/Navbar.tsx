import React from 'react';
import { Menu as MenuIcon, Wine } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Wine className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-serif ml-2 text-white">La Cucina</span>
          </div>
          <button className="text-amber-400 hover:text-amber-300">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;