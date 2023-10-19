import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { GenerativeAIData } from "../../../Data/GenerativeAICourseData";
import MentorsSection from "../../../components/MastersCourse/MentorsSection/MentorsSection";

const Footer = dynamic(() => import("../../../components/Footer/Footer"));

const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"));

const FirstSection = dynamic(() =>
  import("../../../components/MastersCourse/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../components/MastersCourse/SecondSection/SecondSection")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Global/SeventhSection/SeventhSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/HomePage/Testimonial/Testimonial")
);
const WhoProgram = dynamic(() =>
  import("../../../components/MastersCourse/WhoProgram/ThirdSection")
);
const ToolsCovered = dynamic(() =>
  import("../../../components/MastersCourse/ToolsCovered/ToolsCovered")
);
const FeeSection = dynamic(() =>
  import("../../../components/MastersCourse/FeeSection/FeeSection")
);
const FourthSection = dynamic(() =>
  import("../../../components/MastersCourse/FourthSection/FourthSection")
);
const Project = dynamic(() =>
  import("../../../components/MastersCourse/Project/Project")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/MastersCourse/Syllabus/MasterSyllabus")
);
const DomainSection = dynamic(() =>
  import("../../../components/MastersCourse/DomainSection/DomainSection")
);
const Certificate = dynamic(() =>
  import("../../../components/MastersCourse/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/MastersCourse/FAQNew/FAQNew")
);
const BatchDetails = dynamic(() =>
  import("../../../components/CoursePage/BatchDetails/BatchDetails")
);

const SecondNavbar = dynamic(() =>
  import("../../../components/MastersCourse/SecondNavbar/SecondNavbar")
);

const WhyLearnbay = dynamic(() =>
  import("../../../components/MastersCourse/WhyLearnbay/WhyLearnbay")
);

const BottomBar = dynamic(() =>
  import("../../../components/WebPage/BottomBar/BottomBar")
);

const ContactCounsellor = dynamic(() =>
  import("../../../components/MastersCourse/ContactCounsellor/ContactCounsellor")
);

const PlacementCell = dynamic(() =>
  import("../../../components/MastersCourse/placementCell/PlacementCell")
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
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          cityParaCont="Elevate your tech career with our Master's programs"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/coursepageB.webp"
          firstToparaImg="with domain specialization"
          firstHeading="Advanced Data Science and AI Program"
          // firstTopPara="Specialization over generalization"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={GenerativeAIData[0].secondSection}
        />
        <SecondNavbar />
        <Testimonial
          redirectDS={true}
          Testimonial={GenerativeAIData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <WhoProgram
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/masterPage/who-program.webp"
          ThirdSectionData={GenerativeAIData[0].thirdSection}
        />
        <WhyLearnbay />
        <FourthSection
          placementData={GenerativeAIData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        />

        <ContactCounsellor />

        <SyllabusNew
          syllabusHead={GenerativeAIData[0].syllabusHead}
          masterSyllabus={GenerativeAIData[0].masterSyllabus}
          MasterSyllabusDefault={GenerativeAIData[0].MasterSyllabusDefault}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={GenerativeAIData[0].syllabus}
          syllabusDesc={GenerativeAIData[0].syllabusDesc}
          popupHead={GenerativeAIData[0].popupHead}
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate
          threeCertificate={true}
          data={GenerativeAIData[0].Certificate}
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
          domainSectionData={GenerativeAIData[0].domainSection}
        />
        <PlacementCell />
        <Project
          projectData={GenerativeAIData[0].project}
          tools="12+"
          dataScience={true}
          titleCourse="Data Science Project Brochure"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+and+AI+Projects.pdf"
          project="15+"
        />
        <MentorsSection />
        {/* {batchDateData === "" ? (
          ""
        ) : (
          <BatchDetails batchDetails={batchDateData.batchDetails} />
        )} */}

        <FAQNew FAQNewData={GenerativeAIData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;