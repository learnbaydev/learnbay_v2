import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { FSSPDataScienceCourseData } from "../../../Data/FullStackSoftwareProgram";

const FirstSection = dynamic(() =>
  import("../../../components/CoursePage/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/CoursePage/SecondSection/SecondSection")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Global/SeventhSection/SeventhSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/HomePage/Testimonial/Testimonial")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const Switch = dynamic(() =>
  import("../../../components/HomePage/switch/switch")
);
const GrowthStats = dynamic(() =>
  import("../../../components/CoursePage/GrowthStat/GrowthStats")
);
const ToolsCovered = dynamic(() =>
  import("../../../components/CoursePage/ToolsCovered/ToolsCovered")
);
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const FourthSection = dynamic(() =>
  import("../../../components/CoursePage/FourthSection/FourthSection")
);
const FifthSection = dynamic(() =>
  import("../../../components/CoursePage/FifthSection/FifthSection")
);
const SixthSectionCTA = dynamic(() =>
  import("../../../components/CoursePage/SixthSectionCTA/Counselling")
);
const Project = dynamic(() =>
  import("../../../components/CoursePage/Project/Project")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/CoursePage/Syllabus/Syllabus")
);
const DomainSection = dynamic(() =>
  import("../../../components/CoursePage//DomainSection/DomainSection")
);
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";

function Blockchain() {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <Head>
        <title>Master Program in Software Development - Learnbay</title>
        <meta
          name="description"
          content="Learnbay's Full Stack Software Development Course will help you become a skilled software developer. Gain practical experience and master key coding skills."
        />
        <meta
          name="keywords"
          content="Software Development Master Program with Domain Specialization"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/software-development-program-with-specialization-data-science-and-ai"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          softwareBtnHide={true}
          FirstTyped="Microsoft & IBM Certificate"
          SecondTyped="Domain Specialized Program"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Software Development Master Program with Domain Specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SW-Dev-Master-Header.png"
          firstToparaImg="with Domain Specialization"
          firstHeading="Software Development Master Program"
          firstTopPara="Get ready to level up your coding expertise"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={FSSPDataScienceCourseData[0].secondSection}
        />
        <Testimonial
          Testimonial={FSSPDataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SW+Dev+Masters+-+Who+is+this+program+for.png"
          ThirdSectionData={FSSPDataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={FSSPDataScienceCourseData[0].fourthSection}
          redirectDS={true}
        />
        <FifthSection />
        <SixthSectionCTA />
        <SyllabusNew
          software={true}
          dataScienceCounselling={true}
          dataScience={true}
          advSyllabus={FSSPDataScienceCourseData[0].advSyllabus}
          titleCourse="Software Development Master Program with Domain Specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          syllabus={FSSPDataScienceCourseData[0].syllabus}
          syllabusDesc={FSSPDataScienceCourseData[0].syllabusDesc}
          popupHead={FSSPDataScienceCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/SW+Dev+Masters+Scope+Image-min.png"
          heading="Embrace the future of technology & unlock endless career opportunities"
          para1="Higher Growth: Compound annual growth rate of CAGR of 11.9% in 2023"
          para2="Maximize Cloud Opportunities: Unleash your potential & earn 8 LPA"
          para3="Strong Demand: Growing need for tech wizards across various industries"
        />

        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-SDE.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-SDE-mobile.png"
        />
        <Certificate
          twoCertificate={true}
          data={FSSPDataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 1,10,000+ 18% GST"
          FeeEmi="₹ 10,817/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />
        <DomainSection
          dataScience={true}
          domainSectionData={FSSPDataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={FSSPDataScienceCourseData[0].project}
          tools="16+ Tools"
          project="12+ Case Studies"
          SoftwareText={true}
          dataScience={true}
          titleCourse="Full Stack Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
        />
        <FAQNew FAQNewData={FSSPDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <OfferPopup />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;