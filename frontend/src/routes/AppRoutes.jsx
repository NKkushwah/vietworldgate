import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ContactUs from "../pages/ContactUs";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;