import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-teal text-white shadow-[0_1px_2px_rgba(11,31,51,0.12)] hover:bg-teal-600 active:bg-teal-700',
  navy: 'bg-navy text-white hover:bg-navy-700',
  gold: 'bg-gold text-navy-900 hover:bg-gold-600 hover:text-white',
  outline:
    'border border-line bg-white text-navy hover:border-navy/35 hover:bg-offwhite',
  'outline-light':
    'border border-white/30 bg-white/0 text-white hover:border-white/60 hover:bg-white/10',
  'outline-teal':
    'border border-teal/35 bg-teal-50 text-teal-700 hover:border-teal hover:bg-teal/10',
  ghost: 'text-navy hover:text-teal',
  link: 'text-teal underline-offset-4 hover:underline px-0 h-auto',
}

const sizes = {
  sm: 'h-10 px-4 text-[13.5px]',
  md: 'h-11 px-5 text-[14.5px]',
  lg: 'h-12 px-6 text-[15px] sm:h-[52px] sm:px-7',
}

export function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  full = false,
  type = 'button',
  ...rest
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-btn font-semibold tracking-[-0.01em]',
    'transition-all duration-200 ease-premium disabled:cursor-not-allowed disabled:opacity-60',
    'group/btn whitespace-nowrap',
    variants[variant],
    variant !== 'link' && sizes[size],
    full && 'w-full',
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  const Tag = as ?? 'button'
  return (
    <Tag type={Tag === 'button' ? type : undefined} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
