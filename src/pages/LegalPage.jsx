import { Navigate, useParams, Link } from 'react-router-dom'
import { ScrollText, ShieldCheck, FileWarning } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section } from '../components/ui/Section'
import { Reveal } from '../components/ui/Reveal'
import { NoteCard } from '../components/shared/Blocks'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

const documents = {
  privacy: {
    icon: ShieldCheck,
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    description:
      'What personal information is collected on this platform, why it is needed, who it is shared with and how long it is kept.',
    sections: [
      {
        heading: 'Information collected',
        body: 'Contact details such as name, mobile number and email; details needed to prepare a quote such as vehicle registration, age, members to be covered, city of residence and declared medical history; and policy and claim records for cover bought through the platform. Technical information such as device type and pages visited may be collected to keep the service working.',
      },
      {
        heading: 'Why it is collected',
        body: 'To prepare quotes, submit a proposal to the insurer you select, issue and service the policy, assist with claims and renewals, respond to queries, and meet record-keeping obligations that apply to insurance distribution.',
      },
      {
        heading: 'Who it is shared with',
        body: 'With the insurer whose plan you choose, since the policy contract is with them. With service providers that operate the platform under contract, such as hosting and communication services. With regulators or authorities where disclosure is legally required. Personal details are not sold to unrelated third parties.',
      },
      {
        heading: 'Retention',
        body: 'Quote and policy records are retained for the period required under applicable insurance and tax regulation, and deleted or anonymised after that. State your exact retention periods here before publishing.',
      },
      {
        heading: 'Your choices',
        body: 'You can ask what information is held about you, ask for corrections, withdraw consent for marketing contact, and ask for deletion where no legal obligation requires retention. Publish the contact point for these requests before the site goes live.',
      },
      {
        heading: 'Security',
        body: 'Access to customer records should be restricted to staff who need it, transmitted over encrypted connections, and reviewed periodically. Describe the specific controls in place before publishing.',
      },
    ],
  },
  terms: {
    icon: ScrollText,
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    description:
      'The basis on which this website may be used, what the platform does, and the limits of its role in an insurance transaction.',
    sections: [
      {
        heading: 'Role of the platform',
        body: 'LUNA presents information about insurance products and helps you apply for them. It does not underwrite insurance. Every policy is issued by the insurer, and the contract of insurance is between you and that insurer, governed by the policy wording.',
      },
      {
        heading: 'Information accuracy',
        body: 'Plan summaries are prepared from insurer documentation and are intended as a comparison aid. Where a summary and the policy wording differ, the policy wording prevails. Product features, pricing and availability can change without notice.',
      },
      {
        heading: 'Your responsibilities',
        body: 'Information you provide must be accurate and complete. Non-disclosure or misstatement of a material fact can lead to a claim being rejected or a policy being cancelled by the insurer. Keep your login credentials confidential.',
      },
      {
        heading: 'Premiums and payment',
        body: 'Premium rates are set by the insurer. No separate platform fee is charged for using the comparison service. Payments for a policy are made to the insurer through the routes shown at the time of purchase.',
      },
      {
        heading: 'Intellectual property',
        body: 'The design, text and original assets on this site belong to their owner. Insurer names and logos, where displayed, are the trademarks of those insurers and are used only as permitted under a distribution arrangement.',
      },
      {
        heading: 'Governing law',
        body: 'State the governing law and jurisdiction applicable to your entity here, along with the dispute resolution process, before publishing.',
      },
    ],
  },
  disclaimer: {
    icon: FileWarning,
    eyebrow: 'Legal',
    title: 'Disclaimer',
    description:
      'What this website is, what it is not, and the status of the information published on it.',
    sections: [
      {
        heading: 'Not a contract of insurance',
        body: 'Nothing on this website is an offer or contract of insurance. Cover begins only when a proposal is accepted by an insurer and a policy is issued, subject to the premium being received and the terms of that policy.',
      },
      {
        heading: 'Not individual financial advice',
        body: 'General information about product types is published to help you compare options. It does not take account of your full financial position. Where a decision is significant, speak to a licensed advisor about your specific circumstances.',
      },
      {
        heading: 'Claims decisions',
        body: 'Admissibility and settlement of a claim are determined solely by the insurer under the policy terms. Assistance provided by LUNA with intimation, documentation and follow-up does not guarantee any outcome.',
      },
      {
        heading: 'Demonstration build',
        body: 'This deployment is a design and product demonstration. No policy can be purchased through it, no payment is collected, no account is created and no data entered into its forms is transmitted or stored on a server.',
      },
      {
        heading: 'Third-party references',
        body: 'Any reference to external organisations is descriptive and does not imply endorsement or a commercial relationship unless explicitly stated.',
      },
    ],
  },
}

export default function LegalPage() {
  const { slug } = useParams()
  const doc = documents[slug]

  usePageTitle(
    doc ? `${doc.title} | LUNA Insurance` : 'Legal | LUNA Insurance',
    doc?.description,
  )

  if (!doc) return <Navigate to="/legal/privacy" replace />

  const Icon = doc.icon
  const others = Object.entries(documents).filter(([key]) => key !== slug)

  return (
    <>
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        description={doc.description}
        icon={Icon}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: doc.title }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="space-y-9">
              {doc.sections.map((section, index) => (
                <Reveal key={section.heading} y={18} delay={index === 0 ? 0 : 0.04}>
                  <h2 className="text-h3">{section.heading}</h2>
                  <span className="mt-3 block h-px w-10 bg-gold" aria-hidden="true" />
                  <p className="mt-4 text-[15px] leading-8 text-muted text-pretty">{section.body}</p>
                </Reveal>
              ))}
            </div>

            <NoteCard title="Template, not legal advice" className="mt-10">
              This page is a structured starting point written for a demonstration build. Have it
              reviewed and completed by qualified counsel, with your entity details, regulatory
              registration and grievance process, before publishing it to customers.
            </NoteCard>
          </div>

          <div className="lg:col-span-4">
            <Reveal y={16} className="lg:sticky lg:top-28">
              <div className="rounded-card border border-line bg-offwhite p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Other documents
                </p>
                <ul className="mt-3 space-y-1">
                  {others.map(([key, value]) => (
                    <li key={key}>
                      <Link
                        to={`/legal/${key}`}
                        className="flex min-h-[44px] items-center rounded-btn border-l-2 border-line pl-3 text-[14px] text-ink transition-all duration-200 hover:border-teal hover:bg-white hover:text-teal"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-card border border-line bg-white p-5">
                <p className="font-display text-[14.5px] font-bold text-navy">Questions on these terms?</p>
                <p className="mt-1.5 text-[13px] leading-6 text-muted">
                  Ask before you buy rather than after a claim.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex min-h-[44px] items-center text-[13.5px] font-semibold text-teal hover:text-teal-700"
                >
                  Contact the team
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Clear on the terms?"
        description="Start a quote, or ask an advisor anything that is still unclear before you buy."
      />
    </>
  )
}
