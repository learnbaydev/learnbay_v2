import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Form from "../../../components/Form/Form";
import Popup from "../../../components/Popup/Popup";
import { DataScienceCourseData } from "../../../Data/DataScienceCourse";
import FirstSection from "../../../components/CoursePage/FirstSection/FirstSection";
import SeventhSection from "../../../components/Global/SeventhSection/SeventhSection";
import SecondSection from "../../../components/CoursePage/SecondSection/SecondSection";
import Testimonial from "../../../components/HomePage/Testimonial/Testimonial";
import WhoProgram from "../../../components/CoursePage/WhoProgram/ThirdSection";
import Switch from "../../../components/HomePage/switch/switch";
import GrowthStats from "../../../components/CoursePage/GrowthStat/GrowthStats";
import ToolsCovered from "../../../components/CoursePage/ToolsCovered/ToolsCovered";
import FeeSection from "../../../components/CoursePage/FeeSection/FeeSection";
import FourthSection from "../../../components/CoursePage/FourthSection/FourthSection";
import FifthSection from "../../../components/CoursePage/FifthSection/FifthSection";
import SixthSectionCTA from "../../../components/CoursePage/SixthSectionCTA/Counselling";
import Project from "../../../components/CoursePage/Project/Project";
import SyllabusNew from "../../../components/CoursePage/Syllabus/Syllabus";
import DomainSection from "../../../components/newDesign/DomainSection/DomainSection";
import Certificate from "../../../components/CoursePage/Certificate/Certificate";
import FAQNew from "../../../components/CoursePage/FAQNew/FAQNew";
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

function blockchain() {
  // const [popups, setPopups] = useState(false);
  // const [video, setVideo] = useState(false);
  // const videoSHow = () => {
  //   setVideo(true);
  // };

  const popupShow = () => {
    setPopups(true);
  };
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
          // setTrigger={setPopups}
          fullStack={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        /> */}
        {/* {/* </div> */}
        {/* </Popup> */}
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
        <SecondSection />
        <Testimonial
          redirectDS={true}
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whoIsProgram.webp" />
        <Switch />
        <FourthSection redirectDS={true} />
        <FifthSection />
        {/* <SixthSectionCTA /> */}
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
        <FourthSection redirectDS={true} />
        <FifthSection />
        {/* <SixthSectionCTA /> */}
        <Switch />
        <DomainSection
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
        />
        
        <Project />

        <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          heading="Be the future: Grow your Data Science & AI skills "
          para1="Data Science market to reach $133 billion by 2026"
          para2="The global AI market to hit US$ 1,597.1 billion by 2030 "
          para3="Influences on nearly all sectors of the current industries"
        />
        <ToolsCovered />
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
        {/* <DomainElectives/> */}
        <Project redirectDS={true} />
        {/* <BatchDetails/> */}
        {/* <FAQ/> */}
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

export default blockchain;

