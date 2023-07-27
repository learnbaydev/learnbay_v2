import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { AIMLDataScienceCourseData } from "../../../Data/AIMLDataScienceCourse";

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
          Artificial Intelligence and Machine Learning Course - Learnbay
        </title>
        <meta name="robots" content="index, follow" />

        <meta
          name="description"
          content="Enroll in Learnbay&rsquo;s Comprehensive Artificial Intelligence and Machine Learning Course to improve your AI and Machine Learning skills."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence and Machine Learning Program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-certification-course"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AIML-Header.png"
          firstToparaImg="AI & ML Program for tech professionals"
          firstHeading="Transform your future with our certified"
          firstTopPara="Expand beyond technology"
        />
        <SecondSection
          SecondSectionData={AIMLDataScienceCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIMLDataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AIML-Who.png"
          ThirdSectionData={AIMLDataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={AIMLDataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        />
        <FifthSection />
        <SixthSectionCTA dataScienceCounselling={true} />
        <SyllabusNew
          dataScienceCounselling={true}
          serviceBasic={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          syllabus={AIMLDataScienceCourseData[0].syllabus}
          syllabusDesc={AIMLDataScienceCourseData[0].syllabusDesc}
          popupHead={AIMLDataScienceCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AIML-Scope.png"
          heading="Dive into the advanced tech industry & unlock limitless career potential "
          para1="Higher Growth: Compound annual growth rate (CAGR) of 8.2% in 2023"
          para2="Big Earning Potential: Earn an average salary of INR 20 LPA"
          para3="Strong Demand: Booming requirement across various industries and domains"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate
          threeCertificate={true}
          data={AIMLDataScienceCourseData[0].Certificate}
        />
        <FeeSection
          AIMLCertificate={true}
          Fee="₹ 1,10,000 + 18% GST"
          FeeEmi="₹ 10,817/month"
          FeeHeading="Program Fee & Financing"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          dataScienceCounselling={true}
        />
        <DomainSection
          dataScience={true}
          domainSectionData={AIMLDataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={AIMLDataScienceCourseData[0].project}
          tools="16+ Tools"
          project="12+ Projects"
          titleCourse="Data Science Project Brochure"
          dataScience={true}
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
        />
        <BatchDetails
          CourseFeeHead="Artificial Intelligence & Machine Learning Program:Batch Details"
          BAFamily
        />
        <FAQNew FAQNewData={AIMLDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <OfferPopup />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
