import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Smartphone, ShieldCheck, FolderClock, BellRing, FileSearch, Info } from 'lucide-react'
import { cn } from '../lib/cn'
import { Container } from '../components/ui/Section'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { LogoMark } from '../components/layout/Logo'
import { usePageTitle } from '../lib/usePageTitle'

const benefits = [
  { icon: FolderClock, text: 'Every policy you bought through LUNA in one list' },
  { icon: BellRing, text: 'Renewal reminders before the due date' },
  { icon: FileSearch, text: 'Claim status and the document still pending' },
  { icon: ShieldCheck, text: 'Policy copies available to download any time' },
]

export default function LoginPage() {
  const [mode, setMode] = useState('otp')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [sent, setSent] = useState(false)

  usePageTitle(
    'Login | LUNA Insurance',
    'Sign in to your LUNA dashboard to view policies, track claims and manage renewals.',
  )

  const submit = (event) => {
    event.preventDefault()
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      setError('Enter the 10 digit mobile number registered with your policy')
      return
    }
    if (mode === 'password' && password.length < 6) {
      setError('Enter your password')
      return
    }
    setError(null)
    setSent(true)
  }

  return (
    <section className="bg-offwhite py-12 lg:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-section border border-line bg-white shadow-card lg:grid-cols-2">
          {/* Form */}
          <div className="p-6 sm:p-9">
            <Reveal y={16}>
              <LogoMark className="h-10 w-10" />
              <h1 className="mt-5 text-h2">Sign in to your dashboard</h1>
              <p className="mt-2.5 text-[14.5px] leading-7 text-muted">
                Use the mobile number registered against your policy.
              </p>
            </Reveal>

            <Reveal y={16} delay={0.08} className="mt-7">
              {/* Mode switch — underline, not pills */}
              <div className="flex border-b border-line" role="tablist" aria-label="Sign in method">
                {[
                  { id: 'otp', label: 'One-time password' },
                  { id: 'password', label: 'Password' },
                ].map((item) => {
                  const active = mode === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setMode(item.id)
                        setError(null)
                        setSent(false)
                      }}
                      className={cn(
                        'relative min-h-[46px] px-4 text-[14px] font-semibold transition-colors duration-200',
                        active ? 'text-navy' : 'text-muted hover:text-navy',
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          'absolute inset-x-0 bottom-0 h-0.5 origin-left bg-teal transition-transform duration-300 ease-premium',
                          active ? 'scale-x-100' : 'scale-x-0',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  )
                })}
              </div>

              {sent ? (
                <div className="mt-7 rounded-card border border-line bg-offwhite p-5">
                  <p className="font-display text-[15px] font-bold text-navy">
                    {mode === 'otp' ? 'One-time password requested' : 'Sign in requested'}
                  </p>
                  <p className="mt-2 text-[13.5px] leading-6 text-muted">
                    In a live deployment this would {mode === 'otp' ? 'send a code to' : 'authenticate'}{' '}
                    the number ending {mobile.slice(-4)}. This build has no account backend
                    connected.
                  </p>
                  <Button variant="outline" size="md" className="mt-4" onClick={() => setSent(false)}>
                    Back to sign in
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate className="mt-7 space-y-4">
                  <div>
                    <label className="field-label" htmlFor="login-mobile">
                      Mobile number
                    </label>
                    <div className="flex">
                      <span className="grid h-12 shrink-0 place-items-center rounded-l-input border border-r-0 border-line bg-offwhite px-3 text-[14px] font-medium text-muted sm:h-[46px]">
                        +91
                      </span>
                      <input
                        id="login-mobile"
                        value={mobile}
                        onChange={(event) => {
                          setMobile(event.target.value)
                          setError(null)
                        }}
                        inputMode="numeric"
                        maxLength={10}
                        autoComplete="tel-national"
                        placeholder="10 digit number"
                        className={cn('field-input rounded-l-none', error && 'border-[#B3261E]')}
                      />
                    </div>
                  </div>

                  {mode === 'password' && (
                    <div>
                      <label className="field-label" htmlFor="login-password">
                        Password
                      </label>
                      <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(event) => {
                          setPassword(event.target.value)
                          setError(null)
                        }}
                        autoComplete="current-password"
                        placeholder="Your password"
                        className="field-input"
                      />
                    </div>
                  )}

                  {error && (
                    <p className="text-[12.5px] font-medium text-[#B3261E]" role="alert">
                      {error}
                    </p>
                  )}

                  <Button type="submit" as="button" variant="primary" size="lg" full>
                    {mode === 'otp' ? (
                      <>
                        <Smartphone className="h-4 w-4" strokeWidth={2} />
                        Send one-time password
                      </>
                    ) : (
                      <>
                        <Lock className="h-4 w-4" strokeWidth={2} />
                        Sign in
                      </>
                    )}
                  </Button>

                  <p className="text-[13px] text-muted">
                    Policy bought elsewhere?{' '}
                    <Link to="/support" className="font-semibold text-teal underline-offset-4 hover:underline">
                      Ask support to link it
                    </Link>
                  </p>
                </form>
              )}
            </Reveal>

            <Reveal y={14} delay={0.14} className="mt-7 flex items-start gap-2.5 border-t border-line pt-5 text-[12.5px] leading-5 text-muted">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.2} />
              Demonstration build: no credentials are stored, transmitted or validated.
            </Reveal>
          </div>

          {/* Side panel */}
          <div className="relative overflow-hidden bg-navy p-6 text-white sm:p-9">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
            <div className="relative">
              <span className="eyebrow text-gold">
                <span className="rule-gold" aria-hidden="true" />
                Your dashboard
              </span>
              <h2 className="mt-3 text-h3 text-white">Everything about your cover, in one account</h2>
              <ul className="mt-7 space-y-5">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <li key={benefit.text} className="flex items-start gap-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-btn border border-white/15 bg-white/5 text-gold">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </span>
                      <span className="text-[14px] leading-7 text-white/70">{benefit.text}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-9 border-t border-white/10 pt-6">
                <p className="text-[13.5px] text-white/60">No policy with LUNA yet?</p>
                <Button to="/quote" variant="gold" size="md" className="mt-3">
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
