import { Building2, ShieldCheck, Info } from 'lucide-react'
import { Section, SectionHeading } from '../ui/Section'
import { Stagger, StaggerItem, Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

/**
 * No insurer logos or partnership claims are published here.
 * Each tile is a neutral placeholder to be replaced once agreements are in place.
 */
const slots = Array.from({ length: 10 }, (_, index) => index)

export function Partners() {
  return (
    <Section id="partners" tone="white">
      <SectionHeading
        eyebrow="Providers"
        title="Insurance providers available through the platform"
        description="Plans are issued by the insurer, not by LUNA. Provider identities are published only once the arrangement is confirmed, so nothing is listed here in advance."
        action={
          <Button to="/partners" variant="outline" size="md">
            About our provider policy
          </Button>
        }
      />

      <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5" stagger={0.05}>
        {slots.map((slot) => (
          <StaggerItem key={slot} y={16}>
            <div className="group flex h-[88px] flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line bg-offwhite/60 px-3 transition-colors duration-300 ease-premium hover:border-teal/35 hover:bg-teal-50/40">
              <Building2 className="h-5 w-5 text-muted/50 transition-colors duration-300 group-hover:text-teal/70" strokeWidth={1.6} />
              <span className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-muted/60">
                Provider slot
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal y={16} className="mt-7 flex flex-col gap-4 rounded-card border border-line bg-offwhite p-5 sm:flex-row sm:items-start">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-white text-teal shadow-card">
          <Info className="h-5 w-5" strokeWidth={1.9} />
        </span>
        <div className="text-[13.5px] leading-7 text-muted">
          <p className="font-semibold text-navy">Why this section is empty</p>
          <p className="mt-1">
            Insurer names and logos are trademarks of their owners and can only be displayed with a
            live distribution agreement in place. Replace these slots with approved provider assets
            before launch.
          </p>
        </div>
      </Reveal>

      <Reveal y={16} className="mt-4 flex items-center gap-2.5 text-[13px] text-muted">
        <ShieldCheck className="h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
        Policies are underwritten and issued by the insurer selected at the time of purchase.
      </Reveal>
    </Section>
  )
}
