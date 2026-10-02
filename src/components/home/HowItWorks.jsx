import { Section, SectionHeading } from '../ui/Section'
import { Stagger, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '../../data/content'

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="offwhite">
      <SectionHeading
        eyebrow="How it works"
        title="Five steps from question to policy"
        description="The same route for every category. You can stop at any step and pick it up later, or ask an advisor to take over."
      />

      <div className="relative mt-10 lg:mt-14">
        {/* Connecting line — desktop */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-line lg:block"
          aria-hidden="true"
        />

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4" stagger={0.09}>
          {processSteps.map((step) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.number} y={22} className="relative h-full">
                <div className="group relative flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover lg:rounded-none lg:border-0 lg:border-t-2 lg:border-transparent lg:bg-transparent lg:p-0 lg:pt-7 lg:hover:translate-y-0 lg:hover:border-t-teal lg:hover:shadow-none">
                  {/* Desktop node */}
                  <span
                    className="absolute -top-[7px] left-0 hidden h-3 w-3 rounded-full border-2 border-white bg-line transition-colors duration-300 ease-premium group-hover:bg-teal lg:block"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-3">
                    <span className="font-display text-[26px] font-extrabold leading-none text-gold lg:text-[30px]">
                      {step.number}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal lg:bg-white lg:shadow-card">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[15.5px] font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-6 text-muted lg:pr-4">{step.text}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>

      <Stagger className="mt-10 flex flex-col items-start gap-4 rounded-card border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between lg:mt-14">
        <StaggerItem>
          <p className="font-display text-[16px] font-bold text-navy">Ready to see what is available?</p>
          <p className="mt-1 text-[14px] text-muted">Start with a category and compare from there.</p>
        </StaggerItem>
        <StaggerItem className="w-full sm:w-auto">
          <Button to="/quote" variant="primary" size="md" className="w-full sm:w-auto">
            Start a quote
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5" strokeWidth={2.2} />
          </Button>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}
