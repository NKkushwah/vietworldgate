import AppRoutes from "./routes/AppRoutes";
import { FaChevronUp } from "react-icons/fa";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* ✅ AUTO SCROLL TOP ON PAGE CHANGE */}
      <ScrollToTop />

      {/* ✅ ROUTES */}
      <AppRoutes />

      {/* ✅ SCROLL TO TOP BUTTON */}
      <a
        href="#"
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </a>
    </>
  );
}

export default App;