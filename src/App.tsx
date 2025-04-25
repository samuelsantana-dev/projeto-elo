import Franchisee from './pages/franchisees/franchisees';
import BrotegePiso from './pages/header/header';
import FAQ from './pages/faq/faq';
import Contact from './pages/contact/contact';
import FranchiseSteps from './pages/franchiseStepGuide/franchiseStepGuide';
import Photos from './pages/photos/photos';
import { On } from './pages/on/on';
import TecnologiaExclusiva from './pages/tecnologiaExclusiva/tecnologiaExclusiva';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <BrotegePiso />
      <On />
      <FranchiseSteps />
      <Franchisee />
      <TecnologiaExclusiva />
      <Photos />
      <FAQ />
      <Contact />
    </>
  );
}

export default App;