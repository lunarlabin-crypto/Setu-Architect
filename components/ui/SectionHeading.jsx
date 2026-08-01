'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeInUp, staggerContainerVisible, viewportOnce } from '@/lib/motion';

/**
 * Stratos SectionHeading Component
 *
 * Renders the standard section header layout used across all sections:
 *   eyebrow → heading → description
 *
 * Supports alignment, gradient text on the heading, and staggered entrance animation.
 */
export function SectionHeading({
  eyebrow,
  title,
  titleGradient,        // Part of the title to render with gradient
  description,
  align = 'center',    // 'left' | 'center' | 'right'
  maxWidth = '2xl',    // Tailwind max-w-* applied to description
  className,
  headingClassName,
  descriptionClassName,
  animate = true,
}) {
  const alignClass = {
    left:   'text-left  items-start',
    center: 'text-center items-center',
    right:  'text-right  items-end',
  }[align];

  const maxWidthMap = {
    sm:  'max-w-sm',
    md:  'max-w-md',
    lg:  'max-w-lg',
    xl:  'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    full:  'max-w-full',
  };

  const content = (
    <div
      className={cn(
        'flex flex-col gap-4',
        alignClass,
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          variants={animate ? fadeInUp : undefined}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={animate ? fadeInUp : undefined}
        className={cn(
          'font-display font-bold text-neutral-50 text-balance',
          headingClassName,
        )}
      >
        {titleGradient ? (
          <>
            {title}{' '}
            <span className="text-gradient-primary">{titleGradient}</span>
          </>
        ) : title}
      </motion.h2>

      {description && (
        <motion.p
          variants={animate ? fadeInUp : undefined}
          className={cn(
            'text-neutral-400 text-lg leading-relaxed text-pretty',
            maxWidthMap[maxWidth],
            descriptionClassName,
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      variants={staggerContainerVisible(0.12, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('flex flex-col gap-4', alignClass, className)}
    >
      {eyebrow && (
        <motion.p variants={fadeInUp} className="eyebrow">
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeInUp}
        className={cn(
          'font-display font-bold text-neutral-50 text-balance',
          headingClassName,
        )}
      >
        {titleGradient ? (
          <>
            {title}{' '}
            <span className="text-gradient-primary">{titleGradient}</span>
          </>
        ) : title}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeInUp}
          className={cn(
            'text-neutral-400 text-lg leading-relaxed text-pretty',
            maxWidthMap[maxWidth],
            descriptionClassName,
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeading;
