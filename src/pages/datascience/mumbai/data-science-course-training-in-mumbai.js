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
import { DataScienceMumbaiCourseData } from "../../../../CityData/Mumbai/dataScienceCourseTrainingInMumbai";
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
        <title>Data Science Course in Mumbai With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in Learnbay's Data Science Training in Mumbai to stay ahead in this competitive field. Benefit from expert guidance. Start your journey now!"
        />
        <meta
          name="keywords"
          content="data science course in Mumbai, data science training in Mumbai, data science institute in Mumbai, best data science institute in Mumbai, data scientist course in Mumbai,data scientist certification in Mumbai, data science training institute in Mumbai, advanced data science course in Mumbai, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-mumbai"
        />
        <meta
          property="og:title"
          content="Data Science Course in Mumbai | Data Science Training in Mumbai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Mumbai. Learnbay is Advanced Data Science Course Training Institute in Mumbai. Data science course in Mumbai will enhance your career"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="100" />
        <meta property="og:image:width" content="256" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-course-training-in-mumbai"
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
            __html: `${DataScienceMumbaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceMumbaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceMumbaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceMumbaiCourseData[0].script4} `,
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
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Mumbai with IBM Certification. Our advanced Data Science training in Mumbai will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters to gain the most in-demand data science and AI skills."
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg="with domain specialization"
          firstHeading="Advanced Data Science and AI Program"
          firstTopPara="Specialization over generalization"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={DataScienceMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceMumbaiCourseData[0].testimonial}
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
              ProgramBot1={DataScienceMumbaiCourseData[0].ProgramBot1}
              ProgramHead3={DataScienceMumbaiCourseData[0].ProgramHead3}
              ProgramBot3={DataScienceMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={DataScienceMumbaiCourseData[0].ProgramBot31}
              ProgramBot32={DataScienceMumbaiCourseData[0].ProgramBot32}
              ProgramBot4={DataScienceMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={DataScienceMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={DataScienceMumbaiCourseData[0].ProgramBot6}
              ProgramBot8={DataScienceMumbaiCourseData[0].ProgramBot8}
              ProgramBot9={DataScienceMumbaiCourseData[0].ProgramBot9}
              ProgramBot10={DataScienceMumbaiCourseData[0].ProgramBot10}
              ProgramBot11={DataScienceMumbaiCourseData[0].ProgramBot11}
              ProgramBot12={DataScienceMumbaiCourseData[0].ProgramBot12}
              ProgramBot13={DataScienceMumbaiCourseData[0].ProgramBot13}
              ProgramBot14={DataScienceMumbaiCourseData[0].ProgramBot14}
              ProgramBot15={DataScienceMumbaiCourseData[0].ProgramBot15}
              ProgramBot16={DataScienceMumbaiCourseData[0].ProgramBot16}
              ProgramBot17={DataScienceMumbaiCourseData[0].ProgramBot17}
              ProgramBot18={DataScienceMumbaiCourseData[0].ProgramBot18}
              ProgramBot19={DataScienceMumbaiCourseData[0].ProgramBot19}
              ProgramBot20={DataScienceMumbaiCourseData[0].ProgramBot20}
              ProgramBot21={DataScienceMumbaiCourseData[0].ProgramBot21}
              ProgramBot22={DataScienceMumbaiCourseData[0].ProgramBot22}
              ProgramBot23={DataScienceMumbaiCourseData[0].ProgramBot23}
              ProgramBot24={DataScienceMumbaiCourseData[0].ProgramBot24}
              ProgramBot25={DataScienceMumbaiCourseData[0].ProgramBot25}
              ProgramBot26={DataScienceMumbaiCourseData[0].ProgramBot26}
              ProgramBot27={DataScienceMumbaiCourseData[0].ProgramBot27}
              ProgramBot28={DataScienceMumbaiCourseData[0].ProgramBot28}
              ProgramBot42={DataScienceMumbaiCourseData[0].ProgramBot42}
              ProgramBot29={DataScienceMumbaiCourseData[0].ProgramBot29}
              ProgramBot30={DataScienceMumbaiCourseData[0].ProgramBot30}
              ProgramBot33={DataScienceMumbaiCourseData[0].ProgramBot33}
              ProgramBot34={DataScienceMumbaiCourseData[0].ProgramBot34}
              ProgramBot35={DataScienceMumbaiCourseData[0].ProgramBot35}
              ProgramBot36={DataScienceMumbaiCourseData[0].ProgramBot36}
              ProgramBot37={DataScienceMumbaiCourseData[0].ProgramBot37}
              ProgramBot38={DataScienceMumbaiCourseData[0].ProgramBot38}
              ProgramBot39={DataScienceMumbaiCourseData[0].ProgramBot39}
              ProgramBot40={DataScienceMumbaiCourseData[0].ProgramBot40}
              ProgramBot41={DataScienceMumbaiCourseData[0].ProgramBot41}
              Courselink1={DataScienceMumbaiCourseData[0].Courselink1}
              Courselink2={DataScienceMumbaiCourseData[0].Courselink2}
              Courselink3={DataScienceMumbaiCourseData[0].Courselink3}
              Courselink4={DataScienceMumbaiCourseData[0].Courselink4}
              Courselink5={DataScienceMumbaiCourseData[0].Courselink5}
              Course1={DataScienceMumbaiCourseData[0].Course1}
              Course2={DataScienceMumbaiCourseData[0].Course2}
              Course3={DataScienceMumbaiCourseData[0].Course3}
              Course4={DataScienceMumbaiCourseData[0].Course4}
              Course5={DataScienceMumbaiCourseData[0].Course5}
              DomainHead1={DataScienceMumbaiCourseData[0].DomainHead1}
              DomainBot1={DataScienceMumbaiCourseData[0].DomainBot1}
              DomainBot2={DataScienceMumbaiCourseData[0].DomainBot2}
              DomainBot3={DataScienceMumbaiCourseData[0].DomainBot3}
              DomainList1={DataScienceMumbaiCourseData[0].DomainList1}
              DomainList2={DataScienceMumbaiCourseData[0].DomainList2}
              DomainList3={DataScienceMumbaiCourseData[0].DomainList3}
              DomainList4={DataScienceMumbaiCourseData[0].DomainList4}
              DomainList5={DataScienceMumbaiCourseData[0].DomainList5}
              DomainList6={DataScienceMumbaiCourseData[0].DomainList6}
              DomainList7={DataScienceMumbaiCourseData[0].DomainList7}
              DomainList8={DataScienceMumbaiCourseData[0].DomainList8}
              DomainList9={DataScienceMumbaiCourseData[0].DomainList9}
              DomainList10={DataScienceMumbaiCourseData[0].DomainList10}
              Domainlink1={DataScienceMumbaiCourseData[0].Domainlink1}
              Domainlink2={DataScienceMumbaiCourseData[0].Domainlink2}
              Domainlink3={DataScienceMumbaiCourseData[0].Domainlink3}
              Domainlink4={DataScienceMumbaiCourseData[0].Domainlink4}
              Domainlink5={DataScienceMumbaiCourseData[0].Domainlink5}
              Domainlink6={DataScienceMumbaiCourseData[0].Domainlink6}
              Domainlink7={DataScienceMumbaiCourseData[0].Domainlink7}
              Domainlink8={DataScienceMumbaiCourseData[0].Domainlink8}
              Domainlink9={DataScienceMumbaiCourseData[0].Domainlink9}
              Domainlink10={DataScienceMumbaiCourseData[0].Domainlink10}
              CertificationBot1={
                DataScienceMumbaiCourseData[0].CertificationBot1
              }
              src={DataScienceMumbaiCourseData[0].src}
              src22={DataScienceMumbaiCourseData[0].src22}
              src33={DataScienceMumbaiCourseData[0].src33}
              ModuleBot1={DataScienceMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceMumbaiCourseData[0].ModuleBot2}
              syllabush1={DataScienceMumbaiCourseData[0].syllabush1}
              syllabusb1={DataScienceMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataScienceMumbaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataScienceMumbaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataScienceMumbaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataScienceMumbaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataScienceMumbaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataScienceMumbaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataScienceMumbaiCourseData[0].syllabush2}
              syllabusb2={DataScienceMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataScienceMumbaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataScienceMumbaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataScienceMumbaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataScienceMumbaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataScienceMumbaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataScienceMumbaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataScienceMumbaiCourseData[0].syllabush3}
              syllabusb3={DataScienceMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataScienceMumbaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataScienceMumbaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataScienceMumbaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataScienceMumbaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataScienceMumbaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataScienceMumbaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataScienceMumbaiCourseData[0].syllabush4}
              syllabusb4={DataScienceMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataScienceMumbaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataScienceMumbaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataScienceMumbaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataScienceMumbaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataScienceMumbaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataScienceMumbaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataScienceMumbaiCourseData[0].syllabussrc}
              JobBot1={DataScienceMumbaiCourseData[0].JobBot1}
              JobHead2={DataScienceMumbaiCourseData[0].JobHead2}
              JobBot3={DataScienceMumbaiCourseData[0].JobBot3}
              JobBot4={DataScienceMumbaiCourseData[0].JobBot4}
              ProjectsBot1={DataScienceMumbaiCourseData[0].ProgramBot1}
              src1={DataScienceMumbaiCourseData[0].src1}
              ProjectsH1={DataScienceMumbaiCourseData[0].ProjectsH1}
              Projectsp1={DataScienceMumbaiCourseData[0].Projectsp1}
              src2={DataScienceMumbaiCourseData[0].src2}
              ProjectsH2={DataScienceMumbaiCourseData[0].ProjectsH2}
              Projectsp2={DataScienceMumbaiCourseData[0].Projectsp2}
              src3={DataScienceMumbaiCourseData[0].src3}
              ProjectsH3={DataScienceMumbaiCourseData[0].ProjectsH3}
              Projectsp3={DataScienceMumbaiCourseData[0].Projectsp3}
              src4={DataScienceMumbaiCourseData[0].src4}
              ProjectsH4={DataScienceMumbaiCourseData[0].ProjectsH4}
              Projectsp4={DataScienceMumbaiCourseData[0].Projectsp4}
              AlumniBot1={DataScienceMumbaiCourseData[0].AlumniBot1}
              Asrc1={DataScienceMumbaiCourseData[0].Asrc1}
              AlumniH1={DataScienceMumbaiCourseData[0].AlumniH1}
              Alumnip1={DataScienceMumbaiCourseData[0].Alumnip1}
              Asrc2={DataScienceMumbaiCourseData[0].Asrc2}
              AlumniH2={DataScienceMumbaiCourseData[0].AlumniH2}
              Alumnip2={DataScienceMumbaiCourseData[0].Alumnip2}
              Asrc3={DataScienceMumbaiCourseData[0].Asrc3}
              AlumniH3={DataScienceMumbaiCourseData[0].AlumniH3}
              Alumnip3={DataScienceMumbaiCourseData[0].Alumnip3}
              Asrc4={DataScienceMumbaiCourseData[0].Asrc4}
              AlumniH4={DataScienceMumbaiCourseData[0].AlumniH4}
              Alumnip4={DataScienceMumbaiCourseData[0].Alumnip4}
              alt1={DataScienceMumbaiCourseData[0].alt1}
              alt2={DataScienceMumbaiCourseData[0].alt2}
              alt3={DataScienceMumbaiCourseData[0].alt3}
              alt4={DataScienceMumbaiCourseData[0].alt4}
              alt5={DataScienceMumbaiCourseData[0].alt5}
              alt6={DataScienceMumbaiCourseData[0].alt6}
              alt7={DataScienceMumbaiCourseData[0].alt7}
              alt8={DataScienceMumbaiCourseData[0].alt8}
              alt9={DataScienceMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataScienceMumbaiCourseData[0].CityTextB}
          CityText={DataScienceMumbaiCourseData[0].CityText}
          CityTextLB={DataScienceMumbaiCourseData[0].CityTextLB}
          CityTextL={DataScienceMumbaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
