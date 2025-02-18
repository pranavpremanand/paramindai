import React, { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import JoinHappyCustomers from "../../sections/common/JoinHappyCustomers";
import SectionAboutCompany from "../../sections/home/index/section-about-company";
import ContactForm from "../../sections/common/ContactForm";

const SectionSlider1 = React.lazy(() =>
  import("../../sections/home/index/section-slider1")
);
const SectionServices1 = React.lazy(() =>
  import("../../sections/home/index/section-services1")
);
const WhyChooseUs = React.lazy(() =>
  import("../../sections/home/index/why-choose-us")
);

const SectionCaseStudy1 = React.lazy(() =>
  import("../../sections/home/index/section-case-study1")
);

function Home() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <SectionSlider1 />
      <SectionServices1 />
      <WhyChooseUs />
      <SectionAboutCompany />
      <SectionCaseStudy1 />
      <JoinHappyCustomers />
      <ContactForm/>
    </>
  );
}

export default Home;
