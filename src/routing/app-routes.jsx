import React from "react";
import { Route, Routes } from "react-router-dom";

const AboutUsPage = React.lazy(() => import("../app/components/about-us"));
const ServicesPage = React.lazy(() => import("../app/components/services/services"));
const ServicesDetailPage = React.lazy(() =>
  import("../app/components/services/detail")
);
const ContactUsPage = React.lazy(() =>
  import("../app/components/contactus/contact-us")
);
const Home = React.lazy(() => import("../app/components/home/Home"));
const Thankyou = React.lazy(() => import("../app/components/Thankyou"));

function AppRoutes({ setLoading }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:service" element={<ServicesDetailPage />} />
        <Route
          path="/contact-us"
          element={<ContactUsPage setLoading={setLoading} />}
        />
        <Route path="/thank-you" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
