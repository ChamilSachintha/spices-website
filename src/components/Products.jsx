import React, { useState } from 'react';
import { Star, ShoppingCart, Info, X, Check, Heart } from 'lucide-react';
import { spices } from '../data/spices';

export default function Products({ addToCart, searchQuery }) {
  const [selectedSpice, setSelectedSpice] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [addedItems, setAddedItems] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (spice) => {
    addToCart(spice);
    
    // Show visual confirmation on the card
    setAddedItems(prev => ({ ...prev, [spice.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [spice.id]: false }));
    }, 1500);
  };

  // Filter spices based on the search query
  const filteredSpices = spices.filter(spice =>
    spice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spice.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spice.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="py-20 bg-stone-100/50 relative overflow-hidden">
      {/* Decorative items */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-spice-green/5 rounded-full -translate-x-32 -z-10"></div>
      <div className="absolute top-10 right-0 w-80 h-80 bg-spice-red/5 rounded-full translate-x-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-spice-green bg-spice-green/10 px-3 py-1 rounded-full">
            Our Spice Cabinet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            Premium <span className="font-serif italic font-bold text-spice-red">Ceylon</span> Collection
          </h2>
          <div className="w-20 h-1 bg-spice-red mx-auto rounded-full mt-2"></div>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Grown in fertile volcanic soils and nurtured by the monsoonal sun of Sri Lanka, our single-origin spices are harvested using ancient, regenerative agriculture practices.
          </p>
        </div>

        {/* Search status */}
        {searchQuery && (
          <div className="mb-8 text-center text-stone-500 font-sans text-sm">
            Found <span className="font-bold text-stone-800">{filteredSpices.length}</span> spices matching "{searchQuery}"
          </div>
        )}

        {/* Spices Grid */}
        {filteredSpices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/50 shadow-organic max-w-md mx-auto">
            <p className="text-stone-500 font-medium font-sans">No spices found matching your search.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 text-xs font-bold text-spice-red hover:underline"
            >
              Clear Search Query
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpices.map((spice) => (
              <div 
                key={spice.id}
                className="bg-white rounded-3xl border border-stone-200/50 shadow-organic hover:shadow-premium group overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-video bg-stone-50 overflow-hidden flex items-center justify-center p-6 border-b border-stone-100">
                  <img 
                    src={spice.image} 
                    alt={spice.name} 
                    className="w-40 h-40 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500 rounded-full"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => toggleFavorite(spice.id)}
                      className={`p-2 rounded-full border shadow-organic transition-all duration-300 ${
                        favorites.includes(spice.id)
                          ? 'bg-red-50 border-red-200 text-spice-red'
                          : 'bg-white border-stone-200 text-stone-400 hover:text-spice-red'
                      }`}
                      aria-label="Add to Favorites"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(spice.id) ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      onClick={() => setSelectedSpice(spice)}
                      className="p-2 bg-white border border-stone-200 text-stone-400 hover:text-spice-green rounded-full shadow-organic hover:scale-105 active:scale-95 transition-all duration-300"
                      aria-label="View Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sourcing Origin Badge */}
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm border border-stone-200 text-stone-700 font-sans font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    {spice.origin.split(',')[0]}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  {/* Header Title & Rating */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-sans font-bold text-lg text-stone-900 group-hover:text-spice-red transition-colors duration-300">
                        {spice.fullName}
                      </h3>
                      <p className="text-xs text-stone-500 font-sans mt-0.5">Sourced from {spice.origin}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-lg">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                      <span className="text-xs font-bold font-sans text-amber-700">{spice.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-stone-600 text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed">
                    {spice.description}
                  </p>

                  {/* Benefits pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {spice.benefits.slice(0, 2).map((benefit, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-bold font-sans uppercase tracking-wider text-spice-green bg-spice-green/5 border border-spice-green/10 px-2 py-0.5 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer: Price & Add to Cart */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-stone-400 font-sans text-[10px] uppercase font-bold leading-none">Price per {spice.unit}</span>
                      <span className="text-2xl font-bold font-sans text-stone-950 mt-1">
                        $ {spice.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(spice)}
                      className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-sm px-4 py-2.5 rounded-2xl shadow-organic border transition-all duration-300 ${
                        addedItems[spice.id]
                          ? 'bg-green-50 border-green-200 text-spice-green shadow-inner'
                          : 'bg-spice-green border-spice-green text-white hover:bg-spice-green/90'
                      }`}
                    >
                      {addedItems[spice.id] ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Offers Banner */}
        <div id="offers" className="mt-20 max-w-5xl mx-auto bg-spice-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-depth text-left border border-spice-gold/15">
          <div className="absolute inset-0 bg-noise opacity-5"></div>
          {/* Elegant circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-spice-red/10 rounded-full translate-x-12 -translate-y-12 animate-pulse"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="bg-spice-red text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full font-sans">
                Limited Time Offer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight">
                Savor the Essence of Ceylon ? <span className="text-spice-gold italic">Save 15% VIP</span>
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm font-sans leading-relaxed max-w-xl">
                Use coupon code <strong className="text-white font-mono bg-stone-800 border border-stone-700 px-2 py-0.5 rounded text-sm tracking-wider">FREEGOLD</strong> at checkout to claim 15% off any order over $10. Includes free shipping directly from Galle!
              </p>
            </div>
            <div className="md:col-span-4 text-center md:text-right">
              <a 
                href="#products" 
                className="inline-block bg-spice-red hover:bg-spice-red/90 text-white font-sans font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-premium active:scale-95 transition-all duration-300"
              >
                Shop Spices Now
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Spice Details Popup Modal */}
      {selectedSpice && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-spice-light rounded-3xl border border-stone-200/80 shadow-depth max-w-2xl w-full overflow-hidden relative animate-scale-in flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Modal Image Section */}
            <div className="md:w-2/5 bg-white p-6 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-stone-200/60">
              <img 
                src={selectedSpice.image} 
                alt={selectedSpice.name} 
                className="w-44 h-44 object-contain rounded-full shadow-organic"
              />
              <span className="mt-4 font-sans font-bold text-xs uppercase tracking-widest text-stone-400">
                True Ceylon Spice
              </span>
              <div className="flex text-amber-500 mt-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>

            {/* Modal Details Section */}
            <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedSpice(null)}
                className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full transition-colors duration-300 z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 leading-tight">
                    {selectedSpice.fullName}
                  </h3>
                  <span className="text-xs font-sans text-spice-green font-semibold">Origin: {selectedSpice.origin}</span>
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm font-sans leading-relaxed">
                  {selectedSpice.description}
                </p>

                {/* Health Benefits Section */}
                <div className="space-y-1.5">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-stone-500">Wellness Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-stone-700">
                    {selectedSpice.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-spice-red rounded-full"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sourcing integrity badge */}
                <div className="bg-stone-200/50 rounded-xl p-3 border border-stone-300/30 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-spice-green/10 flex items-center justify-center text-spice-green text-xs font-bold">100%</span>
                  <p className="text-[10px] sm:text-xs text-stone-600 font-sans leading-tight">
                    Handpicked by independent cooperative farmers, paying direct-trade premium fair prices.
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-sans leading-none uppercase font-bold">Price</span>
                  <span className="text-xl font-bold font-sans text-stone-900 mt-0.5">$ {selectedSpice.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart(selectedSpice);
                    setSelectedSpice(null);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-spice-green text-white font-sans font-bold text-sm px-6 py-3 rounded-xl hover:bg-spice-green/90 active:scale-95 transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Buy Now ({selectedSpice.unit})</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
