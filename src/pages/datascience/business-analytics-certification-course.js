import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BADataScienceCourseData } from "../../../Data/BusinessAnalyticsData";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

const FirstSection = dynamic(() =>
  import("../../../components/CoursePage/FirstSection/FirstSection")
);
const WhatsappFloat = dynamic(() =>
  import("../../../components/WhatappsFloat/WhatsappFloat")
);
const SecondSection = dynamic(() =>
  import("../../../components/CoursePage/SecondSection/SecondSection")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Global/SeventhSection/SeventhSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/HomePage/Testimonial/Testimonial")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const Switch = dynamic(() =>
  import("../../../components/HomePage/switch/switch")
);

const ToolsCovered = dynamic(() =>
  import("../../../components/CoursePage/ToolsCovered/ToolsCovered")
);
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const FourthSection = dynamic(() =>
  import("../../../components/CoursePage/FourthSection/FourthSection")
);

const Project = dynamic(() =>
  import("../../../components/CoursePage/Project/Project")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/CoursePage/Syllabus/MasterSyllabus")
);

const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const BatchDetails = dynamic(() =>
  import("../../../components/CoursePage/BatchDetails/BatchDetails")
);

const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const ContactConsellor = dynamic(() =>
  import(
    "../../../components/MastersCourse/ContactCounsellor/ContactCounsellor"
  )
);
const feesbatch = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);

const SliderTab = dynamic(() =>
  import("../../../components/CoursePage/SliderTabs/SliderTabs")
);

const WhoIsProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoIsProgram/WhoIsProgram")
);

const OfferPopup = dynamic(() =>
  import("../../../components/OfferPopup/OfferPopup")
);
const BottomBar = dynamic(() =>
  import("../../../components/WebPage/BottomBar/BottomBar")
);
const ContactUs = dynamic(() =>
  import("../../../components/HomePage/ContactUs/ContactUs")
);
const NewProjectSection = dynamic(() =>
  import("../../../components/CoursePage/NewProjectSection/NewProjectSection")
);
const MentorsSection = dynamic(() =>
  import("../../../components/MastersCourse/MentorsSection/MentorsSection")
);
const TrainerSection = dynamic(() =>
  import("../../../components/HomePage/TrainerSection/TrainerSection")
);
// import SecondNavbar from "../../../components/CoursePage/SecondNavbar/SecondNavbar";
const WhyLearnbay = dynamic(() =>
  import("../../../components/CoursePage/WhyLearnbay/WhyLearnbay")
);

// const Gethire = dynamic(() =>
//   import("../../../components/CoursePage/Gethired/Gethire")
// );
const GetHire = dynamic(() =>
  import("../../../components/HomePage/GetHire/GetHire")
);
const PlacementCall = dynamic(() =>
  import("../../../components/CoursePage/PlacementCall/PlacementCall")
);

function Blockchain({}) {
  // POPUP GET METHOD
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === "Adv Data Science and AI") {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data.status);
      if (data.status === 200) {
        const { batchDate } = await data.json();

        setBatchDateData(batchDate);

        console.log("Batch Date Response:", batchDate);
      }
    };
    fetchBatch();
  }, []);

  const [progress, setProgress] = useState(20);

  return (
    <>
      <Head>
        <title>Businesss Analytics Certification Program - Learnbay</title>
        <meta
          name="description"
          content="Get real-world experience with capstone projects"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Businesss Analytics Certification Program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/business-analytics-certification-course"
        />
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "Course",
                "name": "Businesss Analytics Certification Program",
                "description": "Get real-world experience with capstone projects with our  comprehensive program in Business Analytics.",
                "url": "https://www.learnbay.co/datascience/business-analytics-certification-course",
                 "provider": {
                      "@type": "Organization",
                      "name": "Learnbay",
                      "Url": "https://www.learnbay.co/"
                    },
                "coursePrerequisites": "There are no prerequisites for this Business Analytics certification course as all modules are beginner-friendly and are taught from scratch. ", 
                "hasCourseInstance": [
                  {
                    "@type": "CourseInstance",
                    "courseMode": "Online, In-Person",
                    "courseFee": {
                      "@type": "PriceSpecification",
                      "price": "₹ 90,000 + 18% GST",
                      "priceCurrency": "INR"
                    }
                  }
                ]
              }
            } `,
          }}
        />



      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          // FirstTyped="Guaranteed Interview Calls"
          // SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Businesss Analytics Certification Program"
          cityParaCont="Get real-world experience with capstone projects"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/busihead1.webp"
          firstToparaImg=""
          firstHeading="Businesss Analytics Certification Program"
          firstTopPara="Get real-world experience with capstone projects"
          idss="4j80WXLTvGE"
        />
        <SecondSection
          SecondSectionData={BADataScienceCourseData[0].secondSection}
        />
        <SecondNavbar />
        <WhoProgram
          dataScience={true}
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
          ThirdSectionData={BADataScienceCourseData[0].thirdSection}
        />
        <TrainerSection idss="eautK0odE7Q" />
        <Testimonial
          redirectDS={true}
          heading=""
          Testimonial={BADataScienceCourseData[0].testimonial}
        />

<WhoIsProgram
          first="B.tech, M.tech, BCA, B.com, M.com, MBA, MCA, M.sc"
          second="Minimum 6 year of  work experience (tech/non-tech)"
          third="Mid-career professionals interested in data science & AI"
          forth="Achieving higher career growth in data science and AI"
        />
        <WhyLearnbay idss="fzXzUSvMPv0" />
        <GetHire />
        {/* <Switch /> */}
        {/* <FourthSection
          placementData={BADataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        /> */}

        <ContactConsellor />

        <SyllabusNew
          masterSyllabusMobile={BADataScienceCourseData[0].masterSyllabusMobile}
          syllabusHead={BADataScienceCourseData[0].syllabusHead}
          masterSyllabus={BADataScienceCourseData[0].masterSyllabus}
          MasterSyllabusDefault={
            BADataScienceCourseData[0].MasterSyllabusDefault
          }
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Businesss Analytics Certification Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program.pdf"
          syllabus={BADataScienceCourseData[0].syllabus}
          syllabusDesc={BADataScienceCourseData[0].syllabusDesc}
          popupHead={BADataScienceCourseData[0].popupHead}
          progress={progress}
          setProgress={setProgress}
          buttonHide={true}
        />

        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
       <Certificate data={BADataScienceCourseData[0].Certificate} />
        <FeeSection
          Fee="₹ 90,000"
          FeeEmi="₹ 5,900/month"
          WeekdayDate="NOV 17th"
          WeekendDate="NOV 26th"
          WeekendTime="09:30 AM - 1:00 PM"
          WeekdayTime="08:00 AM - 10:00 AM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />
        <MentorsSection />

        <SliderTab />

        <PlacementCall />

        {/* {batchDateData === "" ? (
          ""
        ) : (
          <BatchDetails batchDetails={batchDateData.batchDetails} />
        )} */}

        <NewProjectSection
          dataScience={true}
          titleCourse="Businesss Analytics Certification Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Business+Analytics+Program.pdf"
          projectSection={BADataScienceCourseData[0].projectSection}
        />

        <FAQNew FAQNewData={BADataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
        <WhatsappFloat />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
