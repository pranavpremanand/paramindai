import Banner from "../../sections/common/banner";
import Services from "../../sections/home/index/section-services";
import { bannerData } from "../../../globals/banner";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";
import SectionAboutCompany from "../../sections/home/index/section-about-company";
import JoinHappyCustomers from "../../sections/common/JoinHappyCustomers";

function ServicesPage() {
  useEffect(() => {
    loadScript("js/custom.js");
  });

  return (
    <>
      <Banner _data={bannerData.services} />
      <Services />
      <SectionAboutCompany />
      <JoinHappyCustomers />
    </>
  );
}

export default ServicesPage;
