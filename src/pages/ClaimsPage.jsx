import { FileCheck2, PhoneCall, ClipboardList, Search, HandCoins, Car, HeartPulse, Umbrella } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { NoteCard, Checklist } from '../components/shared/Blocks'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

const claimSteps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Tell us what happened',
    text: 'Share the policy number and a short description. Most insurers expect intimation within a defined window, so do this first, before arranging repairs or paperwork.',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Get the document list',
    text: 'We confirm exactly which documents that insurer needs for your type of claim, so nothing comes back for a second round.',
  },
  {
    icon: Search,
    number: '03',
    title: 'Survey or verification',
    text: 'Motor claims usually involve a surveyor; health claims go through the hospital desk or reimbursement team. We coordinate the appointment.',
  },
  {
    icon: HandCoins,
    number: '04',
    title: 'Decision and settlement',
    text: 'The insurer assesses the claim against the policy terms. We follow up on status and raise it with the insurer if it stalls.',
  },
]

const documentSets = [
  {
    icon: Car,
    title: 'Motor claims',
    items: [
      'Policy copy and registration certificate',
      'Driving licence of the person driving',
      'FIR copy where required for theft or third-party injury',
      'Repair estimate and photographs of the damage',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Health claims',
    items: [
      'Policy copy and health card',
      'Hospital discharge summary and bills',
      'Investigation reports and prescriptions',
      'Pre-authorisation form for cashless treatment',
    ],
  },
  {
    icon: Umbrella,
    title: 'Life claims',
    items: [
      'Original policy document',
      'Death certificate issued by the authority',
      'Nominee identity and bank details',
      'Medical records where the insurer asks for them',
    ],
  },
]

export default function ClaimsPage() {
  usePageTitle(
    'Claims assistance | LUNA Insurance',
    'How claims assistance works at LUNA: intimation, document checklists, surveyor coordination and follow-up with the insurer until settlement.',
  )

  return (
    <>
      <PageHero
        eyebrow="Claims"
        title="Claims assistance, start to finish"
        description="A claim is the only part of insurance that really matters. Here is how the process runs and what we handle on your behalf."
        icon={FileCheck2}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Claims' }]}
        actions={
          <>
            <Button to="/contact" variant="primary" size="lg">
              Report a claim
            </Button>
            <Button to="/support" variant="outline-light" size="lg">
              Customer support
            </Button>
          </>
        }
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Process"
          title="Four stages in every claim"
          description="The sequence is similar across categories. What changes is the verification step and the paperwork involved."
        />

        <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.08}>
          {claimSteps.map((step) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.number} y={20} className="h-full">
                <div className="group flex h-full gap-4 rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-6">
                  <div className="flex flex-col items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal">
                      <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-[13px] font-extrabold text-gold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[15.5px] font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-6 text-muted text-pretty">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Documents"
          title="Keep these ready"
          description="Exact requirements are set by the insurer and vary by claim type. This is the common baseline for each category."
        />
        <Stagger className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3" stagger={0.08}>
          {documentSets.map((set) => {
            const Icon = set.icon
            return (
              <StaggerItem key={set.title} y={20} className="h-full">
                <div className="h-full rounded-card border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-btn bg-teal-50 text-teal">
                    <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-bold text-navy">{set.title}</h3>
                  <Checklist items={set.items} className="mt-4" />
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal as="h2" y={18} className="text-h2 text-balance">
              What we do, and what the insurer decides
            </Reveal>
            <Reveal as="p" delay={0.08} y={18} className="mt-4 text-[15px] leading-7 text-muted">
              Being clear about this upfront saves frustration later. We work the process; the
              insurer makes the call under the policy contract.
            </Reveal>
          </div>
          <div className="space-y-5">
            <Reveal y={18} className="rounded-card border border-line bg-offwhite p-5 sm:p-6">
              <p className="font-display text-[15px] font-bold text-navy">Handled by LUNA</p>
              <Checklist
                className="mt-3.5"
                items={[
                  'Registering the intimation with the insurer',
                  'Confirming the document checklist for your claim type',
                  'Coordinating surveyor or hospital desk follow-ups',
                  'Chasing status and escalating a stalled file',
                ]}
              />
            </Reveal>
            <Reveal y={18} delay={0.08} className="rounded-card border border-line bg-white p-5 sm:p-6">
              <p className="font-display text-[15px] font-bold text-navy">Decided by the insurer</p>
              <ul className="mt-3.5 space-y-2.5 text-[14.5px] leading-7 text-muted">
                <li>Whether the claim is admissible under the policy</li>
                <li>The amount payable after deductions and depreciation</li>
                <li>Repudiation on grounds of non-disclosure or exclusion</li>
                <li>Timelines for survey, assessment and payment</li>
              </ul>
            </Reveal>
          </div>
        </div>

        <NoteCard title="If a claim is rejected" className="mt-10">
          Ask for the rejection in writing with the clause relied on. You can take it up with the
          insurer grievance cell and, if it is still unresolved, with the Insurance Ombudsman. We
          will help you prepare the paperwork for that.
        </NoteCard>
      </Section>

      <FinalCta
        title="Need to report a claim?"
        description="Share the policy details and what happened. We will confirm the intimation route and the documents needed."
        primary={{ label: 'Report a claim', to: '/contact' }}
        secondary={{ label: 'Talk to an Expert', to: '/support' }}
      />
    </>
  )
}
