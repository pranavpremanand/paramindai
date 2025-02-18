import SectionTestimonials3 from "../index3/section-testimonials3";

function SectionCaseStudy1() {
  return (
    <>
      <div
        className="section-full p-t80 p-b80 sx-bg-light sx-case-study-outer wow fadeInDown"
        data-wow-duration="1000ms"
      >
        <div className="container">
          {/*Large Title*/}

          <div className="section-content">
            <SectionTestimonials3 />
            {/* <SectionTestimonials1 /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionCaseStudy1;
