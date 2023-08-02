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
import { DAMumbaiCourseData } from "../../../../CityData/Mumbai/DataAnalyticsCourseTrainingMumbaiData";
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
          Best IBM Certified Data Analytics Course in Mumbai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join our comprehensive Data Analytics Training program in Mumbai to become a highly-skilled Data Analyst. Don't wait, Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Mumbai, Data Analytics training in Mumbai, Data Analytics institute in Mumbai, best Data Analytics institute in Mumbai, Data Analytics course in Mumbai, Data Analytics certification in Mumbai, Data Analytics training institute in Mumbai, advanced Data Analytics course in Mumbai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-mumbai"
        />
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
            __html: `${DAMumbaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAMumbaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAMumbaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAMumbaiCourseData[0].script4} `,
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
          titleCourse="Data Analytics Master Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
          idss="y_0IdhFKJKM"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Mumbai"
          firstTopPara="In Collaboration with IBM"
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        />
        <SecondSection
          SecondSectionData={DAMumbaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DAMumbaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹ 79,000 + 18% GST"
            FeeEmi="₹ 7,768/month"
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
            ProgramHead1={DAMumbaiCourseData[0].ProgramHead1}
            ProgramHead2={DAMumbaiCourseData[0].ProgramHead2}
              ProgramBot1={DAMumbaiCourseData[0].ProgramBot1}
              ProgramBot2={DAMumbaiCourseData[0].ProgramBot2}
              ProgramHead3={DAMumbaiCourseData[0].ProgramHead3}
              ProgramHead4={DAMumbaiCourseData[0].ProgramHead4}
              ProgramBot3={DAMumbaiCourseData[0].ProgramBot3}
              ProgramBot31={DAMumbaiCourseData[0].ProgramBot31}
              ProgramBot32={DAMumbaiCourseData[0].ProgramBot32}
              ProgramBot4={DAMumbaiCourseData[0].ProgramBot4}
              ProgramBot5={DAMumbaiCourseData[0].ProgramBot5}
              ProgramBot6={DAMumbaiCourseData[0].ProgramBot6}
              ProgramBot7={DAMumbaiCourseData[0].ProgramBot7}
              ProgramBot8={DAMumbaiCourseData[0].ProgramBot8}
              ProgramBot9={DAMumbaiCourseData[0].ProgramBot9}
              ProgramBot10={DAMumbaiCourseData[0].ProgramBot10}
              ProgramBot11={DAMumbaiCourseData[0].ProgramBot11}
              ProgramBot12={DAMumbaiCourseData[0].ProgramBot12}
              ProgramBot13={DAMumbaiCourseData[0].ProgramBot13}
              ProgramBot14={DAMumbaiCourseData[0].ProgramBot14}
              ProgramBot15={DAMumbaiCourseData[0].ProgramBot15}
              ProgramBot16={DAMumbaiCourseData[0].ProgramBot16}
              Courselink1={DAMumbaiCourseData[0].Courselink1}
              Courselink2={DAMumbaiCourseData[0].Courselink2}
              Courselink3={DAMumbaiCourseData[0].Courselink3}
              Courselink4={DAMumbaiCourseData[0].Courselink4}
              Courselink5={DAMumbaiCourseData[0].Courselink5}
              Course1={DAMumbaiCourseData[0].Course1}
              Course2={DAMumbaiCourseData[0].Course2}
              Course3={DAMumbaiCourseData[0].Course3}
              Course4={DAMumbaiCourseData[0].Course4}
              Course5={DAMumbaiCourseData[0].Course5}
              DomainHead1={DAMumbaiCourseData[0].DomainHead1}
              DomainBot1={DAMumbaiCourseData[0].DomainBot1}
              DomainBot2={DAMumbaiCourseData[0].DomainBot2}
              DomainBot3={DAMumbaiCourseData[0].DomainBot3}
              DomainList1={DAMumbaiCourseData[0].DomainList1}
              DomainList2={DAMumbaiCourseData[0].DomainList2}
              DomainList3={DAMumbaiCourseData[0].DomainList3}
              DomainList4={DAMumbaiCourseData[0].DomainList4}
              DomainList5={DAMumbaiCourseData[0].DomainList5}
              DomainList6={DAMumbaiCourseData[0].DomainList6}
              DomainList7={DAMumbaiCourseData[0].DomainList7}
              DomainList8={DAMumbaiCourseData[0].DomainList8}
              DomainList9={DAMumbaiCourseData[0].DomainList9}
              DomainList10={DAMumbaiCourseData[0].DomainList10}
              Domainlink1={DAMumbaiCourseData[0].Domainlink1}
              Domainlink2={DAMumbaiCourseData[0].Domainlink2}
              Domainlink3={DAMumbaiCourseData[0].Domainlink3}
              Domainlink4={DAMumbaiCourseData[0].Domainlink4}
              Domainlink5={DAMumbaiCourseData[0].Domainlink5}
              Domainlink6={DAMumbaiCourseData[0].Domainlink6}
              Domainlink7={DAMumbaiCourseData[0].Domainlink7}
              Domainlink8={DAMumbaiCourseData[0].Domainlink8}
              Domainlink9={DAMumbaiCourseData[0].Domainlink9}
              Domainlink10={DAMumbaiCourseData[0].Domainlink10}
              CertificationHead1={DAMumbaiCourseData[0].CertificationHead1}
              CertificationBot1={DAMumbaiCourseData[0].CertificationBot1}
              CertificationBot2={DAMumbaiCourseData[0].CertificationBot2}
              src={DAMumbaiCourseData[0].src}
              src22={DAMumbaiCourseData[0].src22}
              ModuleHead1={DAMumbaiCourseData[0].ModuleHead1}
              ModuleHead4={DAMumbaiCourseData[0].ModuleHead4}
              ModuleBot1={DAMumbaiCourseData[0].ModuleBot1}
              ModuleBot2={DAMumbaiCourseData[0].ModuleBot2}
              ModuleBot3={DAMumbaiCourseData[0].ModuleBot3}
              ModuleBot4={DAMumbaiCourseData[0].ModuleBot4}
              ModuleHead2={DAMumbaiCourseData[0].ModuleHead2}
              syllabush1={DAMumbaiCourseData[0].syllabush1}
              syllabusb1={DAMumbaiCourseData[0].syllabusb1}
              SyllabusBotlist11={DAMumbaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAMumbaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAMumbaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAMumbaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAMumbaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAMumbaiCourseData[0].SyllabusBotlist16}
              syllabush2={DAMumbaiCourseData[0].syllabush2}
              syllabusb2={DAMumbaiCourseData[0].syllabusb2}
              SyllabusBotlist21={DAMumbaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAMumbaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAMumbaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAMumbaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAMumbaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAMumbaiCourseData[0].SyllabusBotlist26}
              syllabush3={DAMumbaiCourseData[0].syllabush3}
              syllabusb3={DAMumbaiCourseData[0].syllabusb3}
              SyllabusBotlist31={DAMumbaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAMumbaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAMumbaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAMumbaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAMumbaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAMumbaiCourseData[0].SyllabusBotlist36}
              syllabush4={DAMumbaiCourseData[0].syllabush4}
              syllabusb4={DAMumbaiCourseData[0].syllabusb4}
              SyllabusBotlist41={DAMumbaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAMumbaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAMumbaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAMumbaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAMumbaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAMumbaiCourseData[0].SyllabusBotlist46}
              syllabussrc={DAMumbaiCourseData[0].syllabussrc}
              JobHead1={DAMumbaiCourseData[0].JobHead1}
              JobBot1={DAMumbaiCourseData[0].JobBot1}
              JobBot2={DAMumbaiCourseData[0].JobBot2}
              JobHead2={DAMumbaiCourseData[0].JobHead2}
              JobHead3={DAMumbaiCourseData[0].JobHead3}
              JobBot3={DAMumbaiCourseData[0].JobBot3}
              JobBot4={DAMumbaiCourseData[0].JobBot4}
              JobBot6={DAMumbaiCourseData[0].JobBot6}
              ProjectsBot1={DAMumbaiCourseData[0].ProjectsBot1}
              src1={DAMumbaiCourseData[0].src1}
              ProjectsH1={DAMumbaiCourseData[0].ProjectsH1}
              Projectsp1={DAMumbaiCourseData[0].Projectsp1}
              src2={DAMumbaiCourseData[0].src2}
              ProjectsH2={DAMumbaiCourseData[0].ProjectsH2}
              Projectsp2={DAMumbaiCourseData[0].Projectsp2}
              src3={DAMumbaiCourseData[0].src3}
              ProjectsH3={DAMumbaiCourseData[0].ProjectsH3}
              Projectsp3={DAMumbaiCourseData[0].Projectsp3}
              src4={DAMumbaiCourseData[0].src4}
              ProjectsH4={DAMumbaiCourseData[0].ProjectsH4}
              Projectsp4={DAMumbaiCourseData[0].Projectsp4}
              AlumniBot1={DAMumbaiCourseData[0].AlumniBot1}
              Asrc1={DAMumbaiCourseData[0].Asrc1}
              AlumniH1={DAMumbaiCourseData[0].AlumniH1}
              Alumnip1={DAMumbaiCourseData[0].Alumnip1}
              Asrc2={DAMumbaiCourseData[0].Asrc2}
              AlumniH2={DAMumbaiCourseData[0].AlumniH2}
              Alumnip2={DAMumbaiCourseData[0].Alumnip2}
              Asrc3={DAMumbaiCourseData[0].Asrc3}
              AlumniH3={DAMumbaiCourseData[0].AlumniH3}
              Alumnip3={DAMumbaiCourseData[0].Alumnip3}
              Asrc4={DAMumbaiCourseData[0].Asrc4}
              AlumniH4={DAMumbaiCourseData[0].AlumniH4}
              Alumnip4={DAMumbaiCourseData[0].Alumnip4}
              alt1={DAMumbaiCourseData[0].alt1}
              alt2={DAMumbaiCourseData[0].alt2}
              alt3={DAMumbaiCourseData[0].alt3}
              alt4={DAMumbaiCourseData[0].alt4}
              alt5={DAMumbaiCourseData[0].alt5}
              alt6={DAMumbaiCourseData[0].alt6}
              alt7={DAMumbaiCourseData[0].alt7}
              alt8={DAMumbaiCourseData[0].alt8}
              alt9={DAMumbaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAMumbaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAMumbaiCourseData[0].CityTextB}
          CityText={DAMumbaiCourseData[0].CityText}
          CityTextLB={DAMumbaiCourseData[0].CityTextLB}
          CityTextL={DAMumbaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
