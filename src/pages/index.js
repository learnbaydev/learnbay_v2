import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";

const BottomBar = dynamic(() =>
  import("../../components/WebPage/BottomBar/BottomBar")
);
const OfferPopup = dynamic(() =>
  import("../../components/OfferPopup/OfferPopup")
);
const WhatsappFloat = dynamic(() =>
  import("../../components/WhatappsFloat/WhatsappFloat")
);
const TrainerSection = dynamic(() =>
  import("../../components/HomePage/TrainerSection/TrainerSection")
);

const Media = dynamic(() => import("../../components/HomePage/Media/Media"));

const BoxShape = dynamic(() =>
  import("../../components/HomePage/BoxShape/BoxShape")
);
const KeyFeatures = dynamic(() =>
  import("../../components/HomePage/KeyFeatures/KeyFeatures")
);
const Course = dynamic(() => import("../../components/HomePage/Course/Course"));
const Testimonial = dynamic(() =>
  import("../../components/HomePage/Testimonial/Testimonial")
);
const Switch = dynamic(() => import("../../components/HomePage/switch/switch"));
const ContactUs = dynamic(() =>
  import("../../components/HomePage/ContactUs/ContactUs")
);
const SeventhSection = dynamic(() =>
  import("../../components/Global/SeventhSection/SeventhSection")
);
const FirstSection = dynamic(() =>
  import("../../components/HomePage/FirstSection/FirstSection")
);
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const HomeLine = dynamic(() =>
  import("../../components/HomePage/HomeLine/HomeLine")
);

const NewsSection = dynamic(() =>
  import("../../components/HomePage/NewsSection/NewsSection")
);

const MasterClass = dynamic(() =>
  import("../../../learnbay_v2/components/MasterClass/MasterClass")
);

import { DADataScienceCourseData } from "../../Data/DataAnalyticsData";
const WhyLearnbay = dynamic(() =>
  import("../../components/HomePage/WhyLearnbay/WhyLearnbay")
);
const ProjectSection = dynamic(() =>
  import("../../components/HomePage/ProjectSection/ProjectSection")
);

// const ArticleSection = dynamic(() =>
//   import("../../components/HomePage/Project/ArticleSection")
// );

export default function Home() {
  return (
    <>
      <Head>
        <title>Online IT Certification Courses and Professional Programs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your skills with Learnbay's comprehensive online courses and master programs and achieve your professional goals. Enroll Now!"
        />
        <link rel="canonical" href="https://www.learnbay.co/" />
        <meta
          name="keywords"
          content="data science course, data science training , data science institute in India, best data science institute, data scientist course ,data scientist certification, data science training institute , advanced data science course , data science course with Placement Assistance, data science course with IBM certification"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>

      <Navbar radio={true} dataScienceCounselling={true} />
      <FirstSection dataScienceCounselling={true} radio={true} />
      <HomeLine />
      {/* <BoxShape /> */}
      <Course dataScience={true} radio={true} />
      {/* <Switch /> */}
      {/* <KeyFeatures
        titleCourse="Data Science Placement Report"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        popup={true}
        idss="wSB-phYhG10"
        dataScience={true}
        radio={true}
      /> */}
      <WhyLearnbay idss="bfl64ANfSV0" />
      <ProjectSection idss="bfl64ANfSV0" />
      <TrainerSection idss="bfl64ANfSV0" />
      <Testimonial
        redirectDS={true}
        heading=""
        Testimonial={DataScienceCourseData[0].testimonial}
      />
      <ContactUs dataScienceCounselling={true} radio={true} />

      <MasterClass />

      <Media projectData={DataScienceCourseData[0].newsData} />

      <SeventhSection />

      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar radio={true} />
    </>
  );
}
