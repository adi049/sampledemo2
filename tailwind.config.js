/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.25rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F33',
          900: '#0B1F33',
          800: '#0E2A44',
          700: '#123B5D',
          600: '#1A4C74',
        },
        teal: {
          DEFAULT: '#0F766E',
          700: '#0F766E',
          600: '#12897F',
          500: '#159E92',
          50: '#E6F7F4',
        },
        gold: {
          DEFAULT: '#D4A72C',
          600: '#B88E1F',
          500: '#D4A72C',
          100: '#F3E8C2',
        },
        ink: '#17212B',
        muted: '#5E6B75',
        line: '#DCE5E8',
        offwhite: '#F7F8F6',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Manrope Variable"', 'Manrope', '"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.1rem, 1.35rem + 3vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)', { lineHeight: '1.14', letterSpacing: '-0.018em' }],
        'h2': ['clamp(1.5rem, 1.15rem + 1.5vw, 2.125rem)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1.15rem, 1rem + 0.6vw, 1.4rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        btn: '9px',
        card: '14px',
        input: '9px',
        section: '18px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,31,51,0.04), 0 8px 24px -12px rgba(11,31,51,0.12)',
        'card-hover': '0 2px 4px rgba(11,31,51,0.05), 0 18px 40px -18px rgba(11,31,51,0.22)',
        quote: '0 2px 6px rgba(11,31,51,0.05), 0 28px 60px -28px rgba(11,31,51,0.35)',
        header: '0 1px 0 rgba(220,229,232,1), 0 6px 20px -16px rgba(11,31,51,0.4)',
        dropdown: '0 12px 40px -12px rgba(11,31,51,0.28), 0 2px 6px rgba(11,31,51,0.06)',
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        section: '5rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-6px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 220ms cubic-bezier(0.22,1,0.36,1) both',
        'slide-down': 'slide-down 180ms cubic-bezier(0.22,1,0.36,1) both',
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
}
