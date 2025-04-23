import Franchisee from './pages/franchisees/franchisees'
import FooterSection from './pages/footer/footer'
import BrotegePiso from './pages/header/header'
import FAQ from './pages/faq/faq'
import Contact from './pages/contact/contact'
import FranchiseSteps from './pages/franchiseStepGuide/franchiseStepGuide'
import Photos from './pages/photos/photos'
import { On } from './pages/on/on'
import TecnologiaExclusiva from './pages/tecnologiaExclusiva/tecnologiaExclusiva'


function App() {

  return (
    <>
        <BrotegePiso />
        <On />
        <FranchiseSteps />
        <Franchisee />
        <TecnologiaExclusiva />
        <Photos />
        <FAQ />
        <Contact />
        <FooterSection />
    </>
  )
}

export default App
