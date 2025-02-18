import SectionAboutCompany from "../../home/index/section-about-company";
import SectionOurInfo1 from "../../company/why-choose-us/section-our-info1";

function SectionAboutCompany4() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 bg-white sx-about-bx3-outer">
                <div className="container">
                    <div className="section-content">
                        <SectionAboutCompany />
                        {/* Info START */}
                        <SectionOurInfo1 />
                        {/* Info  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany4;