import { testimonials } from "../../../../globals/constants";

function SectionTestimonials1() {
  return (
    <>
      <div className="section-full  p-t10 p-b10 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            {/*testimonial section */}

            <div className="sx-testimonial-bx-2  m-b30">
              {/* TITLE START */}
              <div className="section-head center">
                <div className="sx-head-s-title">Our Testimonials</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title">What Clients Say?</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="owl-carousel testimonial-section-2 owl-btn-vertical-center">
                {testimonials.map((obj, i) => (
                  <div key={i} className="item">
                    <div className="testimonial-1 hover-animation-1 sx-bg-white">
                      <div className="testimonial-text">
                        <p>{obj.review}</p>
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-user-info">
                          <h4 className="testimonial-name">{obj.name}</h4>
                          <span className="testimonial-position">
                            {obj.designation}
                          </span>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-quote sx-text-primary">
                          <i className="flaticon-quote" />
                        </div>
                        <ul className="sx-rating-st1">
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials1;
