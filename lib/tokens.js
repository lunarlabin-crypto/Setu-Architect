/**
 * Stratos — Design Token Reference
 *
 * JavaScript-accessible version of the design system tokens.
 * Use when you need raw values in JS (e.g., Framer Motion colour targets).
 */

/* ─── Colour Tokens ─────────────────────────────────────────── */
export const colors = {
  primary: {
    50:  '#eef2ff',
    100: '#e0e9ff',
    200: '#c7d5fd',
    300: '#a4b8fb',
    400: '#7e93f6',
    500: '#5b6ef0',
    600: '#3d4fe3',
    700: '#2f3dc9',
    800: '#2832a3',
    900: '#252e81',
    950: '#161a4d',
  },
  accent: {
    50:  '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  neutral: {
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
  surface: {
    DEFAULT: '#0d1117',
    50:  '#1a2332',
    100: '#141d2b',
    200: '#0d1117',
    300: '#080d14',
  },
};

/* ─── Typography Scale ───────────────────────────────────────── */
export const fontFamily = {
  sans:    'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
  display: 'var(--font-playfair), ui-serif, Georgia, serif',
};

/* ─── Spacing Scale (px) ─────────────────────────────────────── */
export const spacing = {
  0:   0,
  1:   4,
  2:   8,
  3:   12,
  4:   16,
  5:   20,
  6:   24,
  7:   28,
  8:   32,
  9:   36,
  10:  40,
  12:  48,
  14:  56,
  16:  64,
  20:  80,
  24:  96,
  32:  128,
  40:  160,
  48:  192,
  64:  256,
};

/* ─── Border Radius ──────────────────────────────────────────── */
export const borderRadius = {
  sm:    '0.375rem',
  md:    '0.5rem',
  lg:    '0.75rem',
  xl:    '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full:  '9999px',
};

/* ─── Z-index Scale ──────────────────────────────────────────── */
export const zIndex = {
  negative: -1,
  base:      0,
  raised:   10,
  dropdown: 200,
  sticky:   300,
  overlay:  400,
  modal:    500,
  toast:    600,
  tooltip:  700,
};

/* ─── Transition Durations (ms) ──────────────────────────────── */
export const duration = {
  fast:   150,
  base:   250,
  slow:   400,
  slower: 600,
};

/* ─── Easing Functions ───────────────────────────────────────── */
export const easing = {
  easeOut:    [0.0, 0.0, 0.2, 1.0],
  easeIn:     [0.4, 0.0, 1.0, 1.0],
  easeInOut:  [0.4, 0.0, 0.2, 1.0],
  expo:       [0.19, 1.0, 0.22, 1.0],
  bounceIn:   [0.175, 0.885, 0.32, 1.275],
};
