/**
 * Stratos — Framer Motion Animation Variants & Utilities
 *
 * Centralised motion config used across all animated components.
 * Import the variant you need; pass it directly to motion components.
 */

/* ─── Transition Presets ────────────────────────────────────── */
export const transitions = {
  fast:    { duration: 0.2, ease: 'easeOut' },
  base:    { duration: 0.4, ease: 'easeOut' },
  slow:    { duration: 0.7, ease: 'easeOut' },
  spring:  { type: 'spring', stiffness: 300, damping: 30 },
  springy: { type: 'spring', stiffness: 200, damping: 20, mass: 1 },
  expo:    { duration: 0.6, ease: [0.19, 1, 0.22, 1] },
  smooth:  { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

/* ─── Viewport Options ──────────────────────────────────────── */
export const viewportOnce = { once: true, margin: '-80px' };
export const viewportRepeat = { margin: '-80px' };

/* ─── Fade Variants ─────────────────────────────────────────── */
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
};

export const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: transitions.expo },
};

export const fadeInDown = {
  hidden:  { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0, transition: transitions.expo },
};

export const fadeInLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transitions.expo },
};

export const fadeInRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transitions.expo },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

export const scaleInSpring = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.springy },
};

/* ─── Stagger Container Variants ─────────────────────────────── */

/**
 * Wrap children in this variant to stagger their animations.
 * @param {number} staggerSeconds - Delay between each child (default 0.1).
 * @param {number} delaySeconds   - Initial delay before first child (default 0).
 */
export function staggerContainer(staggerSeconds = 0.1, delaySeconds = 0) {
  return {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren:  staggerSeconds,
        delayChildren:    delaySeconds,
      },
    },
  };
}

/**
 * Stagger container that doesn't fade the parent itself.
 */
export function staggerContainerVisible(staggerSeconds = 0.1, delaySeconds = 0) {
  return {
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: staggerSeconds,
        delayChildren:   delaySeconds,
      },
    },
  };
}

/* ─── Slide Variants ─────────────────────────────────────────── */
export const slideInBottom = {
  hidden:  { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.expo },
  exit:    { y: '100%', opacity: 0, transition: transitions.fast },
};

export const slideInTop = {
  hidden:  { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.expo },
  exit:    { y: '-100%', opacity: 0, transition: transitions.fast },
};

/* ─── Overlay / Modal Variants ────────────────────────────────── */
export const overlayVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

/* ─── Card Hover ─────────────────────────────────────────────── */
export const cardHover = {
  rest:  { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -6, transition: transitions.spring },
};

/* ─── Icon Spin ──────────────────────────────────────────────── */
export const spinVariant = {
  animate: { rotate: 360 },
  transition: { duration: 8, ease: 'linear', repeat: Infinity },
};

/* ─── Line Draw ──────────────────────────────────────────────── */
export const lineDrawVariant = {
  hidden:  { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
};

/* ─── Counter Animation Helper ────────────────────────────────── */
/**
 * Returns framer-motion-compatible animate object for a number counter.
 * Use with useSpring or useMotionValue.
 */
export const counterVariant = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: transitions.expo },
};

/* ─── Parallax Helper ────────────────────────────────────────── */
/**
 * Builds a transform string for simple CSS parallax usage.
 * @param {number} scrollY - Current scroll Y position.
 * @param {number} speed   - Parallax speed multiplier (0 = fixed, 1 = normal scroll).
 * @returns {string}
 */
export function parallaxY(scrollY, speed = 0.3) {
  return `translateY(${scrollY * speed}px)`;
}
