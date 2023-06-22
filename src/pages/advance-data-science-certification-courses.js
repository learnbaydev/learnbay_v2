import React, { useState } from "react";
import Head from "next/head";
// import Navbar from "../components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Popup from "../../components/Popup/Popup";
import { DataScienceCourseData } from "../../Data/DataScienceCourse";
import FirstSection from "../../components/CoursePage/FirstSection/FirstSection";
import SyllabusNew from "../../components/CoursePage/Syllabus/Syllabus";

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
          href="https://www.learnbay.co/advance-data-science-certification-courses"
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
        <SyllabusNew
          dataScienceCounselling={true}
          serviceBasic={true}
          careerH1="Career Service"
          careerSpan=" Basic"
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
      </main>
    </>
  );
}

export default blockchain;
