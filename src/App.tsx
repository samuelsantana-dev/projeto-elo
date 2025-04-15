import FranchiseSteps from './pages/on'
import Franchisee from './pages/franchisees/franchisees'
// import FooterSection from './pages/footer'
import BrotegePiso from './pages/header/header'
import FAQ from './pages/faq/faq'
import Contact from './pages/contact/contact'
import Photos from './pages/photos/photos'
// import Feedbacks from './pages/feedbacks'


function App() {

  return (
    <>
        <BrotegePiso />
        {/* <Feedbacks /> */}
        <Franchisee />
        <Photos />
        <FAQ />
        <FranchiseSteps />
        <Contact />
        {/* <FooterSection /> */}
    </>
  )
}

export default App
