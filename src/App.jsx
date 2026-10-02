import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

import Home from './pages/Home'
import InsuranceIndex from './pages/InsuranceIndex'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import QuotePage from './pages/QuotePage'
import ClaimsPage from './pages/ClaimsPage'
import RenewalPage from './pages/RenewalPage'
import SupportPage from './pages/SupportPage'
import FaqPage from './pages/FaqPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CareersPage from './pages/CareersPage'
import PartnersPage from './pages/PartnersPage'
import LoginPage from './pages/LoginPage'
import HowItWorksPage from './pages/HowItWorksPage'
import LegalPage from './pages/LegalPage'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<InsuranceIndex />} />
          <Route path="/insurance/:categorySlug" element={<CategoryPage />} />
          <Route path="/insurance/:categorySlug/:productSlug" element={<ProductPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/claims" element={<ClaimsPage />} />
          <Route path="/renewal" element={<RenewalPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
