import {
  Car,
  Bike,
  HeartPulse,
  Umbrella,
  TrendingUp,
  Home,
  Plane,
  PawPrint,
  Briefcase,
  LayoutGrid,
  Truck,
  Bus,
  CarTaxiFront,
  Users,
  ShieldPlus,
  UserRound,
  Baby,
  PiggyBank,
  Landmark,
  Wallet,
  Stethoscope,
  Building2,
  Flame,
  Ship,
  Lock,
  GraduationCap,
  Store,
} from 'lucide-react'

import motorImg from '../assets/motor.jpg'
import healthImg from '../assets/health.jpg'
import familyImg from '../assets/hero-family.jpg'
import advisorImg from '../assets/advisor.jpg'
import homeImg from '../assets/home.jpg'
import supportImg from '../assets/support.jpg'

/**
 * Product catalogue.
 * Copy is written as general, factual descriptions of insurance product types
 * available in India. No insurer names, premiums, ratings or statistics are stated.
 */
export const categories = [
  {
    slug: 'motor',
    name: 'Motor Insurance',
    short: 'Motor',
    label: 'Car, bike and commercial vehicles',
    icon: Car,
    image: motorImg,
    featured: true,
    summary:
      'Third-party motor insurance is mandatory for every vehicle used on Indian roads. Comprehensive plans add cover for damage to your own vehicle and let you choose add-ons.',
    intro:
      'Compare own-damage and third-party options for private and commercial vehicles, check the add-ons each plan allows, and renew before your policy lapses.',
    points: [
      'Third-party liability cover as required under the Motor Vehicles Act',
      'Own-damage cover for accident, fire and theft under comprehensive plans',
      'Add-ons such as zero depreciation, roadside assistance and engine protection',
      'No Claim Bonus carried forward for every claim-free year',
    ],
    products: [
      {
        slug: 'car-insurance',
        name: 'Car Insurance',
        icon: Car,
        tagline: 'Private car, own-damage and third-party',
        description:
          'Cover for a privately registered car. A comprehensive policy combines third-party liability with own-damage cover for accident, fire, theft and natural calamities.',
        highlights: [
          'Own-damage and third-party liability in a single policy',
          'Cashless repair at the insurer network garages where available',
          'Optional add-ons: zero depreciation, engine protect, return to invoice',
          'Personal accident cover for the owner-driver as required by regulation',
        ],
      },
      {
        slug: 'bike-insurance',
        name: 'Bike Insurance',
        icon: Bike,
        tagline: 'Two-wheeler cover and renewals',
        description:
          'Cover for motorcycles and scooters, including multi-year third-party options that are commonly issued with new two-wheelers.',
        highlights: [
          'Third-party cover for legal compliance on the road',
          'Own-damage cover for accident, fire and theft',
          'Multi-year third-party options for new vehicles',
          'Pillion rider cover available as an add-on with several plans',
        ],
      },
      {
        slug: 'commercial-vehicle',
        name: 'Commercial Vehicle',
        icon: Truck,
        tagline: 'Goods and passenger carrying vehicles',
        description:
          'Cover for vehicles used for business, from a single pickup to a small fleet, including liability towards paid drivers and cleaners.',
        highlights: [
          'Single vehicle and fleet policies',
          'Legal liability cover for paid drivers and employees',
          'Own-damage cover for the vehicle and fitted equipment',
          'Renewal tracking for vehicles with different expiry dates',
        ],
      },
      {
        slug: 'taxi-insurance',
        name: 'Taxi Insurance',
        icon: CarTaxiFront,
        tagline: 'Passenger carrying commercial cars',
        description:
          'Cover for cars registered for commercial passenger use, including liability towards passengers travelling in the vehicle.',
        highlights: [
          'Third-party liability including passenger legal liability',
          'Own-damage cover for commercially registered cars',
          'Driver cover options for owner-driven and employed drivers',
          'Documentation support for permit and fitness requirements',
        ],
      },
      {
        slug: 'truck-insurance',
        name: 'Truck Insurance',
        icon: Truck,
        tagline: 'Goods carriage of all tonnage',
        description:
          'Cover for goods carriage vehicles, where premiums depend on gross vehicle weight, permit type and the routes operated.',
        highlights: [
          'Cover by gross vehicle weight and permit category',
          'Legal liability for driver, cleaner and loading staff',
          'Options for goods in transit covered separately',
          'Fleet level renewal and claim coordination',
        ],
      },
      {
        slug: 'bus-insurance',
        name: 'Bus Insurance',
        icon: Bus,
        tagline: 'School, staff and contract carriage',
        description:
          'Cover for buses and vans used for school transport, staff transport and contract carriage, including liability towards passengers.',
        highlights: [
          'Passenger legal liability based on seating capacity',
          'Own-damage cover for the body and fittings',
          'Cover options for drivers, attendants and conductors',
          'Support with permit-linked documentation at renewal',
        ],
      },
    ],
  },
  {
    slug: 'health',
    name: 'Health Insurance',
    short: 'Health',
    label: 'Individual, family and senior cover',
    icon: HeartPulse,
    image: healthImg,
    featured: true,
    summary:
      'Health plans pay for hospitalisation and related treatment costs. Waiting periods, room rent limits and sub-limits differ by plan, so the fine print matters more than the headline sum insured.',
    intro:
      'Compare sum insured options, waiting periods and network hospitals before you buy, and keep your cover going with timely renewals.',
    points: [
      'In-patient hospitalisation, day care procedures and ICU charges',
      'Pre and post hospitalisation expenses for a defined number of days',
      'Cashless treatment at hospitals in the insurer network',
      'Deduction available on premium paid under Section 80D, subject to prevailing tax law',
    ],
    products: [
      {
        slug: 'health-insurance',
        name: 'Health Insurance',
        icon: HeartPulse,
        tagline: 'Individual hospitalisation cover',
        description:
          'An individual policy with its own sum insured, suitable when you want cover that is not shared with other family members.',
        highlights: [
          'Room, nursing, ICU and surgeon charges during hospitalisation',
          'Day care procedures that do not need a 24 hour stay',
          'Pre and post hospitalisation expenses as defined in the policy',
          'Waiting periods apply to pre-existing conditions and specified ailments',
        ],
      },
      {
        slug: 'family-health',
        name: 'Family Health',
        icon: Users,
        tagline: 'Floater cover for the household',
        description:
          'A single sum insured shared by the members listed on the policy. Usually more economical than separate individual policies for a young family.',
        highlights: [
          'One sum insured shared across listed members',
          'Add a spouse, children or parents as allowed by the plan',
          'Maternity and newborn benefits available on selected plans',
          'Single renewal date for the whole family',
        ],
      },
      {
        slug: 'personal-accident',
        name: 'Personal Accident',
        icon: ShieldPlus,
        tagline: 'Accidental death and disability',
        description:
          'A benefit policy that pays a lump sum on accidental death or permanent disability, and weekly benefits for temporary disability on some plans.',
        highlights: [
          'Lump sum benefit on accidental death',
          'Benefit for permanent total and partial disability',
          'Optional cover for hospital cash and ambulance charges',
          'Cover applies worldwide on most plans, subject to terms',
        ],
      },
      {
        slug: 'senior-citizen',
        name: 'Senior Citizen',
        icon: UserRound,
        tagline: 'Health cover for parents',
        description:
          'Plans designed for older applicants, where entry age, co-payment and pre-policy medical checks are the points to compare carefully.',
        highlights: [
          'Higher entry ages than regular health plans',
          'Co-payment and sub-limits vary widely between plans',
          'Pre-policy medical check-up may be required',
          'Domiciliary treatment covered on selected plans',
        ],
      },
    ],
  },
  {
    slug: 'life',
    name: 'Life Insurance',
    short: 'Life',
    label: 'Term cover and family protection',
    icon: Umbrella,
    image: familyImg,
    featured: true,
    summary:
      'Life cover pays the sum assured to your nominee if something happens to you. Pure term plans give the highest cover for the lowest premium and carry no maturity value.',
    intro:
      'Work out how much cover your family would need, compare claim settlement terms and policy durations, and add riders only where they are useful.',
    points: [
      'Sum assured paid to the nominee on death during the policy term',
      'Level, increasing and return-of-premium structures to compare',
      'Riders for critical illness, accidental death and waiver of premium',
      'Tax treatment of premium and payout as per prevailing income tax law',
    ],
    products: [
      {
        slug: 'term-insurance',
        name: 'Term Insurance',
        icon: Umbrella,
        tagline: 'Pure protection for a fixed term',
        description:
          'The simplest form of life cover. You pay a premium for a chosen term, and your nominee receives the sum assured if the policy is in force at the time of claim.',
        highlights: [
          'High sum assured at a comparatively low premium',
          'Choose the policy term and premium paying term',
          'Payout as lump sum, monthly income or a combination',
          'Disclose medical and lifestyle details honestly to protect the claim',
        ],
      },
      {
        slug: 'women-term',
        name: 'Women Term Plan',
        icon: UserRound,
        tagline: 'Term cover priced for women',
        description:
          'Term plans where premium rates for women are generally lower than those for men of the same age and sum assured, with riders relevant to women applicants.',
        highlights: [
          'Separate premium rates applicable for women',
          'Cover continues through career breaks as long as premiums are paid',
          'Optional critical illness riders, including women-specific conditions',
          'Homemakers are eligible under several plans, subject to underwriting',
        ],
      },
      {
        slug: 'family-protection',
        name: 'Family Protection',
        icon: Baby,
        tagline: 'Cover built around dependants',
        description:
          'A structured approach to life cover for households with a home loan, school-going children or dependent parents, including joint-life options.',
        highlights: [
          'Cover sized against loans and future household expenses',
          'Joint life options for working couples on selected plans',
          'Income payout options to replace monthly earnings',
          'Nominee details and documentation checked at the time of issue',
        ],
      },
    ],
  },
  {
    slug: 'investment',
    name: 'Investment Plans',
    short: 'Investment',
    label: 'Savings, guaranteed and retirement',
    icon: TrendingUp,
    image: advisorImg,
    featured: true,
    summary:
      'Insurance-linked savings plans combine life cover with a savings or market-linked component. Returns, charges and lock-in periods differ sharply, so compare the illustration carefully.',
    intro:
      'Read the benefit illustration, check the lock-in period and understand the charges before committing to a long-term plan.',
    points: [
      'Guaranteed and market-linked structures to compare side by side',
      'Lock-in periods and surrender values set out in the policy document',
      'Life cover continues alongside the savings component',
      'Tax treatment as per prevailing income tax law and policy conditions',
    ],
    products: [
      {
        slug: 'investment-plans',
        name: 'Investment Plans',
        icon: TrendingUp,
        tagline: 'Market-linked savings with cover',
        description:
          'Unit-linked plans invest your premium in funds you select, with life cover running alongside. Values move with the market and are not guaranteed.',
        highlights: [
          'Choice of equity, debt and balanced funds',
          'Switching between funds allowed as per policy terms',
          'Charges disclosed in the benefit illustration',
          'Lock-in period applies before any withdrawal is permitted',
        ],
      },
      {
        slug: 'guaranteed-plans',
        name: 'Guaranteed Plans',
        icon: PiggyBank,
        tagline: 'Defined maturity benefit',
        description:
          'Savings plans where the maturity amount is stated when the policy is issued, suitable for goals with a fixed date and a low appetite for risk.',
        highlights: [
          'Maturity benefit stated at the time of purchase',
          'Premium paying term shorter than the policy term on many plans',
          'Life cover continues through the policy term',
          'Payout as lump sum or regular income, depending on the plan',
        ],
      },
      {
        slug: 'retirement',
        name: 'Retirement Plans',
        icon: Landmark,
        tagline: 'Pension and annuity options',
        description:
          'Plans that build a corpus during your working years and convert it into a regular income after retirement through an annuity.',
        highlights: [
          'Accumulation during working years, income after vesting',
          'Immediate and deferred annuity options',
          'Joint life annuity available so income continues for a spouse',
          'Annuity rate is fixed at the time the annuity is purchased',
        ],
      },
    ],
  },
  {
    slug: 'home',
    name: 'Home Insurance',
    short: 'Home',
    label: 'Structure and contents',
    icon: Home,
    image: homeImg,
    summary:
      'Home insurance covers the building, the things inside it, or both. Cover for owners and tenants is structured differently, so check what you actually need to insure.',
    intro:
      'Insure the structure against fire and natural calamities, add contents cover for valuables and electronics, and keep proof of ownership handy for claims.',
    points: [
      'Structure cover against fire, storm, flood and allied perils',
      'Contents cover for furniture, appliances and electronics',
      'Burglary and theft cover available on most plans',
      'Separate options for owners and tenants',
    ],
    products: [
      {
        slug: 'home-structure',
        name: 'Home Structure',
        icon: Home,
        tagline: 'Building cover for owners',
        description:
          'Cover for the built structure of a house or flat against fire, natural calamities and specified perils, usually on a reconstruction cost basis.',
        highlights: [
          'Fire, lightning, storm, flood and earthquake options',
          'Sum insured based on reconstruction cost, not market price',
          'Long-term policy options for owned homes',
          'Cover for fixtures that form part of the structure',
        ],
      },
      {
        slug: 'home-contents',
        name: 'Home Contents',
        icon: Store,
        tagline: 'Belongings and appliances',
        description:
          'Cover for the items inside your home, including furniture, kitchen appliances, electronics and portable equipment taken out of the house on some plans.',
        highlights: [
          'Furniture, appliances and electronic items',
          'Burglary and theft cover for the insured address',
          'Optional cover for jewellery and valuables, subject to limits',
          'Suitable for tenants as well as owners',
        ],
      },
      {
        slug: 'fire-and-perils',
        name: 'Fire & Allied Perils',
        icon: Flame,
        tagline: 'Standard fire cover',
        description:
          'A standalone fire policy for residential or mixed-use property, covering fire, explosion and listed natural perils.',
        highlights: [
          'Fire, explosion and implosion cover',
          'Listed natural perils including storm and flood',
          'Cover for removal of debris after a loss',
          'Suitable alongside a home loan requirement',
        ],
      },
    ],
  },
  {
    slug: 'travel',
    name: 'Travel Insurance',
    short: 'Travel',
    label: 'International and student travel',
    icon: Plane,
    summary:
      'Travel policies cover medical emergencies abroad along with trip-related problems such as baggage loss and flight delay. Several countries require proof of cover for a visa.',
    intro:
      'Choose cover based on the destination, trip length and the medical limit required, and keep the assistance helpline details with you while travelling.',
    points: [
      'Emergency medical treatment and hospitalisation abroad',
      'Baggage loss, delay and passport loss benefits',
      'Trip cancellation and delay cover as per plan terms',
      'Single trip and multi-trip options for frequent travellers',
    ],
    products: [
      {
        slug: 'international-travel',
        name: 'International Travel',
        icon: Plane,
        tagline: 'Single and multi-trip cover',
        description:
          'Cover for overseas trips, with medical limits set by destination. Schengen and some other visas require a minimum level of medical cover.',
        highlights: [
          'Emergency medical and evacuation cover abroad',
          'Baggage and passport loss benefits',
          'Multi-trip annual options for frequent travellers',
          'Documentation suitable for visa requirements',
        ],
      },
      {
        slug: 'student-travel',
        name: 'Student Travel',
        icon: GraduationCap,
        tagline: 'Cover for students abroad',
        description:
          'Longer duration cover for students studying overseas, including study interruption and sponsor protection benefits on selected plans.',
        highlights: [
          'Medical cover for the duration of the course',
          'Study interruption benefit on selected plans',
          'Compliant with common university insurance requirements',
          'Family visit benefit in case of hospitalisation',
        ],
      },
      {
        slug: 'family-travel',
        name: 'Family Travel',
        icon: Users,
        tagline: 'One policy for the whole trip',
        description:
          'A single travel policy covering family members travelling together, with children included under the same plan.',
        highlights: [
          'All travelling members on one policy',
          'Children covered along with accompanying adults',
          'Baggage and trip delay benefits for the group',
          'Simple extension if the trip is prolonged',
        ],
      },
    ],
  },
  {
    slug: 'pet',
    name: 'Pet Insurance',
    short: 'Pet',
    label: 'Cover for dogs and cats',
    icon: PawPrint,
    summary:
      'Pet insurance covers veterinary treatment for illness and accidental injury. Breed, age and vaccination history determine eligibility and pricing.',
    intro:
      'Check the waiting period, the conditions excluded for your breed and whether out-patient consultations are included before buying.',
    points: [
      'Veterinary treatment for illness and accidental injury',
      'Third-party liability if your pet injures someone',
      'Theft, straying and mortality benefits on selected plans',
      'Waiting periods and breed-specific exclusions apply',
    ],
    products: [
      {
        slug: 'pet-insurance',
        name: 'Pet Insurance',
        icon: PawPrint,
        tagline: 'Dogs and cats',
        description:
          'Cover for veterinary expenses arising from illness or accident, with optional benefits for liability and loss of the pet.',
        highlights: [
          'Treatment for covered illness and accidental injury',
          'Surgery and hospitalisation at registered veterinary clinics',
          'Optional third-party liability cover',
          'Vaccination records required at the time of purchase',
        ],
      },
    ],
  },
  {
    slug: 'business',
    name: 'Business Insurance',
    short: 'Business',
    label: 'Shops, offices and employees',
    icon: Briefcase,
    image: advisorImg,
    summary:
      'Business cover ranges from a single shop package to group health for employees. The right combination depends on the assets, the premises and the size of the team.',
    intro:
      'Start with property and liability cover for the premises, then add employee benefits and specialist covers as the business grows.',
    points: [
      'Property, stock and equipment cover for the premises',
      'Public and product liability options',
      'Group health and group personal accident for employees',
      'Specialist covers for professional services and transit',
    ],
    products: [
      {
        slug: 'shop-and-office',
        name: 'Shop & Office',
        icon: Store,
        tagline: 'Package cover for premises',
        description:
          'A package policy for retail and office premises covering the structure, stock, equipment and basic liability in one document.',
        highlights: [
          'Fire and allied perils for premises and stock',
          'Burglary cover for the insured address',
          'Electronic equipment and breakdown options',
          'Public liability cover for visitors to the premises',
        ],
      },
      {
        slug: 'group-health',
        name: 'Group Health',
        icon: Stethoscope,
        tagline: 'Employee health cover',
        description:
          'Health cover issued to a company for its employees, often with family members included and fewer waiting periods than retail plans.',
        highlights: [
          'Single policy covering all enrolled employees',
          'Family members can be added as per the scheme design',
          'Cashless network access for enrolled members',
          'Mid-term additions and deletions as the team changes',
        ],
      },
      {
        slug: 'professional-indemnity',
        name: 'Professional Indemnity',
        icon: Building2,
        tagline: 'Liability for service firms',
        description:
          'Cover for claims arising from professional advice or services, relevant to consultants, clinics, technology firms and other service providers.',
        highlights: [
          'Defence costs and damages for covered claims',
          'Retroactive date and claims-made basis explained upfront',
          'Limits set per claim and in aggregate',
          'Commonly required in client and tender contracts',
        ],
      },
      {
        slug: 'marine-transit',
        name: 'Marine Transit',
        icon: Ship,
        tagline: 'Goods in transit',
        description:
          'Cover for goods while they are being moved by road, rail, sea or air, issued per consignment or as an open policy for regular movement.',
        highlights: [
          'Single transit and open policy options',
          'Inland and import or export movement',
          'Cover from warehouse to warehouse as per clause selected',
          'Survey and documentation support at the time of claim',
        ],
      },
    ],
  },
  {
    slug: 'other',
    name: 'Other Insurance',
    short: 'Other',
    label: 'Cyber, fire and specialist cover',
    icon: LayoutGrid,
    image: supportImg,
    summary:
      'Specialist policies for risks that do not fit the standard retail categories, from personal cyber fraud to property and equipment cover.',
    intro:
      'Tell us what you need to protect and we will point you to the policy type that handles it, or confirm when no cover is needed.',
    points: [
      'Personal cyber cover for online fraud and identity misuse',
      'Standalone fire and property policies',
      'Equipment and electronics cover for businesses',
      'Guidance on whether a specialist cover is actually required',
    ],
    products: [
      {
        slug: 'cyber-insurance',
        name: 'Cyber Insurance',
        icon: Lock,
        tagline: 'Online fraud and identity misuse',
        description:
          'Personal cyber policies cover financial loss from unauthorised transactions, identity theft and certain online frauds, subject to reporting conditions.',
        highlights: [
          'Unauthorised digital transaction losses',
          'Identity theft resolution expenses',
          'Legal costs for covered incidents',
          'Prompt reporting to bank and police is required',
        ],
      },
      {
        slug: 'fire-insurance',
        name: 'Fire & Property',
        icon: Flame,
        tagline: 'Standalone property cover',
        description:
          'Standard fire and special perils cover for buildings, plant and stock, issued separately from a package policy.',
        highlights: [
          'Fire, explosion and listed natural perils',
          'Sum insured on reinstatement or market value basis',
          'Cover for stock held at declared locations',
          'Suitable where a lender requires property cover',
        ],
      },
      {
        slug: 'wallet-and-device',
        name: 'Wallet & Device',
        icon: Wallet,
        tagline: 'Everyday small-ticket cover',
        description:
          'Small-ticket policies covering card misuse, loss of documents and damage to personal electronic devices.',
        highlights: [
          'Card misuse and wallet loss benefits',
          'Accidental damage cover for devices',
          'Document replacement expenses',
          'Short policy terms with simple documentation',
        ],
      },
    ],
  },
]

export const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]))

export const featuredCategories = categories.filter((c) => c.featured)

export const allProducts = categories.flatMap((c) =>
  c.products.map((p) => ({ ...p, category: c.slug, categoryName: c.name })),
)

export function findProduct(categorySlug, productSlug) {
  const category = categoryBySlug[categorySlug]
  if (!category) return null
  const product = category.products.find((p) => p.slug === productSlug)
  if (!product) return null
  return { category, product }
}
