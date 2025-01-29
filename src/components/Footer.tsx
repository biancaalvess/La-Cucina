import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">ShopStyle</h3>
            <p className="text-gray-400">Your one-stop destination for trendy and stylish products.</p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-purple-400">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-purple-400">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-400 hover:text-purple-400">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-purple-400">Returns</Link></li>
              <li><Link to="/order-tracking" className="text-gray-400 hover:text-purple-400">Order Tracking</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">contact@shopstyle.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">123 Fashion Street, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ShopStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;