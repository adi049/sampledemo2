import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Info, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Stagger, StaggerItem, Reveal } from '../ui/Reveal'

export function CardGrid({ items, columns = 'lg:grid-cols-3', className }) {
  return (
    <Stagger className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', columns, className)} stagger={0.08}>
      {items.map((item) => {
        const Icon = item.icon
        const inner = (
          <>
            {Icon && (
              <span className="grid h-11 w-11 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal">
                <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
              </span>
            )}
            <h3 className="mt-4 font-display text-[15.5px] font-bold text-navy">{item.title}</h3>
            <p className="mt-2 flex-1 text-[13.5px] leading-6 text-muted text-pretty">{item.text}</p>
            {item.to && (
              <span className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] font-semibold text-teal">
                {item.linkLabel ?? 'Learn more'}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-premium group-hover:translate-x-0.5" strokeWidth={2.3} />
              </span>
            )}
          </>
        )

        const classes =
          'group flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-6'

        return (
          <StaggerItem key={item.title} y={20} className="h-full">
            {item.to ? (
              <Link to={item.to} className={classes}>
                {inner}
              </Link>
            ) : (
              <div className={classes}>{inner}</div>
            )}
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}

export function Checklist({ items, className, tone = 'dark' }) {
  return (
    <ul className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal">
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          <span className={cn('text-[14.5px] leading-7', tone === 'light' ? 'text-white/70' : 'text-ink')}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function NoteCard({ title, children, className }) {
  return (
    <Reveal
      y={16}
      className={cn('flex flex-col gap-4 rounded-card border border-line bg-offwhite p-5 sm:flex-row', className)}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-white text-teal shadow-card">
        <Info className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <div className="text-[13.5px] leading-7 text-muted">
        {title && <p className="font-semibold text-navy">{title}</p>}
        <div className={title ? 'mt-1' : undefined}>{children}</div>
      </div>
    </Reveal>
  )
}

export function ProductCards({ category, className }) {
  return (
    <Stagger className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3', className)} stagger={0.07}>
      {category.products.map((product) => {
        const Icon = product.icon
        return (
          <StaggerItem key={product.slug} y={20} className="h-full">
            <Link
              to={`/insurance/${category.slug}/${product.slug}`}
              className="group flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal">
                  <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
                </span>
                <ArrowUpRight
                  className="h-4 w-4 translate-y-1 text-muted opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:text-teal group-hover:opacity-100"
                  strokeWidth={2.2}
                />
              </div>
              <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{product.name}</h3>
              <p className="mt-1.5 text-[13px] font-medium text-teal">{product.tagline}</p>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-6 text-muted text-pretty">
                {product.description}
              </p>
              <span className="mt-4 h-px w-6 bg-gold transition-all duration-300 ease-premium group-hover:w-12" aria-hidden="true" />
            </Link>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}

export function StatementRow({ items, className }) {
  return (
    <Stagger className={cn('grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4', className)} stagger={0.08}>
      {items.map((item) => {
        const Icon = item.icon
        return (
          <StaggerItem key={item.title} y={18}>
            <span className="grid h-10 w-10 place-items-center rounded-btn bg-teal-50 text-teal">
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <h3 className="mt-3.5 font-display text-[15px] font-bold text-navy">{item.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-6 text-muted">{item.text}</p>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
