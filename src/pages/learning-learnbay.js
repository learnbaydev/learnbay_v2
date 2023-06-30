import React from "react";
import Head from "next/head";
import FirstSectionLearning from "../components/NewDesign/HomePage/FirstSectionLearning/FirstSection";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomBar from "../components/BottomBar/BottomBar";
import OfferPopup from "../components/OfferPopup/OfferPopup";

function learning() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="data science courses with IBM certification. Learnbay is advanced data science course training institute. Enrol in our data science course to enhance your career"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/learning-learnbay"
        />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <Navbar popup={true} dataScienceCounselling={true} radio={true} />
      <FirstSectionLearning
        first="Tools"
        second="Tips"
        third="Technology"
        popup={true}
        dataScienceCounselling={true}
        radio={true}
      />{" "}
      <OfferPopup offer={false} />
      <BottomBar />
      <Footer />
    </div>
  );
}

export default learning;
