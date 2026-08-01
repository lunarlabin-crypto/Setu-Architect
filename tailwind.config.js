/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ─── Brand Colour System ────────────────────────────────────────────────
      colors: {
        // Primary — classic corporate blue/gray or charcoal
        primary: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Accent — muted gold/amber (corporate accent)
        accent: {
          50:  '#fbf9f1',
          100: '#f6f0dd',
          200: '#ecdeb9',
          300: '#dfc58d',
          400: '#d1a65d',
          500: '#c58d3c',
          600: '#b17231',
          700: '#93562a',
          800: '#794729',
          900: '#623b24',
          950: '#381e11',
        },
        // Neutral — light theme grays
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#1a1a1a', // Setu primary text
          950: '#0a0a0a',
        },
        // Surface — light backgrounds
        surface: {
          DEFAULT: '#ffffff',
          50:  '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5', // Used as section divider
          300: '#efefef',
        },
        // State colours
        success: { DEFAULT: '#10b981', light: '#d1fae5' },
        warning: { DEFAULT: '#f59e0b', light: '#fef3c7' },
        error:   { DEFAULT: '#ef4444', light: '#fee2e2' },
      },

      // ─── Typography ─────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-opensans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1.125rem' }],
        sm:    ['0.875rem', { lineHeight: '1.375rem' }],
        base:  ['1rem',     { lineHeight: '1.625rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem',     { lineHeight: '3.5rem',  letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem',  { lineHeight: '4.25rem', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem',   { lineHeight: '5rem',    letterSpacing: '-0.04em' }],
        '8xl': ['6rem',     { lineHeight: '6.5rem',  letterSpacing: '-0.04em' }],
        '9xl': ['8rem',     { lineHeight: '8.5rem',  letterSpacing: '-0.05em' }],
      },

      // ─── Spacing ────────────────────────────────────────────────────────────
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
      },

      // ─── Max-width ───────────────────────────────────────────────────────────
      maxWidth: {
        '8xl':  '88rem',
        '9xl':  '96rem',
        '10xl': '104rem',
      },

      // ─── Border radius ────────────────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ─── Box shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        'sm-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'dark':    '0 1px 3px 0 rgba(0, 0, 0, 0.5), 0 1px 2px -1px rgba(0, 0, 0, 0.5)',
        'md-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
        'lg-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
        'xl-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
        '2xl-dark':'0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        'glow-primary': '0 0 30px rgba(91, 110, 240, 0.35)',
        'glow-accent':  '0 0 30px rgba(245, 158, 11, 0.35)',
        'card':    '0 2px 8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 16px 40px rgba(0, 0, 0, 0.24), 0 0 1px rgba(0, 0, 0, 0.08)',
      },

      // ─── Animation & keyframes ───────────────────────────────────────────────
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%':   { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-bottom': {
          '0%':   { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'count-up': {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.5s ease-out',
        'fade-up':        'fade-up 0.6s ease-out',
        'fade-up-slow':   'fade-up 0.9s ease-out',
        'fade-down':      'fade-down 0.6s ease-out',
        'fade-left':      'fade-left 0.6s ease-out',
        'fade-right':     'fade-right 0.6s ease-out',
        'scale-in':       'scale-in 0.4s ease-out',
        'slide-in-bottom':'slide-in-bottom 0.5s ease-out',
        'pulse-glow':     'pulse-glow 2.5s ease-in-out infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'spin-slow':      'spin-slow 8s linear infinite',
        'count-up':       'count-up 0.6s ease-out',
        'marquee':        'marquee 30s linear infinite',
      },

      // ─── Backdrop blur ───────────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },

      // ─── Transition timing ───────────────────────────────────────────────────
      transitionTimingFunction: {
        'bounce-in':  'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
    },
  },
  plugins: [],
};
