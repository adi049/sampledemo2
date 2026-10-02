import { ArrowRight, PhoneCall } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal, Stagger, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function FinalCta({
  title = 'Need help choosing insurance?',
  description = 'Compare your options on the platform, or ask an advisor to walk through the differences with you before you decide.',
  primary = { label: 'Get a Quote', to: '/quote' },
  secondary = { label: 'Talk to an Expert', to: '/contact' },
}) {
  return (
    <Section tone="navy-deep" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[260px] w-[260px] -translate-y-1/2 rounded-full border border-white/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[180px] w-[180px] -translate-y-1/2 rounded-full border border-gold/20 lg:block"
        aria-hidden="true"
      />

      <Stagger className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12" stagger={0.09}>
        <div className="lg:col-span-7">
          <StaggerItem>
            <span className="eyebrow text-gold">
              <span className="rule-gold" aria-hidden="true" />
              Next step
            </span>
          </StaggerItem>
          <StaggerItem as="h2" className="mt-3 text-h2 text-white text-balance">
            {title}
          </StaggerItem>
          <StaggerItem as="p" className="mt-4 max-w-xl text-[15px] leading-7 text-white/65 text-pretty">
            {description}
          </StaggerItem>
        </div>

        <StaggerItem className="lg:col-span-5">
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button to={primary.to} variant="primary" size="lg" className="w-full sm:w-auto">
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
            </Button>
            <Button to={secondary.to} variant="outline-light" size="lg" className="w-full sm:w-auto">
              <PhoneCall className="h-4 w-4" strokeWidth={2} />
              {secondary.label}
            </Button>
          </div>
          <Reveal delay={0.12} y={12} className="mt-4 text-[12.5px] text-white/40 lg:text-right">
            No payment is collected before you choose a plan.
          </Reveal>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
