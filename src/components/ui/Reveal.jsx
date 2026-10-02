import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

export const EASE = [0.22, 1, 0.36, 1]
export const DEFAULT_VIEWPORT = { once: true, amount: 0.2 }

/**
 * Section / block reveal: opacity 0 -> 1 with a 20px upward drift.
 */
export function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 20,
  x = 0,
  duration = 0.55,
  amount = 0.2,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduce ? 0.2 : duration, delay: reduce ? 0 : delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Parent that reveals its StaggerItem children in sequence (60-100ms apart).
 */
export function Stagger({
  children,
  as = 'div',
  className,
  stagger = 0.08,
  delayChildren = 0.04,
  amount = 0.18,
  ...rest
}) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ children, as = 'div', className, y = 20, duration = 0.5, ...rest }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : duration, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Image reveal: fade with a slight scale settle. No rotation, bounce or spin.
 */
export function RevealImage({ src, alt, className, imgClassName, delay = 0, priority = false, sizes }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={cn('overflow-hidden', className)}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.04, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0.25 : 0.7, delay, ease: EASE }}
    >
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </motion.div>
  )
}
