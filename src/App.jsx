import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Recipes from './components/Recipes';
import AboutUs from './components/AboutUs';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  // Shopping Cart Handlers
  const addToCart = (spice) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.spice.id === spice.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.spice.id === spice.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { spice, quantity: 1 }];
    });
  };

  const updateQuantity = (spiceId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(spiceId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.spice.id === spiceId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (spiceId) => {
    setCart((prevCart) => prevCart.filter((item) => item.spice.id !== spiceId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Automatically update the active navbar section on scroll using Intersection Observer
  useEffect(() => {
    const sections = ['home', 'products', 'recipes', 'offers', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Trigger when section occupies the middle portion of the screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-noise bg-paper-pattern overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar
        cart={cart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <Hero 
        addToCart={addToCart} 
        setIsCartOpen={setIsCartOpen} 
      />

      {/* Products Showcase (includes Offers Banner) */}
      <Products 
        addToCart={addToCart} 
        searchQuery={searchQuery} 
      />

      {/* Traditional Recipes */}
      <Recipes />

      {/* Heritage & About */}
      <AboutUs />

      {/* Footnote & Contact info */}
      <Footer />

      {/* Slide-out Cart Panel Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}
