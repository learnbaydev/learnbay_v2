import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { SDCloudCourseData } from "../../../Data/SDCloudCoumputingData";

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
import BatchDetails from "../../../components/CoursePage/BatchDetails/BatchDetails";

function Blockchain() {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <Head>
        <title>
          Software Development Course in Cloud and DevOps - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our comprehensive Software Development Program with a specialization in Cloud Computing and DevOps. Gain hands-on experience in Cloud and DevOps."
        />
        <meta
          name="keywords"
          content="Software Development Program with Specialization in cloud computing & devops"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/software-development-program-with-specialization-in-cloud-computing-&-devops"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          softwareBtnHide={true}
          FirstTyped="Microsoft & IBM Certificate"
          SecondTyped="Expert-Led Advanced Program"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Software Development Program with Specialization in Cloud and Devops"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Cloud+and+DevOps.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Cloud-%26-DevOps-Header.png"
          firstToparaImg="with Specialization in Cloud and Devops"
          firstHeading="Software Development Program"
          firstTopPara="Build the future cloud & transform your tech skills"
          idss="bfl64ANfSV0"
        />
        <SecondSection SecondSectionData={SDCloudCourseData[0].secondSection} />
        <Testimonial
          FSDTestimonial={true}
          Testimonial={SDCloudCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Cloud+%26+DevOps+-+Who+is+this+program+for.png"
          ThirdSectionData={SDCloudCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={SDCloudCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Full Stack Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report+(1).pdf"
        />
        <FifthSection />
        <SixthSectionCTA dataScienceCounselling={true} />
        <SyllabusNew
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Software Development Master Program with Domain Specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Cloud+and+DevOps.pdf"
          syllabus={SDCloudCourseData[0].syllabus}
          syllabusDesc={SDCloudCourseData[0].syllabusDesc}
          popupHead={SDCloudCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Cloud+%26+DevOps+Scope+Image.png"
          heading="Seeking lucrative careers opportunities? Step into the cloud industry"
          para1="Higher Growth: Compound annual growth rate of CAGR of 20% by 2028"
          para2="Big Earning Potential: Unlock your potential in the cloud industry & earn 8 LPA"
          para3="Strong Demand: Growing need for tech wizards across various industries"
        />

        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-SDE.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-SDE-mobile.png"
        />
        <Certificate
          twoCertificate={true}
          data={SDCloudCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 95,000+ 18% GST"
          FeeEmi="₹ 9,342/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />

        <Project
          projectData={SDCloudCourseData[0].project}
          SoftwareText={true}
          tools="16+ Tools"
          project="12+ Case Studies"
          dataScience={true}
          titleCourse="Full Stack Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
        />
        <FAQNew FAQNewData={SDCloudCourseData[0].faq} />
        <SeventhSection />
        <Footer />

        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
