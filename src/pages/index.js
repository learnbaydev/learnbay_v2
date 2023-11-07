import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";
const BottomBar = dynamic(() =>
  import("../../components/WebPage/BottomBar/BottomBar")
);
const WhatsappFloat = dynamic(() =>
  import("../../components/WhatappsFloat/WhatsappFloat")
);
const TrainerSection = dynamic(() =>
  import("../../components/HomePage/TrainerSection/TrainerSection")
);
const Course = dynamic(() => import("../../components/HomePage/Course/Course"));
const Testimonial = dynamic(() =>
  import("../../components/HomePage/Testimonial/Testimonial")
);
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

const WhyLearnbay = dynamic(() =>
  import("../../components/HomePage/WhyLearnbay/WhyLearnbay")
);
const ProjectSection = dynamic(() =>
  import("../../components/HomePage/ProjectSection/ProjectSection")
);
const GetHire = dynamic(() =>
  import("../../components/MastersCourse/GetHire/GetHire")
);

export default function Home() {
  console.log("Home page");
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
      <Course dataScience={true} radio={true} />

      <WhyLearnbay idss="bfl64ANfSV0" />
      <ProjectSection idss="bfl64ANfSV0" />
      <GetHire />
      <TrainerSection idss="eautK0odE7Q" />
      <Testimonial
        redirectDS={true}
        heading=""
        Testimonial={DataScienceCourseData[0].testimonial}
      />
      <ContactUs dataScienceCounselling={true} radio={true} />

      <SeventhSection />

      <Footer />
      <WhatsappFloat chat360code1={true} />
      <BottomBar radio={true} />
    </>
  );
}
