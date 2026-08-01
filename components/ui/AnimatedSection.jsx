'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Stratos AnimatedSection Component
 *
 * A wrapper that triggers an entrance animation when the section
 * enters the viewport. Wraps children in a motion.section (or any tag).
 *
 * Usage:
 *   <AnimatedSection className="section-py">
 *     ...content
 *   </AnimatedSection>
 */

const variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',  // 'up' | 'down' | 'left' | 'right' | 'none'
  as: Tag = 'section',
  viewport = { once: true, margin: '-80px' },
  ...props
}) {
  const directionVariants = {
    up:    { hidden: { opacity: 0, y: 40  }, visible: { opacity: 1, y: 0  } },
    down:  { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0  } },
    left:  { hidden: { opacity: 0, x: 40  }, visible: { opacity: 1, x: 0  } },
    right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0  } },
    none:  { hidden: { opacity: 0          }, visible: { opacity: 1        } },
  };

  const chosen = directionVariants[direction] ?? directionVariants.up;

  const resolvedVariants = {
    hidden:  chosen.hidden,
    visible: {
      ...chosen.visible,
      transition: {
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1],
        delay,
      },
    },
  };

  const MotionTag = motion[Tag] ?? motion.section;

  return (
    <MotionTag
      variants={resolvedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedSection;
