import Head from "next/head";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import dynamic from "next/dynamic";
import Form from "../../components/Form/Form";
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";
import AutoPopup from "../../components/autoPopup/AutoPopup";
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
  const [AutoPopups, setAutoPopups] = useState(false);
  const [popupShown, setPopupShown] = useState(false);

  if (!popupShown) {
    const autoTimer = setTimeout(() => {
      setAutoPopups(true);
      setPopupShown(true); // Set the state to indicate that the popup has been shown
    }, 10000);
  }

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
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "ItemList",
                "name": "Courses Carousel",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@type": "Course",
                      "name": "Advance Data Science and AI Certification",
                      "description": "Our Advance Data Science and AI Certification Course brings you a wide knowledge of Data Science and AI and helps you land your dream job.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@type": "Course",
                      "name": "Advance AI and ML Certification Program",
                      "description": "Our Advance Artificial Intelligence and ML Certification Course provide you with a wide knowledge of Artificial Intelligence and Machine Learning and helps you land your dream job.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "url": "https://www.learnbay.co/datascience/artificial-intelligence-certification-course"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "@type": "Course",
                      "name": "Business Analytics Program",
                      "description": "Get real-world experience with capstone projects with our  comprehensive program in Business Analytics.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "url": "https://www.learnbay.co/datascience/business-analytics-certification-course"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                      "@type": "Course",
                      "name": "Data Analytics Program",
                      "description": "Upskill yourself to the top within 6 months with curricullum designed by industry experts.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "url": "https://www.learnbay.co/datascience/data-analytics-certification-course"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                      "@type": "Course",
                      "name": "Software Development Certification Program",
                      "description": "Upskill and switch from service-based to product-based companies with our Software development Certification Program.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Master in CS: Data science and AI",
                      "description": "A comprehensive Master's degree program in Computer Science with specializations in Data Science and Analytics, and AI & Machine Learning.",
                      "provider": {
                        "@type": "Organization",
                        "name": "Learnbay"
                      },
                      "occupationalCategory": [
                        "Data Science and Analytics",
                        "AI & Machine Learning"
                      ],
                      "url": "https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
                    }
                  }
                ]
              }
              
} `,
          }}
        />


<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "EducationalOrganization",
                "name": "Learnbay",
                "url": "https://www.learnbay.co/",
                "logo": "https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FlearnbayMain%2Flearnbay-logo.png&w=256&q=100",
                "description": "Learnbay is a leading edtech platform providing high-quality courses in programming, data science, and machine learning.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1090 , 1st Floor, 18th Cross Road HSR Layout Sector 3",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560102",
                  "addressCountry": "India"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "(+91) 77956 87988",
                  "contactType": "customer support",
                  "areaServed": ["India", "Canada", "Dubai"]
                },
                "sameAs": [
                    "https://www.facebook.com/learnbay/",
                              "https://twitter.com/Learbay",
                              "https://www.instagram.com/learnbayofficial/",
                              "https://www.youtube.com/channel/UC-ntE_GnjjiUuKYqih9ENYA",
                              "https://www.linkedin.com/company/learnbay/"
                ]
              }
              
} `,
          }}
        />


      </Head>
      <AutoPopup
        trigger={AutoPopups}
        setTrigger={setAutoPopups}
        className="popupModal"
      >
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          {/* <p>Fill the below details to get started</p> */}

          <Form popup={true} setTrigger={setAutoPopups} upSkillingHide={true} />
        </div>
      </AutoPopup>
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
