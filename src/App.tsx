import Franchisee from './pages/franchisees/franchisees'
import FooterSection from './pages/footer/footer'
import BrotegePiso from './pages/header/header'
import FAQ from './pages/faq/faq'
import Contact from './pages/contact/contact'
import FranchiseSteps from './pages/franchiseStepGuide/franchiseStepGuide'
import Photos from './pages/photos/photos'
import { On } from './pages/on/on'


function App() {

  return (
    <>
        <BrotegePiso />
        <On />
        <FranchiseSteps />
        <Franchisee />
        <Photos />
        <FAQ />
        <Contact />
        <FooterSection />
    </>
  )
}

export default App
