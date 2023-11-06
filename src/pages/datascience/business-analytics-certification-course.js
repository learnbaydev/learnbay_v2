import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BADataScienceCourseData } from "../../../Data/BusinessAnalyticsData";
import BatchDetails from "../../../components/CoursePage/BatchDetails/BatchDetails";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";

const FirstSection = dynamic(() =>
  import("../../../components/CoursePage/FirstSection/FirstSection")
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
  import("../../../components/MastersCourse/Syllabus/MasterSyllabus")
);
const DomainSection = dynamic(() =>
  import("../../../components/CoursePage//DomainSection/DomainSection")
);
const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);

function Blockchain() {
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
            if (popupData === "Business Analytics Family") {
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
        body: JSON.stringify("Business Analytics Family"),
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

  return (
    <>
      <Head>
        <title>Business Analytics Certification Course - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll Now in Learnbay's professional business analytics course. Master the business analytics techniques and gain valuable insights to advance your career."
        />
        <meta name="keywords" content="Business Analytics Master Program" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/business-analytics-certification-course"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          idss="4j80WXLTvGE"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+header+image.webp"
          firstToparaImg=" Business Analytics Master Program"
          firstHeading="Elevate your expertise with"
        />
        <SecondSection
          SecondSectionData={BADataScienceCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BADataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Masters-who.png"
          ThirdSectionData={BADataScienceCourseData[0].thirdSection}
        />
        <Switch />
        <FourthSection
          placementData={BADataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        />
        <SyllabusNew
           syllabusHead={BADataScienceCourseData[0].syllabusHead}
           masterSyllabus={BADataScienceCourseData[0].masterSyllabus}
           MasterSyllabusDefault={BADataScienceCourseData[0].MasterSyllabusDefault}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          syllabus={BADataScienceCourseData[0].syllabus}
          syllabusDesc={BADataScienceCourseData[0].syllabusDesc}
          popupHead={BADataScienceCourseData[0].popupHead}
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA+Family+Tools+Covered.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Family-Tools-Covered-mobile.png"
        />
        <Certificate
          threeCertificate={true}
          data={BADataScienceCourseData[0].Certificate}
        />
        <FeeSection
          Fee="₹ 1,10,000 + 18% GST"
          FeeEmi="₹ 10,816/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />
        <DomainSection
          dataScience={true}
          domainSectionData={BADataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={BADataScienceCourseData[0].project}
          tools="16+ Tools"
          project="15+ Projects"
          dataScience={true}
          titleCourse="Business Analytics Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Projects.pdf"
        />
        {batchDateData === "" ? (
          ""
        ) : (
          <BatchDetails batchDetails={batchDateData.batchDetails} />
        )}
        <FAQNew FAQNewData={BADataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />

        <BottomBar />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
