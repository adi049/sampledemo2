import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, FileText, HeartPulse, Car, BellRing } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal, Stagger, StaggerItem, EASE } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { appFeatures } from '../../data/content'

function PhoneMockup() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 26, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduce ? 0.3 : 0.7, ease: EASE }}
      className="relative mx-auto w-[252px] sm:w-[280px]"
    >
      <div className="rounded-[34px] border-[9px] border-navy-900 bg-navy-900 shadow-quote">
        <div className="overflow-hidden rounded-[26px] bg-offwhite">
          {/* Status / app bar */}
          <div className="bg-navy-900 px-4 pb-4 pt-3 text-white">
            <div className="flex items-center justify-between text-[9.5px] text-white/50">
              <span>09:41</span>
              <span className="flex gap-1">
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span className="h-1 w-1 rounded-full bg-white/40" />
              </span>
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/45">Dashboard</p>
            <p className="mt-1 font-display text-[16px] font-bold">My policies</p>
          </div>

          {/* Cards */}
          <div className="space-y-2.5 p-3.5">
            <div className="rounded-[10px] border border-line bg-white p-3">
              <div className="flex items-start gap-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-teal-50 text-teal">
                  <Car className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-semibold text-navy">Car insurance</p>
                  <p className="text-[10px] text-muted">Comprehensive · Active</p>
                </div>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 rounded-[7px] bg-gold/10 px-2 py-1.5">
                <BellRing className="h-3 w-3 shrink-0 text-gold" strokeWidth={2.2} />
                <span className="text-[9.5px] font-medium text-navy">Renewal due next month</span>
              </div>
            </div>

            <div className="rounded-[10px] border border-line bg-white p-3">
              <div className="flex items-start gap-2.5">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-teal-50 text-teal">
                  <HeartPulse className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-semibold text-navy">Family health</p>
                  <p className="text-[10px] text-muted">Floater · 4 members</p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-line bg-white p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                Claim status
              </p>
              <div className="mt-2 space-y-2">
                {['Intimation received', 'Documents verified', 'With the insurer'].map((row, index) => (
                  <div key={row} className="flex items-center gap-2">
                    <span
                      className={`grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full ${
                        index < 2 ? 'bg-teal text-white' : 'border border-line bg-white'
                      }`}
                    >
                      {index < 2 && <Check className="h-2 w-2" strokeWidth={4} />}
                    </span>
                    <span className={`text-[10px] ${index < 2 ? 'text-navy' : 'text-muted'}`}>{row}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document chip */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
        className="absolute -bottom-6 -left-4 hidden items-center gap-2 rounded-card border border-line bg-white px-3.5 py-2.5 shadow-card sm:flex"
      >
        <FileText className="h-4 w-4 text-teal" strokeWidth={2} />
        <span className="text-[11.5px] font-medium text-navy">Policy copy ready</span>
      </motion.div>
    </motion.div>
  )
}

export function DigitalExperience() {
  return (
    <Section id="digital" tone="teal">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <PhoneMockup />
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal y={14} duration={0.45}>
            <span className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Digital experience
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
            Your policies, renewals and claims in one account
          </Reveal>
          <Reveal as="p" delay={0.12} y={18} className="mt-4 max-w-xl text-[15px] leading-7 text-muted text-pretty">
            Every policy bought through the platform sits in a single dashboard. Documents stay
            available for download, renewal dates are tracked for you, and a claim can be raised
            from the same place.
          </Reveal>

          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            {appFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <StaggerItem key={feature.title} y={18}>
                  <div className="group flex h-full gap-3.5 rounded-card border border-white bg-white/80 p-4 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/30 hover:bg-white hover:shadow-card">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-teal-50 text-teal">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-[14.5px] font-bold text-navy">{feature.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-muted">{feature.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal delay={0.1} y={16} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/login" variant="primary" size="md" className="w-full sm:w-auto">
              Open your dashboard
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
            </Button>
            <Button to="/support" variant="outline" size="md" className="w-full sm:w-auto">
              See what support covers
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
