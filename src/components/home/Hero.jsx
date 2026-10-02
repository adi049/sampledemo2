import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, BellRing, FileCheck2 } from 'lucide-react'
import { Container } from '../ui/Section'
import { Button } from '../ui/Button'
import { Reveal, EASE } from '../ui/Reveal'
import { QuoteWidget } from './QuoteWidget'
import heroImage from '../../assets/hero-family-square.jpg'

const assurances = [
  'Motor, health, life and investment cover',
  'Plan details compared in one format',
  'Advisor support before you buy',
]

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-offwhite">
      {/* Thin gold hairline under the header */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex flex-col gap-10 pb-12 pt-10 sm:pb-14 sm:pt-12 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-x-12 lg:gap-y-14 lg:pb-16 lg:pt-14">
          {/* Copy */}
          <div className="order-1 lg:col-span-6 lg:pt-6">
            <Reveal as="div" y={16} duration={0.5}>
              <span className="eyebrow">
                <span className="rule-gold" aria-hidden="true" />
                Insurance marketplace
              </span>
            </Reveal>

            <Reveal as="h1" delay={0.07} y={22} duration={0.6} className="mt-4 text-display-lg text-balance">
              Compare insurance plans and buy the cover that fits.
            </Reveal>

            <Reveal as="p" delay={0.14} y={20} className="mt-5 max-w-xl text-[16px] leading-8 text-muted text-pretty">
              Motor, health, life and investment cover on one platform. See what each plan includes,
              what it leaves out, and talk to an advisor before you commit.
            </Reveal>

            <Reveal as="div" delay={0.2} y={18} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/quote" variant="primary" size="lg" className="w-full sm:w-auto">
                Get a Quote
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5"
                  strokeWidth={2.2}
                />
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Talk to an Expert
              </Button>
            </Reveal>

            <Reveal as="ul" delay={0.27} y={16} className="mt-8 space-y-2.5 border-t border-line pt-6">
              {assurances.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] leading-6 text-ink">
                  <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-teal-50 text-teal">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </Reveal>
          </div>

          {/* Quote module — second on mobile, full width row on desktop */}
          <div className="order-2 lg:order-3 lg:col-span-12">
            <Reveal y={24} delay={0.1} duration={0.6} amount={0.1}>
              <QuoteWidget variant="hero" className="lg:shadow-quote" />
            </Reveal>
          </div>

          {/* Visual */}
          <div className="order-3 lg:order-2 lg:col-span-6">
            <div className="relative lg:h-full">
              {/* Navy block the image sits on, bleeding past the container edge */}
              <div
                className="pointer-events-none absolute -top-8 left-16 hidden h-[calc(100%+24px)] w-[60vw] bg-navy lg:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-8 left-16 hidden h-[calc(100%+24px)] w-[60vw] grid-pattern lg:block"
                aria-hidden="true"
              />
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: reduce ? 0.3 : 0.75, ease: EASE, delay: 0.1 }}
                className="relative z-10 h-full overflow-hidden rounded-section border border-white/60 bg-white shadow-card"
              >
                <img
                  src={heroImage}
                  alt="A family reviewing their insurance cover together at home"
                  className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[430px]"
                  width="1024"
                  height="1024"
                  decoding="async"
                />
              </motion.div>

              {/* Accent cards */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.42 }}
                className="absolute -bottom-5 left-4 z-20 hidden items-center gap-3 rounded-card border border-line bg-white px-4 py-3 shadow-card sm:flex lg:-bottom-6 lg:left-6"
              >
                <span className="grid h-9 w-9 place-items-center rounded-btn bg-teal-50 text-teal">
                  <FileCheck2 className="h-[18px] w-[18px]" strokeWidth={1.9} />
                </span>
                <div>
                  <p className="font-display text-[13.5px] font-bold leading-tight text-navy">
                    Claims assistance
                  </p>
                  <p className="text-[12px] leading-tight text-muted">One contact until it closes</p>
                </div>
              </motion.div>

              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.55 }}
                className="absolute -top-4 right-4 z-20 hidden items-center gap-2.5 rounded-card border border-gold/30 bg-white px-3.5 py-2.5 shadow-card xl:flex"
              >
                <BellRing className="h-4 w-4 text-gold" strokeWidth={2} />
                <p className="text-[12.5px] font-medium text-navy">Renewal reminders</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
