import Head from "next/head";
import { FcMoneyTransfer } from "react-icons/fc";
import Navbar from "../../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import Course from "../../components/HomePage/Course/Course";
const FirstSection = dynamic(() =>
  import("../../components/HomePage/FirstSection/FirstSection")
);
const Footer = dynamic(() => import("../../components/Footer/Footer"));

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

      <Navbar />
      <FirstSection />
      <Course />
      <Footer />
    </>
  );
}
