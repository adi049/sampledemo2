import { useSearchParams } from 'react-router-dom'
import { ShieldCheck, Clock4, FileCheck2, Headset } from 'lucide-react'
import { PageHero } from '../components/shared/PageHero'
import { Section } from '../components/ui/Section'
import { QuoteWidget } from '../components/home/QuoteWidget'
import { Reveal } from '../components/ui/Reveal'
import { NoteCard } from '../components/shared/Blocks'
import { Button } from '../components/ui/Button'
import { FaqSection } from '../components/home/FaqSection'
import { faqs } from '../data/content'
import { usePageTitle } from '../lib/usePageTitle'

const VALID_TABS = ['car', 'bike', 'health', 'life']

const nextSteps = [
  {
    icon: FileCheck2,
    title: 'We match your profile',
    text: 'Your details decide which plans an insurer will issue. Only those are shown to you.',
  },
  {
    icon: ShieldCheck,
    title: 'You compare the detail',
    text: 'Cover, exclusions, waiting periods and add-ons laid out in the same format for each plan.',
  },
  {
    icon: Headset,
    title: 'An advisor can join in',
    text: 'Ask for a callback at any point if you want a second opinion before buying.',
  },
  {
    icon: Clock4,
    title: 'Policy is issued by the insurer',
    text: 'Payment goes to the insurer and the policy document arrives on email.',
  },
]

export default function QuotePage() {
  const [params] = useSearchParams()
  const requested = params.get('type')
  const tab = VALID_TABS.includes(requested) ? requested : 'car'

  usePageTitle(
    'Get an insurance quote | LUNA Insurance',
    'Enter a few details and compare the insurance plans available for your profile across motor, health and life cover.',
  )

  const initialValues = {
    registration: params.get('registration') ?? '',
    age: params.get('age') ?? '',
    mobile: params.get('mobile') ?? '',
    ...(params.get('members') ? { members: params.get('members') } : {}),
    ...(params.get('cover') ? { cover: params.get('cover') } : {}),
  }

  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Start your insurance quote"
        description="Share a few details about what needs to be covered. Nothing is charged at this stage and you can change your answers at any point."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Get a quote' }]}
      />

      <Section tone="offwhite">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal y={20} amount={0.1}>
              <QuoteWidget variant="page" initialTab={tab} initialValues={initialValues} />
            </Reveal>

            <NoteCard title="Why we ask for these details" className="mt-6">
              Insurers price on risk. A vehicle number tells us the make, model and age of the
              vehicle; an applicant age tells us which health or life plans can be issued. Without
              them, any figure shown would be a guess.
            </NoteCard>
          </div>

          <div className="lg:col-span-5">
            <Reveal y={20} amount={0.1} className="rounded-card border border-line bg-white p-6 sm:p-7">
              <h2 className="text-h3">What happens next</h2>
              <ol className="mt-5 space-y-5">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <li key={step.title} className="flex gap-4">
                      <span className="relative flex flex-col items-center">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-teal-50 text-teal">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        {index < nextSteps.length - 1 && (
                          <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
                        )}
                      </span>
                      <div className="pb-1">
                        <p className="font-display text-[14.5px] font-bold text-navy">{step.title}</p>
                        <p className="mt-1.5 text-[13.5px] leading-6 text-muted">{step.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>

              <div className="mt-6 border-t border-line pt-5">
                <p className="text-[13.5px] leading-6 text-muted">
                  Prefer to talk it through first?
                </p>
                <Button to="/contact" variant="outline" size="md" className="mt-3 w-full sm:w-auto">
                  Request a callback
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <FaqSection items={faqs.slice(2, 6)} />
    </>
  )
}
