import {
  Headset,
  FileCheck2,
  Scale,
  MonitorSmartphone,
  Layers,
  ClipboardList,
  SearchCheck,
  ShieldCheck,
  CreditCard,
  BellRing,
  FolderClock,
  FileSearch,
  PhoneCall,
  MessagesSquare,
  Mail,
  Clock4,
} from 'lucide-react'

export const brand = {
  name: 'LUNA',
  suffix: 'Insurance',
  legalName: 'LUNA Insurance',
  descriptor: 'Insurance marketplace',
  tagline: 'Compare insurance. Buy with clarity.',
}

/* ---------------------------------------------------------------- utility bar */
export const utilityLinks = [
  { label: 'Claims assistance', to: '/claims' },
  { label: 'Renew a policy', to: '/renewal' },
  { label: 'Customer support', to: '/support' },
  { label: 'Help & FAQ', to: '/faq' },
]

/* ---------------------------------------------------------------- navigation */
export const navigation = [
  {
    label: 'Health',
    to: '/insurance/health',
    columns: [
      {
        heading: 'Health plans',
        links: [
          { label: 'Health Insurance', to: '/insurance/health/health-insurance' },
          { label: 'Family Health', to: '/insurance/health/family-health' },
          { label: 'Personal Accident', to: '/insurance/health/personal-accident' },
          { label: 'Senior Citizen', to: '/insurance/health/senior-citizen' },
        ],
      },
      {
        heading: 'Before you buy',
        links: [
          { label: 'How comparison works', to: '/how-it-works' },
          { label: 'Claims assistance', to: '/claims' },
          { label: 'Health insurance FAQ', to: '/faq' },
        ],
      },
    ],
  },
  {
    label: 'Motor',
    to: '/insurance/motor',
    columns: [
      {
        heading: 'Private vehicles',
        links: [
          { label: 'Car Insurance', to: '/insurance/motor/car-insurance' },
          { label: 'Bike Insurance', to: '/insurance/motor/bike-insurance' },
        ],
      },
      {
        heading: 'Commercial',
        links: [
          { label: 'Commercial Vehicle', to: '/insurance/motor/commercial-vehicle' },
          { label: 'Taxi Insurance', to: '/insurance/motor/taxi-insurance' },
          { label: 'Truck Insurance', to: '/insurance/motor/truck-insurance' },
          { label: 'Bus Insurance', to: '/insurance/motor/bus-insurance' },
        ],
      },
    ],
  },
  {
    label: 'Life',
    to: '/insurance/life',
    columns: [
      {
        heading: 'Protection',
        links: [
          { label: 'Term Insurance', to: '/insurance/life/term-insurance' },
          { label: 'Women Term Plan', to: '/insurance/life/women-term' },
          { label: 'Family Protection', to: '/insurance/life/family-protection' },
        ],
      },
      {
        heading: 'Useful reading',
        links: [
          { label: 'How much cover is enough', to: '/how-it-works' },
          { label: 'Nominee and documentation', to: '/claims' },
        ],
      },
    ],
  },
  {
    label: 'Investment',
    to: '/insurance/investment',
    columns: [
      {
        heading: 'Savings plans',
        links: [
          { label: 'Investment Plans', to: '/insurance/investment/investment-plans' },
          { label: 'Guaranteed Plans', to: '/insurance/investment/guaranteed-plans' },
          { label: 'Retirement Plans', to: '/insurance/investment/retirement' },
        ],
      },
    ],
  },
  {
    label: 'Other products',
    to: '/insurance',
    exact: true,
    columns: [
      {
        heading: 'Property & travel',
        links: [
          { label: 'Home Insurance', to: '/insurance/home' },
          { label: 'Travel Insurance', to: '/insurance/travel' },
          { label: 'Pet Insurance', to: '/insurance/pet' },
        ],
      },
      {
        heading: 'Business',
        links: [
          { label: 'Business Insurance', to: '/insurance/business' },
          { label: 'Group Health', to: '/insurance/business/group-health' },
          { label: 'Other Insurance', to: '/insurance/other' },
        ],
      },
    ],
  },
  { label: 'Claims', to: '/claims' },
  { label: 'Support', to: '/support' },
]

/* ---------------------------------------------------------------- trust band */
/* Deliberately non-numeric. No customer counts, policy counts or ratios. */
export const trustStatements = [
  {
    icon: Layers,
    title: 'Multiple insurance categories',
    text: 'Motor, health, life, investment, travel, home and business cover in one place.',
  },
  {
    icon: FileCheck2,
    title: 'Dedicated claims support',
    text: 'A named point of contact to help you file, follow up and close a claim.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Online policy assistance',
    text: 'Buy, renew and retrieve policy documents without visiting a branch.',
  },
  {
    icon: Scale,
    title: 'Compare available plans',
    text: 'See cover, exclusions and waiting periods side by side before you decide.',
  },
]

