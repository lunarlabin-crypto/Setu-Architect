'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

/**
 * Stratos Card Component
 *
 * Variants: default | glass | elevated | bordered | flat
 * A flexible container that handles dark surfaces, glass effects,
 * and hover lift interactions out of the box.
 */

const variantMap = {
  default: `
    bg-gradient-card
    border border-white/[0.06]
    shadow-lg-dark
  `,
  glass: `
    bg-surface-50/60
    backdrop-blur-[16px]
    border border-white/[0.07]
    shadow-md-dark
  `,
  elevated: `
    bg-surface-50
    border border-white/[0.08]
    shadow-2xl-dark
  `,
  bordered: `
    bg-transparent
    border border-white/[0.1]
  `,
  flat: `
    bg-surface-100
  `,
};

const radiusMap = {
  sm:  'rounded-lg',
  md:  'rounded-xl',
  lg:  'rounded-2xl',
  xl:  'rounded-3xl',
  '2xl': 'rounded-4xl',
};

const paddingMap = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
  xl:   'p-10',
};

const Card = forwardRef(function Card(
  {
    children,
    className,
    variant = 'default',
    radius = 'xl',
    padding = 'md',
    hoverable = false,
    as: Tag = 'div',
    ...props
  },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        'relative overflow-hidden',
        variantMap[variant],
        radiusMap[radius],
        paddingMap[padding],
        hoverable && [
          'transition-all duration-300 ease-out cursor-pointer',
          'hover:-translate-y-1.5 hover:shadow-card-hover',
          'hover:border-white/[0.12]',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
});

const CardHeader = forwardRef(function CardHeader(
  { children, className, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
});

const CardTitle = forwardRef(function CardTitle(
  { children, className, as: Tag = 'h3', ...props },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn('font-display font-bold text-neutral-50', className)}
      {...props}
    >
      {children}
    </Tag>
  );
});

const CardDescription = forwardRef(function CardDescription(
  { children, className, ...props },
  ref
) {
  return (
    <p
      ref={ref}
      className={cn('text-neutral-400 text-sm leading-relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
});

const CardContent = forwardRef(function CardContent(
  { children, className, ...props },
  ref
) {
  return (
    <div ref={ref} className={cn('', className)} {...props}>
      {children}
    </div>
  );
});

const CardFooter = forwardRef(function CardFooter(
  { children, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn('mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName        = 'Card';
CardHeader.displayName  = 'CardHeader';
CardTitle.displayName   = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName  = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Card;
