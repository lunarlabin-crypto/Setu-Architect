/**
 * Stratos — General Utility Functions
 *
 * Pure, dependency-free helpers used across components and pages.
 */

/**
 * Format a number with locale-appropriate separators.
 * @param {number} num
 * @param {string} locale
 * @returns {string}
 */
export function formatNumber(num, locale = 'en-US') {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Format a currency value.
 * @param {number} amount
 * @param {string} currency
 * @param {string} locale
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Clamp a number between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values.
 * @param {number} start
 * @param {number} end
 * @param {number} t - Progress (0–1)
 * @returns {number}
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}

/**
 * Map a value from one range to another.
 * @param {number} value
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} outMin
 * @param {number} outMax
 * @returns {number}
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  const clamped = clamp(value, inMin, inMax);
  return outMin + ((clamped - inMin) / (inMax - inMin)) * (outMax - outMin);
}

/**
 * Debounce a function.
 * @param {Function} fn
 * @param {number} delay - Milliseconds
 * @returns {Function}
 */
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle a function.
 * @param {Function} fn
 * @param {number} limit - Milliseconds
 * @returns {Function}
 */
export function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}

/**
 * Convert a string to a URL-safe slug.
 * @param {string} str
 * @returns {string}
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Truncate a string to a maximum length with ellipsis.
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 100) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + '…';
}

/**
 * Split an array into chunks.
 * @param {Array} array
 * @param {number} size
 * @returns {Array[]}
 */
export function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Generate a range of numbers.
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {number[]}
 */
export function range(start, end, step = 1) {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Check if code is running on the server.
 * @returns {boolean}
 */
export const isServer = typeof window === 'undefined';

/**
 * Check if code is running in the browser.
 * @returns {boolean}
 */
export const isBrowser = !isServer;

/**
 * Check if the user prefers reduced motion.
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (isServer) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get scroll percentage of the page (0–1).
 * @returns {number}
 */
export function getScrollProgress() {
  if (isServer) return 0;
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  return scrollTop / (scrollHeight - clientHeight);
}

/**
 * Wait for a given number of milliseconds.
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate a simple unique ID (not cryptographically secure).
 * @param {string} prefix
 * @returns {string}
 */
export function uid(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Format bytes to a human-readable size string.
 * @param {number} bytes
 * @param {number} decimals
 * @returns {string}
 */
export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}
