import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, FileText, HelpCircle, Phone } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { Checklist, NoteCard } from '../components/shared/Blocks'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { QuoteWidget } from '../components/home/QuoteWidget'
import { FinalCta } from '../components/home/FinalCta'
import { Accordion } from '../components/ui/Accordion'
import { findProduct } from '../data/catalog'
import { faqs } from '../data/content'
import { usePageTitle } from '../lib/usePageTitle'

const QUOTE_TAB_BY_CATEGORY = { motor: 'car', health: 'health', life: 'life' }

const checkpoints = [
  {
    title: 'What is excluded',
    text: 'Every policy lists exclusions. Read them before the sum insured, because that is where most claim disputes begin.',
  },
  {
    title: 'Waiting periods',
    text: 'Health and life policies apply waiting periods for specific conditions. They run from the date the policy starts, not from the date of a claim.',
  },
  {
    title: 'Claim documents',
    text: 'Check which documents the insurer needs before a claim is accepted, and keep them available from day one.',
  },
  {
    title: 'Renewal terms',
    text: 'Confirm whether the plan renews for life, how premiums change with age, and what happens if a renewal is missed.',
  },
]

export default function ProductPage() {
  const { categorySlug, productSlug } = useParams()
  const match = findProduct(categorySlug, productSlug)

  usePageTitle(
    match ? `${match.product.name} | LUNA Insurance` : 'Insurance product | LUNA Insurance',
    match?.product.description,
  )

  if (!match) return <Navigate to={`/insurance/${categorySlug ?? ''}`} replace />

  const { category, product } = match
  const quoteTab = QUOTE_TAB_BY_CATEGORY[category.slug] ?? 'health'
  const siblings = category.products.filter((item) => item.slug !== product.slug)

  return (
    <>
      <PageHero
        eyebrow={category.name}
        title={product.name}
        description={product.description}
        icon={product.icon}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insurance', to: '/insurance' },
          { label: category.name, to: `/insurance/${category.slug}` },
          { label: product.name },
        ]}
        actions={
          <>
            <Button to={`/quote?type=${quoteTab}`} variant="primary" size="lg">
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
            </Button>
            <Button to="/contact" variant="outline-light" size="lg">
              <Phone className="h-4 w-4" strokeWidth={2} />
              Ask a question
            </Button>
          </>
        }
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={14} duration={0.45}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                What it includes
              </span>
            </Reveal>
            <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
              {product.tagline}
            </Reveal>
            <Reveal delay={0.12} y={18} className="mt-6">
              <Checklist items={product.highlights} />
            </Reveal>

            <div className="mt-10">
              <Reveal as="h2" y={18} className="text-h3">
                Before you buy
              </Reveal>
              <Stagger className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.07}>
                {checkpoints.map((item) => (
                  <StaggerItem key={item.title} y={18} className="h-full">
                    <div className="group flex h-full flex-col rounded-card border border-line bg-offwhite/60 p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:bg-white hover:shadow-card">
                      <span className="grid h-9 w-9 place-items-center rounded-btn bg-white text-teal shadow-card">
                        <HelpCircle className="h-[18px] w-[18px]" strokeWidth={1.9} />
                      </span>
                      <h3 className="mt-3.5 font-display text-[14.5px] font-bold text-navy">{item.title}</h3>
                      <p className="mt-2 text-[13.5px] leading-6 text-muted">{item.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <NoteCard title="Issued by the insurer" className="mt-8">
              {product.name} policies are underwritten and issued by the insurer you select. LUNA
              helps you compare, apply and claim. Acceptance, pricing and claim decisions rest with
              the insurer.
            </NoteCard>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={20} amount={0.1} className="lg:sticky lg:top-28">
              <QuoteWidget variant="hero" initialTab={quoteTab} stacked />

              <div className="mt-5 rounded-card border border-line bg-white p-5">
                <span className="grid h-10 w-10 place-items-center rounded-btn bg-teal-50 text-teal">
                  <FileText className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <p className="mt-3.5 font-display text-[14.5px] font-bold text-navy">
                  Documents usually required
                </p>
                <ul className="mt-2.5 space-y-1.5 text-[13.5px] leading-6 text-muted">
                  <li>Identity and address proof</li>
                  <li>
                    {category.slug === 'motor'
                      ? 'Registration certificate and previous policy'
                      : 'Age proof and previous policy, if any'}
                  </li>
                  <li>
                    {category.slug === 'health' || category.slug === 'life'
                      ? 'Medical history declaration'
                      : 'Details of what is being insured'}
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section tone="offwhite">
          <SectionHeading
            eyebrow="Also in this category"
            title={`Other ${category.short.toLowerCase()} plans`}
            description="Compare neighbouring products before you settle on one."
          />
          <Stagger className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {siblings.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.slug} y={18} className="h-full">
                  <Link
                    to={`/insurance/${category.slug}/${item.slug}`}
                    className="group flex h-full items-start gap-4 rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-display text-[15px] font-bold text-navy">{item.name}</span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 translate-y-1 text-muted opacity-0 transition-all duration-300 ease-premium group-hover:translate-y-0 group-hover:text-teal group-hover:opacity-100"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span className="mt-1.5 block text-[13px] leading-6 text-muted">{item.tagline}</span>
                    </span>
                  </Link>
                </StaggerItem>
              )
            })}
          </Stagger>
        </Section>
      )}

      <Section tone="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
          </div>
          <div className="lg:col-span-8">
            <Reveal y={20} amount={0.1}>
              <Accordion items={faqs.slice(0, 4)} />
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        title={`Get a ${product.name.toLowerCase()} quote`}
        description="Enter a few details and compare the plans available for your profile, or ask an advisor to do it with you."
      />
    </>
  )
}
