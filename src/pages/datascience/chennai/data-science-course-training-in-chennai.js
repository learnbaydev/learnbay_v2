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
import { DataScienceChennaiCourseData } from "../../../../CityData/Chennai/dataScienceCourseTrainingInChennai";
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
          Best Data Science Course in Chennai With IBM Certification
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Most Extensive Data Science Training Course in Chennai in Collaboration with IBM which ensures unparalleled training and placement assistance."
        />
        <meta
          name="keywords"
          content="data science course in Chennai, data science training in Chennai, data science institute in Chennai, best data science institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, data science training institute in Chennai, advanced data science course in Chennai, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/data-science-course-training-in-chennai"
        />
        <meta
          property="og:title"
          content="Data Science Course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Chennai. Learnbay is Advanced Data Science Course Training Institute in Chennai. Data science course in Chennai will enhance your career"
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
          href="https://www.learnbay.co/datascience/chennai/data-science-course-training-in-chennai"
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
            __html: `${DataScienceChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataScienceChennaiCourseData[0].script4} `,
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
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Chennai with IBM Certification. Our advanced Data Science training in Chennai will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters to gain the most in-demand data science and AI skills."
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          idss="bfl64ANfSV0"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Data Science Course in Chennai"
          firstTopPara="Foundational and Advance Job-ready Program"
        />
        <SecondSection
          SecondSectionData={DataScienceChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataScienceChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
        <FeeSection
 Fee="₹ 1,25,000"
 FeeEmi="₹ 8,194/month"
 WeekdayDate="NOV 17th"
 WeekendDate="NOV 26th"
 WeekendTime="09:30 AM - 1:00 PM"
 WeekdayTime="08:00 AM - 10:00 AM"
 FeeContent3="Flexible payment"
 FeeContent4="Easy loan procedure"
 FeeContent5="15 days refund policy"
 FeeContent6="No additional cost"
 dataScienceCounselling={true}
        />
        </div>
        <div className="MainCities">
          <div className="CitiesLeft">
            <CitiesLeft />
          </div>
          <div className="CitiesRight">
            <CitiesRight
              cityTextDSChennai={true}
              DomainHead1={DataScienceChennaiCourseData[0].DomainHead1}
              DomainBot1={DataScienceChennaiCourseData[0].DomainBot1}
              DomainBot2={DataScienceChennaiCourseData[0].DomainBot2}
              DomainBot3={DataScienceChennaiCourseData[0].DomainBot3}
              DomainList1={DataScienceChennaiCourseData[0].DomainList1}
              DomainList2={DataScienceChennaiCourseData[0].DomainList2}
              DomainList3={DataScienceChennaiCourseData[0].DomainList3}
              DomainList4={DataScienceChennaiCourseData[0].DomainList4}
              DomainList5={DataScienceChennaiCourseData[0].DomainList5}
              DomainList6={DataScienceChennaiCourseData[0].DomainList6}
              DomainList7={DataScienceChennaiCourseData[0].DomainList7}
              DomainList8={DataScienceChennaiCourseData[0].DomainList8}
              DomainList9={DataScienceChennaiCourseData[0].DomainList9}
              DomainList10={DataScienceChennaiCourseData[0].DomainList10}
              Domainlink1={DataScienceChennaiCourseData[0].Domainlink1}
              Domainlink2={DataScienceChennaiCourseData[0].Domainlink2}
              Domainlink3={DataScienceChennaiCourseData[0].Domainlink3}
              Domainlink4={DataScienceChennaiCourseData[0].Domainlink4}
              Domainlink5={DataScienceChennaiCourseData[0].Domainlink5}
              Domainlink6={DataScienceChennaiCourseData[0].Domainlink6}
              Domainlink7={DataScienceChennaiCourseData[0].Domainlink7}
              Domainlink8={DataScienceChennaiCourseData[0].Domainlink8}
              Domainlink9={DataScienceChennaiCourseData[0].Domainlink9}
              Domainlink10={DataScienceChennaiCourseData[0].Domainlink10}
              CertificationBot1={
                DataScienceChennaiCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataScienceChennaiCourseData[0].CertificationBot2
              }
              src={DataScienceChennaiCourseData[0].src}
              src22={DataScienceChennaiCourseData[0].src22}
              src33={DataScienceChennaiCourseData[0].src33}
              ModuleHead1={DataScienceChennaiCourseData[0].ModuleHead1}
              ModuleBot1={DataScienceChennaiCourseData[0].ModuleBot1}
              ModuleBot2={DataScienceChennaiCourseData[0].ModuleBot2}
              syllabush1={DataScienceChennaiCourseData[0].syllabush1}
              syllabusb1={DataScienceChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataScienceChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataScienceChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataScienceChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataScienceChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataScienceChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataScienceChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataScienceChennaiCourseData[0].syllabush2}
              syllabusb2={DataScienceChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataScienceChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataScienceChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataScienceChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataScienceChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataScienceChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataScienceChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataScienceChennaiCourseData[0].syllabush3}
              syllabusb3={DataScienceChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataScienceChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataScienceChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataScienceChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataScienceChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataScienceChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataScienceChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataScienceChennaiCourseData[0].syllabush4}
              syllabusb4={DataScienceChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataScienceChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataScienceChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataScienceChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataScienceChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataScienceChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataScienceChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataScienceChennaiCourseData[0].syllabussrc}
              JobHead1={DataScienceChennaiCourseData[0].JobHead1}
              JobBot1={DataScienceChennaiCourseData[0].JobBot1}
              JobBot2={DataScienceChennaiCourseData[0].JobBot2}
              JobBot5={DataScienceChennaiCourseData[0].JobBot5}
              JobHead2={DataScienceChennaiCourseData[0].JobHead2}
              JobBot3={DataScienceChennaiCourseData[0].JobBot3}
              JobBot4={DataScienceChennaiCourseData[0].JobBot4}
              JobBot6={DataScienceChennaiCourseData[0].JobBot6}
              ProjectsBot1={DataScienceChennaiCourseData[0].ProjectsBot1}
              ProjectsBot2={DataScienceChennaiCourseData[0].ProjectsBot2}
              src1={DataScienceChennaiCourseData[0].src1}
              ProjectsHead1={DataScienceChennaiCourseData[0].ProjectsHead1}
              ProjectsH1={DataScienceChennaiCourseData[0].ProjectsH1}
              Projectsp1={DataScienceChennaiCourseData[0].Projectsp1}
              src2={DataScienceChennaiCourseData[0].src2}
              ProjectsH2={DataScienceChennaiCourseData[0].ProjectsH2}
              Projectsp2={DataScienceChennaiCourseData[0].Projectsp2}
              src3={DataScienceChennaiCourseData[0].src3}
              ProjectsH3={DataScienceChennaiCourseData[0].ProjectsH3}
              Projectsp3={DataScienceChennaiCourseData[0].Projectsp3}
              src4={DataScienceChennaiCourseData[0].src4}
              ProjectsH4={DataScienceChennaiCourseData[0].ProjectsH4}
              Projectsp4={DataScienceChennaiCourseData[0].Projectsp4}
              AlumniBot1={DataScienceChennaiCourseData[0].AlumniBot1}
              Asrc1={DataScienceChennaiCourseData[0].Asrc1}
              AlumniH1={DataScienceChennaiCourseData[0].AlumniH1}
              Alumnip1={DataScienceChennaiCourseData[0].Alumnip1}
              Asrc2={DataScienceChennaiCourseData[0].Asrc2}
              AlumniH2={DataScienceChennaiCourseData[0].AlumniH2}
              Alumnip2={DataScienceChennaiCourseData[0].Alumnip2}
              Asrc3={DataScienceChennaiCourseData[0].Asrc3}
              AlumniH3={DataScienceChennaiCourseData[0].AlumniH3}
              Alumnip3={DataScienceChennaiCourseData[0].Alumnip3}
              Asrc4={DataScienceChennaiCourseData[0].Asrc4}
              AlumniH4={DataScienceChennaiCourseData[0].AlumniH4}
              Alumnip4={DataScienceChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataScienceChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText cityTextChennai={true} />
        <Footer />
      </main>
    </div>
  );
}
