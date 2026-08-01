'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

/**
 * Stratos Button Component
 *
 * Variants: primary | secondary | outline | ghost | accent | danger
 * Sizes:    sm | md | lg | xl
 */

const sizeMap = {
  sm: 'h-8  px-4  text-xs  gap-1.5',
  md: 'h-10 px-5  text-sm  gap-2',
  lg: 'h-12 px-7  text-base gap-2.5',
  xl: 'h-14 px-9  text-lg  gap-3',
};

const variantMap = {
  primary: `
    bg-neutral-900 text-white
    hover:bg-neutral-800
    focus-visible:ring-neutral-900
  `,
  secondary: `
    bg-neutral-100 text-neutral-900
    hover:bg-neutral-200
    focus-visible:ring-neutral-200
  `,
  outline: `
    bg-transparent text-neutral-900
    border border-neutral-300
    hover:bg-neutral-50
    focus-visible:ring-neutral-900
  `,
  ghost: `
    bg-transparent text-neutral-600
    hover:bg-neutral-50 hover:text-neutral-900
    focus-visible:ring-neutral-200
  `,
  accent: `
    bg-primary-600 text-white
    hover:bg-primary-700
    focus-visible:ring-primary-600
    font-bold tracking-widest uppercase
  `,
  danger: `
    bg-error text-white
    hover:bg-red-500
    focus-visible:ring-red-400
  `,
};

const Button = forwardRef(function Button(
  {
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled = false,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    fullWidth = false,
    href,
    as: Tag,
    ...props
  },
  ref
) {
  const isDisabled = disabled || isLoading;

  const baseClasses = cn(
    // Base
    'relative inline-flex items-center justify-center rounded-sm font-medium',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    'transition-all duration-200 ease-out',
    'select-none cursor-pointer',
    // Disabled
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    // Size
    sizeMap[size],
    // Variant
    variantMap[variant],
    // Full width
    fullWidth && 'w-full',
    className,
  );

  // Loading spinner
  const LoadingSpinner = () => (
    <span
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12" cy="12" r="10"
          stroke="currentColor" strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    </span>
  );

  const content = (
    <>
      {isLoading && <LoadingSpinner />}
      <span className={cn('flex items-center gap-inherit', isLoading && 'invisible')}>
        {LeftIcon && <LeftIcon className="shrink-0" aria-hidden="true" />}
        {children}
        {RightIcon && <RightIcon className="shrink-0" aria-hidden="true" />}
      </span>
    </>
  );

  // Render as anchor if href provided
  if (href && !Tag) {
    return (
      <a href={href} ref={ref} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }

  const Component = Tag || 'button';

  return (
    <Component
      ref={ref}
      disabled={isDisabled}
      className={baseClasses}
      aria-busy={isLoading}
      {...props}
    >
      {content}
    </Component>
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
