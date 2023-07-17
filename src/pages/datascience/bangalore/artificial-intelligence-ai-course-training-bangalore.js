import Head from "next/head";
import styles from "../../../styles/Home.module.css";
import dynamic from "next/dynamic";
const FirstSection = dynamic(() =>
  import("../../../../components/CoursePage/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../../../components/CoursePage/SecondSection/SecondSection")
);
const ProgramInfo = dynamic(() =>
  import("../../../../components/SEO/ProgramInfo/ProgramInfo")
);
const SeventhSection = dynamic(() =>
  import("../../../../components/Global/SeventhSection/SeventhSection")
);
const ProgramFee = dynamic(() =>
  import("../../../../components/SEO/ProgramInfo/ProgramFee/ProgramFee")
);
const CityText = dynamic(() =>
  import("../../../../components/SEO/CityText/CityText")
);
const CitiesLeft = dynamic(() =>
  import("../../../../components/SEO/CitiesLeft/CitiesLeft")
);
const CitiesRight = dynamic(() =>
  import("../../../../components/SEO/CitiesRight/CitiesRight")
);
import { DataScienceCourseData } from "../../../../CityData/Bangalore/artificialIntelligenceAiCourseTrainingBangaloreData";
const FAQNew = dynamic(() =>
  import("../../../../components/CoursePage/FAQNew/FAQNew")
);
import Popup from "../../../../components/Popup/Popup";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Form from "../../../../components/Form/Form";
import React, { useState } from "react";
import Testimonial from "../../../../components/HomePage/Testimonial/Testimonial";
// import {
//   ArtificialFaqDataB,
//   ArtificialDomainFaqDataB,
//   ArtificialPaymentFaqDataB,
//   ArtificialCapstoneFaqDataB,
//   ArtificialCertificationFaqDataB,
//   ArtificialjobFaqDataB,
//   ArtificialMentorshipFaqDataB,
//   ArtificialSupportFaqDataB,
// } from "../components/FAQ/FaqDataCity";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Artificial Intelligence Course in Bangalore | Artificial Intelligence
          Training in Bangalore
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Artificial Intelligence Course in Bangalore. Learnbay is Advanced Artificial Intelligence Course Training Institute in Bangalore. Artificial Intelligence course in Bangalore will enhance your career"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Bangalore, Artificial Intelligence training in Bangalore, Artificial Intelligence institute in Bangalore, best Artificial Intelligence institute in Bangalore, Artificial Intelligence course in Bangalore, Artificial Intelligence certification in Bangalore, Artificial Intelligence training institute in Bangalore, advanced Artificial Intelligence course in Bangalore, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
 "@context": "https://schema.org/", 
 "@type": "HowTo", 
 "name": "How to apply for data science course?",
 "description": "You just have to follow 3 easy steps to enroll in our advanced data science course",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "totalTime": "PT6M",
 "estimatedCost": {
 "@type": "MonetaryAmount",
 "currency": "INR",
 "value": "6"
 },
 "supply": {
 "@type": "HowToSupply",
 "name": "We provide artificial intelligence ai course training in bangalore"
 },
 "tool": {
 "@type": "HowToTool",
 "name": "Data science, machine learning, artificial intelligence, data analytics"
 },
 "step": [{
 "@type": "HowToStep",
 "text": "Visit our website and fill the enquiry form",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "name": "Fill Enquiry Form",
 "url": "https://www.learnbay.co/data-science-course/"
 },{
 "@type": "HowToStep",
 "text": "Talk to our experts for career counseling",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course.learnbay.co/NImages/data-science-ai-for-managers.png",
 "name": "Talk to Expert",
 "url": "https://www.learnbay.co/data-science-course/"
 },{
 "@type": "HowToStep",
 "text": "Get enrollment in our data science course",
 "image": "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/home-page-header.webp",
 "name": "Get enrollment",
 "url": "https://www.learnbay.co/"
 }] 

  }
} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${DataScienceCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceCourseData[0].script3} `,
          }}
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScience={true} />
        <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
          <div className="leftPopup">
            <div className="whiteP" />
          </div>
          <div className="RightPopup">
            <h5>Apply For Counselling</h5>
            {/* <p>Fill the below details to get started</p> */}
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          idss="bfl64ANfSV0"
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Managers+%26+Leaders.png"
          firstToparaImg="Training in Bangalore"
          firstHeading="Artificial Intelligence (AI)"
          firstTopPara="Industry Curated Artificial Intelligence Program"
          srcD="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          alt="artificial intelligence ai course training in bangalore"
        />
        <SecondSection
          SecondSectionData={DataScienceCourseData[0].secondSection}
        />
        {/* <ProgramInfo
          p1="Global Recognition"
          p11="From IBM"
          p2="Industry Standard"
          p22="Training"
          p3="Career Assistance"
          p33="For Professionals"
          p4="Financing as low as"
          p44="₹ 10,816/month"
        /> */}
        {/* <ProgramFee
          Emi="₹ 10,816/month"
          Fee="₹ 1,10,000 + 18% GST"
          dataScience={true}
        /> */}
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1={DataScienceCourseData[0].ProgramBot1}
              ProgramHead3={DataScienceCourseData[0].ProgramHead3}
              ProgramBot3={DataScienceCourseData[0].ProgramBot3}
              ProgramBot31={DataScienceCourseData[0].ProgramBot31}
              ProgramBot4={DataScienceCourseData[0].ProgramBot4}
              ProgramBot5={DataScienceCourseData[0].ProgramBot5}
              ProgramBot6={DataScienceCourseData[0].ProgramBot6}
              Courselink1={DataScienceCourseData[0].Courselink1}
              Courselink2={DataScienceCourseData[0].Courselink2}
              Courselink3={DataScienceCourseData[0].Courselink3}
              Courselink4={DataScienceCourseData[0].Courselink4}
              Courselink5={DataScienceCourseData[0].Courselink5}
              Course1={DataScienceCourseData[0].Course1}
              Course2={DataScienceCourseData[0].Course2}
              Course3={DataScienceCourseData[0].Course3}
              Course4={DataScienceCourseData[0].Course4}
              Course5={DataScienceCourseData[0].Course5}
              DomainHead1={DataScienceCourseData[0].DomainHead1}
              DomainBot1={DataScienceCourseData[0].DomainBot1}
              DomainBot2={DataScienceCourseData[0].DomainBot2}
              DomainBot3={DataScienceCourseData[0].DomainBot3}
              DomainList1={DataScienceCourseData[0].DomainList1}
              DomainList2={DataScienceCourseData[0].DomainList2}
              DomainList3={DataScienceCourseData[0].DomainList3}
              DomainList4={DataScienceCourseData[0].DomainList4}
              DomainList5={DataScienceCourseData[0].DomainList5}
              DomainList6={DataScienceCourseData[0].DomainList6}
              DomainList7={DataScienceCourseData[0].DomainList7}
              DomainList8={DataScienceCourseData[0].DomainList8}
              DomainList9={DataScienceCourseData[0].DomainList9}
              DomainList10={DataScienceCourseData[0].DomainList10}
              Domainlink1={DataScienceCourseData[0].Domainlink1}
              Domainlink2={DataScienceCourseData[0].Domainlink2}
              Domainlink3={DataScienceCourseData[0].Domainlink3}
              Domainlink4={DataScienceCourseData[0].Domainlink4}
              Domainlink5={DataScienceCourseData[0].Domainlink5}
              Domainlink6={DataScienceCourseData[0].Domainlink6}
              Domainlink7={DataScienceCourseData[0].Domainlink7}
              Domainlink8={DataScienceCourseData[0].Domainlink8}
              Domainlink9={DataScienceCourseData[0].Domainlink9}
              Domainlink10={DataScienceCourseData[0].Domainlink10}
              CertificationBot1={DataScienceCourseData[0].CertificationBot1}
              src={DataScienceCourseData[0].src}
              ModuleBot1={DataScienceCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceCourseData[0].ModuleBot2}
              syllabusb1={DataScienceCourseData[0].syllabusb1}
              SyllabusBotlist11={DataScienceCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DataScienceCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DataScienceCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DataScienceCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DataScienceCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DataScienceCourseData[0].SyllabusBotlist16}
              syllabush2={DataScienceCourseData[0].syllabush2}
              syllabusb2={DataScienceCourseData[0].syllabusb2}
              SyllabusBotlist21={DataScienceCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DataScienceCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DataScienceCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DataScienceCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DataScienceCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DataScienceCourseData[0].SyllabusBotlist26}
              syllabush3={DataScienceCourseData[0].syllabush3}
              syllabusb3={DataScienceCourseData[0].syllabusb3}
              SyllabusBotlist31={DataScienceCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DataScienceCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DataScienceCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DataScienceCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DataScienceCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DataScienceCourseData[0].SyllabusBotlist36}
              syllabush4={DataScienceCourseData[0].syllabush4}
              syllabusb4={DataScienceCourseData[0].syllabusb4}
              SyllabusBotlist41={DataScienceCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DataScienceCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DataScienceCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DataScienceCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DataScienceCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DataScienceCourseData[0].SyllabusBotlist46}
              syllabussrc={DataScienceCourseData[0].syllabussrc}
              JobBot1={DataScienceCourseData[0].JobBot1}
              JobHead2={DataScienceCourseData[0].JobHead2}
              JobBot3={DataScienceCourseData[0].JobBot3}
              JobBot4={DataScienceCourseData[0].JobBot4}
              ProjectsBot1={DataScienceCourseData[0].ProgramBot1}
              src1={DataScienceCourseData[0].src1}
              ProjectsH1={DataScienceCourseData[0].ProjectsH1}
              Projectsp1={DataScienceCourseData[0].Projectsp1}
              src2={DataScienceCourseData[0].src2}
              ProjectsH2={DataScienceCourseData[0].ProjectsH2}
              Projectsp2={DataScienceCourseData[0].Projectsp2}
              src3={DataScienceCourseData[0].src3}
              ProjectsH3={DataScienceCourseData[0].ProjectsH3}
              Projectsp3={DataScienceCourseData[0].Projectsp3}
              src4={DataScienceCourseData[0].src4}
              ProjectsH4={DataScienceCourseData[0].ProjectsH4}
              Projectsp4={DataScienceCourseData[0].Projectsp4}
              AlumniBot1={DataScienceCourseData[0].AlumniBot1}
              Asrc1={DataScienceCourseData[0].Asrc1}
              AlumniH1={DataScienceCourseData[0].AlumniH1}
              Alumnip1={DataScienceCourseData[0].Alumnip1}
              Asrc2={DataScienceCourseData[0].Asrc2}
              AlumniH2={DataScienceCourseData[0].AlumniH2}
              Alumnip2={DataScienceCourseData[0].Alumnip2}
              Asrc3={DataScienceCourseData[0].Asrc3}
              AlumniH3={DataScienceCourseData[0].AlumniH3}
              Alumnip3={DataScienceCourseData[0].Alumnip3}
              Asrc4={DataScienceCourseData[0].Asrc4}
              AlumniH4={DataScienceCourseData[0].AlumniH4}
              Alumnip4={DataScienceCourseData[0].Alumnip4}
              alt1={DataScienceCourseData[0].alt1}
              alt2={DataScienceCourseData[0].alt2}
              alt3={DataScienceCourseData[0].alt3}
              alt4={DataScienceCourseData[0].alt4}
              alt5={DataScienceCourseData[0].alt5}
              alt6={DataScienceCourseData[0].alt6}
              alt7={DataScienceCourseData[0].alt7}
              alt8={DataScienceCourseData[0].alt8}
              alt9={DataScienceCourseData[0].alt9}
            />
            <FAQNew FAQNewData={DataScienceCourseData[0].faq} />
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataScienceCourseData[0].CityTextB}
          CityText={DataScienceCourseData[0].CityText}
          CityTextLB={DataScienceCourseData[0].CityTextLB}
          CityTextL={DataScienceCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
