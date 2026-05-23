/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Customer.io palette
        'midnight-ink': '#00262b',
        'oceanic-deep': '#0b363b',
        'sky-mist': '#e0f4ff',
        'amber-pop': '#8b3911',
        'indigo-pop': '#0a3890',
        'slate-grille': '#354d51',
        'stone-whisper': '#4f6466',
        'ash-cloud': '#a1c2c6',
        'spring-leaf': '#abffae',
        'deep-teal': '#437278',
        'electric-blue': '#006af2',
        'pale-mint': '#eafde8',
        canvas: '#ebebeb',
        'surface-white': '#ffffff',
        'fog-gray': '#fafafa',
        'warm-mist': '#feefe8',
        // Semantic aliases
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        pill: '9999px',
        sm: '2px',
        img: '6px',
      },
      boxShadow: {
        // No heavy shadows — this is a flat design system
        focus: '0 0 0 4px oklch(0.3068 0.046 206.34)',
        'focus-secondary': '0 0 0 4px oklch(0.97 0 0)',
        'focus-ghost': '0 0 0 4px oklch(0.9263 0.136 145.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
