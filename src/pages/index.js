import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import BoxShape from "../../components/HomePage/BoxShape/BoxShape";
import KeyFeatures from "../../components/HomePage/KeyFeatures/KeyFeatures";
import Course from "../../components/HomePage/Course/Course";
const Testimonial = dynamic(() =>
  import("../../components/HomePage/Testimonial/Testimonial")
);
import Switch from "../../components/HomePage/switch/switch";
import ContactUs from "../../components/HomePage/ContactUs/ContactUs";
import SeventhSection from "../../components/Global/Button/SeventhSection/SeventhSection";
const FirstSection = dynamic(() =>
  import("../../components/HomePage/FirstSection/FirstSection")
);
const Footer = dynamic(() => import("../../components/Footer/Footer"));
const HomeLine = dynamic(() =>
  import("../../components/HomePage/HomeLine/HomeLine")
);



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
      <HomeLine />
      <BoxShape/>
      <Course />
      <Testimonial redirectDS={true} />
      <Switch />
      <ContactUs />
      <SeventhSection />
      <Testimonial redirectDS={true} />
      <KeyFeatures
        titleCourse="Data Science Placement Report"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        popup={true}
        idss="wSB-phYhG10"
        dataScience={true}
        radio={true}
      />
      <Footer />
    </>
  );
}
