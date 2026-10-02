import { Headset, FileText, RefreshCw, FileCheck2, UserCog, ShieldQuestion } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { CardGrid, NoteCard } from '../components/shared/Blocks'
import { ContactForm } from '../components/shared/ContactForm'
import { Reveal, RevealImage } from '../components/ui/Reveal'
import { FinalCta } from '../components/home/FinalCta'
import { supportChannels } from '../data/content'
import supportImage from '../assets/support.jpg'
import { usePageTitle } from '../lib/usePageTitle'

const requests = [
  {
    icon: FileText,
    title: 'Policy copy or endorsement',
    text: 'Request a duplicate policy document, or correct a spelling, address or nominee detail.',
  },
  {
    icon: RefreshCw,
    title: 'Renewal help',
    text: 'Check what the insurer allows at renewal and whether the cover still suits you.',
    to: '/renewal',
    linkLabel: 'Go to renewal',
  },
  {
    icon: FileCheck2,
    title: 'Claim follow-up',
    text: 'Status on an open claim, or help with a document the insurer has asked for again.',
    to: '/claims',
    linkLabel: 'Claims assistance',
  },
  {
    icon: UserCog,
    title: 'Account and login',
    text: 'Trouble signing in, or a policy that is not showing in your dashboard.',
    to: '/login',
    linkLabel: 'Go to login',
  },
  {
    icon: ShieldQuestion,
    title: 'Cover questions',
    text: 'Whether a specific situation is covered, and which clause in the policy applies.',
    to: '/faq',
    linkLabel: 'Read the FAQ',
  },
  {
    icon: Headset,
    title: 'Something else',
    text: 'Anything that does not fit the list above. Send it across and it will be routed.',
    to: '/contact',
    linkLabel: 'Contact the team',
  },
]

export default function SupportPage() {
  usePageTitle(
    'Customer support | LUNA Insurance',
    'Support for policy documents, renewals, claims follow-up, account access and cover questions.',
  )

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Customer support that stays with you"
        description="The team that helps you pick a plan also handles the renewal and the claim. One point of contact, with your history already on file."
        icon={Headset}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Support' }]}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Channels"
          title="How to reach the team"
          description="Pick whichever suits the question. Written queries are useful when you want the answer on record."
        />
        <CardGrid
          items={supportChannels.map((channel) => ({
            icon: channel.icon,
            title: channel.title,
            text: channel.text,
            to: channel.action.to,
            linkLabel: channel.action.label,
          }))}
          columns="lg:grid-cols-4"
          className="mt-10"
        />
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Common requests"
          title="What people usually need help with"
          description="Most queries fall into one of these. Each goes to the desk that handles it rather than a general queue."
        />
        <CardGrid items={requests} columns="lg:grid-cols-3" className="mt-10" />
      </Section>

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal y={16}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Written query
              </span>
              <h2 className="mt-3 text-h2 text-balance">Send it in writing</h2>
              <p className="mt-4 text-[15px] leading-7 text-muted text-pretty">
                Useful for anything involving documents, a claim history, or a question you may need
                to refer back to. Include the policy number if you have one.
              </p>
            </Reveal>

            <RevealImage
              src={supportImage}
              alt="Support advisor on a call at a desk"
              className="mt-8 rounded-section border border-line shadow-card"
              imgClassName="aspect-[16/10]"
            />

            <NoteCard title="Service hours" className="mt-6">
              Publish your working hours, helpline number and escalation contact here before the
              site goes live. Grievance officer details are a regulatory requirement in India.
            </NoteCard>
          </div>

          <div className="lg:col-span-7">
            <ContactForm
              title="Raise a support request"
              description="Fill in what you need help with. The more specific the detail, the faster it is routed."
              defaultTopic="Policy document or endorsement"
            />
          </div>
        </div>
      </Section>

      <FinalCta
        title="Still need a hand?"
        description="Ask for a callback and an advisor will take it from there."
        primary={{ label: 'Request a callback', to: '/contact' }}
        secondary={{ label: 'Read the FAQ', to: '/faq' }}
      />
    </>
  )
}
