import React, { useState } from 'react';
import { Clock, Users, BookOpen, ChevronRight, X } from 'lucide-react';

const recipes = [
  {
    id: 'chicken-curry',
    title: 'Traditional Ceylon Chicken Curry',
    time: '45 mins',
    servings: '4 People',
    difficulty: 'Medium',
    spicesUsed: ['Cinnamon', 'Chilli', 'Cardamom', 'Turmeric'],
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600',
    description: 'A deeply aromatic curry with intense depth. Searing spices together creates the famous signature dark, rich sauce typical of Sri Lankan home kitchens.',
    ingredients: [
      '800g Chicken thighs, bone-in cut into pieces',
      '2 tbsp Coconut oil',
      '1 stick of Ceylon Cinnamon, split',
      '3 green Cardamom pods, crushed',
      '1 tsp Ceylon Golden Turmeric powder',
      '2 tbsp Ceylon Crimson Chilli powder',
      '1 large red onion, sliced',
      '3 cloves garlic & 1 inch ginger, minced',
      'A handful of fresh Curry leaves & 2 Lemongrass stalks',
      '1 cup thick Coconut milk'
    ],
    steps: [
      'In a bowl, marinate chicken with turmeric, chilli powder, salt, and a dash of vinegar. Set aside for 20 minutes.',
      'Heat coconut oil in a clay pot or heavy saucepan. Fry cinnamon sticks, cardamoms, curry leaves, and lemongrass until fragrant.',
      'Add onion, garlic, and ginger. Saut? until golden brown.',
      'Add marinated chicken. Sear for 10 minutes on medium heat, stirring regularly to caramelize chicken skin.',
      'Pour in 1/2 cup of water, cover, and let simmer on low heat for 20 minutes until chicken is tender.',
      'Stir in coconut milk. Let it simmer gently (do not boil) for 5 more minutes until sauce thickens. Serve hot with steamed Basmati rice.'
    ]
  },
  {
    id: 'pol-sambol',
    title: 'Spicy Pol Sambol (Coconut Relish)',
    time: '15 mins',
    servings: '6 People',
    difficulty: 'Easy',
    spicesUsed: ['Chilli', 'Pepper'],
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600',
    description: 'The national accompaniment of Sri Lanka. A fresh coconut garnish packed with fiery red chilli, tangy lime, and savory notes, eaten with almost every meal.',
    ingredients: [
      '2 cups Freshly grated coconut',
      '1.5 tbsp Ceylon Crimson Chilli powder (or crushed chilli flakes)',
      '1/2 tsp Ceylon Black Pepper powder',
      '4 small red shallots, finely diced',
      '1 tsp Salt',
      'Juice of 1 fresh Lime',
      '1 tsp Maldive fish flakes (optional, for authentic umami flavor)'
    ],
    steps: [
      'In a mortar and pestle (or large bowl), grind the shallots, chilli powder, pepper, salt, and Maldive fish flakes together into a coarse paste.',
      'Incorporate grated coconut into the mortar, pounding lightly. You want to blend the spices into the coconut without turning it into a paste.',
      'Ensure the coconut turns a beautiful, even sunset-orange color.',
      'Squeeze in fresh lime juice and toss well. Taste and adjust salt or lime according to your preference. Best served with Roti, Hopper, or steamed rice.'
    ]
  },
  {
    id: 'black-pepper-shrimp',
    title: 'Fiery Black Pepper Shrimp',
    time: '25 mins',
    servings: '3 People',
    difficulty: 'Easy',
    spicesUsed: ['Pepper', 'Turmeric', 'Chilli'],
    image: 'https://images.unsplash.com/photo-1559742811-82410b510405?auto=format&fit=crop&q=80&w=600',
    description: 'A dry-spiced seafood sensation from the southern coast of Galle. Large prawns tossed with liberal amounts of black pepper, green chillies, and garlic.',
    ingredients: [
      '500g Large Prawns, shelled and deveined',
      '1.5 tbsp Ceylon Black Pepper powder, freshly ground',
      '1/2 tsp Ceylon Golden Turmeric powder',
      '1 tsp Ceylon Crimson Chilli powder',
      '4 cloves Garlic, finely chopped',
      '2 green chillies, sliced',
      '1 tbsp Butter & 1 tbsp Coconut oil',
      'Squeeze of fresh lime juice'
    ],
    steps: [
      'Toss prawns with turmeric powder and salt. Saut? in coconut oil for 2 minutes on high heat until they turn pink. Remove prawns and set aside.',
      'In the same pan, melt butter. Add chopped garlic, curry leaves, and green chillies. Saut? until garlic is fragrant and translucent.',
      'Lower heat, add freshly ground black pepper and chilli powder, stirring rapidly to toast spices.',
      'Return prawns to the pan and toss vigorously for 1-2 minutes until they are coated in the rich, peppery glaze.',
      'Finish with a squeeze of fresh lime juice and serve immediately. Pairs beautifully with chilled beer or flatbreads.'
    ]
  }
];

