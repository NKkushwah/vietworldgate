import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import CompanyProfile from "../pages/CompanyProfile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/companyprofile" element={<CompanyProfile/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;