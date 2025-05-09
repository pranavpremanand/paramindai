import { Link, NavLink } from "react-router-dom";
import { companyDetails, logo } from "../../../globals/constants";

function Footer() {
  return (
    <>
      <footer className="site-footer footer-dark">
        {/* FOOTER BLOCKES START */}
        <div className="footer-top">
          <div className="container">
            <div className="row ">
              {/* ABOUT COMPANY */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix p-b15">
                    {/* <NavLink to="/index" className="sx-text-primary"> */}
                    <img src={logo} alt="#" width={160} height={80} />
                    {/* </NavLink> */}
                  </div>
                  <p>
                    Empowering growth through innovation and dedication. At
                    Paramind AI, we provide solutions that fuel success and foster
                    long-term partnerships. Your vision, our expertise.
                  </p>
                  <div className="widget_about-call-section">
                    <div className="sx-f-call-icon">
                      <i className="flaticon-telephone" />
                    </div>
                    <div className="sx-f-call-section">
                      <span>Contact us 24/7</span>
                      <Link to={`tel:${companyDetails.number}`}>
                        {companyDetails.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 col footer-col-3">
                <div className="widget widget_info">
                  <h4 className="sx-f-title">Contact Us</h4>
                  <ul>
                    <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-phone" />
                      </div>
                      <div className="widget-info-detail">
                        <p>{companyDetails.number}</p>
                      </div>
                    </li>
                    <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-email" />
                      </div>
                      <div className="widget-info-detail">
                        <p>{companyDetails.email}</p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="widget-info-icon">
                        <i className="flaticon-maps-and-flags" />
                      </div>
                      <div className="widget-info-detail">
                        <p>{companyDetails.address}</p>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sx-f-bottom-section">
          <div className="sx-f-social">
            <ul>
              <li>
                <a href={companyDetails.facebook}>
                  <i className="flaticon-facebook" />
                </a>
              </li>
              <li>
                <a href={companyDetails.twitter}>
                  <i className="flaticon-twitter" />
                </a>
              </li>
              <li>
                <a href={companyDetails.linkedin}>
                  <i className="flaticon-linkedin" />
                </a>
              </li>
              <li>
                <a href={companyDetails.instagram}>
                  <i className="flaticon-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sx-f-copy">
            © {new Date().getFullYear()} by <NavLink to="/">Paramind AI. </NavLink>{" "}
            All rights reserved.
          </div>
        </div>
        {/* FOOTER COPYRIGHT */}
      </footer>
    </>
  );
}

export default Footer;
