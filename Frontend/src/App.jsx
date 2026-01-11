import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { Navbar5 } from './components/ui/navbar-5';
import GetInTouch from './pages/Getintouch';
import ContactUs from './pages/ContactUs';

function App() {
  return (
      <>
      <Navbar5/>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/getintouch" element={<GetInTouch />} />
        </Routes>
      </div>
      </>
  
  );
}

export default App;
