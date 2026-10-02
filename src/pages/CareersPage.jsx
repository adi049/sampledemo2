import { Briefcase, Users, GraduationCap, HeartHandshake, Inbox } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { CardGrid, NoteCard, Checklist } from '../components/shared/Blocks'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

const areas = [
  {
    icon: Users,
    title: 'Advisory',
    text: 'Licensed advisors who can explain a policy wording in plain language and are comfortable telling a customer when cover is unnecessary.',
  },
  {
    icon: HeartHandshake,
    title: 'Claims and service',
    text: 'People who can hold a file together across insurer desks, hospitals and surveyors without losing the thread.',
  },
  {
    icon: GraduationCap,
    title: 'Product and engineering',
    text: 'Designers and engineers interested in making a complex, regulated product understandable on a small screen.',
  },
]

export default function CareersPage() {
  usePageTitle(
    'Careers at LUNA Insurance',
    'Open roles and areas of work at LUNA Insurance, and how to send an application when nothing is currently listed.',
  )

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on insurance that people can actually understand"
        description="Roles across advisory, claims service, product and engineering. Everything we build has to make sense to someone reading it for the first time, under stress."
        icon={Briefcase}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal y={16}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Open roles
              </span>
              <h2 className="mt-3 text-h2 text-balance">No vacancies are listed right now</h2>
              <p className="mt-4 text-[15px] leading-8 text-muted text-pretty">
                Rather than publish placeholder job titles, this page stays empty until a role is
                genuinely open. When positions are live they will appear here with the team,
                location, experience expected and the interview process.
              </p>
            </Reveal>

            <Reveal y={18} delay={0.08} className="mt-8 rounded-card border border-dashed border-line bg-offwhite p-6">
              <span className="grid h-11 w-11 place-items-center rounded-btn bg-white text-teal shadow-card">
                <Inbox className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-bold text-navy">Send an application anyway</h3>
              <p className="mt-2 text-[14px] leading-7 text-muted">
                If your work fits one of the areas below, send a short note about what you have
                built or handled. Applications are kept on file for upcoming openings.
              </p>
              <Button to="/contact" variant="outline" size="md" className="mt-5">
                Send your details
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={16} className="rounded-card border border-line bg-white p-6 shadow-card">
              <h3 className="text-h3">What we look for</h3>
              <Checklist
                className="mt-4"
                items={[
                  'Clear written communication, because most of this job is explaining',
                  'Comfort with regulated detail and the discipline it requires',
                  'Willingness to say when a product does not suit a customer',
                  'Care for the people on the other end of a claim',
                ]}
              />
            </Reveal>

            <NoteCard title="Recruitment contact" className="mt-6">
              Publish your recruitment inbox and hiring process here before launch. No contact
              address is invented in this build.
            </NoteCard>
          </div>
        </div>
      </Section>

      <Section tone="offwhite">
        <SectionHeading
          eyebrow="Teams"
          title="Where the work happens"
          description="Three broad areas. Roles within them vary by experience level and licensing requirements."
        />
        <CardGrid items={areas} columns="lg:grid-cols-3" className="mt-10" />
      </Section>

      <FinalCta
        title="Interested in working here?"
        description="Send a short note describing what you have worked on and where you would fit."
        primary={{ label: 'Get in touch', to: '/contact' }}
        secondary={{ label: 'About LUNA', to: '/about' }}
      />
    </>
  )
}
