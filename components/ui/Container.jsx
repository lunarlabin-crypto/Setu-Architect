'use client';

import { cn } from '@/lib/cn';

/**
 * Stratos Container Component
 *
 * Provides consistent max-width + horizontal padding across the site.
 * Use `size` to choose the appropriate constraint.
 *
 * Sizes:
 *  - narrow  → max-w-[800px]   (articles, forms)
 *  - base     → max-w-[1280px]  (default site width)
 *  - wide     → max-w-[1440px]  (full-bleed sections)
 *  - full     → max-w-full       (edge-to-edge)
 */

const sizeMap = {
  narrow: 'max-w-[800px]',
  base:   'max-w-[1280px]',
  wide:   'max-w-[1440px]',
  full:   'max-w-full',
};

export function Container({
  children,
  className,
  size = 'base',
  as: Tag = 'div',
  ...props
}) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Container;
