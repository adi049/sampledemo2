import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { ProductCards, Checklist, NoteCard } from '../components/shared/Blocks'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { QuoteWidget } from '../components/home/QuoteWidget'
import { FaqSection } from '../components/home/FaqSection'
import { FinalCta } from '../components/home/FinalCta'
import { categories, categoryBySlug } from '../data/catalog'
import { processSteps, faqs } from '../data/content'
import { usePageTitle } from '../lib/usePageTitle'

const QUOTE_TAB_BY_CATEGORY = { motor: 'car', health: 'health', life: 'life' }

export default function CategoryPage() {
  const { categorySlug } = useParams()
  const category = categoryBySlug[categorySlug]

  usePageTitle(
    category ? `${category.name} | LUNA Insurance` : 'Insurance | LUNA Insurance',
    category?.summary,
  )

  if (!category) return <Navigate to="/insurance" replace />

  const quoteTab = QUOTE_TAB_BY_CATEGORY[category.slug]
  const related = categories.filter((item) => item.slug !== category.slug).slice(0, 4)

  return (
    <>
      <PageHero
        eyebrow={category.short}
        title={category.name}
        description={category.summary}
        image={category.image}
        imageAlt={`${category.name} cover`}
        icon={category.icon}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insurance', to: '/insurance' },
          { label: category.name },
        ]}
        actions={
          <>
            <Button to={`/quote${quoteTab ? `?type=${quoteTab}` : ''}`} variant="primary" size="lg">
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
            </Button>
            <Button to="/contact" variant="outline-light" size="lg">
              <Phone className="h-4 w-4" strokeWidth={2} />
              Talk to an advisor
            </Button>
          </>
        }
      />

      {/* Overview + quote rail */}
      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.45}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Overview
              </span>
            </Reveal>
            <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
              What {category.name.toLowerCase()} usually covers
            </Reveal>
            <Reveal as="p" delay={0.12} y={18} className="mt-4 text-[15px] leading-7 text-muted text-pretty">
              {category.intro}
            </Reveal>

            <Reveal delay={0.16} y={18} className="mt-7">
              <Checklist items={category.points} />
            </Reveal>

            <NoteCard title="Read the policy wording" className="mt-8">
              Cover, exclusions and waiting periods are defined by the insurer in the policy
              document. Where a plan summary and the policy wording differ, the policy wording
              applies.
            </NoteCard>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={20} amount={0.1} className="lg:sticky lg:top-28">
              <QuoteWidget variant="hero" initialTab={quoteTab ?? 'health'} stacked />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Plans"
          title={`${category.name} products`}
          description={`Individual policies within ${category.name.toLowerCase()}. Open one to see what it is meant for and what to check before buying.`}
        />
        <ProductCards category={category} className="mt-10" />
      </Section>

      {/* Process */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Process"
          title="How to get covered"
          description="The same five steps apply across categories, with the details asked for changing by product."
        />
        <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {processSteps.map((step) => (
            <StaggerItem key={step.number} y={18} className="h-full">
              <div className="group flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover">
                <span className="font-display text-[22px] font-extrabold leading-none text-gold">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-[15px] font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-muted">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Related categories */}
      <Section tone="offwhite" size="sm">
        <Reveal y={16} className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-[18px] font-bold text-navy">Other categories</h2>
            <p className="mt-1 text-[14px] text-muted">Cover for the rest of what you own and depend on.</p>
          </div>
          <Link
            to="/insurance"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors hover:text-teal-700"
          >
            All categories
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
          </Link>
        </Reveal>
        <Stagger className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4" stagger={0.06}>
          {related.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.slug} y={16}>
                <Link
                  to={`/insurance/${item.slug}`}
                  className="group flex min-h-[64px] items-center gap-3 rounded-card border border-line bg-white px-4 py-3.5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover"
                >
                  <Icon className="h-5 w-5 shrink-0 text-teal" strokeWidth={1.8} />
                  <span className="font-display text-[13.5px] font-bold text-navy">{item.name}</span>
                </Link>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      <FaqSection items={faqs.slice(0, 4)} />
      <FinalCta
        title={`Questions about ${category.name.toLowerCase()}?`}
        description="An advisor can compare the plans available for your profile and explain what changes between them."
      />
    </>
  )
}
