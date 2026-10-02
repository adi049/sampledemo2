import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X, LogIn, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'
import { EASE } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { Logo } from './Logo'
import { navigation, utilityLinks } from '../../data/content'

export function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)
  const panelRef = useRef(null)

  /* Body scroll lock + Escape to close */
  useEffect(() => {
    if (!open) return undefined

    const { body } = document
    const scrollBarGap = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = body.style.overflow
    const prevPadding = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollBarGap > 0) body.style.paddingRight = `${scrollBarGap}px`

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 60)

    return () => {
      body.style.overflow = prevOverflow
      body.style.paddingRight = prevPadding
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) setExpanded(null)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-0 h-full w-full cursor-default bg-navy-900/55 backdrop-blur-[2px]"
          />

          <motion.div
            ref={panelRef}
            tabIndex={-1}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.36, ease: EASE }}
            className="absolute right-0 top-0 flex h-[100dvh] w-[min(92vw,400px)] flex-col overflow-hidden bg-white shadow-2xl outline-none"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
              <Logo compact onClick={onClose} />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-btn border border-line text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-offwhite"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            {/* Scrollable body */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-3" aria-label="Mobile">
              <ul className="divide-y divide-line">
                {navigation.map((item, index) => {
                  const hasChildren = Boolean(item.columns)
                  const isOpen = expanded === index
                  return (
                    <li key={item.label} className="py-1">
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-btn px-2 text-left font-display text-[15.5px] font-semibold text-navy transition-colors duration-200 hover:text-teal"
                          >
                            {item.label}
                            <ChevronDown
                              className={cn(
                                'h-[18px] w-[18px] shrink-0 text-muted transition-transform duration-300 ease-premium',
                                isOpen && 'rotate-180 text-teal',
                              )}
                              strokeWidth={2.2}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: EASE }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-4 px-2 pb-4 pt-1">
                                  {item.columns.map((column) => (
                                    <div key={column.heading}>
                                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                                        {column.heading}
                                      </p>
                                      <ul>
                                        {column.links.map((link) => (
                                          <li key={link.to + link.label}>
                                            <Link
                                              to={link.to}
                                              onClick={onClose}
                                              className="flex min-h-[44px] items-center rounded-btn pl-3 pr-2 text-[14.5px] text-ink transition-colors duration-200 hover:bg-teal-50 hover:text-teal"
                                            >
                                              {link.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                  <Link
                                    to={item.to}
                                    onClick={onClose}
                                    className="inline-flex min-h-[44px] items-center gap-1.5 pl-3 text-[13.5px] font-semibold text-teal"
                                  >
                                    View all {item.label.toLowerCase()}
                                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.to}
                          onClick={onClose}
                          className="flex min-h-[48px] items-center rounded-btn px-2 font-display text-[15.5px] font-semibold text-navy transition-colors duration-200 hover:text-teal"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="mt-5 rounded-card bg-offwhite p-4">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Quick links
                </p>
                <ul className="grid grid-cols-2 gap-1">
                  {utilityLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className="flex min-h-[44px] items-center text-[13.5px] text-ink transition-colors duration-200 hover:text-teal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-4" />
            </nav>

            {/* Sticky actions */}
            <div className="border-t border-line bg-white px-4 py-3.5 pb-[max(14px,env(safe-area-inset-bottom))]">
              <div className="flex items-center gap-3">
                <Button to="/login" variant="outline" size="md" className="flex-1" onClick={onClose}>
                  <LogIn className="h-4 w-4" strokeWidth={2.1} />
                  Login
                </Button>
                <Button to="/quote" variant="primary" size="md" className="flex-1" onClick={onClose}>
                  Get a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
