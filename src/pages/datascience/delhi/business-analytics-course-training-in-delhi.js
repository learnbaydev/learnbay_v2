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
  import("../../../../components/SEO/CitiesLeft/CitiesLeftDomain")
);
const CitiesRight = dynamic(() =>
  import("../../../../components/SEO/CitiesRight/CitiesRightdomain")
);
import { BADelhiCourseData } from "../../../../CityData/Delhi/BusinessAnalyticsCourseTrainingDelhiData";
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
        <title>Business Analyst Course in Delhi with IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Extensive Business Analyst Training Program in Delhi will help you to enhance your business analyst skills with IBM certification. Sign-up Today."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Delhi, Business Analytics training in Delhi, Business Analytics institute in Delhi, best Business Analytics institute in Delhi, Business Analytics course in Delhi, Business Analytics certification in Delhi, Business Analytics training institute in Delhi, advanced Business Analytics course in Delhi, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-delhi"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
        />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
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
            __html: `${BADelhiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BADelhiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BADelhiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BADelhiCourseData[0].script4} `,
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
          titleCourse="Business Analytics Course in Delhi"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          idss="4j80WXLTvGE"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+header+image.webp"
          firstToparaImg="Training In Delhi"
          firstHeading="Business Analytics Course "
          firstTopPara="Industry-oriented business analytics program co-developed by IBM"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future. "

        />
        <SecondSection SecondSectionData={BADelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={BADelhiCourseData[0].testimonial}
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
             ProgramHead1={BADelhiCourseData[0].ProgramHead1}
              ProgramBot1={BADelhiCourseData[0].ProgramBot1}
              ProgramBot2={BADelhiCourseData[0].ProgramBot2}
              ProgramHead3={BADelhiCourseData[0].ProgramHead3}
              ProgramHead4={BADelhiCourseData[0].ProgramHead4}
              ProgramBot3={BADelhiCourseData[0].ProgramBot3}
              ProgramBot31={BADelhiCourseData[0].ProgramBot31}
              ProgramBot32={BADelhiCourseData[0].ProgramBot32}
              ProgramBot4={BADelhiCourseData[0].ProgramBot4}
              ProgramBot5={BADelhiCourseData[0].ProgramBot5}
              ProgramBot6={BADelhiCourseData[0].ProgramBot6}
              ProgramBot8={BADelhiCourseData[0].ProgramBot8}
              ProgramBot9={BADelhiCourseData[0].ProgramBot9}
              ProgramBot10={BADelhiCourseData[0].ProgramBot10}
              Courselink1={BADelhiCourseData[0].Courselink1}
              Courselink2={BADelhiCourseData[0].Courselink2}
              Courselink3={BADelhiCourseData[0].Courselink3}
              Courselink4={BADelhiCourseData[0].Courselink4}
              Courselink5={BADelhiCourseData[0].Courselink5}
              Course1={BADelhiCourseData[0].Course1}
              Course2={BADelhiCourseData[0].Course2}
              Course3={BADelhiCourseData[0].Course3}
              Course4={BADelhiCourseData[0].Course4}
              Course5={BADelhiCourseData[0].Course5}
              DomainHead1={BADelhiCourseData[0].DomainHead1}
              DomainBot1={BADelhiCourseData[0].DomainBot1}
              DomainBot2={BADelhiCourseData[0].DomainBot2}
              DomainBot3={BADelhiCourseData[0].DomainBot3}
              DomainList1={BADelhiCourseData[0].DomainList1}
              DomainList2={BADelhiCourseData[0].DomainList2}
              DomainList3={BADelhiCourseData[0].DomainList3}
              DomainList4={BADelhiCourseData[0].DomainList4}
              DomainList5={BADelhiCourseData[0].DomainList5}
              DomainList6={BADelhiCourseData[0].DomainList6}
              DomainList7={BADelhiCourseData[0].DomainList7}
              DomainList8={BADelhiCourseData[0].DomainList8}
              DomainList9={BADelhiCourseData[0].DomainList9}
              DomainList10={BADelhiCourseData[0].DomainList10}
              Domainlink1={BADelhiCourseData[0].Domainlink1}
              Domainlink2={BADelhiCourseData[0].Domainlink2}
              Domainlink3={BADelhiCourseData[0].Domainlink3}
              Domainlink4={BADelhiCourseData[0].Domainlink4}
              Domainlink5={BADelhiCourseData[0].Domainlink5}
              Domainlink6={BADelhiCourseData[0].Domainlink6}
              Domainlink7={BADelhiCourseData[0].Domainlink7}
              Domainlink8={BADelhiCourseData[0].Domainlink8}
              Domainlink9={BADelhiCourseData[0].Domainlink9}
              Domainlink10={BADelhiCourseData[0].Domainlink10}
              CertificationHead1={BADelhiCourseData[0].CertificationHead1}
              CertificationBot1={BADelhiCourseData[0].CertificationBot1}
              CertificationBot2={BADelhiCourseData[0].CertificationBot2}
              src={BADelhiCourseData[0].src}
              src22={BADelhiCourseData[0].src22}
              src33={BADelhiCourseData[0].src33}
             ModuleHead1={BADelhiCourseData[0].ModuleHead1}
              ModuleBot1={BADelhiCourseData[0].ModuleBot1}
              ModuleBot2={BADelhiCourseData[0].ModuleBot2}
              ModuleBot3={BADelhiCourseData[0].ModuleBot3}
              ModuleHead3={BADelhiCourseData[0] .ModuleHead3}
              ModuleBot4={BADelhiCourseData[0].ModuleBot4}
              ModuleHead2={BADelhiCourseData[0].ModuleHead2}
              syllabush1={BADelhiCourseData[0].syllabush1}
              syllabusb1={BADelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={BADelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BADelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BADelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BADelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BADelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BADelhiCourseData[0].SyllabusBotlist16}
              syllabush2={BADelhiCourseData[0].syllabush2}
              syllabusb2={BADelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={BADelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BADelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BADelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BADelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BADelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BADelhiCourseData[0].SyllabusBotlist26}
              syllabush3={BADelhiCourseData[0].syllabush3}
              syllabusb3={BADelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={BADelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BADelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BADelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BADelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BADelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BADelhiCourseData[0].SyllabusBotlist36}
              syllabush4={BADelhiCourseData[0].syllabush4}
              syllabusb4={BADelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={BADelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BADelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BADelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BADelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BADelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BADelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={BADelhiCourseData[0].syllabussrc}
              JobHead1={BADelhiCourseData[0].JobHead1}
              JobBot1={BADelhiCourseData[0].JobBot1}
              JobBot2={BADelhiCourseData[0].JobBot2}
              JobBot3={BADelhiCourseData[0].JobBot3}
              JobHead3={BADelhiCourseData[0].JobHead3}

              JobHead2={BADelhiCourseData[0].JobHead2}
              JobBot5={BADelhiCourseData[0].JobBot5}
              JobBot4={BADelhiCourseData[0].JobBot4}
              JobBot6={BADelhiCourseData[0].JobBot6}
              ProjectsBot1={BADelhiCourseData[0].ProjectsBot1}
              ProjectsBot2={BADelhiCourseData[0].ProjectsBot2}
              src1={BADelhiCourseData[0].src1}
              ProjectsHead1={BADelhiCourseData[0].ProjectsHead1}
              ProjectsH1={BADelhiCourseData[0].ProjectsH1}
              Projectsp1={BADelhiCourseData[0].Projectsp1}
              src2={BADelhiCourseData[0].src2}
              ProjectsH2={BADelhiCourseData[0].ProjectsH2}
              Projectsp2={BADelhiCourseData[0].Projectsp2}
              src3={BADelhiCourseData[0].src3}
              ProjectsH3={BADelhiCourseData[0].ProjectsH3}
              Projectsp3={BADelhiCourseData[0].Projectsp3}
              src4={BADelhiCourseData[0].src4}
              ProjectsH4={BADelhiCourseData[0].ProjectsH4}
              Projectsp4={BADelhiCourseData[0].Projectsp4}
              AlumniBot1={BADelhiCourseData[0].AlumniBot1}
              Asrc1={BADelhiCourseData[0].Asrc1}
              AlumniH1={BADelhiCourseData[0].AlumniH1}
              Alumnip1={BADelhiCourseData[0].Alumnip1}
              Asrc2={BADelhiCourseData[0].Asrc2}
              AlumniH2={BADelhiCourseData[0].AlumniH2}
              Alumnip2={BADelhiCourseData[0].Alumnip2}
              Asrc3={BADelhiCourseData[0].Asrc3}
              AlumniH3={BADelhiCourseData[0].AlumniH3}
              Alumnip3={BADelhiCourseData[0].Alumnip3}
              Asrc4={BADelhiCourseData[0].Asrc4}
              AlumniH4={BADelhiCourseData[0].AlumniH4}
              Alumnip4={BADelhiCourseData[0].Alumnip4}
              alt1={BADelhiCourseData[0].alt1}
              alt2={BADelhiCourseData[0].alt2}
              alt3={BADelhiCourseData[0].alt3}
              alt4={BADelhiCourseData[0].alt4}
              alt5={BADelhiCourseData[0].alt5}
              alt6={BADelhiCourseData[0].alt6}
              alt7={BADelhiCourseData[0].alt7}
              alt8={BADelhiCourseData[0].alt8}
              alt9={BADelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={BADelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BADelhiCourseData[0].CityTextB}
          CityText={BADelhiCourseData[0].CityText}
          CityTextLB={BADelhiCourseData[0].CityTextLB}
          CityTextL={BADelhiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
