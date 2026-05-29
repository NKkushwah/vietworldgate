import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";
import CompanyProfile from "../pages/CompanyProfile";
import MissionVision from "../pages/MissionVision";
import ValuesGrid from "../pages/ValuesGrid";
import OurTeam from "../pages/OurTeam";
import Feedback from "../pages/Feedback"
import VisaAssistance from "../pages/VisaAssistance";
import CourseAdvice from "../pages/CourseAdvice";
import ShortlistUniversities from "../pages/ShortlistUniversities";
import PreDeparture from "../pages/PreDeparture";
import AustraliaDestination from "../pages/AustraliaDestination";
import CanadaDestination from "../pages/CanadaDestination";
import GermanyDestination from "../pages/GermanyDestination";
import DubaiDestination from "../pages/DubaiDestination";
import UKDestination from "../pages/UKDestination";
import NZDestination from "../pages/NZDestination";
import JapanDestination from "../pages/JapanDestination";
import ItalyDestination from "../pages/ItalyDestination";
import Scholarships from "../pages/Scholarships";
import ContactDelhi from "../pages/branches/ContactDelhi";
import ContactNoida from "../pages/branches/ContactNoida";
import ContactGhaziabad from "../pages/branches/ContactGhaziabad";
import ContactLondon from "../pages/branches/ContactLondon";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
       
        <Route path = "/ContactLondon" element={<ContactLondon />} />
         <Route path = "/ContactGhaziabad" element={<ContactGhaziabad />} />
         <Route path = "/ContactNoida" element={<ContactNoida />} />
         <Route path = "/ContactDelhi" element={<ContactDelhi />} />
         <Route path = "/Scholarships" element={<Scholarships  />} />
        <Route path = "/ItalyDestination" element={<ItalyDestination  />} />
          <Route path = "/JapanDestination" element={<JapanDestination  />} />
          <Route path = "/NZDestination" element={<NZDestination  />} />
          <Route path = "/UKDestination" element={<UKDestination />} />
        <Route path = "/DubaiDestination" element={<DubaiDestination />} />
        <Route path = "/GermanyDestination" element={<GermanyDestination />} />
        <Route path = "/CanadaDestination" element={<CanadaDestination />} />
        <Route path = "/AustraliaDestination" element={<AustraliaDestination />} />
          <Route path="/PreDeparture" element={<PreDeparture />} />
         <Route path="/ShortlistUniversities" element={<ShortlistUniversities />} />
         <Route path="/courseAdvice" element={<CourseAdvice />} />
        <Route path="/visaAssistance" element={<VisaAssistance />} />
        <Route path = "/ourteam" element = {<OurTeam />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/MissionVision" element={<MissionVision />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/companyprofile" element={<CompanyProfile/>} />
        <Route path="/ValuesGrid" element={<ValuesGrid/>} />
        <Route path="/feedback" element={<Feedback/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;