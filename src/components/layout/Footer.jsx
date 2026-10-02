import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { Container } from '../ui/Section'
import { Logo } from './Logo'
import { brand, footerColumns } from '../../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main footer */}
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 sm:grid-cols-3 lg:grid-cols-12 lg:gap-x-8 lg:py-16">
          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-white/60">
              {brand.legalName} is an insurance marketplace. Compare motor, health, life, investment
              and business cover, buy the plan you choose, and get help when it is time to claim.
            </p>

            <ul className="mt-6 space-y-3 text-[13.5px] text-white/60">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={2} />
                <span>
                  Email support
                  <span className="mt-0.5 block text-[12.5px] text-white/35">
                    Publish your verified support address here
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={2} />
                <span>
                  Registered office
                  <span className="mt-0.5 block text-[12.5px] text-white/35">
                    Publish your registered address here
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading} className="lg:col-span-2">
              <p className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">
                {column.heading}
              </p>
              <span className="mt-3 block h-px w-7 bg-gold" aria-hidden="true" />
              <ul className="mt-3 space-y-0.5 lg:mt-4 lg:space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.to + link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex min-h-[44px] items-center gap-1.5 text-[13.5px] text-white/60 transition-colors duration-200 hover:text-white lg:min-h-0"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        className="h-3 w-3 -translate-x-1 text-gold opacity-0 transition-all duration-200 ease-premium group-hover:translate-x-0 group-hover:opacity-100"
                        strokeWidth={2.4}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-4 py-6 text-[12.5px] text-white/45 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {year} {brand.legalName}. All rights reserved.
            </p>
            <p className="lg:text-right">
              Insurance is the subject matter of solicitation. Policy terms, conditions, exclusions
              and waiting periods are set by the insurer.
            </p>
          </div>
          <div className="border-t border-white/5 py-5 text-[12px] leading-6 text-white/30">
            Regulatory registration details, grievance officer contact and licence information
            should be published in this area before the site goes live. This build is a design and
            product demonstration; no policy is issued and no payment is collected through it.
          </div>
        </Container>
      </div>
    </footer>
  )
}
