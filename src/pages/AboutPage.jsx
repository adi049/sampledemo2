import { Compass, Scale, FileCheck2, Lock, XCircle } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { CardGrid, Checklist, NoteCard } from '../components/shared/Blocks'
import { Reveal, RevealImage } from '../components/ui/Reveal'
import { FinalCta } from '../components/home/FinalCta'
import { trustStatements } from '../data/content'
import { StatementRow } from '../components/shared/Blocks'
import advisorImage from '../assets/advisor.jpg'
import familyImage from '../assets/hero-family.jpg'
import { usePageTitle } from '../lib/usePageTitle'

const principles = [
  {
    icon: Compass,
    title: 'Explain before selling',
    text: 'A plan is only suitable if you understand what it excludes. Advisors are expected to cover that first, even when it slows the sale down.',
  },
  {
    icon: Scale,
    title: 'Comparison without ranking fees',
    text: 'Plans are not promoted in return for payment. Ordering is based on what fits the details you entered, not on commercial arrangements.',
  },
  {
    icon: FileCheck2,
    title: 'Stay through the claim',
    text: 'The claim is where insurance is judged. The same team handles it, with your history already on file.',
  },
  {
    icon: Lock,
    title: 'Data for the stated purpose',
    text: 'Details are collected to prepare quotes, issue policies and service claims. They are not sold to unrelated third parties.',
  },
]

export default function AboutPage() {
  usePageTitle(
    'About LUNA Insurance',
    'LUNA is an insurance marketplace for comparing motor, health, life, investment and business cover, with advisor support and claims assistance.',
  )

  return (
    <>
      <PageHero
        eyebrow="About"
        title="An insurance marketplace built around the claim, not the sale"
        description="LUNA brings retail and commercial insurance categories into one place, presents them in a format you can actually compare, and stays involved after the policy is issued."
        image={familyImage}
        imageAlt="A family at home reviewing their cover"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={16}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                What we do
              </span>
              <h2 className="mt-3 text-h2 text-balance">
                Distribution, comparison and service in one place
              </h2>
            </Reveal>
            <Reveal y={18} delay={0.08} className="mt-5 space-y-4 text-[15px] leading-8 text-muted text-pretty">
              <p>
                Insurance in India is sold across a scattered set of channels: agents for one
                category, a bank for another, a website for a third. The policies end up in
                different inboxes and nobody has a complete picture when something goes wrong.
              </p>
              <p>
                LUNA consolidates that. Motor, health, life, investment, home, travel, pet and
                business cover sit on one platform, with the same structure for every plan summary,
                so differences between products are visible rather than buried.
              </p>
              <p>
                Policies are issued by the insurer. Our role is to help you choose well, complete
                the paperwork correctly, and get the claim moving when you need it.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.12} className="mt-8">
              <Checklist
                items={[
                  'Nine insurance categories covering household and business needs',
                  'Plan information presented in a single comparable format',
                  'Advisors available before, during and after purchase',
                  'Claims assistance from intimation to settlement',
                ]}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <RevealImage
              src={advisorImage}
              alt="An advisor explaining documents to clients"
              className="rounded-section border border-line shadow-card"
              imgClassName="aspect-[4/3]"
            />
            <NoteCard title="Company information" className="mt-6">
              Registration details, licence category, directors and registered office should be
              published here before launch. This build is a design demonstration and makes no
              regulatory claims.
            </NoteCard>
          </div>
        </div>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="How we work"
          title="Four principles we hold to"
          description="These are operating rules rather than slogans. They decide how advisors are briefed and how the platform ranks what you see."
        />
        <CardGrid items={principles} columns="lg:grid-cols-4" className="mt-10" />
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Commercials
              </span>
              <h2 className="mt-3 text-h2 text-balance">How we are paid</h2>
              <p className="mt-4 text-[15px] leading-8 text-muted text-pretty">
                You pay the premium set by the insurer. Distributors are compensated by the insurer
                out of that premium, within limits set by regulation. There is no separate platform
                fee, and the premium does not increase because you bought through LUNA.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-muted text-pretty">
                Because compensation varies by product, we publish what a plan covers and excludes
                rather than scoring plans against each other. Where two plans are close, an advisor
                is expected to say so.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal y={16} className="rounded-card border border-line bg-offwhite p-6 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-btn bg-white text-navy shadow-card">
                <XCircle className="h-[21px] w-[21px]" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-h3">What we do not do</h3>
              <ul className="mt-4 space-y-3 text-[14.5px] leading-7 text-muted">
                <li className="border-b border-line pb-3">
                  Publish customer counts, claim ratios or ratings that cannot be verified
                </li>
                <li className="border-b border-line pb-3">
                  Promote a plan because it pays more, or label anything “best” without context
                </li>
                <li className="border-b border-line pb-3">
                  Collect payment before you have chosen a plan and read its terms
                </li>
                <li>Share your contact details with parties unrelated to your policy</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tone="offwhite" size="sm">
        <StatementRow items={trustStatements} />
      </Section>

      <FinalCta
        title="Want to talk to someone first?"
        description="Ask for a callback and an advisor will go through the options with you, without a sales script."
      />
    </>
  )
}
