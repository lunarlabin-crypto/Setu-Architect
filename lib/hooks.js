'use client';

import { useState, useEffect } from 'react';
import { throttle } from '@/utils/helpers';

/**
 * useScrollPosition
 *
 * Tracks window scroll position (Y) and derived state:
 * - scrollY       : current scroll position in px
 * - scrollPercent : page scroll progress (0–100)
 * - isScrolled    : true once scrollY > threshold
 * - direction     : 'up' | 'down'
 *
 * @param {object}  options
 * @param {number}  options.threshold      - px before isScrolled = true (default 80)
 * @param {number}  options.throttleMs     - event throttle in ms (default 16)
 * @returns {object}
 */
export function useScrollPosition({
  threshold = 80,
  throttleMs = 16,
} = {}) {
  const [state, setState] = useState({
    scrollY:       0,
    scrollPercent: 0,
    isScrolled:    false,
    direction:     'down',
  });

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = throttle(() => {
      const currentY  = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent   = docHeight > 0 ? Math.round((currentY / docHeight) * 100) : 0;
      const direction = currentY > lastY ? 'down' : 'up';
      lastY = currentY;

      setState({
        scrollY:       currentY,
        scrollPercent: percent,
        isScrolled:    currentY > threshold,
        direction,
      });
    }, throttleMs);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialise on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, throttleMs]);

  return state;
}

/**
 * useMediaQuery
 *
 * Reactive wrapper around window.matchMedia.
 * Returns true when the query matches.
 *
 * @param {string} query - CSS media query string
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/**
 * useBreakpoint
 *
 * Tailwind breakpoint helpers as booleans.
 * @returns {object} { isMobile, isTablet, isDesktop, isWide }
 */
export function useBreakpoint() {
  const isSm  = useMediaQuery('(min-width: 640px)');
  const isMd  = useMediaQuery('(min-width: 768px)');
  const isLg  = useMediaQuery('(min-width: 1024px)');
  const isXl  = useMediaQuery('(min-width: 1280px)');
  const is2xl = useMediaQuery('(min-width: 1536px)');

  return {
    isMobile:  !isMd,
    isTablet:  isMd && !isLg,
    isDesktop: isLg,
    isWide:    isXl,
    is2xl,
    // Raw breakpoints
    isSm, isMd, isLg, isXl,
  };
}

/**
 * useReducedMotion
 *
 * Returns true if the user has requested reduced motion.
 * Use this to conditionally disable animations.
 * @returns {boolean}
 */
export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}

/**
 * useIntersection
 *
 * Lightweight IntersectionObserver hook.
 * Returns a [ref, isIntersecting] tuple.
 *
 * @param {IntersectionObserverInit} options
 * @returns {[React.RefObject, boolean]}
 */
import { useRef } from 'react';

export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}

/**
 * useWindowSize
 *
 * Reactive window dimensions.
 * @returns {{ width: number, height: number }}
 */
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handler = throttle(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 100);

    handler();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}

/**
 * useLockBodyScroll
 *
 * Locks body scroll (for modals, drawers, etc.).
 * @param {boolean} lock
 */
export function useLockBodyScroll(lock) {
  useEffect(() => {
    if (!lock) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [lock]);
}

/**
 * useLocalStorage
 *
 * Persistent useState backed by localStorage.
 *
 * @param {string} key
 * @param {*}      initialValue
 * @returns {[*, Function]}
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.warn(`useLocalStorage: failed to write key "${key}"`, err);
    }
  };

  return [storedValue, setValue];
}
