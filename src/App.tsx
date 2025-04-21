import Franchisee from './pages/franchisees/franchisees'
import FooterSection from './pages/footer/footer'
import BrotegePiso from './pages/header/header'
import FAQ from './pages/faq/faq'
import Contact from './pages/contact/contact'
import Photos from './pages/photos/photos'
import { On } from './pages/on/on'


function App() {

  return (
    <>

        <BrotegePiso />
        <On />
        <Franchisee />
        <Photos />
        <FAQ />
        <Contact />
        <FooterSection />
    </>
  )
}

export default App
