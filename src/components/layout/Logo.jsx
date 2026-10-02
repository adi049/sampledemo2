import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'
import { brand } from '../../data/content'

export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={cn('h-9 w-9', className)} role="img" aria-hidden="true" focusable="false">
      <path
        d="M20 3.2 34.2 8v12.1c0 7.9-5.6 13.9-14.2 16.7C11.4 34 5.8 28 5.8 20.1V8L20 3.2Z"
        fill="#0B1F33"
      />
      <path
        d="M20 6.1 31.4 10v10.1c0 6.4-4.5 11.3-11.4 13.7-6.9-2.4-11.4-7.3-11.4-13.7V10L20 6.1Z"
        fill="#123B5D"
      />
      <path
        d="M24.9 13.6a7.9 7.9 0 1 0 .7 13.2 9.4 9.4 0 0 1-.7-13.2Z"
        fill="#D4A72C"
      />
      <circle cx="26.4" cy="16.2" r="1.5" fill="#0F766E" />
    </svg>
  )
}

export function Logo({ tone = 'dark', className, compact = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('group flex items-center gap-2.5', className)}
      aria-label={`${brand.legalName} — home`}
    >
      <LogoMark className={cn('transition-transform duration-300 ease-premium group-hover:-translate-y-0.5', compact ? 'h-8 w-8' : 'h-9 w-9 sm:h-10 sm:w-10')} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display font-extrabold tracking-[-0.01em]',
            compact ? 'text-[17px]' : 'text-[19px] sm:text-[21px]',
            tone === 'light' ? 'text-white' : 'text-navy',
          )}
        >
          {brand.name}
          <span className="text-teal">.</span>
        </span>
        <span
          className={cn(
            'mt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em]',
            tone === 'light' ? 'text-white/55' : 'text-muted',
          )}
        >
          {brand.suffix}
        </span>
      </span>
    </Link>
  )
}
