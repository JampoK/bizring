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
      // Customer.io palette
      // ... (existing colors)
      
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        caption: ['12px', { lineHeight: '1.38', letterSpacing: '0.017em' }],
        'body-sm': ['14px', { lineHeight: '1.38', letterSpacing: '0.014em' }],
        body: ['16px', { lineHeight: '1.38', letterSpacing: '0.013em' }],
        subheading: ['20px', { lineHeight: '1.25', letterSpacing: '0.01em' }],
        'heading-sm': ['24px', { lineHeight: '1.25', letterSpacing: '0.008em' }],
        heading: ['36px', { lineHeight: '1.25', letterSpacing: '0.006em' }],
        'heading-lg': ['48px', { lineHeight: '1.25', letterSpacing: '0.004em' }],
        display: ['96px', { lineHeight: '1', letterSpacing: '0.002em' }],
      },
      spacing: {
        'px': '1px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px', // element gap (8px)
        '4': '16px',
        '6': '24px',
        '8': '32px', // card padding (32px)
        '12': '48px',
        '16': '64px',
        '24': '96px', // section gap (96px)
      },
      borderRadius: {
        pill: '9999px',
        sm: '2px',
        img: '6px',
      },
      boxShadow: {

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
