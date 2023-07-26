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
import { DADelhiCourseData } from "../../../../CityData/delhi/DataAnalyticsCourseTraininginDelhiData";
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
        <title>Data Analytics Certification Course in Delhi - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the best data analytics training in Delhi with placement assistance and get certified from IBM. Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Delhi, Data Analytics training in Delhi, Data Analytics institute in Delhi, best Data Analytics institute in Delhi, Data Analytics course in Delhi, Data Analytics certification in Delhi, Data Analytics training institute in Delhi, advanced Data Analytics course in Delhi, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-delhi"
        />
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Data Analytics Courses Certification Training India"
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
            __html: `${DADelhiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADelhiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADelhiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADelhiCourseData[0].script4} `,
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
          titleCourse="data analytics course training in delhi"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/Data+Analytics.png"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training In Delhi"
          firstTopPara="Fast track IBM Certified Data Analytics Course for early pros."
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."


        />
        <SecondSection SecondSectionData={DADelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DADelhiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹  79,000 + 18% GST"
            FeeEmi="₹  7,768/month"
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
             ProgramHead1={DADelhiCourseData[0].ProgramHead1}
              ProgramBot1={DADelhiCourseData[0].ProgramBot1}
              ProgramBot2={DADelhiCourseData[0].ProgramBot2}
              ProgramHead3={DADelhiCourseData[0].ProgramHead3}
              ProgramHead4={DADelhiCourseData[0].ProgramHead4}
              ProgramHead5={DADelhiCourseData[0].ProgramHead5}
              ProgramHead6={DADelhiCourseData[0].ProgramHead6}
              ProgramHead7={DADelhiCourseData[0].ProgramHead7}
              ProgramBot3={DADelhiCourseData[0].ProgramBot3}
              ProgramBot31={DADelhiCourseData[0].ProgramBot31}
              ProgramBot32={DADelhiCourseData[0].ProgramBot32}
              ProgramBot4={DADelhiCourseData[0].ProgramBot4}
              ProgramBot5={DADelhiCourseData[0].ProgramBot5}
              ProgramBot6={DADelhiCourseData[0].ProgramBot6}
              ProgramBot8={DADelhiCourseData[0].ProgramBot8}
              ProgramBot9={DADelhiCourseData[0].ProgramBot9}
              ProgramBot10={DADelhiCourseData[0].ProgramBot10}
              Courselink1={DADelhiCourseData[0].Courselink1}
              Courselink2={DADelhiCourseData[0].Courselink2}
              Courselink3={DADelhiCourseData[0].Courselink3}
              Courselink4={DADelhiCourseData[0].Courselink4}
              Courselink5={DADelhiCourseData[0].Courselink5}
              Course1={DADelhiCourseData[0].Course1}
              Course2={DADelhiCourseData[0].Course2}
              Course3={DADelhiCourseData[0].Course3}
              Course4={DADelhiCourseData[0].Course4}
              Course5={DADelhiCourseData[0].Course5}
              DomainHead1={DADelhiCourseData[0].DomainHead1}
              DomainBot1={DADelhiCourseData[0].DomainBot1}
              DomainBot2={DADelhiCourseData[0].DomainBot2}
              DomainBot3={DADelhiCourseData[0].DomainBot3}
              DomainList1={DADelhiCourseData[0].DomainList1}
              DomainList2={DADelhiCourseData[0].DomainList2}
              DomainList3={DADelhiCourseData[0].DomainList3}
              DomainList4={DADelhiCourseData[0].DomainList4}
              DomainList5={DADelhiCourseData[0].DomainList5}
              DomainList6={DADelhiCourseData[0].DomainList6}
              DomainList7={DADelhiCourseData[0].DomainList7}
              DomainList8={DADelhiCourseData[0].DomainList8}
              DomainList9={DADelhiCourseData[0].DomainList9}
              DomainList10={DADelhiCourseData[0].DomainList10}
              Domainlink1={DADelhiCourseData[0].Domainlink1}
              Domainlink2={DADelhiCourseData[0].Domainlink2}
              Domainlink3={DADelhiCourseData[0].Domainlink3}
              Domainlink4={DADelhiCourseData[0].Domainlink4}
              Domainlink5={DADelhiCourseData[0].Domainlink5}
              Domainlink6={DADelhiCourseData[0].Domainlink6}
              Domainlink7={DADelhiCourseData[0].Domainlink7}
              Domainlink8={DADelhiCourseData[0].Domainlink8}
              Domainlink9={DADelhiCourseData[0].Domainlink9}
              Domainlink10={DADelhiCourseData[0].Domainlink10}
              CertificationHead1={DADelhiCourseData[0].CertificationHead1}
              CertificationBot1={DADelhiCourseData[0].CertificationBot1}
              CertificationBot2={DADelhiCourseData[0].CertificationBot2}
              src={DADelhiCourseData[0].src}
              src22={DADelhiCourseData[0].src22}
              src33={DADelhiCourseData[0].src33}
             ModuleHead1={DADelhiCourseData[0].ModuleHead1}
              ModuleBot1={DADelhiCourseData[0].ModuleBot1}
              ModuleBot2={DADelhiCourseData[0].ModuleBot2}
              ModuleBot3={DADelhiCourseData[0].ModuleBot3}
              ModuleHead3={DADelhiCourseData[0] .ModuleHead3}
              ModuleBot4={DADelhiCourseData[0].ModuleBot4}
              ModuleHead2={DADelhiCourseData[0].ModuleHead2}
              syllabush1={DADelhiCourseData[0].syllabush1}
              syllabusb1={DADelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={DADelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DADelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DADelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DADelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DADelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DADelhiCourseData[0].SyllabusBotlist16}
              syllabush2={DADelhiCourseData[0].syllabush2}
              syllabusb2={DADelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={DADelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DADelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DADelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DADelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DADelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DADelhiCourseData[0].SyllabusBotlist26}
              syllabush3={DADelhiCourseData[0].syllabush3}
              syllabusb3={DADelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={DADelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DADelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DADelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DADelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DADelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DADelhiCourseData[0].SyllabusBotlist36}
              syllabush4={DADelhiCourseData[0].syllabush4}
              syllabusb4={DADelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={DADelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DADelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DADelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DADelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DADelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DADelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={DADelhiCourseData[0].syllabussrc}
              JobHead1={DADelhiCourseData[0].JobHead1}
              JobBot1={DADelhiCourseData[0].JobBot1}
              JobBot2={DADelhiCourseData[0].JobBot2}
              JobBot3={DADelhiCourseData[0].JobBot3}
              JobHead2={DADelhiCourseData[0].JobHead2}
              JobBot5={DADelhiCourseData[0].JobBot5}
              JobBot4={DADelhiCourseData[0].JobBot4}
              JobBot6={DADelhiCourseData[0].JobBot6}
              ProjectsBot1={DADelhiCourseData[0].ProjectsBot1}
              ProjectsBot2={DADelhiCourseData[0].ProjectsBot2}
              src1={DADelhiCourseData[0].src1}
              ProjectsHead1={DADelhiCourseData[0].ProjectsHead1}
              ProjectsH1={DADelhiCourseData[0].ProjectsH1}
              Projectsp1={DADelhiCourseData[0].Projectsp1}
              src2={DADelhiCourseData[0].src2}
              ProjectsH2={DADelhiCourseData[0].ProjectsH2}
              Projectsp2={DADelhiCourseData[0].Projectsp2}
              src3={DADelhiCourseData[0].src3}
              ProjectsH3={DADelhiCourseData[0].ProjectsH3}
              Projectsp3={DADelhiCourseData[0].Projectsp3}
              src4={DADelhiCourseData[0].src4}
              ProjectsH4={DADelhiCourseData[0].ProjectsH4}
              Projectsp4={DADelhiCourseData[0].Projectsp4}
              AlumniBot1={DADelhiCourseData[0].AlumniBot1}
              Asrc1={DADelhiCourseData[0].Asrc1}
              AlumniH1={DADelhiCourseData[0].AlumniH1}
              Alumnip1={DADelhiCourseData[0].Alumnip1}
              Asrc2={DADelhiCourseData[0].Asrc2}
              AlumniH2={DADelhiCourseData[0].AlumniH2}
              Alumnip2={DADelhiCourseData[0].Alumnip2}
              Asrc3={DADelhiCourseData[0].Asrc3}
              AlumniH3={DADelhiCourseData[0].AlumniH3}
              Alumnip3={DADelhiCourseData[0].Alumnip3}
              Asrc4={DADelhiCourseData[0].Asrc4}
              AlumniH4={DADelhiCourseData[0].AlumniH4}
              Alumnip4={DADelhiCourseData[0].Alumnip4}
              alt1={DADelhiCourseData[0].alt1}
              alt2={DADelhiCourseData[0].alt2}
              alt3={DADelhiCourseData[0].alt3}
              alt4={DADelhiCourseData[0].alt4}
              alt5={DADelhiCourseData[0].alt5}
              alt6={DADelhiCourseData[0].alt6}
              alt7={DADelhiCourseData[0].alt7}
              alt8={DADelhiCourseData[0].alt8}
              alt9={DADelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DADelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DADelhiCourseData[0].CityTextB}
          CityText={DADelhiCourseData[0].CityText}
          CityTextLB={DADelhiCourseData[0].CityTextLB}
          CityTextL={DADelhiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}