import SectionCounter1 from "../index/section-counter1";
import SectionAboutCompany from "./section-about-company";

function SectionAboutCompany2() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 bg-white sx-about-bx3-outer">
                <div className="container">
                    <div className="section-content">
                        <SectionAboutCompany />
                        {/* COUNTER START */}
                        <SectionCounter1 />
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany2;