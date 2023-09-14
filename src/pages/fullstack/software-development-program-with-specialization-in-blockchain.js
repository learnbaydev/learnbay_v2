import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { BlockchainFSDData } from "../../../Data/BlockchainFSDCourse";

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
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";
import BatchDetails from "../../../components/CoursePage/BatchDetails/BatchDetails";

function Blockchain() {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <Head>
        <title>
          Blockchain Developer Course with Job Assistance - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our extensive blockchain specialized software development program to become a skilled blockchain developer."
        />
        <meta
          name="keywords"
          content="Software Development Program with Specialization in Blockchain"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/software-development-program-with-specialization-in-blockchain"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          softwareBtnHide={true}
          FirstTyped="IBM Certificate"
          SecondTyped="Expert-Led Advanced Program"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          ibmOnly={true}
          titleCourse="Software Development Program with Specialization in Blockchain"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain-Header.png"
          firstToparaImg="with Specialization in Blockchain"
          firstHeading="Software Development Program"
          firstTopPara="Ready to lead the blockchain revolution?"
          idss="bfl64ANfSV0"
        />
        <SecondSection SecondSectionData={BlockchainFSDData[0].secondSection} />
        <Testimonial
          FSDTestimonial={true}
          Testimonial={BlockchainFSDData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain+-+Who+is+this+program+for.png"
          ThirdSectionData={BlockchainFSDData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={BlockchainFSDData[0].fourthSection}
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
          titleCourse="Software Development Program with Specialization in Blockchain"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Software+Development+with+Specialization+in+Blockchain.pdf"
          syllabus={BlockchainFSDData[0].syllabus}
          syllabusDesc={BlockchainFSDData[0].syllabusDesc}
          popupHead={BlockchainFSDData[0].popupHead}
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Blockchain+Scope+Image.png"
          heading="Accelerate blockchain career & secure your dream job confidently"
          para1="Higher Growth: Compound annual growth rate of CAGR of 87.7% by 2030"
          para2="Unlock earning potential: Be a blockchain developer, earn 8 LPA"
          para3="Strong Demand: Growing need for tech wizards across various industries"
        />

        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-Blockchain.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-Blockchain-mobile.png"
        />
        <Certificate
          oneCertificate={true}
          data={BlockchainFSDData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 95,000 + 18% GST"
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
          projectData={BlockchainFSDData[0].project}
          SoftwareText={true}
          tools="16+ Tools"
          project="12+ Case Studies"
          dataScience={true}
          titleCourse="Full Stack Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Real-time+Projects+%26+Use+cases.pdf"
        />
        <FAQNew FAQNewData={BlockchainFSDData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
      </main>
    </>
  );
}
export default Blockchain;
