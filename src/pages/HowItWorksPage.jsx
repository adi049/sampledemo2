import { Workflow, ClipboardList, Car, HeartPulse, Umbrella } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Checklist, NoteCard, CardGrid } from '../components/shared/Blocks'
import { Button } from '../components/ui/Button'
import { FaqSection } from '../components/home/FaqSection'
import { FinalCta } from '../components/home/FinalCta'
import { processSteps, faqs } from '../data/content'
import { usePageTitle } from '../lib/usePageTitle'

const detail = {
  '01': [
    'Pick the category that matches what needs covering',
    'Each category page explains the cover before you commit to anything',
  ],
  '02': [
    'Motor: registration number and previous policy details',
    'Health: ages of members and city of residence',
    'Life: age, smoking status and the cover amount you want',
  ],
  '03': [
    'Cover, exclusions, waiting periods and add-ons in one format',
    'Ask an advisor to point out where two plans genuinely differ',
  ],
  '04': [
    'Confirm the sum insured against what treatment or repair actually costs',
    'Add riders only where they change the outcome for you',
  ],
  '05': [
    'Payment goes to the insurer, not to an intermediary account',
    'Policy document arrives by email and appears in your dashboard',
  ],
}

const readiness = [
  {
    icon: Car,
    title: 'For motor cover',
    text: 'Registration certificate, previous policy number and expiry date, and details of any claim made in the last year.',
  },
  {
    icon: HeartPulse,
    title: 'For health cover',
    text: 'Ages of everyone to be covered, existing medical conditions, and any current policy you want to carry benefits over from.',
  },
  {
    icon: Umbrella,
    title: 'For life cover',
    text: 'Annual income, existing loans, number of dependants and smoking status. Medical tests may be required after applying.',
  },
]

export default function HowItWorksPage() {
  usePageTitle(
    'How it works | LUNA Insurance',
    'The five steps from choosing an insurance category to receiving your policy document, and what to keep ready at each stage.',
  )

  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How buying insurance here works"
        description="Five steps, the same across every category. Nothing is charged until you have chosen a plan and read what it covers."
        icon={Workflow}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'How it works' }]}
        actions={
          <Button to="/quote" variant="primary" size="lg">
            Start a quote
          </Button>
        }
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Step by step"
          title="From question to policy document"
          description="You can pause at any step. Nothing is submitted to an insurer until you confirm the plan."
        />

        <Stagger className="mt-10 space-y-5" stagger={0.07}>
          {processSteps.map((step) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.number} y={20}>
                <div className="group grid grid-cols-1 gap-5 rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-7 lg:grid-cols-12 lg:items-start lg:gap-8">
                  <div className="flex items-center gap-4 lg:col-span-4">
                    <span className="font-display text-[34px] font-extrabold leading-none text-gold">
                      {step.number}
                    </span>
                    <div>
                      <span className="grid h-10 w-10 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                    </div>
                    <h3 className="font-display text-[17px] font-bold text-navy lg:text-[18px]">
                      {step.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-[14.5px] leading-7 text-muted">{step.text}</p>
                    <Checklist items={detail[step.number]} className="mt-4" />
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Preparation"
          title="What to keep ready"
          description="Having these to hand turns a quote into a five minute job rather than a back-and-forth over two days."
        />
        <CardGrid items={readiness} columns="lg:grid-cols-3" className="mt-10" />

        <NoteCard title="Disclose accurately" className="mt-8">
          Insurers price on what you declare. A condition left out, or a vehicle used commercially
          but declared as private, is the most common reason a claim is later rejected. If you are
          unsure whether something must be declared, declare it.
        </NoteCard>
      </Section>

      <Section tone="white" size="sm">
        <Reveal y={18} className="flex flex-col items-start gap-5 rounded-card border border-line bg-offwhite p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn bg-white text-teal shadow-card">
              <ClipboardList className="h-[21px] w-[21px]" strokeWidth={1.7} />
            </span>
            <div>
              <p className="font-display text-[16px] font-bold text-navy">Ready to begin?</p>
              <p className="mt-1 text-[14px] leading-6 text-muted">
                Start with the category you need and compare from there.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button to="/quote" variant="primary" size="md" className="w-full sm:w-auto">
              Get a Quote
            </Button>
            <Button to="/insurance" variant="outline" size="md" className="w-full sm:w-auto">
              Browse categories
            </Button>
          </div>
        </Reveal>
      </Section>

      <FaqSection items={faqs.slice(0, 4)} />
      <FinalCta />
    </>
  )
}
