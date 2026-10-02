import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { Stagger, StaggerItem } from '../ui/Reveal'
import { categories } from '../../data/catalog'

export function CategoryGrid() {
  return (
    <Section id="categories" tone="white">
      <SectionHeading
        eyebrow="Insurance categories"
        title="Pick the cover you are looking for"
        description="Nine categories, from everyday motor and health cover to business and specialist policies. Start with a category and narrow down from there."
      />

      <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:mt-12" stagger={0.06}>
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <StaggerItem key={category.slug} y={18}>
              <Link
                to={`/insurance/${category.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-white p-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:flex-row sm:items-start sm:gap-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-2 sm:contents">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 translate-y-1 text-muted opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:text-teal group-hover:opacity-100 sm:order-3 sm:mt-1"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="mt-4 min-w-0 flex-1 sm:mt-0">
                  <h3 className="font-display text-[14.5px] font-bold leading-snug text-navy sm:text-[15.5px]">
                    {category.name}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-muted sm:text-[13px]">
                    {category.label}
                  </p>
                  <span className="mt-3 block h-px w-6 bg-gold transition-all duration-300 ease-premium group-hover:w-10" aria-hidden="true" />
                </div>
              </Link>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}
