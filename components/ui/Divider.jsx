'use client';

import { cn } from '@/lib/cn';

/**
 * Stratos Divider Component
 *
 * Horizontal or vertical dividing line with optional gradient, label, and accent colour.
 */

export function Divider({
  orientation = 'horizontal',
  variant = 'default',
  label,
  className,
  ...props
}) {
  const isVertical = orientation === 'vertical';

  const lineClasses = cn(
    'shrink-0',
    isVertical
      ? 'w-px h-full'
      : 'h-px w-full',
    variant === 'default' && 'bg-white/[0.07]',
    variant === 'gradient' && 'bg-gradient-to-r from-transparent via-white/10 to-transparent',
    variant === 'primary'  && 'bg-gradient-to-r from-transparent via-primary-600/40 to-transparent',
    variant === 'accent'   && 'bg-gradient-to-r from-transparent via-accent-500/40 to-transparent',
    variant === 'bright'   && 'bg-white/[0.12]',
  );

  if (label) {
    return (
      <div
        className={cn('flex items-center gap-4', className)}
        role="separator"
        {...props}
      >
        <span className={lineClasses} />
        <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {label}
        </span>
        <span className={lineClasses} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(lineClasses, className)}
      {...props}
    />
  );
}

export default Divider;
