import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-spice-dark text-stone-300 font-sans relative pt-16 pb-8 overflow-hidden">
      {/* Texture background */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Newsletter Subscribing Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="font-serif text-2xl font-bold text-white">Join the Spice Circle</h3>
            <p className="text-stone-400 text-xs sm:text-sm">
              Receive traditional Sri Lankan recipes, flavor pairing guides, and early access to rare wild-harvested spice lots.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md lg:ml-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-stone-700 bg-stone-900/60 focus:bg-stone-900 focus:border-spice-red text-xs sm:text-sm outline-none transition-colors placeholder:text-stone-500"
              />
              <button
                type="submit"
                className="bg-spice-red hover:bg-spice-red/90 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-1.5 active:scale-95 transition-all duration-300"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-[10px] text-spice-green font-bold mt-2 animate-pulse">
                Excellent choice! Welcome to the SPICEYLON family. Check your inbox!
              </p>
            )}
          </div>
        </div>

        {/* Middle Footer: Info columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-12">
          {/* Logo & Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 border border-stone-800">
                <img src="/logo.png" alt="SPICEYLON Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                SPICE<span className="text-spice-green">YLON</span>
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Premium, single-origin herbs and spices sourced directly from family-run agroforestry gardens across Kandy and Galle, Sri Lanka. Packed fresh at source to lock in optimal aromatic oils.
            </p>
            <div className="flex gap-3">
              {/* Instagram SVG */}
              <a href="#" className="p-2 bg-stone-900 hover:bg-spice-red text-stone-400 hover:text-white rounded-full transition-colors duration-300" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="p-2 bg-stone-900 hover:bg-spice-red text-stone-400 hover:text-white rounded-full transition-colors duration-300" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4 text-left lg:pl-8">
            <h4 className="font-serif text-md font-bold text-white border-l-2 border-spice-green pl-2">Quick Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400 font-sans">
              <li><a href="#home" className="hover:text-spice-red transition-colors">Home Landing</a></li>
              <li><a href="#products" className="hover:text-spice-red transition-colors">Premium Spices</a></li>
              <li><a href="#recipes" className="hover:text-spice-red transition-colors">Traditional Recipes</a></li>
              <li><a href="#about" className="hover:text-spice-red transition-colors">Our Sourcing Heritage</a></li>
            </ul>
          </div>

          {/* Sourcing region */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-md font-bold text-white border-l-2 border-spice-green pl-2">Spice Capitals</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400 font-sans">
              <li>Matale (Cardamom)</li>
              <li>Galle (True Cinnamon)</li>
              <li>Kandy (Black Pepper)</li>
              <li>Anuradhapura (Chilli)</li>
            </ul>
          </div>

          {/* Contacts info */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-md font-bold text-white border-l-2 border-spice-green pl-2">Get in Touch</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-400 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-spice-red flex-shrink-0 mt-0.5" />
                <span>120 Spice Gardens, Galle Road, Galle, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>+94 91 223 4567</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-spice-red flex-shrink-0" />
                <span>hello@spiceylon.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-stone-800 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-sans gap-4">
          <p>© 2026 <a href="https://chamil-sachintha.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-spice-red hover:underline transition-all duration-300">Chamil Sachintha</a>. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-stone-900 border border-stone-800 text-stone-400 hover:text-white rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-organic"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