export default function Recipes() {
  const [activeRecipe, setActiveRecipe] = useState(null);

  return (
    <section id="recipes" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-spice-red bg-spice-red/10 px-3 py-1 rounded-full">
            Taste of Ceylon
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight">
            Traditional <span className="font-serif italic font-bold text-spice-green">Kitchen</span> Secrets
          </h2>
          <div className="w-20 h-1 bg-spice-green mx-auto rounded-full mt-2"></div>
          <p className="text-stone-600 font-sans text-sm sm:text-base">
            Bring the authentic flavor of Sri Lankan cooking to your table. Try these masterfully curated recipes utilizing our premium single-origin spices.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-spice-light rounded-3xl border border-stone-200/50 shadow-organic hover:shadow-premium group overflow-hidden flex flex-col transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                <span className="absolute bottom-4 left-4 text-white font-serif text-lg font-bold leading-tight drop-shadow-md">
                  {recipe.title}
                </span>
              </div>

              {/* Info Snippet */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta tag times */}
                  <div className="flex items-center gap-4 text-xs font-sans font-semibold text-stone-500">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {recipe.time}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {recipe.servings}</span>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3">
                    {recipe.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-200/50 mt-auto">
                  {/* Spices used tag */}
                  <div className="flex flex-wrap gap-1">
                    {recipe.spicesUsed.map((spice) => (
                      <span 
                        key={spice} 
                        className="text-[9px] font-sans font-bold uppercase tracking-wider text-stone-700 bg-stone-200/80 px-2 py-0.5 rounded-md"
                      >
                        {spice}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setActiveRecipe(recipe)}
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-spice-green hover:text-white border border-stone-300 hover:border-spice-green text-stone-700 font-sans font-bold text-xs py-2.5 rounded-xl transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>View Cook Recipe</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Recipe Full Modal details */}
      {activeRecipe && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-spice-light rounded-3xl border border-stone-200/80 shadow-depth max-w-2xl w-full overflow-hidden relative animate-scale-in flex flex-col max-h-[90vh]">
            
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 bg-stone-800 flex-shrink-0">
              <img 
                src={activeRecipe.image} 
                alt={activeRecipe.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setActiveRecipe(null)}
                className="absolute top-4 right-4 p-2 bg-stone-900/50 text-white hover:bg-stone-900 rounded-full transition-colors duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-sans font-bold uppercase bg-spice-red text-white px-2.5 py-0.5 rounded-full tracking-wider">
                  {activeRecipe.difficulty} Recipe
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1.5 leading-tight drop-shadow-md">
                  {activeRecipe.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
              
              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-2 bg-white/60 border border-stone-200/60 p-3 rounded-2xl text-center text-xs font-sans font-bold text-stone-700 shadow-organic">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Prep & Cook</span>
                  <span className="text-stone-900">{activeRecipe.time}</span>
                </div>
                <div className="border-x border-stone-200">
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Yield</span>
                  <span className="text-stone-900">{activeRecipe.servings}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-stone-400">Level</span>
                  <span className="text-stone-900">{activeRecipe.difficulty}</span>
                </div>
              </div>

              {/* Grid Ingredients & Steps */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Ingredients Left */}
                <div className="md:col-span-5 space-y-3">
                  <h4 className="font-serif text-md font-bold text-stone-900 border-b border-stone-300/60 pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-3.5 bg-spice-red rounded-full"></span>
                    Ingredients
                  </h4>
                  <ul className="space-y-2 text-xs font-sans text-stone-700">
                    {activeRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="leading-tight flex items-start gap-2">
                        <span className="text-spice-red mt-0.5">?</span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps Right */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="font-serif text-md font-bold text-stone-900 border-b border-stone-300/60 pb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-3.5 bg-spice-green rounded-full"></span>
                    Instructions
                  </h4>
                  <ol className="space-y-3 text-xs font-sans text-stone-700">
                    {activeRecipe.steps.map((step, i) => (
                      <li key={i} className="leading-relaxed flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-spice-green/10 text-spice-green flex items-center justify-center font-bold font-sans text-[10px] flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 text-center flex-shrink-0">
              <button 
                onClick={() => setActiveRecipe(null)}
                className="bg-stone-800 hover:bg-stone-900 text-white font-sans font-bold text-xs px-6 py-2.5 rounded-xl transition-all duration-300 shadow-organic"
              >
                Got it, Let's Cook!
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
