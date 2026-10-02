import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section } from '../components/ui/Section'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FinalCta } from '../components/home/FinalCta'
import { categories } from '../data/catalog'
import { usePageTitle } from '../lib/usePageTitle'

export default function InsuranceIndex() {
  usePageTitle(
    'All insurance categories | LUNA Insurance',
    'Browse every insurance category available on LUNA: motor, health, life, investment, home, travel, pet, business and specialist cover.',
  )

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Every category on the platform"
        description="Nine categories and the individual policies inside them. Each product page explains what the cover is for and what to check before buying."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insurance' }]}
        actions={
          <Button to="/quote" variant="primary" size="lg">
            Start a quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
          </Button>
        }
      />

      <Section tone="white">
        <div className="space-y-14 lg:space-y-20">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.slug} id={category.slug} className="scroll-mt-32">
                <Reveal y={18} className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-card border border-line bg-offwhite text-navy">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h2 className="text-h3">{category.name}</h2>
                      <p className="mt-1.5 max-w-xl text-[14px] leading-6 text-muted">{category.label}</p>
                    </div>
                  </div>
                  <Link
                    to={`/insurance/${category.slug}`}
                    className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors hover:text-teal-700"
                  >
                    Category overview
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </Link>
                </Reveal>

                <Stagger className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                  {category.products.map((product) => {
                    const ProductIcon = product.icon
                    return (
                      <StaggerItem key={product.slug} y={16} className="h-full">
                        <Link
                          to={`/insurance/${category.slug}/${product.slug}`}
                          className="group flex h-full items-start gap-3.5 rounded-card border border-line bg-white p-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-5"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal">
                            <ProductIcon className="h-5 w-5" strokeWidth={1.8} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-start justify-between gap-2">
                              <span className="font-display text-[14.5px] font-bold text-navy">{product.name}</span>
                              <ArrowUpRight
                                className="h-4 w-4 shrink-0 translate-y-1 text-muted opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:text-teal group-hover:opacity-100"
                                strokeWidth={2.2}
                              />
                            </span>
                            <span className="mt-1 block text-[12.5px] leading-5 text-muted">{product.tagline}</span>
                          </span>
                        </Link>
                      </StaggerItem>
                    )
                  })}
                </Stagger>
              </div>
            )
          })}
        </div>
      </Section>

      <FinalCta />
    </>
  )
}
