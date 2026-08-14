import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Leaf } from 'lucide-react';

export default function Navbar({ cart, isCartOpen, setIsCartOpen, searchQuery, setSearchQuery, activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Recipes', href: '#recipes', id: 'recipes' },
    { name: 'Offers', href: '#offers', id: 'offers' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Contact Us', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-navbar py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group flex-shrink-0" onClick={() => handleLinkClick('home')}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1.5 shadow-organic border border-stone-200/50 group-hover:scale-105 transition-transform duration-300">
                <img src="/logo.png" alt="SPICEYLON Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-stone-900 group-hover:text-spice-red transition-colors duration-300 flex items-center gap-1 leading-none">
                  SPICE<span className="text-spice-green">YLON</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-500 mt-0.5 leading-none">Ceylon Spices</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-sans font-medium text-[15px] transition-all duration-300 hover:text-spice-red relative py-1 ${
                    activeSection === link.id ? 'text-spice-green font-semibold' : 'text-stone-700'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spice-green rounded-full transform scale-x-100 transition-transform duration-300"></span>
                  )}
                </a>
              ))}
            </div>

            {/* Search, Cart & Mobile Menu Trigger */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              {/* Search Bar Desktop */}
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search Spices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 xl:w-56 pl-9 pr-4 py-1.5 rounded-full border border-stone-300/80 bg-white/60 focus:bg-white focus:w-60 focus:border-spice-green/80 focus:ring-1 focus:ring-spice-green/30 outline-none text-sm transition-all duration-300 placeholder:text-stone-400"
                />
                <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-stone-400" />
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-white text-stone-700 hover:text-spice-red hover:bg-spice-light rounded-full border border-stone-200/60 shadow-organic hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-spice-red text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white animate-pulse">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 bg-white text-stone-700 hover:text-spice-green lg:hidden rounded-full border border-stone-200/60 shadow-organic transition-all duration-300"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-spice-light border-l border-stone-200/60 shadow-depth z-[70] transform transition-transform duration-500 ease-out lg:hidden flex flex-col ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex justify-between items-center bg-white/50">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SPICEYLON Logo" className="w-8 h-8 object-contain" />
            <span className="font-serif text-lg font-bold tracking-wider text-stone-900">
              SPICE<span className="text-spice-green">YLON</span>
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors duration-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-stone-300 bg-white focus:border-spice-green focus:ring-1 focus:ring-spice-green/30 outline-none text-sm transition-all duration-300"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => handleLinkClick(link.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-sans text-[16px] font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-spice-green/10 text-spice-green font-semibold border-l-4 border-spice-green'
                  : 'text-stone-700 hover:bg-stone-100 hover:text-spice-red'
              }`}
            >
              <Leaf className={`w-4 h-4 ${activeSection === link.id ? 'text-spice-green' : 'text-stone-400'}`} />
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Drawer Footer */}
        <div className="p-5 border-t border-stone-200 bg-white/40 text-center text-xs text-stone-500 font-sans">
          <p>© 2026 <a href="https://chamil-sachintha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-spice-red transition-all duration-300">Chamil Sachintha</a>. All Rights Reserved.</p>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-[60] lg:hidden"
        ></div>
      )}
    </>
  );
}