/* ---------------------------------------------------------------- benefits */
export const benefits = [
  {
    icon: Headset,
    title: 'Customer-first guidance',
    text: 'Advisors explain what a plan covers and what it does not, so you are not relying on a brochure alone. If a cover is unnecessary for you, we say so.',
  },
  {
    icon: FileCheck2,
    title: 'Claims assistance',
    text: 'Help with intimation, document checklists and follow-up with the insurer. You keep one point of contact from the first call until the claim is settled.',
  },
  {
    icon: Layers,
    title: 'Multiple insurance options',
    text: 'Retail and commercial categories on one platform, so a household can keep car, health and term cover under a single login.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital policy management',
    text: 'Policy copies, renewal dates and claim status in one dashboard. Reminders are sent before a policy lapses.',
  },
]

/* ---------------------------------------------------------------- process */
export const processSteps = [
  {
    number: '01',
    title: 'Choose insurance',
    text: 'Pick the category you need, from motor and health to business cover.',
    icon: Layers,
  },
  {
    number: '02',
    title: 'Enter your details',
    text: 'Share the basics: vehicle, age, members to cover or sum insured required.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Compare available plans',
    text: 'Review cover, exclusions, waiting periods and add-ons side by side.',
    icon: SearchCheck,
  },
  {
    number: '04',
    title: 'Select suitable coverage',
    text: 'Confirm the sum insured and add-ons with an advisor if you need a second view.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Complete purchase',
    text: 'Pay the insurer directly and receive the policy document on email.',
    icon: CreditCard,
  },
]

/* ---------------------------------------------------------------- digital */
export const appFeatures = [
  { icon: FolderClock, title: 'All policies in one place', text: 'Motor, health and life documents stored against a single login.' },
  { icon: BellRing, title: 'Renewal reminders', text: 'Alerts before the due date so cover does not lapse by accident.' },
  { icon: FileSearch, title: 'Claim status tracking', text: 'See which document is pending and who is handling the file.' },
  { icon: ShieldCheck, title: 'Secure document access', text: 'Download policy copies and endorsements whenever you need them.' },
]

/* ---------------------------------------------------------------- support */
export const supportChannels = [
  {
    icon: PhoneCall,
    title: 'Talk to an advisor',
    text: 'Request a callback and an advisor will walk through the options with you.',
    action: { label: 'Request a callback', to: '/contact' },
  },
  {
    icon: MessagesSquare,
    title: 'Claims help desk',
    text: 'Guidance on intimation, documents and follow-up with the insurer.',
    action: { label: 'Go to claims', to: '/claims' },
  },
  {
    icon: Mail,
    title: 'Written queries',
    text: 'Send policy questions in writing and get a response you can keep on record.',
    action: { label: 'Contact the team', to: '/contact' },
  },
  {
    icon: Clock4,
    title: 'Renewal desk',
    text: 'Reminders and assistance so an existing policy does not lapse.',
    action: { label: 'Renew a policy', to: '/renewal' },
  },
]

/* ---------------------------------------------------------------- faq */
export const faqs = [
  {
    q: 'How does online insurance comparison work?',
    a: 'You enter a few details about what needs to be insured. The platform shows the plans available for that profile, with cover, exclusions, waiting periods and add-ons set out in the same format so you can read them side by side. You then buy the plan you choose and the policy is issued by the insurer.',
  },
  {
    q: 'Is there an additional fee for using the platform?',
    a: 'No separate platform fee is charged to you. You pay the premium that the insurer charges for the policy. Distributors are compensated by the insurer, and that arrangement does not change the premium you pay.',
  },
  {
    q: 'How does claims assistance work?',
    a: 'Tell us the policy and what happened. We confirm the intimation route for that insurer, share the document checklist, and follow up until the claim is closed. The decision on a claim always rests with the insurer, under the terms of the policy.',
  },
  {
    q: 'What information is required for a quote?',
    a: 'For motor, the vehicle registration number and previous policy details. For health, the ages of the members to be covered and the city of residence. For life, your age, smoking status and the cover amount you want. Medical or vehicle inspection may be required before issue.',
  },
  {
    q: 'Can an existing policy be renewed here?',
    a: 'Yes, if the insurer allows renewal through a distributor. Share the existing policy number and expiry date, and the renewal desk will confirm what is possible. Renewing before expiry protects benefits such as No Claim Bonus and continuity of waiting periods.',
  },
  {
    q: 'What happens to my personal details?',
    a: 'Details you submit are used to prepare quotes and to issue a policy, and are shared with the insurer you select. They are not sold to unrelated third parties. See the privacy policy for how long records are kept.',
  },
  {
    q: 'Can I speak to someone before buying?',
    a: 'Yes. Request a callback at any point in the journey. An advisor can explain differences between plans, check whether an add-on is worth it, and confirm what documents the insurer will ask for.',
  },
]

/* ---------------------------------------------------------------- footer */
export const footerColumns = [
  {
    heading: 'Insurance',
    links: [
      { label: 'Motor Insurance', to: '/insurance/motor' },
      { label: 'Health Insurance', to: '/insurance/health' },
      { label: 'Life Insurance', to: '/insurance/life' },
      { label: 'Investment Plans', to: '/insurance/investment' },
      { label: 'Other Products', to: '/insurance' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Careers', to: '/careers' },
      { label: 'Partners', to: '/partners' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Claims', to: '/claims' },
      { label: 'Renewal', to: '/renewal' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Customer Support', to: '/support' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/legal/privacy' },
      { label: 'Terms & Conditions', to: '/legal/terms' },
      { label: 'Disclaimer', to: '/legal/disclaimer' },
    ],
  },
]
