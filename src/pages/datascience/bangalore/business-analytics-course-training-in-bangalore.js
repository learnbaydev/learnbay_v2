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
          Business Analyst Certification Course in Bangalore - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Bangalore, Business Analytics training in Bangalore, Business Analytics institute in Bangalore, best Business Analytics institute in Bangalore, Business Analytics course in Bangalore, Business Analytics certification in Bangalore, Business Analytics training institute in Bangalore, advanced Business Analytics course in Bangalore, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-bangalore"
        />
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
            __html: ` `,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceCourseData[0].script4} `,
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
          titleCourse="Business Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          idss="4j80WXLTvGE"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="Training In Bangalore"
          firstHeading="Business Analytics Master Program"
          firstTopPara="Job-ready Business Analytics Program with Live Industrial Projects"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future."
        />
        <SecondSection SecondSectionData={DataScienceCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceCourseData[0].testimonial}
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
              src22={DataScienceCourseData[0].src22}
              src33={DataScienceCourseData[0].src33}
              ModuleBot1={DataScienceCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceCourseData[0].ModuleBot2}
              syllabush1={DataScienceCourseData[0].syllabush1}
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
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceCourseData[0].faq} />
            </div>
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
