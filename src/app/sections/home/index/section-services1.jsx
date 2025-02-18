import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { allServices } from "../../../../globals/constants";

function SectionServices1() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <>
      <div className="section-full p-t50 p-b80 m-b70 sx-our-services-outer sx-bg-light">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-s-title">Our Services</div>
            <div className="sx-head-l-title">
              <h2 className="sx-title">What We Offer</h2>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-our-services-bx">
              <div className="row">
                {allServices.slice(0, 3).map((obj, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-service-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-service-bx-icon scale-in-center">
                          <span className="sx-text-primary">
                            {obj.image}
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4 className="sx-tilte">{obj.title}</h4>
                          <p>{obj.shortDesc}</p>
                          <div className="sx-center-btn">
                            <Link
                              onClick={() =>
                                handleSelectServiceToShowDetail(obj)
                              }
                              className="site-button-circle"
                            >
                              <i className="fa fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4"
        lockBackgroundScroll
      >
        <div className="mb-3 d-flex align-items-center justify-content-end">
          <Link onClick={() => setIsOpen(false)} className="fs-1">
            <IoClose />
          </Link>
        </div>
        <div className="container p-t40 p-b40">
          <div className="section-head">
            <div className="sx-head-l-title">
              <h1 className="sx-title">{selectedService.heading}</h1>
            </div>
            {/* <p className="mt-3">
              {selectedService.shortDesc} <br />
              {selectedService.description}
            </p> */}
            <div className="html-content" dangerouslySetInnerHTML={{ __html: selectedService.html }}></div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default SectionServices1;
