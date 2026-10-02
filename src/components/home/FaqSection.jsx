import { MessagesSquare } from 'lucide-react'
import { Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { Accordion } from '../ui/Accordion'
import { Button } from '../ui/Button'
import { faqs } from '../../data/content'

export function FaqSection({ items = faqs.slice(0, 5), showMore = true }) {
  return (
    <Section id="faq" tone="offwhite">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal y={14} duration={0.45}>
            <span className="eyebrow">
              <span className="rule-gold" aria-hidden="true" />
              FAQ
            </span>
          </Reveal>
          <Reveal as="h2" delay={0.06} y={18} className="mt-3 text-h2 text-balance">
            Questions people ask before buying
          </Reveal>
          <Reveal as="p" delay={0.12} y={18} className="mt-4 text-[15px] leading-7 text-muted">
            Short, factual answers on comparison, fees, claims and renewals. If something is not
            covered here, ask the team directly.
          </Reveal>

          <Reveal delay={0.18} y={16} className="mt-7 rounded-card border border-line bg-white p-5">
            <span className="grid h-10 w-10 place-items-center rounded-btn bg-teal-50 text-teal">
              <MessagesSquare className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <p className="mt-3.5 font-display text-[15px] font-bold text-navy">Still unclear?</p>
            <p className="mt-1.5 text-[13.5px] leading-6 text-muted">
              Send the question in writing and keep the answer on record.
            </p>
            <Button to="/contact" variant="outline" size="sm" className="mt-4">
              Ask the team
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal y={20} amount={0.1}>
            <Accordion items={items} />
          </Reveal>
          {showMore && (
            <Reveal delay={0.1} y={16} className="mt-6">
              <Button to="/faq" variant="outline" size="md">
                Read all questions
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  )
}
