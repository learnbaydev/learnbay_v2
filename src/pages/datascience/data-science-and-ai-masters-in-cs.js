import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataScienceMastersinCS } from "../../../Data/DataScienceAiMastersinCS";
import TrainerSection from "../../../components/HomePage/TrainerSection/TrainerSection";

const MentorsSection = dynamic(() =>
  import("../../../components/MastersCourse/MentorsSection/MentorsSection")
);
const WhatsappFloat = dynamic(() =>
  import("../../../components/WhatappsFloat/WhatsappFloat")
);
const Footer = dynamic(() => import("../../../components/Footer/Footer"));

const Navbar = dynamic(() => import("../../../components/Navbar/Navbar"));

const FirstSection = dynamic(() =>
  import("../../../components/MastersCourse/FirstSection/FirstSection")
);

const MasterSecondSection = dynamic(() =>
  import(
    "../../../components/MastersCourse/MasterSecondSection/MasterSecondSection"
  )
);
const SeventhSection = dynamic(() =>
  import("../../../components/Global/SeventhSection/SeventhSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/HomePage/Testimonial/Testimonial")
);

const ToolsCovered = dynamic(() =>
  import("../../../components/CoursePage/ToolsCovered/ToolsCovered")
);
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/CoursePage/Syllabus/MasterSyllabus")
);

const Certificate = dynamic(() =>
  import("../../../components/MastersCourse/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const SecondNavbar = dynamic(() =>
  import("../../../components/MastersCourse/SecondNavbar/SecondNavbar")
);

const WhyLearnbay = dynamic(() =>
  import("../../../components/MastersCourse/WhyLearnbay/WhyLearnbay")
);

const Gethire = dynamic(() =>
  import("../../../components/MastersCourse/GetHire/GetHire")
);

const BottomBar = dynamic(() =>
  import("../../../components/WebPage/BottomBar/BottomBar")
);

const ContactCounsellor = dynamic(() =>
  import(
    "../../../components/MastersCourse/ContactCounsellor/ContactCounsellor"
  )
);

const PlacementCall = dynamic(() =>
  import("../../../components/CoursePage/PlacementCall/PlacementCall")
);

const NewProjectSection = dynamic(() =>
  import("../../../components/CoursePage/NewProjectSection/NewProjectSection")
);
const JobAbroad = dynamic(() =>
  import("../../../components/MastersCourse/JobAbroad/JobAbroad")
);

import SliderTabs from "../../../components/CoursePage/SliderTabs/SliderTabs";
import GetHire from "../../../components/MastersCourse/GetHire/GetHire";

const Blockchain = () => {
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
        <title>Masters in Computer Science: Data Science and AI</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Masters in Computer Science: Data Science and AI Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Masters in Computer Science: Data Science and AI"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-and-ai-masters-in-cs"
        />
      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          dataScienceCounselling={true}
          titleCourse="Masters in Computer Science: Data Science and AI"
          cityParaCont="Elevate your tech career with our Master's programs"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/coursepageB.webp"
          firstToparaImg="with domain specialization"
          firstHeading="Advanced Data Science and AI Program"
        />
        <MasterSecondSection />
        <JobAbroad />
        <SecondNavbar dataScienceCounselling={true} />
        <TrainerSection idss="eautK0odE7Q" />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceMastersinCS[0].testimonial}
        />
        <WhyLearnbay idss="fzXzUSvMPv0" />
        <GetHire />
        <ContactCounsellor dataScienceCounselling={true} />
        <SyllabusNew
          masterSyllabusMobile={DataScienceMastersinCS[0].masterSyllabusMobile}
          syllabusHead={DataScienceMastersinCS[0].syllabusHead}
          masterSyllabus={DataScienceMastersinCS[0].masterSyllabus}
          MasterSyllabusDefault={
            DataScienceMastersinCS[0].MasterSyllabusDefault
          }
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Masters in Computer Science: Data Science and AI"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
          syllabus={DataScienceMastersinCS[0].syllabus}
          syllabusDesc={DataScienceMastersinCS[0].syllabusDesc}
          popupHead={DataScienceMastersinCS[0].popupHead}
          progress={progress}
          setProgress={setProgress}
        />
        <ToolsCovered
          deskImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
          mobImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
        />
        <Certificate data={DataScienceMastersinCS[0].Certificate} />
        <FeeSection
          Fee="₹ 2,50,000"
          FeeEmi="12,292/month."
          WeekdayDate="DEC 14th"
          WeekendDate="NOV 5th"
          WeekendTime="09:30 AM - 1:00 PM"
          WeekdayTime="08:00 PM - 10:00 PM"
          CutFee="₹ 3,25,000/-"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />
        <MentorsSection />
        <SliderTabs />
        <PlacementCall />
        <NewProjectSection
          dataScience={true}
          titleCourse="Masters in Computer Science: Data Science and AI"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Masters+in+CS+Data+Science+%26+AI.pdf"
          projectSection={DataScienceMastersinCS[0].projectSection}
        />
        {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
        <SeventhSection />
        <Footer />
        <BottomBar />
        <WhatsappFloat />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
};
export default Blockchain;
