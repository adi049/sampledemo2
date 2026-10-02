import { useState } from 'react'
import { RefreshCw, CheckCircle2, Lock, AlertTriangle } from 'lucide-react'
import { cn } from '../lib/cn'
import { PageHero } from '../components/shared/PageHero'
import { Section, SectionHeading } from '../components/ui/Section'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { CardGrid, NoteCard } from '../components/shared/Blocks'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'
import { BellRing, ShieldCheck, Clock4, FileText } from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'No Claim Bonus is protected',
    text: 'In motor insurance, renewing before expiry keeps the discount earned for claim-free years. Let it lapse beyond the grace window and it resets.',
  },
  {
    icon: Clock4,
    title: 'Waiting periods continue',
    text: 'Health policies count waiting periods from the start of continuous cover. A break can restart them for pre-existing conditions.',
  },
  {
    icon: FileText,
    title: 'No fresh inspection',
    text: 'A lapsed motor policy usually needs a vehicle inspection before it can be reinstated. Renewing on time avoids that step.',
  },
  {
    icon: BellRing,
    title: 'Cover stays continuous',
    text: 'Driving uninsured is an offence, and an uninsured hospital stay is paid from your pocket. A gap of even a day carries that risk.',
  },
]

function RenewalLookup() {
  const [values, setValues] = useState({ policy: '', mobile: '' })
  const [errors, setErrors] = useState({})
  const [found, setFound] = useState(false)

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: key === 'policy' ? event.target.value.toUpperCase() : event.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const submit = (event) => {
    event.preventDefault()
    const next = {}
    if (values.policy.trim().length < 5) next.policy = 'Enter the policy number as printed on your document'
    if (!/^[6-9]\d{9}$/.test(values.mobile.trim())) next.mobile = 'Enter a 10 digit mobile number'
    setErrors(next)
    if (Object.keys(next).length === 0) setFound(true)
  }

  if (found) {
    return (
      <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-7">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-teal">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.9} />
        </span>
        <h2 className="mt-4 text-h3">Renewal request noted</h2>
        <p className="mt-2 text-[14.5px] leading-7 text-muted">
          Policy <span className="font-semibold text-navy">{values.policy}</span> has been logged
          for renewal against the number ending {values.mobile.slice(-4)}. The renewal desk checks
          what the insurer allows and comes back with the options.
        </p>
        <p className="mt-3 text-[13px] leading-6 text-muted">
          This build is a demonstration, so no insurer is contacted. Connect the renewal desk API to
          make this live.
        </p>
        <Button variant="outline" size="md" className="mt-5" onClick={() => setFound(false)}>
          Renew another policy
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-card border border-line bg-white p-6 shadow-card sm:p-7">
      <h2 className="text-h3">Renew an existing policy</h2>
      <p className="mt-2 text-[14px] leading-7 text-muted">
        Enter the policy number exactly as printed on your document, along with the mobile number
        registered against it.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="field-label" htmlFor="renewal-policy">
            Policy number
          </label>
          <input
            id="renewal-policy"
            value={values.policy}
            onChange={update('policy')}
            placeholder="e.g. 1234/5678/90123456"
            className={cn('field-input font-medium uppercase', errors.policy && 'border-[#B3261E]')}
          />
          {errors.policy && <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]">{errors.policy}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="renewal-mobile">
            Registered mobile number
          </label>
          <div className="flex">
            <span className="grid h-12 shrink-0 place-items-center rounded-l-input border border-r-0 border-line bg-offwhite px-3 text-[14px] font-medium text-muted sm:h-[46px]">
              +91
            </span>
            <input
              id="renewal-mobile"
              value={values.mobile}
              onChange={update('mobile')}
              inputMode="numeric"
              maxLength={10}
              className={cn('field-input rounded-l-none', errors.mobile && 'border-[#B3261E]')}
              placeholder="10 digit number"
            />
          </div>
          {errors.mobile && <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]">{errors.mobile}</p>}
        </div>
      </div>

      <Button type="submit" as="button" variant="primary" size="lg" className="mt-5 w-full sm:w-auto">
        <RefreshCw className="h-4 w-4" strokeWidth={2} />
        Find my policy
      </Button>

      <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-[12.5px] leading-5 text-muted">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.2} />
        We use the policy number only to retrieve renewal options from the insurer.
      </p>
    </form>
  )
}

export default function RenewalPage() {
  usePageTitle(
    'Renew a policy | LUNA Insurance',
    'Renew motor, health and other insurance policies before they lapse. Protect No Claim Bonus, keep waiting periods continuous and avoid fresh inspections.',
  )

  return (
    <>
      <PageHero
        eyebrow="Renewal"
        title="Renew before the policy lapses"
        description="A renewal done on time keeps your benefits intact. A lapsed policy often means losing discounts, restarting waiting periods, or an inspection before cover resumes."
        icon={RefreshCw}
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Renewal' }]}
      />

      <Section tone="offwhite">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <RenewalLookup />
          </div>
          <div className="lg:col-span-6">
            <Reveal y={18}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Before you renew
              </span>
              <h2 className="mt-3 text-h2 text-balance">Three things worth checking</h2>
            </Reveal>
            <Reveal y={18} delay={0.08} className="mt-6 divide-y divide-line border-y border-line">
              {[
                {
                  title: 'Has anything changed?',
                  text: 'A new address, a different driver, a family member to add or remove, or a medical condition that must be disclosed.',
                },
                {
                  title: 'Is the sum insured still right?',
                  text: 'Treatment costs and vehicle values move. A sum insured chosen four years ago may no longer be enough.',
                },
                {
                  title: 'Are the add-ons still useful?',
                  text: 'Some add-ons make sense on a new vehicle and far less on an older one. Review rather than repeat.',
                },
              ].map((item) => (
                <div key={item.title} className="py-5">
                  <p className="font-display text-[15px] font-bold text-navy">{item.title}</p>
                  <p className="mt-1.5 text-[13.5px] leading-6 text-muted">{item.text}</p>
                </div>
              ))}
            </Reveal>

            <NoteCard title="Grace periods are not cover" className="mt-7">
              Many policies allow a short grace period to pay a renewal premium, but a claim arising
              during a gap in cover is usually not payable. Treat the expiry date as the deadline.
            </NoteCard>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Why timing matters"
          title="What a lapse actually costs"
          description="The premium is rarely the issue. The benefits built up over previous years are."
        />
        <CardGrid items={reasons} columns="lg:grid-cols-4" className="mt-10" />

        <Reveal y={16} className="mt-8 flex items-start gap-3 rounded-card border border-gold/35 bg-gold/5 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={2} />
          <p className="text-[13.5px] leading-7 text-muted">
            Renewal terms, loading and continuity benefits are decided by the insurer. Where a
            policy has had claims, the insurer may revise terms at renewal.
          </p>
        </Reveal>
      </Section>

      <FinalCta
        title="Renewal due soon?"
        description="Send the policy details and the renewal desk will confirm the options available with your insurer."
        primary={{ label: 'Start renewal', to: '/contact' }}
        secondary={{ label: 'Talk to an Expert', to: '/support' }}
      />
    </>
  )
}
