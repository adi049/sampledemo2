import { cn } from '../../lib/cn'
import { Reveal } from './Reveal'

export function Container({ className, children, size = 'default' }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-content',
        size === 'narrow' && 'max-w-3xl',
        size === 'wide' && 'max-w-[1340px]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Section({
  id,
  className,
  children,
  tone = 'white',
  size = 'default',
  container = true,
  containerSize = 'default',
}) {
  const tones = {
    white: 'bg-white',
    offwhite: 'bg-offwhite',
    teal: 'bg-teal-50',
    navy: 'bg-navy text-white',
    'navy-deep': 'bg-navy-800 text-white',
  }

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        size === 'default' && 'section-y',
        size === 'sm' && 'section-y-sm',
        size === 'none' && '',
        tones[tone],
        className,
      )}
    >
      {container ? <Container size={containerSize}>{children}</Container> : children}
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  action,
  className,
  titleAs: TitleTag = 'h2',
}) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'flex flex-col gap-5 md:flex-row md:items-end md:justify-between',
        centered && 'md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
        {eyebrow && (
          <Reveal as="div" y={12} duration={0.45}>
            <span className={cn('eyebrow', centered && 'justify-center', tone === 'light' && 'text-gold')}>
              <span className={cn('rule-gold', tone === 'light' && 'bg-gold')} aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal as="div" delay={0.06} y={18}>
          <TitleTag
            className={cn(
              'mt-3 text-h2 text-balance',
              tone === 'light' ? 'text-white' : 'text-navy',
            )}
          >
            {title}
          </TitleTag>
        </Reveal>
        {description && (
          <Reveal as="div" delay={0.13} y={18}>
            <p
              className={cn(
                'mt-3.5 text-[15px] leading-7 text-pretty',
                tone === 'light' ? 'text-white/70' : 'text-muted',
              )}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal as="div" delay={0.2} y={14} className={cn('shrink-0', centered && 'mt-2')}>
          {action}
        </Reveal>
      )}
    </div>
  )
}
