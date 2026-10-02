import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Car, Bike, HeartPulse, Umbrella, Lock, ArrowRight, CheckCircle2, Info } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { EASE } from '../ui/Reveal'

const TABS = [
  { id: 'car', label: 'Car', full: 'Car Insurance', icon: Car },
  { id: 'bike', label: 'Bike', full: 'Bike Insurance', icon: Bike },
  { id: 'health', label: 'Health', full: 'Health Insurance', icon: HeartPulse },
  { id: 'life', label: 'Life', full: 'Life Insurance', icon: Umbrella },
]

const MEMBER_OPTIONS = ['Self', 'Self + Spouse', 'Self + Spouse + Children', 'Parents']
const COVER_OPTIONS = ['₹25 lakh', '₹50 lakh', '₹1 crore', '₹2 crore', 'Not sure yet']

const isMotor = (tab) => tab === 'car' || tab === 'bike'

function Field({ label, htmlFor, error, children, className }) {
  return (
    <div className={className}>
      <label className="field-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export function QuoteWidget({ variant = 'hero', initialTab = 'car', initialValues = {}, className, stacked = false }) {
  const navigate = useNavigate()
  const [tab, setTab] = useState(initialTab)
  const [values, setValues] = useState({
    registration: '',
    members: MEMBER_OPTIONS[0],
    age: '',
    cover: COVER_OPTIONS[1],
    tobacco: 'No',
    mobile: '',
    ...initialValues,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  useEffect(() => setTab(initialTab), [initialTab])

  const update = (key) => (event) => {
    const { value } = event.target
    setValues((prev) => ({ ...prev, [key]: key === 'registration' ? value.toUpperCase() : value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (isMotor(tab)) {
      if (!values.registration.trim()) next.registration = 'Enter the vehicle registration number'
      else if (values.registration.replace(/[^A-Z0-9]/g, '').length < 6)
        next.registration = 'Enter the full registration number, for example RJ14AB1234'
    } else {
      if (!values.age) next.age = 'Enter an age'
      else if (Number(values.age) < 18 || Number(values.age) > 99) next.age = 'Age must be between 18 and 99'
    }
    if (!/^[6-9]\d{9}$/.test(values.mobile.trim()))
      next.mobile = 'Enter a 10 digit mobile number'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const firstField = document.getElementById(`quote-${Object.keys(next)[0]}`)
      firstField?.focus()
      return
    }

    if (variant === 'hero') {
      const params = new URLSearchParams({ type: tab })
      if (isMotor(tab)) params.set('registration', values.registration)
      else {
        params.set('age', values.age)
        if (tab === 'health') params.set('members', values.members)
        else params.set('cover', values.cover)
      }
      params.set('mobile', values.mobile)
      navigate(`/quote?${params.toString()}`)
      return
    }

    setSubmitted({ tab, ...values })
  }

  const activeTab = TABS.find((t) => t.id === tab) ?? TABS[0]

  if (submitted) {
    return (
      <div className={cn('rounded-card border border-line bg-white p-6 shadow-quote sm:p-8', className)}>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-teal">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.9} />
        </span>
        <h3 className="mt-4 text-h3">Details captured</h3>
        <p className="mt-2 text-[14.5px] leading-7 text-muted">
          Here is what you entered for a {TABS.find((t) => t.id === submitted.tab)?.full.toLowerCase()} quote.
          An advisor uses these details to pull up the plans available for your profile.
        </p>
        <dl className="mt-5 divide-y divide-line rounded-card border border-line bg-offwhite/70 text-[14px]">
          {isMotor(submitted.tab) ? (
            <div className="flex justify-between gap-4 px-4 py-3">
              <dt className="text-muted">Registration</dt>
              <dd className="font-semibold text-navy">{submitted.registration}</dd>
            </div>
          ) : (
            <>
              <div className="flex justify-between gap-4 px-4 py-3">
                <dt className="text-muted">Age</dt>
                <dd className="font-semibold text-navy">{submitted.age}</dd>
              </div>
              <div className="flex justify-between gap-4 px-4 py-3">
                <dt className="text-muted">{submitted.tab === 'health' ? 'Members' : 'Cover amount'}</dt>
                <dd className="font-semibold text-navy">
                  {submitted.tab === 'health' ? submitted.members : submitted.cover}
                </dd>
              </div>
            </>
          )}
          <div className="flex justify-between gap-4 px-4 py-3">
            <dt className="text-muted">Mobile</dt>
            <dd className="font-semibold text-navy">{submitted.mobile}</dd>
          </div>
        </dl>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button variant="outline" size="md" onClick={() => setSubmitted(null)} full>
            Edit details
          </Button>
          <Button to="/contact" variant="primary" size="md" full>
            Request a callback
          </Button>
        </div>
        <p className="mt-4 flex items-start gap-2 text-[12.5px] leading-5 text-muted">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.2} />
          This is a product demonstration. Details stay in your browser and no policy is issued here.
        </p>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'overflow-hidden rounded-card border border-line bg-white shadow-quote',
        className,
      )}
    >
      {/* Tabs — underline style, never pills */}
      <div className="border-b border-line bg-offwhite/60">
        <div className="no-scrollbar flex overflow-x-auto" role="tablist" aria-label="Insurance type">
          {TABS.map((item) => {
            const Icon = item.icon
            const active = item.id === tab
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setTab(item.id)
                  setErrors({})
                }}
                className={cn(
                  'relative flex min-h-[52px] flex-1 items-center justify-center gap-2 whitespace-nowrap px-4 text-[13.5px] font-semibold transition-colors duration-200 sm:text-[14px]',
                  active ? 'bg-white text-navy' : 'text-muted hover:text-navy',
                )}
              >
                <Icon
                  className={cn('h-[18px] w-[18px] transition-colors duration-200', active ? 'text-teal' : 'text-muted')}
                  strokeWidth={1.9}
                />
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
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-6" noValidate>
        <div className="mb-4 flex items-baseline justify-between gap-3">
          <h2 className="font-display text-[17px] font-bold text-navy sm:text-[18px]">
            {activeTab.full}
          </h2>
          <span className="text-[12.5px] text-muted">Takes under a minute</span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {isMotor(tab) ? (
              <Field
                label="Vehicle registration number"
                htmlFor="quote-registration"
                error={errors.registration}
                className="sm:col-span-2"
              >
                <input
                  id="quote-registration"
                  name="registration"
                  value={values.registration}
                  onChange={update('registration')}
                  placeholder={tab === 'car' ? 'RJ 14 AB 1234' : 'RJ 14 CD 5678'}
                  autoComplete="off"
                  spellCheck="false"
                  className={cn('field-input font-semibold uppercase tracking-[0.06em]', errors.registration && 'border-[#B3261E]')}
                />
              </Field>
            ) : tab === 'health' ? (
              <>
                <Field label="Who needs cover" htmlFor="quote-members">
                  <select id="quote-members" value={values.members} onChange={update('members')} className="field-select">
                    {MEMBER_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Age of eldest member" htmlFor="quote-age" error={errors.age}>
                  <input
                    id="quote-age"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={2}
                    value={values.age}
                    onChange={update('age')}
                    placeholder="34"
                    className={cn('field-input', errors.age && 'border-[#B3261E]')}
                  />
                </Field>
              </>
            ) : (
              <>
                <Field label="Your age" htmlFor="quote-age" error={errors.age}>
                  <input
                    id="quote-age"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={2}
                    value={values.age}
                    onChange={update('age')}
                    placeholder="32"
                    className={cn('field-input', errors.age && 'border-[#B3261E]')}
                  />
                </Field>
                <Field label="Cover amount" htmlFor="quote-cover">
                  <select id="quote-cover" value={values.cover} onChange={update('cover')} className="field-select">
                    {COVER_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </Field>
              </>
            )}

            <Field
              label="Mobile number"
              htmlFor="quote-mobile"
              error={errors.mobile}
              className={isMotor(tab) ? 'sm:col-span-2' : 'sm:col-span-2'}
            >
              <div className="flex">
                <span className="grid h-12 shrink-0 place-items-center rounded-l-input border border-r-0 border-line bg-offwhite px-3 text-[14px] font-medium text-muted sm:h-[46px]">
                  +91
                </span>
                <input
                  id="quote-mobile"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  value={values.mobile}
                  onChange={update('mobile')}
                  placeholder="10 digit mobile number"
                  autoComplete="tel-national"
                  className={cn('field-input rounded-l-none', errors.mobile && 'border-[#B3261E]')}
                />
              </div>
            </Field>
          </motion.div>
        </AnimatePresence>

        <div className={cn('mt-5 flex flex-col gap-3', !stacked && 'sm:flex-row sm:items-center')}>
          <Button type="submit" as="button" variant="primary" size="lg" className={cn('w-full', !stacked && 'sm:w-auto sm:min-w-[190px]')}>
            Get Quote
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 ease-premium group-hover/btn:translate-x-0.5"
              strokeWidth={2.2}
            />
          </Button>
          {isMotor(tab) && (
            <button
              type="button"
              onClick={() => navigate(`/quote?type=${tab}&new=1`)}
              className="inline-flex min-h-[44px] items-center text-left text-[13.5px] font-medium text-teal underline-offset-4 transition-colors hover:text-teal-700 hover:underline"
            >
              Bought a new {tab}? Continue without a number
            </button>
          )}
        </div>

        <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-[12.5px] leading-5 text-muted">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.2} />
          No payment is taken at this step. Your details are used only to prepare the quote.
        </p>
      </form>
    </div>
  )
}

export { TABS as QUOTE_TABS }
