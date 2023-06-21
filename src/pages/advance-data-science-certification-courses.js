import React, { useState } from "react";
import Head from "next/head";
// import Navbar from "../components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Popup from "../../components/Popup/Popup";
import FirstSection from "../../components/CoursePage/FirstSection/FirstSection";
import ThirdSection from "../../components/CoursePage/ThirdSection/ThirdSection";

function Blockchain() {
  const FourthSectionData = [
    {
      id: 1,
      img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/1.png",
      desc: "Get 1 year of job & placement support",
    },
    {
      id: 2,
      img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/2.png",
      desc: "Get 3 mock interviews with industry leaders",
    },
    {
      id: 3,
      img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/3.png",
      desc: "Resume build up session",
    },
    {
      id: 4,
      img: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/4.png",
      desc: "Get 5-8 interview calls",
    },
  ];
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <>
      <Head>
        <title>
          Artificial Intelligence and Data Science Course - Learnbay
        </title>
        <metaa
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
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form
              popup={true}
              // setTrigger={setPopups}
              fullStack={true}
              dataScience={true}
              titleCourse="Advanced Data Science and AI Program with domain specialization"
              brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
            />
          </div>
        </Popup>
        {/* <FirstSection
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
        /> */}
        <ThirdSection placement={FourthSectionData} />
      </main>
    </>
  );
}

export default Blockchain;
