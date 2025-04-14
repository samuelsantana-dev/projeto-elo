import FranchiseSteps from './pages/on'
import Franchisee from './pages/franchisees'
// import FooterSection from './pages/footer'
// import Box1 from './pages/header'
import FAQ from './pages/faq/faq'
import Contact from './pages/contact'
import Photos from './pages/photos'
// import Feedbacks from './pages/feedbacks'


function App() {

  return (
    <>
        {/* <Box1 /> */}
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
