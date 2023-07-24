import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { AImastersDataScienceCourseData } from "../../../Data/AIMasters";

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
        <title>
          Master Program in Data Science and Artificial Intelligence - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Become a Master in Data Science with our comprehensive program. Gain in-demand skills and unlock rewarding career opportunities. Enroll Now."
        />
        <meta name="keywords" content="Data Science and AI Master Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-ai-masters-program"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Data Science and AI Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          idss="Uvd6yDvzj1I"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DSAI-Masters-Header.png"
          // firstToparaImg="Data Science and AI Master Program"
          firstToparaImg="Data Science and AI Master Program"
          firstHeading="Discover new horizons with"
          // firstHeading="Master Program in Data Science and Artificial Intelligence"
          firstTopPara="Become a master without master’s degree"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Master's+Program+%5BWith+Unlimited+Interview+Calls%5D.pdf"
        />
        <SecondSection
          SecondSectionData={AImastersDataScienceCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AImastersDataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/DSAI-Masters-Who.png"
          ThirdSectionData={AImastersDataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={AImastersDataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
        />
        <FifthSection />
        <SixthSectionCTA />
        <SyllabusNew
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={AImastersDataScienceCourseData[0].syllabus}
          syllabusDesc={AImastersDataScienceCourseData[0].syllabusDesc}
          popupHead={AImastersDataScienceCourseData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          heading="Power ahead in your career by joining the data science industry!"
          para1="Higher Growth : Demand for data scientists to grow by 30% by 2024"
          para2="Big Earning Potential : Earn an average salary of INR 10+ LPA"
          para3="Strong Demand : Booming requirement across various industries and domains"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate
          threeCertificate
          data={AImastersDataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 1,29,000 + 18% GST"
          FeeEmi="₹ 12,685/month"
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
          domainSectionData={AImastersDataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={AImastersDataScienceCourseData[0].project}
          tools="16+ tools"
          project="16+ Projects"
          dataScience={true}
          titleCourse="Data Science Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
        />
        <BatchDetails CourseFeeHead="Data Science and AI Master Program : Batch Details" />
        <FAQNew FAQNewData={AImastersDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <OfferPopup />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
