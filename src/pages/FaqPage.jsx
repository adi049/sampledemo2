import { HelpCircle } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section } from '../components/ui/Section'
import { Accordion } from '../components/ui/Accordion'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { FinalCta } from '../components/home/FinalCta'
import { faqs } from '../data/content'
import { usePageTitle } from '../lib/usePageTitle'

const groups = [
  {
    id: 'buying',
    title: 'Buying and comparing',
    items: [
      faqs[0],
      faqs[1],
      faqs[3],
      {
        q: 'Is the premium different from going direct to the insurer?',
        a: 'No. Premium rates are filed by the insurer and apply regardless of where the policy is bought. A distributor cannot add a markup to a filed rate.',
      },
      {
        q: 'Can I buy cover for my parents or another family member?',
        a: 'Yes, for most health and personal accident products, subject to the entry age limits of the plan and the consent of the person being covered. The insurer may ask for a medical check-up depending on age and declared history.',
      },
      faqs[6],
    ],
  },
  {
    id: 'claims',
    title: 'Claims',
    items: [
      faqs[2],
      {
        q: 'Does buying through a platform affect my claim?',
        a: 'No. The policy contract is between you and the insurer. A claim is assessed against the policy terms by the insurer, exactly as it would be if the policy had been bought anywhere else. What changes is that you have someone to chase the file with you.',
      },
      {
        q: 'What does cashless treatment mean?',
        a: 'At a hospital in the insurer network, the insurer settles the approved amount directly with the hospital instead of you paying and claiming it back. Pre-authorisation is required, and amounts outside the policy, such as non-medical items, are still payable by you.',
      },
      {
        q: 'How long does a claim usually take?',
        a: 'It depends on the category and how complete the documents are. Motor claims move after the surveyor report; health reimbursement claims move after the hospital file is submitted in full. Regulations prescribe outer limits for insurers, and we follow up where a file is sitting idle.',
      },
    ],
  },
  {
    id: 'renewals',
    title: 'Renewals and changes',
    items: [
      faqs[4],
      {
        q: 'My policy has already expired. Can it still be renewed?',
        a: 'Sometimes. Motor policies generally require a vehicle inspection once cover has lapsed. Health policies may allow renewal within a short grace period, with cover suspended during the gap. Send the policy details and we will confirm what the insurer permits.',
      },
      {
        q: 'Can I change the sum insured or add a member at renewal?',
        a: 'Usually yes, subject to underwriting. Adding a member or increasing the sum insured can bring fresh waiting periods on the increased portion. Ask before you commit, so there are no surprises at claim time.',
      },
    ],
  },
  {
    id: 'account',
    title: 'Account and data',
    items: [
      faqs[5],
      {
        q: 'How do I get a copy of my policy?',
        a: 'Policies bought through the platform are available in your dashboard and are also emailed when issued. For policies bought elsewhere, the insurer can reissue a copy and we can help you request it.',
      },
      {
        q: 'Will I be called repeatedly after requesting a quote?',
        a: 'You will be contacted about the quote you asked for. You can ask for contact to stop at any time and that preference is recorded against your number.',
      },
    ],
  },
]

export default function FaqPage() {
  usePageTitle(
    'Frequently asked questions | LUNA Insurance',
    'Answers on comparing plans, platform fees, claims assistance, renewals, account access and how your data is used.',
  )

  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        description="Grouped by where the question usually comes up: while buying, during a claim, at renewal, or about your account."
        icon={HelpCircle}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
      />

      <Section tone="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <Reveal y={16} className="lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                On this page
              </p>
              <ul className="mt-3 space-y-1">
                {groups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="flex min-h-[44px] items-center rounded-btn border-l-2 border-line pl-3 text-[14px] text-ink transition-all duration-200 hover:border-teal hover:bg-offwhite hover:text-teal"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-card border border-line bg-offwhite p-5">
                <p className="font-display text-[14.5px] font-bold text-navy">Not answered here?</p>
                <p className="mt-1.5 text-[13px] leading-6 text-muted">
                  Send the question across and you will get a written reply.
                </p>
                <Button to="/contact" variant="outline" size="sm" className="mt-3.5">
                  Ask the team
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-12 lg:col-span-9">
            {groups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-32">
                <Reveal y={16}>
                  <h2 className="text-h3">{group.title}</h2>
                  <span className="mt-3 block h-px w-10 bg-gold" aria-hidden="true" />
                </Reveal>
                <Reveal y={20} delay={0.06} amount={0.1} className="mt-5">
                  <Accordion items={group.items} defaultOpen={-1} />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FinalCta
        title="Question not covered?"
        description="Ask the team directly. If it is a common one, it gets added to this page."
        primary={{ label: 'Ask a question', to: '/contact' }}
        secondary={{ label: 'Talk to an Expert', to: '/support' }}
      />
    </>
  )
}
