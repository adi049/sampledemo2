import { Building2, FileSignature, ShieldCheck, Handshake, Info } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { CardGrid, NoteCard, Checklist } from '../components/shared/Blocks'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

const slots = Array.from({ length: 12 }, (_, index) => index)

const onboarding = [
  {
    icon: FileSignature,
    title: 'Agreement in place',
    text: 'A distribution agreement and the regulatory approvals that go with it are completed before anything is listed.',
  },
  {
    icon: ShieldCheck,
    title: 'Product data verified',
    text: 'Cover, exclusions and waiting periods are mapped to our comparison format and checked against the policy wording.',
  },
  {
    icon: Handshake,
    title: 'Service route agreed',
    text: 'Claim intimation, endorsement and escalation contacts are defined so customers are not bounced between desks.',
  },
]

export default function PartnersPage() {
  usePageTitle(
    'Insurance providers and partners | LUNA Insurance',
    'How insurance providers are onboarded to the LUNA platform, and why no insurer logos are displayed before an agreement is in place.',
  )

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Insurance providers available through the platform"
        description="Policies are underwritten and issued by insurers. We publish a provider only when an agreement is signed and its product data has been verified."
        icon={Building2}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Partners' }]}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Provider directory"
          title="Reserved for confirmed providers"
          description="These slots are placeholders. Insurer names and logos are trademarks and will appear here only once the arrangement is live and approved."
        />

        <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" stagger={0.04}>
          {slots.map((slot) => (
            <StaggerItem key={slot} y={16}>
              <div className="flex h-[92px] flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line bg-offwhite/60 px-3 transition-colors duration-300 ease-premium hover:border-teal/35 hover:bg-teal-50/40">
                <Building2 className="h-5 w-5 text-muted/50" strokeWidth={1.6} />
                <span className="text-center text-[10.5px] font-medium uppercase tracking-[0.12em] text-muted/60">
                  Provider slot
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <NoteCard title="Why nothing is listed" className="mt-8">
          Displaying an insurer logo implies a commercial relationship. Publishing one without an
          agreement would be misleading and a trademark issue, so this directory stays empty until
          there is something real to show.
        </NoteCard>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Onboarding"
          title="How a provider gets added"
          description="Three gates before a product appears in a comparison. None of them can be skipped for a launch deadline."
        />
        <CardGrid items={onboarding} columns="lg:grid-cols-3" className="mt-10" />
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                For insurers
              </span>
              <h2 className="mt-3 text-h2 text-balance">Work with us</h2>
              <p className="mt-4 text-[15px] leading-8 text-muted text-pretty">
                If you underwrite retail or commercial lines and want distribution through the
                platform, get in touch with your product list and the lines you are open to. We
                will share our data requirements and service expectations.
              </p>
            </Reveal>
            <Reveal y={16} delay={0.08} className="mt-6">
              <Checklist
                items={[
                  'Product wording, exclusions and waiting periods in structured form',
                  'Quote and issuance integration, or an agreed manual route',
                  'Named contacts for claims, endorsements and escalations',
                  'Agreed turnaround expectations published to customers',
                ]}
              />
            </Reveal>
            <Reveal y={16} delay={0.12} className="mt-7">
              <Button to="/contact" variant="primary" size="md">
                Start a conversation
              </Button>
            </Reveal>
          </div>

          <div>
            <Reveal y={16} className="rounded-card border border-line bg-offwhite p-6 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-btn bg-white text-teal shadow-card">
                <Info className="h-[21px] w-[21px]" strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-h3">A note on claims</h3>
              <p className="mt-3 text-[14.5px] leading-7 text-muted text-pretty">
                Claim decisions sit with the insurer. Our commitment to customers is that we will
                chase the file, escalate where it stalls, and tell them plainly when a decision is
                final. Providers listed here are expected to support that.
              </p>
              <p className="mt-3 text-[14.5px] leading-7 text-muted text-pretty">
                Where service repeatedly falls short, a provider can be removed from the platform.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Looking to distribute through LUNA?"
        description="Send your product list and the lines you underwrite, and we will share the onboarding requirements."
        primary={{ label: 'Contact the team', to: '/contact' }}
        secondary={{ label: 'About LUNA', to: '/about' }}
      />
    </>
  )
}
