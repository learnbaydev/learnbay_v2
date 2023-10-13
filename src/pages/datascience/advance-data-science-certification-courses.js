import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataScienceCourseData } from "../../../Data/AdvanceDataScienceCourse";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

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
const GrowthStats = dynamic(() =>
  import("../../../components/CoursePage/GrowthStat/GrowthStats")
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
const FifthSection = dynamic(() =>
  import("../../../components/CoursePage/FifthSection/FifthSection")
);
const SixthSectionCTA = dynamic(() =>
  import("../../../components/CoursePage/SixthSectionCTA/Counselling")
);
const Project = dynamic(() =>
  import("../../../components/CoursePage/Project/Project")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/CoursePage/Syllabus/MasterSyllabus")
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
const BatchDetails = dynamic(() =>
  import("../../../components/CoursePage/BatchDetails/BatchDetails")
);

const SecondNavbar = dynamic(()=>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const ContactConsellor = dynamic ( ()=>
import ("../../../components/CoursePage/ContactConsellor/ContactConsellor")

)
const feesbatch = dynamic ( ()=>
import ('../../../components/CoursePage/FeeSection/FeeSection')
)

import OfferPopup from "../../../components/OfferPopup/OfferPopup";
import BottomBar from "../../../components/WebPage/BottomBar/BottomBar";
import ContactUs from "../../../components/HomePage/ContactUs/ContactUs";
// import SecondNavbar from "../../../components/CoursePage/SecondNavbar/SecondNavbar";

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

  return (
    <>
      <Head>
        <title>
          Artificial Intelligence and Data Science Course - Learnbay
        </title>
        <meta
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
          href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          // FirstTyped="Guaranteed Interview Calls"
          // SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Elevate your tech career with our Master's programs"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/course-head-image.webp"
          firstToparaImg="with Domain Specialization"
          firstHeading="Advance Data Science & AI Program"
          firstTopPara="Curriculum Inclusive of Gen-AI"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={DataScienceCourseData[0].secondSection}
        />
        <SecondNavbar/>
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whoIsProgram.webp"
          ThirdSectionData={DataScienceCourseData[0].thirdSection}
        />
        {/* <Switch /> */}
        <FourthSection
          placementData={DataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        />
        {/* <FifthSection /> */}
        {/* <SixthSectionCTA dataScienceCounselling={true} /> */}
        {/* <SyllabusNew
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
        /> */}
        {/* <ContactUs dataScienceCounselling={true} /> */}
        <ContactConsellor/>

        <SyllabusNew
          syllabusHead={DataScienceCourseData[0].syllabusHead}
          masterSyllabus={DataScienceCourseData[0].masterSyllabus}
          MasterSyllabusDefault={DataScienceCourseData[0].MasterSyllabusDefault}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={DataScienceCourseData[0].syllabus}
          syllabusDesc={DataScienceCourseData[0].syllabusDesc}
          popupHead={DataScienceCourseData[0].popupHead}
        />
        {/* <GrowthStats
          img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Scope+of+DS+left+image.png"
          heading="Be the future: Grow your Data Science & AI skills "
          para1="Data Science market to reach $133 billion by 2026"
          para2="The global AI market to hit US$ 1,597.1 billion by 2030 "
          para3="Influences on nearly all sectors of the current industries"
        /> */}
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate
          threeCertificate={true}
          data={DataScienceCourseData[0].Certificate}
        />
         <FeeSection
          Fee="₹ 99,000"
          FeeEmi="₹ 9,735/"
          FeeHeading="Program Fee and Financing"
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
          domainSectionData={DataScienceCourseData[0].domainSection}
        />
        <Project
          projectData={DataScienceCourseData[0].project}
          tools="12+"
          dataScience={true}
          titleCourse="Data Science Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
          project="15+"
        />
        {/* {batchDateData === "" ? (
          ""
        ) : (
          <BatchDetails batchDetails={batchDateData.batchDetails} />
        )} */}

        <FAQNew FAQNewData={DataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
