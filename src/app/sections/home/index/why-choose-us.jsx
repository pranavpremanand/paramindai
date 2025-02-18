import ItodoImage from "../../../elements/itodo-img";

function WhyChooseUs() {
  return (
    <>
      <div className="section-full p-b30 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">About Us</h2>
                    <p>
                      At Paramind AI, we are driven by a passion for
                      technology that makes a difference. We specialize in
                      providing innovative solutions that address the real-world
                      needs of businesses. Our team of experts works tirelessly
                      to deliver high-quality services that range from web and
                      app development to game development, machine learning,
                      cloud computing, data science, and cloud migration. With a
                      strong track record of success, we are committed to
                      helping our clients unlock new opportunities and drive
                      growth.
                    </p>
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Solution
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Consultant
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 d-lg-flex d-none col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COUNTER START */}
            {/* <SectionCounter1 /> */}
            {/* COUNTER  END */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
