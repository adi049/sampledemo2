import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, LogIn, Phone, ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '../../lib/cn'
import { EASE } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { navigation, utilityLinks } from '../../data/content'
import { categories } from '../../data/catalog'

function UtilityBar() {
  return (
    <div className="hidden border-b border-white/10 bg-navy-900 text-white lg:block">
      <div className="mx-auto flex h-9 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-[12.5px] text-white/65">
          <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2.2} />
          <span>Compare motor, health, life and investment cover in one place</span>
        </div>
        <nav aria-label="Utility">
          <ul className="flex items-center gap-1 text-[12.5px]">
            {utilityLinks.map((link) => (
              <li key={link.to} className="flex items-center">
                <Link
                  to={link.to}
                  className="rounded px-2.5 py-1 text-white/70 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
                <span className="h-3 w-px bg-white/15" aria-hidden="true" />
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="ml-1.5 inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-semibold text-white transition-colors duration-200 hover:text-gold"
              >
                <LogIn className="h-3.5 w-3.5" strokeWidth={2.2} />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

function MegaPanel({ item, onNavigate }) {
  const category = categories.find((c) => item.to.endsWith(c.slug))
  const Icon = category?.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="absolute inset-x-0 top-full z-50 pt-3"
    >
      <div className="overflow-hidden rounded-card border border-line bg-white shadow-dropdown">
        <div className="flex">
          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 p-6">
            {item.columns.map((column) => (
              <div key={column.heading}>
                <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  <span className="h-px w-3 bg-gold" aria-hidden="true" />
                  {column.heading}
                </p>
                <ul className="space-y-0.5">
                  {column.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        onClick={onNavigate}
                        className="group/link flex items-center justify-between gap-3 rounded-btn px-2.5 py-2 text-[14px] text-ink transition-colors duration-200 hover:bg-teal-50 hover:text-teal-700"
                      >
                        {link.label}
                        <ArrowRight
                          className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 ease-premium group-hover/link:translate-x-0 group-hover/link:opacity-100"
                          strokeWidth={2.2}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {category && (
            <div className="hidden w-[250px] shrink-0 border-l border-line bg-offwhite p-6 xl:block">
              <span className="grid h-10 w-10 place-items-center rounded-btn bg-navy text-gold">
                {Icon ? <Icon className="h-5 w-5" strokeWidth={1.9} /> : null}
              </span>
              <p className="mt-3.5 font-display text-[15px] font-bold text-navy">{category.name}</p>
              <p className="mt-2 text-[13px] leading-6 text-muted">{category.label}</p>
              <Link
                to={item.to}
                onClick={onNavigate}
                className="mt-3 inline-flex min-h-[40px] items-center gap-1.5 text-[13px] font-semibold text-teal transition-colors hover:text-teal-700"
              >
                Explore {category.short.toLowerCase()} plans
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const closeTimer = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close everything on route change */
  useEffect(() => {
    setOpenIndex(null)
    setMobileOpen(false)
  }, [location.pathname])

  /* Escape + outside click for the desktop mega menu */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenIndex(null)
    }
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenIndex(null)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [])

  const openPanel = (index) => {
    window.clearTimeout(closeTimer.current)
    setOpenIndex(index)
  }
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 140)
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-navy focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'sticky top-0 z-[60] w-full bg-white transition-shadow duration-300',
          scrolled ? 'shadow-header' : 'border-b border-line',
        )}
      >
        <div
          className={cn(
            'overflow-hidden transition-[max-height,opacity] duration-300 ease-premium',
            scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100',
          )}
        >
          <UtilityBar />
        </div>

        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'flex items-center justify-between gap-4 transition-[height] duration-300 ease-premium',
              scrolled ? 'h-[62px] lg:h-[66px]' : 'h-[62px] lg:h-[74px]',
            )}
          >
            <Logo />

            {/* Desktop navigation */}
            <nav ref={navRef} className="relative hidden lg:block" aria-label="Primary">
              <ul className="flex items-center">
                {navigation.map((item, index) => {
                  const hasPanel = Boolean(item.columns)
                  const isOpen = openIndex === index
                  return (
                    <li
                      key={item.label}
                      onMouseEnter={() => hasPanel && openPanel(index)}
                      onMouseLeave={() => hasPanel && scheduleClose()}
                    >
                      {hasPanel ? (
                        <NavLink
                          to={item.to}
                          end={item.exact}
                          aria-expanded={isOpen}
                          aria-haspopup="true"
                          onFocus={() => openPanel(index)}
                          onClick={() => setOpenIndex(null)}
                          className={({ isActive }) =>
                            cn(
                              'relative flex h-[46px] items-center gap-1 whitespace-nowrap px-2.5 text-[14px] font-medium transition-colors duration-200 xl:px-3.5 xl:text-[14.5px]',
                              isOpen || isActive ? 'text-teal' : 'text-navy hover:text-teal',
                            )
                          }
                        >
                          {({ isActive }) => (
                            <>
                              {item.label}
                              <ChevronDown
                                className={cn(
                                  'h-3.5 w-3.5 transition-transform duration-300 ease-premium',
                                  isOpen && 'rotate-180',
                                )}
                                strokeWidth={2.4}
                              />
                              <span
                                className={cn(
                                  'absolute inset-x-2 bottom-0 h-0.5 origin-left bg-teal transition-transform duration-300 ease-premium',
                                  isOpen || isActive ? 'scale-x-100' : 'scale-x-0',
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </NavLink>
                      ) : (
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            cn(
                              'relative flex h-[46px] items-center whitespace-nowrap px-2.5 text-[14px] font-medium transition-colors duration-200 xl:px-3.5 xl:text-[14.5px]',
                              isActive ? 'text-teal' : 'text-navy hover:text-teal',
                            )
                          }
                        >
                          {({ isActive }) => (
                            <>
                              {item.label}
                              <span
                                className={cn(
                                  'absolute inset-x-2.5 bottom-0 h-0.5 origin-left bg-teal transition-transform duration-300 ease-premium',
                                  isActive ? 'scale-x-100' : 'scale-x-0',
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </NavLink>
                      )}

                      <AnimatePresence>
                        {hasPanel && isOpen && (
                          <MegaPanel item={item} onNavigate={() => setOpenIndex(null)} />
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </nav>

            {/* Desktop actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="/contact"
                className="hidden items-center gap-2 whitespace-nowrap text-[13.5px] font-medium text-navy transition-colors duration-200 hover:text-teal xl:flex"
              >
                <Phone className="h-4 w-4 text-teal" strokeWidth={2.1} />
                Request a callback
              </Link>
              <span className="hidden h-5 w-px bg-line xl:block" aria-hidden="true" />
              <Button to="/quote" variant="primary" size="sm">
                Get a Quote
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button to="/quote" variant="primary" size="sm" className="h-10 px-3.5 text-[13px]">
                Get a Quote
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="grid h-11 w-11 place-items-center rounded-btn border border-line text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-offwhite"
              >
                <Menu className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
