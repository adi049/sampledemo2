import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal, Stagger, StaggerItem, RevealImage } from '../ui/Reveal'
import { supportChannels } from '../../data/content'
import supportImage from '../../assets/support.jpg'

export function SupportSection() {
  return (
    <Section id="support" tone="white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal y={14} duration={0.45}>
            <span className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              Support
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
            Customer support that stays with you
          </Reveal>
          <Reveal as="p" delay={0.12} y={18} className="mt-4 text-[15px] leading-7 text-muted text-pretty">
            Buying a policy takes a few minutes. Using it can take weeks, usually at a difficult
            time. The same team that helps you choose a plan also handles the renewal and the claim,
            so you are not explaining your case from the beginning each time.
          </Reveal>

          <RevealImage
            src={supportImage}
            alt="A support advisor taking a customer call at a desk"
            delay={0.08}
            className="mt-8 rounded-section border border-line shadow-card"
            imgClassName="aspect-[16/10] lg:aspect-[4/3]"
          />
        </div>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:content-start" stagger={0.08}>
          {supportChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <StaggerItem key={channel.title} y={20} className="h-full">
                <div className="group flex h-full flex-col rounded-card border border-line bg-white p-5 transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-teal/35 hover:shadow-card-hover sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-btn bg-offwhite text-navy transition-colors duration-300 ease-premium group-hover:bg-teal-50 group-hover:text-teal">
                    <Icon className="h-[21px] w-[21px]" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-[15.5px] font-bold text-navy">{channel.title}</h3>
                  <p className="mt-2 flex-1 text-[13.5px] leading-6 text-muted">{channel.text}</p>
                  <Link
                    to={channel.action.to}
                    className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] font-semibold text-teal transition-colors duration-200 hover:text-teal-700"
                  >
                    {channel.action.label}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
                      strokeWidth={2.3}
                    />
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </Section>
  )
}
