import { companyDetails, publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany() {
  return (
    <>
      <div className="section-full m-t110 p-b50 bg-white sx-about-bx3-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx3-content-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-media">
                    <div className="sx-dot-bx1">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-dot-bx2">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-ab3-img-outer">
                      <div className="sx-ab3-media">
                        <img
                          src={publicUrlFor("images/about/p2.webp")}
                          style={{ aspectRatio: "1", objectFit: "cover" }}
                          className="w-100 h-100 rounded"
                          alt="media"
                        />
                      </div>
                    </div>
                    <div className="sx-ab-circle-box">
                      <div className="sx-ab-circle-box-content">
                        <span className="sx-exp">2+ Years Experience</span>
                        <div className="sx-exp-title-outer">
                          <span className="sx-exp-title-1">It</span>
                          <span className="sx-exp-title-2">Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-content">
                    <h2 className="sx-title">Welcome to Paramind AI</h2>
                    <p>
                      At Paramind AI, we’re not just another tech
                      company—we’re your strategic partner in navigating the
                      ever-changing digital landscape. Our mission is to help
                      businesses unlock their potential by providing innovative,
                      high-quality technology solutions that are tailored to
                      meet their specific needs. With a team of skilled experts
                      and a commitment to delivering exceptional results, we’ve
                      built a reputation for creating powerful, reliable
                      solutions that foster growth and success for businesses of
                      all sizes. <br />
                      We’ve always believed that technology should empower
                      businesses, not complicate them. That’s why we take the
                      time to truly understand your goals and challenges.
                      Whether you need a custom web solution, a mobile app, or
                      advanced data analytics, we ensure that everything we
                      build is designed to move your business forward.
                    </p>
                    <div className="row sx-about-icon-bx3-column">
                      <div className="col-lg-5 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-incoming-call" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Phone
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.number}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-email-1" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Mail
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SectionCounter1 />
            <div className="hilite-title text-left p-l50 text-uppercase">
              <strong>About Us</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany;
