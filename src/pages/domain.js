import React from "react";
import Form from "../../components/Form/Form";
import styles from "../styles/Submit.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BottomBar from "../../components/WebPage/BottomBar/BottomBar";
import Image from "next/image";
import Head from "next/head";
import OfferPopup from "../../components/OfferPopup/OfferPopup";
import WhoProgram from "../../components/CoursePage/WhoProgram/ThirdSection"
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";


const sumbit = () => {
  return (
    <div>
      <Head>
        <title>Learnbay - Counselling Form - Apply</title>
        <meta
          name="description"
          content="Submit your information to LearnBay to unlock a world of learning opportunities. Join our platform today and start your path to success."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://www.learnbay.co/submit-info" />
      </Head>
      <Navbar popup={true} radio={true} />
      <WhoProgram
          dataScience={true}
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
          ThirdSectionData={DataScienceCourseData[0].thirdSection}
        />
      <BottomBar radio={true} />
      <Footer />
    </div>
  );
};

export default sumbit;
