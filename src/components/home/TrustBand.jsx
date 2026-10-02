import { Section } from '../ui/Section'
import { Stagger, StaggerItem, Reveal } from '../ui/Reveal'
import { trustStatements } from '../../data/content'

export function TrustBand() {
  return (
    <Section tone="navy" size="sm" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
      <div className="relative">
        <Reveal y={16} className="flex flex-col gap-3 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow text-gold">
              <span className="rule-gold" aria-hidden="true" />
              What you get
            </span>
            <h2 className="mt-3 text-h2 text-white">Built for people buying insurance, not browsing it</h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-7 text-white/60">
            No scores, no sponsored ranking. Plan information is shown in one format so the
            differences are easy to see.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-x-8 gap-y-8 pt-9 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {trustStatements.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title} className="group" y={18}>
                <span className="grid h-11 w-11 place-items-center rounded-btn border border-white/15 bg-white/5 text-gold transition-colors duration-300 ease-premium group-hover:border-gold/40">
                  <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-white/55">{item.text}</p>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </Section>
  )
}
