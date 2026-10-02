import { Mail, MapPin, PhoneCall, Clock4, MessageSquareWarning } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section } from '../components/ui/Section'
import { ContactForm } from '../components/shared/ContactForm'
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal'
import { NoteCard } from '../components/shared/Blocks'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

const channels = [
  {
    icon: PhoneCall,
    title: 'Helpline',
    placeholder: 'Publish your verified helpline number here',
  },
  {
    icon: Mail,
    title: 'Email',
    placeholder: 'Publish your monitored support address here',
  },
  {
    icon: MapPin,
    title: 'Registered office',
    placeholder: 'Publish your registered address here',
  },
  {
    icon: Clock4,
    title: 'Working hours',
    placeholder: 'Publish the hours your desks operate',
  },
]

const tips = [
  'Policy number, if your question is about an existing policy',
  'The category involved: motor, health, life, investment or business',
  'What you have already been told by the insurer, if anything',
  'A time window that suits you for a callback',
]

export default function ContactPage() {
  usePageTitle(
    'Contact LUNA Insurance',
    'Send a question about buying a policy, a claim, a renewal or your account, and request a callback from an advisor.',
  )

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an advisor"
        description="Send your question across with a few details and the right desk will pick it up. Callback requests are handled during working hours."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section tone="offwhite">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ContactForm
              title="Request a callback"
              description="No obligation and no payment at this stage. Tell us what you are trying to work out."
            />
          </div>

          <div className="lg:col-span-5">
            <Stagger className="space-y-4" stagger={0.07}>
              {channels.map((channel) => {
                const Icon = channel.icon
                return (
                  <StaggerItem key={channel.title} y={16}>
                    <div className="flex items-start gap-4 rounded-card border border-dashed border-line bg-white p-5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-offwhite text-teal">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="font-display text-[14.5px] font-bold text-navy">{channel.title}</p>
                        <p className="mt-1 text-[13px] leading-6 text-muted/80">{channel.placeholder}</p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>

            <Reveal y={16} className="mt-6 rounded-card border border-line bg-white p-5 sm:p-6">
              <p className="font-display text-[15px] font-bold text-navy">Helpful detail to include</p>
              <ul className="mt-3.5 space-y-2.5 text-[13.5px] leading-6 text-muted">
                {tips.map((tip) => (
                  <li key={tip} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal y={16} className="mt-4 flex items-start gap-3 rounded-card border border-gold/35 bg-gold/5 p-5">
              <MessageSquareWarning className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2} />
              <p className="text-[13px] leading-6 text-muted">
                For a complaint that has not been resolved, publish the grievance officer name,
                email and escalation route here. Indian insurance intermediaries are required to
                display this.
              </p>
            </Reveal>
          </div>
        </div>

        <NoteCard title="Contact details are placeholders" className="mt-8">
          No phone number, email address or office address is published in this build. Fabricated
          contact details could route real people to the wrong place, so these fields are left for
          you to fill with verified information.
        </NoteCard>
      </Section>

      <FinalCta
        title="Prefer to start with a quote?"
        description="Enter a few details and see the plans available for your profile before you talk to anyone."
        primary={{ label: 'Get a Quote', to: '/quote' }}
        secondary={{ label: 'Read the FAQ', to: '/faq' }}
      />
    </>
  )
}
