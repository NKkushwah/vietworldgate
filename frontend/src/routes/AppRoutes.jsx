import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import CompanyProfile from "../pages/CompanyProfile";
import MissionVision from "../pages/MissionVision";
import ValuesGrid from "../pages/ValuesGrid";
import OurTeam from "../pages/OurTeam";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path = "ourteam" element = {<OurTeam />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/MissionVision" element={<MissionVision />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/companyprofile" element={<CompanyProfile/>} />
        <Route path="/ValuesGrid" element={<ValuesGrid/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;