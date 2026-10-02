import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Section, SectionHeading } from '../ui/Section'
import { Reveal, EASE } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { categories, featuredCategories } from '../../data/catalog'

const otherCategories = categories.filter((c) => !c.featured)

export function ProductExplorer() {
  const [active, setActive] = useState(featuredCategories[0].slug)
  const category = featuredCategories.find((c) => c.slug === active) ?? featuredCategories[0]

  return (
    <Section id="products" tone="offwhite">
      <SectionHeading
        eyebrow="Products"
        title="Explore insurance products"
        description="Grouped the way people actually shop for cover. Open a group to see the individual policies and what each one is meant for."
        action={
          <Button to="/insurance" variant="outline" size="md">
            View all categories
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
          </Button>
        }
      />

      <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
        {/* Group selector */}
        <Reveal className="lg:col-span-3" y={18}>
          <div
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0"
            role="tablist"
            aria-label="Product groups"
          >
            {featuredCategories.map((item) => {
              const Icon = item.icon
              const isActive = item.slug === active
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(item.slug)}
                  className={cn(
                    'group flex min-h-[48px] shrink-0 items-center gap-3 rounded-btn border px-4 text-left text-[14px] font-semibold transition-all duration-300 ease-premium lg:w-full lg:min-h-[56px]',
                    isActive
                      ? 'border-teal/40 bg-white text-navy shadow-card'
                      : 'border-line bg-white/60 text-muted hover:border-teal/30 hover:bg-white hover:text-navy',
                  )}
                >
                  <Icon
                    className={cn('h-5 w-5 shrink-0 transition-colors duration-300', isActive ? 'text-teal' : 'text-muted group-hover:text-teal')}
                    strokeWidth={1.8}
                  />
                  <span className="whitespace-nowrap lg:whitespace-normal">{item.short}</span>
                  <span
                    className={cn(
                      'ml-auto hidden h-1.5 w-1.5 rounded-full bg-gold transition-opacity duration-300 lg:block',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          <div className="mt-5 hidden rounded-card border border-line bg-white p-5 lg:block">
            <p className="font-display text-[14px] font-bold text-navy">{category.name}</p>
            <p className="mt-2 text-[13px] leading-6 text-muted">{category.label}</p>
            <Link
              to={`/insurance/${category.slug}`}
              className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-[13px] font-semibold text-teal transition-colors hover:text-teal-700"
            >
              Category overview
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
            </Link>
          </div>
        </Reveal>

        {/* Products */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-3"
            >
              {category.products.map((product) => {
                const Icon = product.icon
                return (
                  <Link
                    key={product.slug}
                    to={`/insurance/${category.slug}/${product.slug}`}
                    className="group flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <ArrowUpRight
                        className="h-4 w-4 translate-y-1 text-muted opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:text-teal group-hover:opacity-100"
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="mt-4 font-display text-[15.5px] font-bold text-navy">{product.name}</h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-muted">{product.tagline}</p>
                  </Link>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Other categories */}
          <Reveal y={16} className="mt-8 rounded-card border border-dashed border-line bg-white/70 p-5">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted">
              Also available
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {otherCategories.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.slug}
                    to={`/insurance/${item.slug}`}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-btn border border-line bg-white px-3.5 text-[13.5px] font-medium text-navy transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
                  >
                    <Icon className="h-4 w-4 text-teal" strokeWidth={1.9} />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
