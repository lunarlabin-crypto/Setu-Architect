import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names with Tailwind conflict resolution.
 * Drop-in replacement for the common `cn` utility pattern.
 *
 * @param {...(string|undefined|null|boolean|object)} inputs - Class values accepted by clsx.
 * @returns {string} Merged, deduplicated class string.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-primary-600', 'px-6')
 * // → 'py-2 bg-primary-600 px-6'  (px-4 overridden by px-6)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
