import web from "../../../../assets/images/landingaboutweb.webp";
import app from "../../../../assets/images/landingaboutapp.webp";
import ItodoImage from "../../../elements/itodo-img";

function AboutSectionLandingPage({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");
  return (
    <>
      <div id="about" className="p-t110 p-b10 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">
                      {isWebDevelopment
                        ? "Your Trusted Partner for Outstanding Web Solutions"
                        : "Your Expert Partner for Cutting-Edge App Development"}
                    </h2>
                    <p>
                      {isWebDevelopment
                        ? "Passionate about clean, modern, and functional design, I specialize in creating custom websites that reflect your brand’s identity and vision. Whether you're a startup or an established company, I turn your ideas into reality with unique, user-centric solutions."
                        : "With deep expertise in crafting custom mobile and web applications, I help businesses bring their innovative concepts to life through high-performance, user-friendly digital solutions. From startups to well-established enterprises, I develop scalable and reliable apps that make your vision a reality."}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <img
                          loading="lazy"
                          src={isWebDevelopment ? web : app}
                          alt="our solution"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSectionLandingPage;
