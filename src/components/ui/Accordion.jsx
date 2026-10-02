import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '../../lib/cn'
import { EASE } from './Reveal'

export function Accordion({ items, defaultOpen = 0, className }) {
  const [open, setOpen] = useState(defaultOpen)
  const baseId = useId()
  const reduce = useReducedMotion()

  return (
    <div className={cn('divide-y divide-line overflow-hidden rounded-card border border-line bg-white', className)}>
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <div key={item.q} className={cn('transition-colors duration-300', isOpen && 'bg-offwhite/60')}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-start gap-4 px-5 py-5 text-left transition-colors duration-200 hover:text-teal sm:px-6"
              >
                <span className="flex-1 font-display text-[15.5px] font-semibold leading-6 text-navy sm:text-base">
                  {item.q}
                </span>
                <span
                  className={cn(
                    'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ease-premium',
                    isOpen
                      ? 'rotate-45 border-teal bg-teal text-white'
                      : 'border-line bg-white text-navy',
                  )}
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0.15 : 0.38, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 pr-12 text-[14.5px] leading-7 text-muted sm:px-6 sm:pr-16">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
