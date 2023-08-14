import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { HRCourseData } from "../../../Data/HrAnalyticsData";

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

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetch("/api/BatchDetails/getBatchDate", {
        method: "POST",
        body: JSON.stringify("Business Analytics Family"),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 200) {
        const { batchDate } = await data.json();
        setBatchDateData(batchDate);
      }
    };
    fetchBatch();
    
  }, []);

  return (
    <>
      <Head>
        <title>HR Analytics Course with Job Assistance - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learn HR Analytics from industry experts at Learnbay. Enhance your skills with our comprehensive HR Analytics Course. Enroll now for a brighter future!"
        />
        <meta name="keywords" content="HR Analytics Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/hr-analytics" />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="HR Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/HR+Analytics+Certification+Program.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/hr-analytics-header-image.webp"
          firstToparaImg="with our HR Analytics Program"
          firstHeading="Become a data-driven professional"
          firstTopPara="Experience the future of analytics"
          idss="kh54EexuNJo"
        />
        <SecondSection SecondSectionData={HRCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={HRCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HR++Who+is+this+program+for+_+image.webp"
          ThirdSectionData={HRCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={HRCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        />
        <FifthSection />
        <SixthSectionCTA dataScienceCounselling={true} />
        <SyllabusNew
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="HR Analytics Program "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/HR+Analytics+Certification+Program.pdf"
          syllabus={HRCourseData[0].syllabus}
          syllabusDesc={HRCourseData[0].syllabusDesc}
          popupHead={HRCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/HR+Analytics+Scope.webp"
          heading="Join the billion-dollar HR Analytics market and secure your future!"
          para1="Get an average salary of ₹19.7 lakhs"
          para2="HR Analytics market is expected to reach USD 9 billion by 2024"
          para3="Growing demand for data-driven HR decision-making"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA+Family+Tools+Covered.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Family-Tools-Covered-mobile.png"
        />
        <Certificate twoCertificate={true} data={HRCourseData[0].Certificate} />
        <FeeSection
          Fee="₹ 89,000 + 18% GST"
          FeeEmi="₹ 8,752/month"
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
          projectData={HRCourseData[0].project}
          tools="16+ Tools"
          project="12+ Projects"
          dataScience={true}
          titleCourse="HR Analytics Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Projects.pdf"
        />
        {/* <BatchDetails
          BAFamily={true}
          CourseFeeHead="Hr Analytics : Batch Details"
          batchDetails=""
        /> */}
        <FAQNew FAQNewData={HRCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <OfferPopup />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
