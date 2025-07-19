import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Schedule from "./pages/Schedule/Schedule";
import Nutrition from "./pages/Nutrition/Nutrition";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
