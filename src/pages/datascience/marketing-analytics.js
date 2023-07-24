import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { MACourseData } from "../../../Data/MarketingAnalyticsData";

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
        <title>Marketing Analytics Certification Course - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Master marketing analytics with Learnbay’s Marketing Analytics Course. Learn data-driven insights and boost your marketing strategies. Sign up today!"
        />
        <meta name="keywords" content="Marketing Analytics Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/marketing-analytics"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Marketing Analytics Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Marketing+Analytics+Certification+Program.pdf"
          idss="W-WSqLl8_5o"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/marketing-header-image+.webp"
          firstToparaImg="Marketing Analytics Program"
          firstHeading="Elevate your career with certification in"
          firstTopPara="Experience the future of analytics"
        />
        <SecondSection SecondSectionData={MACourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={MACourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/marketing+_+Who-is-this-program-for+_+image.webp"
          ThirdSectionData={MACourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={MACourseData[0].fourthSection}
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
          titleCourse="Marketing Analytics Program "
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Marketing+Analytics+Certification+Program.pdf"
          syllabus={MACourseData[0].syllabus}
          syllabusDesc={MACourseData[0].syllabusDesc}
          popupHead={MACourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Marketing+Analytics+Scope.webp"
          heading="The future is bright in Marketing Analytics - are you ready?"
          para1="High earning potential: Earn an average annual salary of 10 LPA"
          para2="Rapid industry growth: 93.8% annually (2020-2027)"
          para3="Abundant career opportunities in Marketing Analytics"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA+Family+Tools+Covered.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Family-Tools-Covered-mobile.png"
        />
        <Certificate twoCertificate={true} data={MACourseData[0].Certificate} />
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
          projectData={MACourseData[0].project}
          tools="16+ Tools"
          project="12+ Projects"
          dataScience={true}
          titleCourse="Marketing Analytics Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Projects.pdf"
        />
        <BatchDetails
          BAFamily={true}
          CourseFeeHead="Data Science and AI Foundation Program : Batch Details"
        />
        <FAQNew FAQNewData={MACourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <OfferPopup />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
