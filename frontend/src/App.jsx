import AppRoutes from "./routes/AppRoutes";
import { 
  FaRegEnvelopeOpen, 
  FaArrowRight, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaChevronUp,
  FaRegEnvelope
} from 'react-icons/fa';
import "./App.css";

function App() {
   const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <>
           <AppRoutes />
    
            <a href="#top" className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <FaChevronUp />
            </a>
        
  </>
}

export default App;