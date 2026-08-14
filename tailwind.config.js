/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          red: '#D11A1A',     // Vibrant Sri Lankan Crimson Red
          green: '#025C22',   // Deep Spice Forest Green
          gold: '#C5A880',    // Elegant Gold Accent
          dark: '#1C1C1C',    // Charcoal Dark Background
          light: '#FAF7F2',   // Textured Off-white/Cream
          card: '#F4EFE6',    // Warm Sand Card Color
          brown: '#8C4D35',   // Rich Cinnamon Brown
          clay: '#A25944',    // Clay Teracotta Accent
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'organic': '0 8px 30px rgb(0, 0, 0, 0.05)',
        'premium': '0 12px 40px rgb(0, 0, 0, 0.08)',
        'depth': '0 20px 50px -12px rgb(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'paper-pattern': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.02%22/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [],
}
