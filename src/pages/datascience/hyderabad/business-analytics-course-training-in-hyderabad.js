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
import { BusinessAnalyticsHyderabadCourseData } from "../../../../CityData/Hyderabad/businessAnalyticsCourseTrainingInHyderabad";
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
          Business Analyst Course in Hyderabad with IBM Certification
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll Learnbay's Business Analytics Training in Hyderabad and gain live project experience, IBM certification, and placement assistance."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Hyderabad, Business Analytics training in Hyderabad, Business Analytics institute in Hyderabad, best Business Analytics institute in Hyderabad, Business Analytics course in Hyderabad, Business Analytics certification in Hyderabad, Business Analytics training institute in Hyderabad, advanced Business Analytics course in Hyderabad, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-hyderabad"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${BusinessAnalyticsHyderabadCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BusinessAnalyticsHyderabadCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BusinessAnalyticsHyderabadCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BusinessAnalyticsHyderabadCourseData[0].script4} `,
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
          cityParaCont=" The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "
          dataScienceCounselling={true}
          titleCourse="Business Analytics Course Training In Hyderabad"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Businesss+Analytics.png"
          firstHeading="Business Analytics Course Training In Hyderabad"
          firstTopPara="Professional Business Analytics Program"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={
            BusinessAnalyticsHyderabadCourseData[0].secondSection
          }
        />
        <Testimonial
          redirectDS={true}
          Testimonial={BusinessAnalyticsHyderabadCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹  1,10,000 + 18% GST"
            FeeEmi="₹  10,817/month"
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
              ProgramHead1={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead1
              }
              ProgramBot1={BusinessAnalyticsHyderabadCourseData[0].ProgramBot1}
              ProgramBot2={BusinessAnalyticsHyderabadCourseData[0].ProgramBot2}
              ProgramHead3={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead3
              }
              ProgramBot3={BusinessAnalyticsHyderabadCourseData[0].ProgramBot3}
              ProgramBot31={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot31
              }
              ProgramBot32={
                BusinessAnalyticsHyderabadCourseData[0].ProgramBot32
              }
              ProgramHead4={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead4
              }
              ProgramBot4={BusinessAnalyticsHyderabadCourseData[0].ProgramBot4}
              ProgramHead5={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead5
              }
              ProgramBot5={BusinessAnalyticsHyderabadCourseData[0].ProgramBot5}
              ProgramHead6={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead6
              }
              ProgramBot6={BusinessAnalyticsHyderabadCourseData[0].ProgramBot6}
              ProgramHead7={
                BusinessAnalyticsHyderabadCourseData[0].ProgramHead7
              }
              ProgramBot8={BusinessAnalyticsHyderabadCourseData[0].ProgramBot8}
              ProgramBot9={BusinessAnalyticsHyderabadCourseData[0].ProgramBot9}
              DomainHead1={BusinessAnalyticsHyderabadCourseData[0].DomainHead1}
              DomainBot1={BusinessAnalyticsHyderabadCourseData[0].DomainBot1}
              DomainBot2={BusinessAnalyticsHyderabadCourseData[0].DomainBot2}
              DomainBot3={BusinessAnalyticsHyderabadCourseData[0].DomainBot3}
              DomainList1={BusinessAnalyticsHyderabadCourseData[0].DomainList1}
              DomainList2={BusinessAnalyticsHyderabadCourseData[0].DomainList2}
              DomainList3={BusinessAnalyticsHyderabadCourseData[0].DomainList3}
              DomainList4={BusinessAnalyticsHyderabadCourseData[0].DomainList4}
              DomainList5={BusinessAnalyticsHyderabadCourseData[0].DomainList5}
              DomainList6={BusinessAnalyticsHyderabadCourseData[0].DomainList6}
              DomainList7={BusinessAnalyticsHyderabadCourseData[0].DomainList7}
              DomainList8={BusinessAnalyticsHyderabadCourseData[0].DomainList8}
              DomainList9={BusinessAnalyticsHyderabadCourseData[0].DomainList9}
              DomainList10={
                BusinessAnalyticsHyderabadCourseData[0].DomainList10
              }
              Domainlink1={BusinessAnalyticsHyderabadCourseData[0].Domainlink1}
              Domainlink2={BusinessAnalyticsHyderabadCourseData[0].Domainlink2}
              Domainlink3={BusinessAnalyticsHyderabadCourseData[0].Domainlink3}
              Domainlink4={BusinessAnalyticsHyderabadCourseData[0].Domainlink4}
              Domainlink5={BusinessAnalyticsHyderabadCourseData[0].Domainlink5}
              Domainlink6={BusinessAnalyticsHyderabadCourseData[0].Domainlink6}
              Domainlink7={BusinessAnalyticsHyderabadCourseData[0].Domainlink7}
              Domainlink8={BusinessAnalyticsHyderabadCourseData[0].Domainlink8}
              Domainlink9={BusinessAnalyticsHyderabadCourseData[0].Domainlink9}
              Domainlink10={
                BusinessAnalyticsHyderabadCourseData[0].Domainlink10
              }
              CertificationHead1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationHead1
              }
              CertificationBot1={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot1
              }
              CertificationBot2={
                BusinessAnalyticsHyderabadCourseData[0].CertificationBot2
              }
              src={BusinessAnalyticsHyderabadCourseData[0].src}
              ModuleHead1={BusinessAnalyticsHyderabadCourseData[0].ModuleHead1}
              ModuleHead2={BusinessAnalyticsHyderabadCourseData[0].ModuleHead2}
              ModuleBot3={BusinessAnalyticsHyderabadCourseData[0].ModuleBot3}
              ModuleHead3={BusinessAnalyticsHyderabadCourseData[0].ModuleHead3}
              ModuleBot4={BusinessAnalyticsHyderabadCourseData[0].ModuleBot4}
              syllabush1={BusinessAnalyticsHyderabadCourseData[0].syllabush1}
              syllabusb1={BusinessAnalyticsHyderabadCourseData[0].syllabusb1}
              SyllabusBotlist11={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist16
              }
              syllabush2={BusinessAnalyticsHyderabadCourseData[0].syllabush2}
              syllabusb2={BusinessAnalyticsHyderabadCourseData[0].syllabusb2}
              SyllabusBotlist21={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist26
              }
              syllabush3={BusinessAnalyticsHyderabadCourseData[0].syllabush3}
              syllabusb3={BusinessAnalyticsHyderabadCourseData[0].syllabusb3}
              SyllabusBotlist31={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist36
              }
              syllabush4={BusinessAnalyticsHyderabadCourseData[0].syllabush4}
              syllabusb4={BusinessAnalyticsHyderabadCourseData[0].syllabusb4}
              SyllabusBotlist41={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                BusinessAnalyticsHyderabadCourseData[0].SyllabusBotlist46
              }
              syllabussrc={BusinessAnalyticsHyderabadCourseData[0].syllabussrc}
              JobHead1={BusinessAnalyticsHyderabadCourseData[0].JobHead1}
              JobBot1={BusinessAnalyticsHyderabadCourseData[0].JobBot1}
              JobBot2={BusinessAnalyticsHyderabadCourseData[0].JobBot2}
              JobBot5={BusinessAnalyticsHyderabadCourseData[0].JobBot5}
              JobHead2={BusinessAnalyticsHyderabadCourseData[0].JobHead2}
              JobBot3={BusinessAnalyticsHyderabadCourseData[0].JobBot3}
              JobBot4={BusinessAnalyticsHyderabadCourseData[0].JobBot4}
              JobBot6={BusinessAnalyticsHyderabadCourseData[0].JobBot6}
              ProjectsBot1={BusinessAnalyticsHyderabadCourseData[0].ProgramBot1}
              ProjectsBot2={BusinessAnalyticsHyderabadCourseData[0].ProgramBot2}
              src1={BusinessAnalyticsHyderabadCourseData[0].src1}
              ProjectsH1={BusinessAnalyticsHyderabadCourseData[0].ProjectsH1}
              Projectsp1={BusinessAnalyticsHyderabadCourseData[0].Projectsp1}
              src2={BusinessAnalyticsHyderabadCourseData[0].src2}
              ProjectsH2={BusinessAnalyticsHyderabadCourseData[0].ProjectsH2}
              Projectsp2={BusinessAnalyticsHyderabadCourseData[0].Projectsp2}
              src3={BusinessAnalyticsHyderabadCourseData[0].src3}
              ProjectsH3={BusinessAnalyticsHyderabadCourseData[0].ProjectsH3}
              Projectsp3={BusinessAnalyticsHyderabadCourseData[0].Projectsp3}
              src4={BusinessAnalyticsHyderabadCourseData[0].src4}
              ProjectsH4={BusinessAnalyticsHyderabadCourseData[0].ProjectsH4}
              Projectsp4={BusinessAnalyticsHyderabadCourseData[0].Projectsp4}
              AlumniBot1={BusinessAnalyticsHyderabadCourseData[0].AlumniBot1}
              Asrc1={BusinessAnalyticsHyderabadCourseData[0].Asrc1}
              AlumniH1={BusinessAnalyticsHyderabadCourseData[0].AlumniH1}
              Alumnip1={BusinessAnalyticsHyderabadCourseData[0].Alumnip1}
              Asrc2={BusinessAnalyticsHyderabadCourseData[0].Asrc2}
              AlumniH2={BusinessAnalyticsHyderabadCourseData[0].AlumniH2}
              Alumnip2={BusinessAnalyticsHyderabadCourseData[0].Alumnip2}
              Asrc3={BusinessAnalyticsHyderabadCourseData[0].Asrc3}
              AlumniH3={BusinessAnalyticsHyderabadCourseData[0].AlumniH3}
              Alumnip3={BusinessAnalyticsHyderabadCourseData[0].Alumnip3}
              Asrc4={BusinessAnalyticsHyderabadCourseData[0].Asrc4}
              AlumniH4={BusinessAnalyticsHyderabadCourseData[0].AlumniH4}
              Alumnip4={BusinessAnalyticsHyderabadCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew
                FAQNewData={BusinessAnalyticsHyderabadCourseData[0].faq}
              />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BusinessAnalyticsHyderabadCourseData[0].CityTextB}
          CityText={BusinessAnalyticsHyderabadCourseData[0].CityText}
          CityTextLB={BusinessAnalyticsHyderabadCourseData[0].CityTextLB}
          CityTextL={BusinessAnalyticsHyderabadCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
