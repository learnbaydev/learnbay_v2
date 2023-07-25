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
import { AIMumbaiCourseData } from "../../../../CityData/Mumbai/artificialIntelligenceAiCourseTrainingMumbaiData";
const FAQNew = dynamic(() =>
  import("../../../../components/CoursePage/FAQNew/FAQNew")
);
import Popup from "../../../../components/Popup/Popup";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import Form from "../../../../components/Form/Form";
import React, { useState } from "react";
import Testimonial from "../../../../components/HomePage/Testimonial/Testimonial";
import FeeSection from "../../../../components/CoursePage/FeeSection/FeeSection";

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {" "}
          Artificial Intelligence Course in Mumbai with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay provides Artificial Intelligence Training in Mumbai For Managers and Leaders. Our courses are affordable and flexible. Enroll Now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Mumbai, Artificial Intelligence training in Mumbai, Artificial Intelligence institute in Mumbai, best Artificial Intelligence institute in Mumbai, Artificial Intelligence course in Mumbai, Artificial Intelligence certification in Mumbai, Artificial Intelligence training institute in Mumbai, advanced Artificial Intelligence course in Mumbai, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Training in Mumbai"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${AIMumbaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIMumbaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIMumbaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIMumbaiCourseData[0].script4} `,
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
            <Form popup={true} setTrigger={setPopups} dataScience={true} />
          </div>
        </Popup>
        <FirstSection
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AIML-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Course Training in Mumbai"
          firstTopPara="Job-oriented Data Science Training for working professionals"
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        />
        <SecondSection
          SecondSectionData={AIMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={AIMumbaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹ 1,10,000 + 18% GST"
            FeeEmi="₹ 10,817/month"
            FeeHeading="Program Fee & Financing"
            FeeContent2="No cost EMI"
            FeeContent3="Flexible payment"
            FeeContent4="Easy loan procedure"
            FeeContent5="15 days refund policy"
            dataScienceCounselling={true}
          />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              ProgramBot1={AIMumbaiCourseData[0].ProgramBot1}
              ProgramHead3={AIMumbaiCourseData[0].ProgramHead3}
              ProgramBot3={AIMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={AIMumbaiCourseData[0].ProgramBot31}
              ProgramBot4={AIMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={AIMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={AIMumbaiCourseData[0].ProgramBot6}
              Courselink1={AIMumbaiCourseData[0].Courselink1}
              Courselink2={AIMumbaiCourseData[0].Courselink2}
              Courselink3={AIMumbaiCourseData[0].Courselink3}
              Courselink4={AIMumbaiCourseData[0].Courselink4}
              Courselink5={AIMumbaiCourseData[0].Courselink5}
              Course1={AIMumbaiCourseData[0].Course1}
              Course2={AIMumbaiCourseData[0].Course2}
              Course3={AIMumbaiCourseData[0].Course3}
              Course4={AIMumbaiCourseData[0].Course4}
              Course5={AIMumbaiCourseData[0].Course5}
              DomainHead1={AIMumbaiCourseData[0].DomainHead1}
              DomainBot1={AIMumbaiCourseData[0].DomainBot1}
              DomainBot2={AIMumbaiCourseData[0].DomainBot2}
              DomainBot3={AIMumbaiCourseData[0].DomainBot3}
              DomainList1={AIMumbaiCourseData[0].DomainList1}
              DomainList2={AIMumbaiCourseData[0].DomainList2}
              DomainList3={AIMumbaiCourseData[0].DomainList3}
              DomainList4={AIMumbaiCourseData[0].DomainList4}
              DomainList5={AIMumbaiCourseData[0].DomainList5}
              DomainList6={AIMumbaiCourseData[0].DomainList6}
              DomainList7={AIMumbaiCourseData[0].DomainList7}
              DomainList8={AIMumbaiCourseData[0].DomainList8}
              DomainList9={AIMumbaiCourseData[0].DomainList9}
              DomainList10={AIMumbaiCourseData[0].DomainList10}
              Domainlink1={AIMumbaiCourseData[0].Domainlink1}
              Domainlink2={AIMumbaiCourseData[0].Domainlink2}
              Domainlink3={AIMumbaiCourseData[0].Domainlink3}
              Domainlink4={AIMumbaiCourseData[0].Domainlink4}
              Domainlink5={AIMumbaiCourseData[0].Domainlink5}
              Domainlink6={AIMumbaiCourseData[0].Domainlink6}
              Domainlink7={AIMumbaiCourseData[0].Domainlink7}
              Domainlink8={AIMumbaiCourseData[0].Domainlink8}
              Domainlink9={AIMumbaiCourseData[0].Domainlink9}
              Domainlink10={AIMumbaiCourseData[0].Domainlink10}
              CertificationBot1={AIMumbaiCourseData[0].CertificationBot1}
              src={AIMumbaiCourseData[0].src}
              src22={AIMumbaiCourseData[0].src22}
              src33={AIMumbaiCourseData[0].src33}
              ModuleBot1={AIMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={AIMumbaiCourseData[0].ModuleBot2}
              syllabush1={AIMumbaiCourseData[0].syllabush1}
              syllabusb1={AIMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={AIMumbaiCourseData[0].syllabush2}
              syllabusb2={AIMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={AIMumbaiCourseData[0].syllabush3}
              syllabusb3={AIMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={AIMumbaiCourseData[0].syllabush4}
              syllabusb4={AIMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIMumbaiCourseData[0].syllabussrc}
              JobBot1={AIMumbaiCourseData[0].JobBot1}
              JobHead2={AIMumbaiCourseData[0].JobHead2}
              JobBot3={AIMumbaiCourseData[0].JobBot3}
              JobBot4={AIMumbaiCourseData[0].JobBot4}
              ProjectsBot1={AIMumbaiCourseData[0].ProgramBot1}
              src1={AIMumbaiCourseData[0].src1}
              ProjectsH1={AIMumbaiCourseData[0].ProjectsH1}
              Projectsp1={AIMumbaiCourseData[0].Projectsp1}
              src2={AIMumbaiCourseData[0].src2}
              ProjectsH2={AIMumbaiCourseData[0].ProjectsH2}
              Projectsp2={AIMumbaiCourseData[0].Projectsp2}
              src3={AIMumbaiCourseData[0].src3}
              ProjectsH3={AIMumbaiCourseData[0].ProjectsH3}
              Projectsp3={AIMumbaiCourseData[0].Projectsp3}
              src4={AIMumbaiCourseData[0].src4}
              ProjectsH4={AIMumbaiCourseData[0].ProjectsH4}
              Projectsp4={AIMumbaiCourseData[0].Projectsp4}
              AlumniBot1={AIMumbaiCourseData[0].AlumniBot1}
              Asrc1={AIMumbaiCourseData[0].Asrc1}
              AlumniH1={AIMumbaiCourseData[0].AlumniH1}
              Alumnip1={AIMumbaiCourseData[0].Alumnip1}
              Asrc2={AIMumbaiCourseData[0].Asrc2}
              AlumniH2={AIMumbaiCourseData[0].AlumniH2}
              Alumnip2={AIMumbaiCourseData[0].Alumnip2}
              Asrc3={AIMumbaiCourseData[0].Asrc3}
              AlumniH3={AIMumbaiCourseData[0].AlumniH3}
              Alumnip3={AIMumbaiCourseData[0].Alumnip3}
              Asrc4={AIMumbaiCourseData[0].Asrc4}
              AlumniH4={AIMumbaiCourseData[0].AlumniH4}
              Alumnip4={AIMumbaiCourseData[0].Alumnip4}
              alt1={AIMumbaiCourseData[0].alt1}
              alt2={AIMumbaiCourseData[0].alt2}
              alt3={AIMumbaiCourseData[0].alt3}
              alt4={AIMumbaiCourseData[0].alt4}
              alt5={AIMumbaiCourseData[0].alt5}
              alt6={AIMumbaiCourseData[0].alt6}
              alt7={AIMumbaiCourseData[0].alt7}
              alt8={AIMumbaiCourseData[0].alt8}
              alt9={AIMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIMumbaiCourseData[0].CityTextB}
          CityText={AIMumbaiCourseData[0].CityText}
          CityTextLB={AIMumbaiCourseData[0].CityTextLB}
          CityTextL={AIMumbaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}