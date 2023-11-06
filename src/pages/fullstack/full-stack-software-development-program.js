import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FSSPDataScienceCourseData } from "../../../Data/FullStackSoftwareProgram";
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
        <title>
        Full-Stack Software Development Program - Learnbay
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
          titleCourse="Software Development Certification Program"
          cityParaCont="Upskill and switch from service-based to product based companies"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/fullhead.webp"
          firstToparaImg=""
          firstHeading="Software Development Certification Program"
          firstTopPara="Curriculum Inclusive of Gen-AI"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={FSSPDataScienceCourseData[0].secondSection}
        />
        <SecondNavbar />
        <WhoProgram
          dataScience={true}
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
          ThirdSectionData={FSSPDataScienceCourseData[0].thirdSection}
        />
        <TrainerSection idss="eautK0odE7Q" />
        <Testimonial
          redirectDS={true}
          heading=""
          Testimonial={FSSPDataScienceCourseData[0].testimonial}
        />

        <WhoIsProgram
          first="Bachelor's degree with consistent good academics"
          second="1+ year(s) experience in IT domain"
          third="Students pursuing B.Tech and B.Sc. in computer science"
          forth="For individuals seeking software development skills"
        />
        <WhyLearnbay idss="bfl64ANfSV0" />
        <GetHire />
        {/* <Switch /> */}
        {/* <FourthSection
          placementData={FSSPDataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        /> */}

        <ContactConsellor />

        <SyllabusNew
          syllabusHead={FSSPDataScienceCourseData[0].syllabusHead}
          masterSyllabus={FSSPDataScienceCourseData[0].masterSyllabus}
          MasterSyllabusDefault={FSSPDataScienceCourseData[0].MasterSyllabusDefault}
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          syllabus={FSSPDataScienceCourseData[0].syllabus}
          syllabusDesc={FSSPDataScienceCourseData[0].syllabusDesc}
          popupHead={FSSPDataScienceCourseData[0].popupHead}
          progress={progress}
          setProgress={setProgress}
        />

        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        {/* <Certificate data={FSSPDataScienceCourseData[0].Certificate} /> */}
        <FeeSection
   
          Fee="₹ 1,15,000"
          FeeEmi="₹ 7,538/month"
          WeekdayDate="Nov 10th"
          WeekendDate="Nov 17th"
          WeekendTime="7:30 AM to 9:30 AM"
          WeekdayTime="8:00 PM to 10:00 PM"
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
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
          projectSection={FSSPDataScienceCourseData[0].projectSection}
        />

        <FAQNew FAQNewData={FSSPDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
