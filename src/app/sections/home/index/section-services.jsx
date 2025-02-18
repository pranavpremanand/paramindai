import { Link, NavLink } from "react-router-dom";
import { allServices, publicUrlFor } from "../../../../globals/constants";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <>
      <div
        className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-cover"
        style={{
          backgroundImage: `url(${publicUrlFor("images/background/bg-1.jpg")})`,
        }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center">
            <div className="sx-head-l-title">
              <h2 className="sx-title">
                Ready to Begin Your Digital Transformation?
              </h2>
              <p className="mt-3">
                Let’s build something extraordinary together. Contact Paramind AI to
                explore how our custom software, AI, and digital solutions can
                elevate your business. From concept to execution, we’re here to
                turn your vision into reality.
              </p>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div className="sx-icon-bx-wrap">
              <div className="row">
                {allServices.map((obj, i) => (
                  <div
                    key={obj.heading}
                    className="col-lg-4 col-md-6 wow fadeInDown"
                    data-wow-duration="1000ms"
                  >
                    <div className="sx-icon-bx-1">
                      <div className="sx-icon-box-wraper">
                        <div className="sx-icon-bx-icon ">
                          <span className="sx-text-primary">{obj.image}</span>
                        </div>
                        <div className="icon-content">
                          <NavLink to={`/services/${obj.title}`}>
                            <h4 className="sx-tilte">{obj.title}</h4>
                          </NavLink>
                          <p>{obj.shortDesc}</p>
                        </div>
                        <div className="sx-center-btn d-flex justify-content-center mt-3">
                          <Link
                            onClick={() => handleSelectServiceToShowDetail(obj)}
                            className="site-button-circle"
                          >
                            <i className="fa fa-long-arrow-right" />
                          </Link>
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
            <p className="mt-3">
              {selectedService.shortDesc} <br />
              {selectedService.description}
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Services;
