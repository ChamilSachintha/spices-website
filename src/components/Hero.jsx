import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Star, ShieldCheck, Flame } from 'lucide-react';
import { spices } from '../data/spices';

export default function Hero({ addToCart, setIsCartOpen }) {
  // Active index of the selected spice featured in the carousel
  const [featuredIndex, setFeaturedIndex] = useState(0);
  // Carousel slide window start index
  const [slideStart, setSlideStart] = useState(0);

  // We can show up to 3 cards in the carousel deck at once
  const visibleCardsCount = 3;

  const handleNextSlide = () => {
    setSlideStart((prev) => (prev + 1) % spices.length);
  };

  const handlePrevSlide = () => {
    setSlideStart((prev) => (prev - 1 + spices.length) % spices.length);
  };

  // Get the circular slice of spices to display in the carousel
  const getVisibleSpices = () => {
    const list = [];
    for (let i = 0; i < visibleCardsCount; i++) {
      const idx = (slideStart + i) % spices.length;
      list.push({ ...spices[idx], originalIndex: idx });
    }
    return list;
  };

  const featuredSpice = spices[featuredIndex];

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full -z-10 hidden lg:block">
        {/* Elegant circular slate curve representing the dark half of the image */}
        <div className="w-[120%] h-[120%] bg-spice-dark rounded-full -translate-y-10 translate-x-[40%] shadow-premium relative overflow-hidden animate-scale-in">
          {/* Decorative gold ring */}
          <div className="absolute inset-4 rounded-full border border-spice-gold/15"></div>
          {/* Subtle noise and texture */}
          <div className="absolute inset-0 bg-noise opacity-5"></div>
        </div>
      </div>

      {/* For mobile / tablet: dark background at the bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-[35%] bg-spice-dark -z-10 lg:hidden rounded-t-[40px] shadow-depth overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & Interactive Slider */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8 animate-fade-in-up">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2 self-start bg-white/90 border border-stone-200/80 px-4 py-1.5 rounded-full shadow-organic">
              <Flame className="w-4 h-4 text-spice-red animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-700 font-sans">
                100% Authentic Sri Lankan Sourced
              </span>
            </div>

            {/* Core Titles */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-none">
                <span className="text-spice-red block sm:inline">Spice the </span>
                <span className="text-stone-950 font-serif italic font-bold">Ceylon</span>
                <span className="text-spice-red block sm:inline"> Way!</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-spice-green font-sans tracking-wide">
                Spices from the Heart of Ceylon
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-lg leading-relaxed font-sans">
                Transform your cooking with bold, exotic flavors. Discover the finest spices inspired by Sri Lanka's rich heritage and bring the heat to your kitchen. Sourced fresh, hand-selected, and packed with aromatic bliss.
              </p>
            </div>

            {/* Buy Now button */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  addToCart(featuredSpice);
                  setIsCartOpen(true);
                }}
                className="group flex items-center gap-2.5 bg-spice-green hover:bg-spice-green/90 text-white font-sans font-bold px-6 py-3.5 rounded-full shadow-premium hover:shadow-depth active:scale-95 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
                <span>Buy Now: {featuredSpice.name}</span>
              </button>

              <a
                href="#products"
                className="bg-white/80 hover:bg-white text-stone-800 border border-stone-200/60 font-sans font-semibold px-6 py-3.5 rounded-full shadow-organic hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                Explore Collection
              </a>
            </div>

            {/* Interactive Carousel/Slider cards at bottom */}
            <div className="pt-4 sm:pt-6 space-y-4">
              <div className="flex items-center justify-between max-w-md">
                <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-stone-500">
                  Featured Spices Deck
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="p-1.5 rounded-full border border-stone-200 bg-white shadow-organic text-stone-600 hover:bg-spice-light hover:text-spice-red active:scale-90 transition-all duration-300"
                    aria-label="Previous Spice"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-1.5 rounded-full border border-stone-200 bg-white shadow-organic text-stone-600 hover:bg-spice-light hover:text-spice-red active:scale-90 transition-all duration-300"
                    aria-label="Next Spice"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Slider Deck */}
              <div className="flex items-center gap-3 overflow-visible max-w-lg">
                {getVisibleSpices().map((spice, idx) => (
                  <div
                    key={spice.id + '-' + idx}
                    onClick={() => setFeaturedIndex(spice.originalIndex)}
                    className={`flex-1 flex flex-col items-center p-3 rounded-2xl cursor-pointer transition-all duration-500 ease-out border shadow-organic hover:scale-105 ${
                      featuredIndex === spice.originalIndex
                        ? 'bg-white border-spice-green ring-2 ring-spice-green/20'
                        : 'bg-white/60 border-stone-200 hover:bg-white'
                    }`}
                  >
                    {/* Circle Image Wrapper */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-100 rounded-full flex items-center justify-center p-1 overflow-hidden shadow-inner mb-3">
                      <img
                        src={spice.image}
                        alt={spice.name}
                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Spice Label */}
                    <span className="font-sans font-bold text-sm text-stone-900 leading-none">
                      {spice.name}
                    </span>
                    {/* Price Tag */}
                    <span className="font-sans font-semibold text-xs text-spice-green mt-1">
                      $ {spice.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Spice Arrangement & Dark Background overlay */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 py-8 lg:py-0">
            {/* Dark Circle for Mobile view (shows underneath spices) */}
            <div className="absolute inset-0 bg-spice-dark/95 lg:hidden rounded-3xl overflow-hidden shadow-premium">
              <div className="absolute inset-0 bg-noise opacity-5"></div>
              <div className="absolute inset-4 rounded-3xl border border-spice-gold/10"></div>
            </div>

            {/* Main Spice Plate Illustration Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center animate-float">
              
              {/* Gold Ring shadow backdrop */}
              <div className="absolute w-[95%] h-[95%] border-2 border-dashed border-spice-gold/20 rounded-full"></div>

              {/* Main Professional Spices Arrangement Image */}
              <div className="w-[88%] h-[88%] rounded-full overflow-hidden shadow-depth border-4 border-white/95 bg-stone-100 relative group">
                <img
                  src="/hero-spices.png"
                  alt="Sri Lankan Spices Arrangement"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                
                {/* Visual Glass Tag overlay on image */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card rounded-xl px-4 py-2 flex items-center gap-2 border border-white/60 shadow-premium pointer-events-none">
                  <ShieldCheck className="w-4 h-4 text-spice-green" />
                  <span className="text-[10px] sm:text-xs font-bold font-sans tracking-wide text-stone-950 uppercase">
                    Pure Ceylon Quality
                  </span>
                </div>
              </div>

              {/* Small floating cardamom/clove bubble badge */}
              <div className="absolute top-2 right-2 sm:-top-2 sm:right-0 bg-white border border-stone-200 rounded-full p-2.5 shadow-organic flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <div className="flex text-amber-500">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="text-[9px] uppercase font-bold text-stone-500 mt-0.5 tracking-wider">
                  Top Grade (Alba)
                </span>
              </div>

              {/* Spice info card floating left */}
              <div className="absolute -left-6 bottom-12 bg-white/90 backdrop-blur-sm border border-stone-200/80 rounded-2xl p-3.5 shadow-premium hidden sm:flex items-center gap-3 max-w-[170px] hover:scale-105 transition-transform duration-300">
                <div className="w-10 h-10 bg-spice-red/10 rounded-full flex items-center justify-center text-spice-red">
                  <Flame className="w-5 h-5 fill-current animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-stone-900 leading-tight">Authentic Taste</h4>
                  <p className="text-[9px] text-stone-500 mt-0.5 leading-tight">Grown & dried under Kandy hills sun</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
