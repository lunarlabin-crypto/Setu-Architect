'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

/**
 * Stratos Badge / Chip Component
 *
 * Variants: primary | accent | success | warning | error | neutral | outline
 * Sizes:    sm | md | lg
 */

const variantMap = {
  primary: 'bg-primary-950/80 text-primary-300 border-primary-800/50',
  accent:  'bg-accent-950/80  text-accent-300  border-accent-800/50',
  success: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/50',
  warning: 'bg-amber-950/80   text-amber-300   border-amber-800/50',
  error:   'bg-red-950/80     text-red-300     border-red-800/50',
  neutral: 'bg-neutral-800/80 text-neutral-300 border-neutral-700/50',
  outline: 'bg-transparent    text-neutral-300 border-neutral-600/60',
};

const sizeMap = {
  sm: 'px-2 py-0.5 text-2xs gap-1',
  md: 'px-3 py-1   text-xs  gap-1.5',
  lg: 'px-4 py-1.5 text-sm  gap-2',
};

const Badge = forwardRef(function Badge(
  {
    children,
    className,
    variant = 'primary',
    size = 'md',
    dot = false,
    icon: Icon,
    ...props
  },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center font-semibold rounded-full border',
        sizeMap[size],
        variantMap[variant],
        className,
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'shrink-0 rounded-full',
            size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2',
            variant === 'primary' && 'bg-primary-400',
            variant === 'accent'  && 'bg-accent-400',
            variant === 'success' && 'bg-emerald-400',
            variant === 'warning' && 'bg-amber-400',
            variant === 'error'   && 'bg-red-400',
            variant === 'neutral' && 'bg-neutral-400',
            variant === 'outline' && 'bg-neutral-400',
          )}
          aria-hidden="true"
        />
      )}
      {Icon && <Icon className="shrink-0" size={size === 'sm' ? 10 : size === 'lg' ? 14 : 12} aria-hidden="true" />}
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export { Badge };
export default Badge;
