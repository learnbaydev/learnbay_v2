import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { FoundationDataScienceCourseData } from "../../../Data/FoundationDataScienceCourse";

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
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";
import BatchDetails from "../../../components/CoursePage/BatchDetails/BatchDetails";

function Blockchain() {
  const [popups, setPopups] = useState(false);

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetch("/api/BatchDetails/getBatchDate", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
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
        <title>Data Science Course with Job Assistance - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Unlock the power of data with most comprehensive Data Science Course. Enroll now and become a certified Data Scientist."
        />
        <meta name="keywords" content="Data Science Foundation Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          ibmOnly={true}
          titleCourse="Data Science Foundation Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DS+Foundation+header.webp"
          firstToparaImg="with industry-specific training"
          firstHeading="Data Science and AI Foundation Program"
          firstTopPara="Enhance your earning potential"
          idss="tBKOlgHS-k8"
        />
        <SecondSection
          SecondSectionData={FoundationDataScienceCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={FoundationDataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DS+Foundation+Who+is+this+program+for.webp"
          ThirdSectionData={FoundationDataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={FoundationDataScienceCourseData[0].fourthSection}
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
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+Foundation+Program+Learnbay.pdf"
          syllabus={FoundationDataScienceCourseData[0].syllabus}
          syllabusDesc={FoundationDataScienceCourseData[0].syllabusDesc}
          popupHead={FoundationDataScienceCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Data+Science+Foundation+Scope.webp"
          heading="Data science is the future! "
          para1="Higher Growth: Annual growth rate of 30% in 2023"
          para2="Big Earning Potential: Earn an average annual salary of INR 10 LPA"
          para3="Strong Demand: Booming requirement across various industries and domains"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />

        <FeeSection
          Fee="₹ 79,000 + 18% GST"
          FeeEmi="₹ 7,768/month"
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
          projectData={FoundationDataScienceCourseData[0].project}
          tools="8+ Tools"
          project="4+ Projects"
          dataScience={true}
          titleCourse="Data Science Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
        />
        {/* <BatchDetails CourseFeeHead="Data Science and AI Master Program : Batch Details" batchDetails=""/> */}
        <FAQNew FAQNewData={FoundationDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
