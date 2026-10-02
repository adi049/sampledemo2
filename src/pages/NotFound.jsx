import { Link } from 'react-router-dom'
import { ArrowRight, Compass } from 'lucide-react'
import { Container } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { categories } from '../data/catalog'
import { usePageTitle } from '../lib/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found | LUNA Insurance')

  return (
    <section className="bg-offwhite py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal y={16}>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-card border border-line bg-white text-teal shadow-card">
              <Compass className="h-7 w-7" strokeWidth={1.7} />
            </span>
            <p className="mt-6 font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
              Error 404
            </p>
            <h1 className="mt-3 text-display">This page could not be found</h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-muted">
              The link may be out of date or the page may have moved. Start from the categories
              below, or go back to the homepage.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.08} className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/" variant="primary" size="lg">
              Back to homepage
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </Button>
            <Button to="/quote" variant="outline" size="lg">
              Get a Quote
            </Button>
          </Reveal>
        </div>

        <Reveal y={18} delay={0.12} className="mx-auto mt-12 max-w-4xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Insurance categories
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.slug}
                  to={`/insurance/${category.slug}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-btn border border-line bg-white px-3.5 text-[13.5px] font-medium text-navy transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-teal/40 hover:text-teal"
                >
                  <Icon className="h-4 w-4 text-teal" strokeWidth={1.9} />
                  {category.name}
                </Link>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
