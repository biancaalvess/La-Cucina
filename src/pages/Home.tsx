import React, { useState } from 'react';
import { ChefHat, Grape, Fish, UtensilsCrossed } from 'lucide-react';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menu = {
    risotto: [
      {
        name: "Risotto al Tartufo Nero",
        description: "Creamy Arborio rice with black truffle and aged Parmesan",
        price: 42,
        image: "https://images.unsplash.com/photo-1676037150408-4b59a542fa7c?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Risotto ai Frutti di Mare",
        description: "Seafood risotto with prawns, scallops, and fresh herbs",
        price: 38,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800"
      }
    ],
    fish: [
      {
        name: "Branzino alla Griglia",
        description: "Grilled Mediterranean sea bass with lemon and herbs",
        price: 45,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Salmone in Crosta",
        description: "Herb-crusted salmon with white wine sauce",
        price: 39,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800"
      }
    ],
    pasta: [
      {
        name: "Tagliolini al Tartufo",
        description: "Handmade tagliolini pasta with fresh black truffle",
        price: 36,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Ravioli di Aragosta",
        description: "Lobster ravioli in saffron cream sauce",
        price: 40,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800"
      }
    ],
    wines: [
      {
        name: "Barolo Riserva 2018",
        description: "Full-bodied red wine with notes of rose and tar",
        price: 180,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Chablis Grand Cru 2020",
        description: "Elegant white wine with mineral complexity",
        price: 160,
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80&w=800"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All', icon: UtensilsCrossed },
    { id: 'risotto', name: 'Risotto', icon: ChefHat },
    { id: 'fish', name: 'Fish', icon: Fish },
    { id: 'pasta', name: 'Pasta', icon: UtensilsCrossed },
    { id: 'wines', name: 'Wines', icon: Grape }
  ];

  const getAllDishes = () => {
    if (activeCategory === 'all') {
      return Object.values(menu).flat();
    }
    return menu[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&q=80&w=1600"
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-4">La Cucina</h1>
            <p className="text-xl text-amber-400 font-light">Fine Italian Dining</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="sticky top-20 bg-black/95 backdrop-blur-md z-40 py-4 px-4">
        <div className="flex justify-center space-x-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition
                ${activeCategory === category.id 
                  ? 'bg-amber-400 text-black' 
                  : 'text-amber-400 hover:bg-amber-400/10'}`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {getAllDishes().map((item, index) => (
            <div key={index} className="bg-black/50 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition group">
              <div className="relative h-64">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full">
                  <span className="text-amber-400">${item.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-amber-400/20 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-400 mb-2">La Cucina</p>
          <p className="text-gray-400 text-sm">Open daily from 6:00 PM to 11:00 PM</p>
          <p className="text-gray-400 text-sm">For reservations: +1 (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;