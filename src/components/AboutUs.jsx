import React from 'react';
import { Sun, HeartHandshake, ShieldCheck, TreePine } from 'lucide-react';

const values = [
  {
    icon: <TreePine className="w-6 h-6 text-spice-green" />,
    title: 'Regenerative Agriculture',
    desc: 'We support smallholder farming cooperatives utilizing multi-crop spice gardens. This polyculture approach nurtures soil biodiversity and naturally keeps pests away.'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-spice-red" />,
    title: 'Direct-Trade Sourcing',
    desc: 'By cutting out traditional middlemen, we buy directly from family farms. We pay a 25% premium above standard market rates, investing in clean water and education for farmer children.'
  },
  {
    icon: <Sun className="w-6 h-6 text-amber-500" />,
    title: 'Natural Sun-Drying',
    desc: 'Our spices are never sulfur-bleached or chemical dried. They are dried naturally under the tropical Sri Lankan sun, locked with optimal oils and intense color.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-spice-gold" />,
    title: 'Pure Single-Origin',
    desc: 'We never blend our spices with cheaper fillers, dust, or crops from other countries. Every package is traceable to its native district cooperative in Sri Lanka.'
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-stone-100/50 relative overflow-hidden">
      {/* Background visual curve */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-spice-green/5 rounded-full translate-x-48 translate-y-48 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-spice-green bg-spice-green/10 px-3 py-1 rounded-full">
            Our Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            Grown by Nature, <span className="font-serif italic font-bold text-spice-red">Harvested</span> by Hand
          </h2>
          <div className="w-20 h-1 bg-spice-red mx-auto rounded-full mt-2"></div>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            For centuries, Sri Lanka has been globally acclaimed as the legendary "Spice Island." At SPICEYLON, we preserve this centuries-old agricultural legacy.
          </p>
        </div>

        {/* Big Heritage Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left illustration circle */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-depth border-8 border-white bg-stone-200">
              <img 
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=600" 
                alt="Sri Lankan spice plantation worker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-spice-green/10"></div>
            </div>
          </div>

          {/* Right text story */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              The Legend of Sri Lankan Spices
            </h3>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              True Cinnamon is native *only* to the coastal sands of Sri Lanka. From the early Roman emperors to the ancient spice-route mariners, our island's spices have been treasured like gold. 
            </p>
            <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed">
              We work collaboratively with over 150 independent families in Kandy, Galle, and Matale. In Sri Lanka, farming is a spiritual communion with nature. Our growers sing ancient folk songs while hand-peeling cinnamon quills and harvesting cardamom pods, charging them with positive spiritual vibration.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-spice-green">150+</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Independent Farmers</span>
              </div>
              <div className="w-px h-10 bg-stone-300 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-spice-red">100%</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Direct Fair-Trade</span>
              </div>
              <div className="w-px h-10 bg-stone-300 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold text-stone-900">Zero</span>
                <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">Artificial Preservatives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {values.map((val, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/50 shadow-organic hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-200/60 shadow-inner flex items-center justify-center">
                {val.icon}
              </div>
              <h4 className="font-sans font-extrabold text-[15px] sm:text-[16px] text-stone-900">
                {val.title}
              </h4>
              <p className="text-stone-500 font-sans text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
