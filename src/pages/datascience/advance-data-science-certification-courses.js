import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

import dynamic from "next/dynamic";
import { DataScienceCourseData } from "../../../Data/DataScienceCourse";

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
import {
  FaqData2,
  DomainFaqData2,
  PaymentFaqData2,
  CapstoneFaqData2,
  CertificationFaqData2,
  jobFaqData2,
  MentorshipFaqData2,
  SupportFaqData2,
} from "../../../components/CoursePage/FAQNew/FaqData";

function Blockchain() {
  const [popups, setPopups] = useState(false);

  return (
    <>
      <Head>
        <title>
          Artificial Intelligence and Data Science Course - Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Advanced Data Science and AI Program with domain specialization"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        {/* <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
        {/* <Form
              popup={true}
              setTrigger={setPopups}
              fullStack={true}
              dataScience={true}
              titleCourse="Advanced Data Science and AI Program with domain specialization"
              brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
            />
          </div>
        </Popup> */}
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          first="Tools"
          second="Tips"
          third="Technology"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg="with domain specialization"
          firstHeading="Advanced Data Science and AI Program"
          firstTopPara="Specialization over generalization"
          idss="bfl64ANfSV0"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        <SecondSection
          SecondSectionData={DataScienceCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whoIsProgram.webp"
          ThirdSectionData={DataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={DataScienceCourseData[0].fourthSection}
          redirectDS={true}
        />
        {/* <FifthSection /> */}
        <SixthSectionCTA />
        <SyllabusNew
          dataScienceCounselling={true}
          serviceBasic={true}
          careerH1="Career Service"
          careerSpan="Basic"
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          hours="250+ Hours"
          project="12+ Real Time"
        />
        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          heading="Be the future: Grow your Data Science & AI skills "
          para1="Data Science market to reach $133 billion by 2026"
          para2="The global AI market to hit US$ 1,597.1 billion by 2030 "
          para3="Influences on nearly all sectors of the current industries"
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate
          threeCertificate
          data={DataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 99,000 + 18% GST"
          FeeEmi="₹ 9,735/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
        />
        <DomainSection
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          domainSectionData={DataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={DataScienceCourseData[0].project}
          tools="12+"
          project="15+"
        />
        <FAQNew
          FaqDatas={FaqData2}
          DomainFaqDatas={DomainFaqData2}
          PaymentFaqDatas={PaymentFaqData2}
          CapstoneFaqDatas={CapstoneFaqData2}
          CertificationFaqDatas={CertificationFaqData2}
          jobFaqDatas={jobFaqData2}
          MentorshipFaqDatas={MentorshipFaqData2}
          SupportFaqDatas={SupportFaqData2}
        />
        <SeventhSection />
        <Footer />
      </main>
    </>
  );
}
export default Blockchain;
