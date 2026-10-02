import { useState } from 'react'
import { CheckCircle2, Lock, Send } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'

const TOPICS = [
  'Choosing a new policy',
  'Claims assistance',
  'Renewal of an existing policy',
  'Policy document or endorsement',
  'Something else',
]

export function ContactForm({ defaultTopic = TOPICS[0], compact = false, title, description }) {
  const [values, setValues] = useState({
    name: '',
    mobile: '',
    email: '',
    topic: defaultTopic,
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Enter your name'
    if (!/^[6-9]\d{9}$/.test(values.mobile.trim())) next.mobile = 'Enter a 10 digit mobile number'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = 'Enter a valid email address'
    setErrors(next)
    if (Object.keys(next).length > 0) {
      document.getElementById(`contact-${Object.keys(next)[0]}`)?.focus()
      return
    }
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-card border border-line bg-white p-6 shadow-card sm:p-8">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-teal">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.9} />
        </span>
        <h3 className="mt-4 text-h3">Request ready to send</h3>
        <p className="mt-2 text-[14.5px] leading-7 text-muted">
          Thanks {values.name.split(' ')[0]}. Your request about{' '}
          <span className="font-medium text-navy">{values.topic.toLowerCase()}</span> has been
          captured along with your number ending {values.mobile.slice(-4)}.
        </p>
        <p className="mt-3 text-[13px] leading-6 text-muted">
          This build is a product demonstration, so nothing is transmitted. Connect this form to
          your CRM or helpdesk to make it live.
        </p>
        <Button variant="outline" size="md" className="mt-5" onClick={() => setSent(false)}>
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn('rounded-card border border-line bg-white shadow-card', compact ? 'p-5' : 'p-6 sm:p-8')}
    >
      {title && <h2 className="text-h3">{title}</h2>}
      {description && <p className="mt-2 text-[14px] leading-7 text-muted">{description}</p>}

      <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', (title || description) && 'mt-6')}>
        <div>
          <label className="field-label" htmlFor="contact-name">
            Full name
          </label>
          <input
            id="contact-name"
            value={values.name}
            onChange={update('name')}
            autoComplete="name"
            placeholder="Your name"
            className={cn('field-input', errors.name && 'border-[#B3261E]')}
          />
          {errors.name && <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]">{errors.name}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="contact-mobile">
            Mobile number
          </label>
          <div className="flex">
            <span className="grid h-12 shrink-0 place-items-center rounded-l-input border border-r-0 border-line bg-offwhite px-3 text-[14px] font-medium text-muted sm:h-[46px]">
              +91
            </span>
            <input
              id="contact-mobile"
              value={values.mobile}
              onChange={update('mobile')}
              inputMode="numeric"
              maxLength={10}
              autoComplete="tel-national"
              placeholder="10 digit number"
              className={cn('field-input rounded-l-none', errors.mobile && 'border-[#B3261E]')}
            />
          </div>
          {errors.mobile && <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]">{errors.mobile}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="contact-email">
            Email <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={values.email}
            onChange={update('email')}
            autoComplete="email"
            placeholder="you@example.com"
            className={cn('field-input', errors.email && 'border-[#B3261E]')}
          />
          {errors.email && <p className="mt-1.5 text-[12.5px] font-medium text-[#B3261E]">{errors.email}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="contact-topic">
            What is this about
          </label>
          <select id="contact-topic" value={values.topic} onChange={update('topic')} className="field-select">
            {TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="contact-message">
            Your question <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="contact-message"
            value={values.message}
            onChange={update('message')}
            rows={4}
            placeholder="Tell us what you need help with"
            className="w-full rounded-input border border-line bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-all duration-200 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" as="button" variant="primary" size="lg" className="w-full sm:w-auto">
          <Send className="h-4 w-4" strokeWidth={2} />
          Send request
        </Button>
        <p className="flex items-start gap-2 text-[12.5px] leading-5 text-muted sm:max-w-xs">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.2} />
          Details are used to answer your query and prepare quotes. Nothing is sold on.
        </p>
      </div>
    </form>
  )
}
