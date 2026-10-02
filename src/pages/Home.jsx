import { Hero } from '../components/home/Hero'
import { CategoryGrid } from '../components/home/CategoryGrid'
import { TrustBand } from '../components/home/TrustBand'
import { ProductExplorer } from '../components/home/ProductExplorer'
import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { HowItWorks } from '../components/home/HowItWorks'
import { Partners } from '../components/home/Partners'
import { DigitalExperience } from '../components/home/DigitalExperience'
import { SupportSection } from '../components/home/SupportSection'
import { FaqSection } from '../components/home/FaqSection'
import { FinalCta } from '../components/home/FinalCta'
import { usePageTitle } from '../lib/usePageTitle'

export default function Home() {
  usePageTitle(
    'LUNA Insurance | Compare motor, health, life and investment cover',
    'Compare insurance plans across motor, health, life, investment, travel, home and business categories. Get a quote online and speak to an advisor before you buy.',
  )

  return (
    <>
      <Hero />
      <CategoryGrid />
      <TrustBand />
      <ProductExplorer />
      <WhyChooseUs />
      <HowItWorks />
      <Partners />
      <DigitalExperience />
      <SupportSection />
      <FaqSection />
      <FinalCta />
    </>
  )
}
