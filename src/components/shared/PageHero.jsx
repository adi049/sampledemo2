import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Container } from '../ui/Section'
import { Reveal, RevealImage } from '../ui/Reveal'

export function Breadcrumbs({ items, tone = 'light' }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12.5px]">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className={cn('h-3 w-3 shrink-0', tone === 'light' ? 'text-white/30' : 'text-muted/60')}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              )}
              {last || !item.to ? (
                <span className={cn(tone === 'light' ? 'text-white/70' : 'text-navy', 'font-medium')} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={cn(
                    'inline-flex min-h-[32px] items-center transition-colors duration-200',
                    tone === 'light' ? 'text-white/45 hover:text-white' : 'text-muted hover:text-teal',
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  image,
  imageAlt,
  icon: Icon,
  children,
}) {
  const hasVisual = Boolean(image) || Boolean(Icon)

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div
          className={cn(
            'py-10 lg:py-14',
            hasVisual && 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-12',
          )}
        >
          <div className={cn(hasVisual && 'lg:col-span-7')}>
            {breadcrumbs && (
              <Reveal y={10} duration={0.4}>
                <Breadcrumbs items={breadcrumbs} />
              </Reveal>
            )}

            {eyebrow && (
              <Reveal y={12} delay={0.05} duration={0.45} className="mt-5">
                <span className="eyebrow text-gold">
                  <span className="rule-gold" aria-hidden="true" />
                  {eyebrow}
                </span>
              </Reveal>
            )}

            <Reveal as="h1" delay={0.1} y={20} className="mt-3 max-w-2xl text-display text-white text-balance">
              {title}
            </Reveal>

            {description && (
              <Reveal as="p" delay={0.16} y={18} className="mt-4 max-w-2xl text-[15.5px] leading-8 text-white/65 text-pretty">
                {description}
              </Reveal>
            )}

            {actions && (
              <Reveal delay={0.22} y={16} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {actions}
              </Reveal>
            )}

            {children}
          </div>

          {hasVisual && (
            <div className="mt-9 lg:col-span-5 lg:mt-0">
              {image ? (
                <RevealImage
                  src={image}
                  alt={imageAlt ?? ''}
                  delay={0.12}
                  className="rounded-section border border-white/10 shadow-card"
                  imgClassName="aspect-[16/10] lg:aspect-[4/3]"
                />
              ) : (
                <Reveal y={18} delay={0.12} className="flex justify-start lg:justify-end">
                  <span className="grid h-24 w-24 place-items-center rounded-section border border-white/15 bg-white/5 text-gold">
                    <Icon className="h-11 w-11" strokeWidth={1.4} />
                  </span>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
