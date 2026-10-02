import { Section } from '../ui/Section'
import { Reveal, Stagger, StaggerItem, RevealImage } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { benefits } from '../../data/content'
import advisorImage from '../../assets/advisor.jpg'

export function WhyChooseUs() {
  return (
    <Section id="why-us" tone="white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left column */}
        <div className="lg:col-span-5">
          <Reveal y={14} duration={0.45}>
            <span className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Why LUNA
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
            Advice you can check, not sales pressure
          </Reveal>
          <Reveal as="p" delay={0.12} y={18} className="mt-4 text-[15px] leading-7 text-muted">
            Insurance is bought once and relied on years later. We focus on the parts that matter at
            that point: what the policy covers, what it excludes, and who helps you when a claim
            comes up.
          </Reveal>

          <RevealImage
            src={advisorImage}
            alt="An advisor explaining policy documents to a couple"
            delay={0.1}
            className="mt-8 hidden rounded-section border border-line shadow-card lg:block"
            imgClassName="aspect-[4/3]"
          />

          <Reveal delay={0.18} y={16} className="mt-7">
            <Button to="/about" variant="outline" size="md">
              How we work
            </Button>
          </Reveal>
        </div>

        {/* Benefit list */}
        <Stagger className="lg:col-span-7" stagger={0.09}>
          <div className="divide-y divide-line border-y border-line">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <StaggerItem key={benefit.title} y={18}>
                  <div className="group flex gap-4 py-6 transition-transform duration-300 ease-premium hover:-translate-y-0.5 sm:gap-5 sm:py-7">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-card border border-line bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:border-teal/35 group-hover:bg-teal-50 group-hover:text-teal">
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="text-h3">{benefit.title}</h3>
                      <p className="mt-2 text-[14.5px] leading-7 text-muted text-pretty">{benefit.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </div>
        </Stagger>
      </div>
    </Section>
  )
}
