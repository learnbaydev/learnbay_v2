import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { DataAnalyticsChennaiCourseData } from "../../../../CityData/Chennai/dataAnalyticsCourseTrainingInChennai";
import FeeSection from "../../../../components/CoursePage/FeeSection/FeeSection";
import Footer from "../../../../components/Footer/Footer";
import Form from "../../../../components/Form/Form";
import Testimonial from "../../../../components/HomePage/Testimonial/Testimonial";
import Navbar from "../../../../components/Navbar/Navbar";
import Popup from "../../../../components/Popup/Popup";
import styles from "../../../styles/Home.module.css";
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
const FAQNew = dynamic(() =>
  import("../../../../components/CoursePage/FAQNew/FAQNew")
);

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Analytics Course Training in Chennai</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Most Extensive Data Analytics Training Course in Chennai in Collaboration with IBM which ensures unparalleled training and placement assistance."
        />
        <meta
          name="keywords"
          content="Data Analytics Course in Chennai, data Analytics training in Chennai, data science institute in Chennai, best data science institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, data science training institute in Chennai, advanced Data Analytics Course in Chennai, Data Analytics Course with Placement Assistance, Data Analytics Course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/data-science-course-training-in-chennai"
        />
        <meta
          property="og:title"
          content="Data Analytics Course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics Course in Chennai will enhance your career"
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
          content="Data Analytics Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data Analytics Course in Chennai. Learnbay is Advanced Data Analytics Course Training Institute in Chennai. Data Analytics Course in Chennai will enhance your career"
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
            __html: `${DataAnalyticsChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataAnalyticsChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataAnalyticsChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataAnalyticsChennaiCourseData[0].script4} `,
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
          dataScienceCounselling={true}
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          cityParaCont=" Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
          titleCourse="Data Analytics Course Training in Chennai For Professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Chennai "
          firstTopPara="Industrial Program For Early Pros"
          idss="y_0IdhFKJKM"
        />
        <SecondSection
          SecondSectionData={DataAnalyticsChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={DataAnalyticsChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 80,000"
            FeeEmi="₹ 5,244/month"
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
              ProgramHead1={DataAnalyticsChennaiCourseData[0].ProgramHead1}
              ProgramHead2={DataAnalyticsChennaiCourseData[0].ProgramHead2}
              ProgramBot1={DataAnalyticsChennaiCourseData[0].ProgramBot1}
              ProgramBot2={DataAnalyticsChennaiCourseData[0].ProgramBot2}
              ProgramHead3={DataAnalyticsChennaiCourseData[0].ProgramHead3}
              ProgramBot3={DataAnalyticsChennaiCourseData[0].ProgramBot3}
              ProgramBot31={DataAnalyticsChennaiCourseData[0].ProgramBot31}
              ProgramBot32={DataAnalyticsChennaiCourseData[0].ProgramBot32}
              ProgramHead4={DataAnalyticsChennaiCourseData[0].ProgramHead4}
              ProgramBot4={DataAnalyticsChennaiCourseData[0].ProgramBot4}
              ProgramHead5={DataAnalyticsChennaiCourseData[0].ProgramHead5}
              ProgramBot5={DataAnalyticsChennaiCourseData[0].ProgramBot5}
              ProgramHead6={DataAnalyticsChennaiCourseData[0].ProgramHead6}
              ProgramBot6={DataAnalyticsChennaiCourseData[0].ProgramBot6}
              ProgramHead7={DataAnalyticsChennaiCourseData[0].ProgramHead7}
              ProgramBot8={DataAnalyticsChennaiCourseData[0].ProgramBot8}
              ProgramBot9={DataAnalyticsChennaiCourseData[0].ProgramBot9}
              DomainHead1={DataAnalyticsChennaiCourseData[0].DomainHead1}
              DomainBot1={DataAnalyticsChennaiCourseData[0].DomainBot1}
              DomainBot2={DataAnalyticsChennaiCourseData[0].DomainBot2}
              DomainBot3={DataAnalyticsChennaiCourseData[0].DomainBot3}
              DomainList1={DataAnalyticsChennaiCourseData[0].DomainList1}
              DomainList2={DataAnalyticsChennaiCourseData[0].DomainList2}
              DomainList3={DataAnalyticsChennaiCourseData[0].DomainList3}
              DomainList4={DataAnalyticsChennaiCourseData[0].DomainList4}
              DomainList5={DataAnalyticsChennaiCourseData[0].DomainList5}
              DomainList6={DataAnalyticsChennaiCourseData[0].DomainList6}
              DomainList7={DataAnalyticsChennaiCourseData[0].DomainList7}
              DomainList8={DataAnalyticsChennaiCourseData[0].DomainList8}
              DomainList9={DataAnalyticsChennaiCourseData[0].DomainList9}
              DomainList10={DataAnalyticsChennaiCourseData[0].DomainList10}
              Domainlink1={DataAnalyticsChennaiCourseData[0].Domainlink1}
              Domainlink2={DataAnalyticsChennaiCourseData[0].Domainlink2}
              Domainlink3={DataAnalyticsChennaiCourseData[0].Domainlink3}
              Domainlink4={DataAnalyticsChennaiCourseData[0].Domainlink4}
              Domainlink5={DataAnalyticsChennaiCourseData[0].Domainlink5}
              Domainlink6={DataAnalyticsChennaiCourseData[0].Domainlink6}
              Domainlink7={DataAnalyticsChennaiCourseData[0].Domainlink7}
              Domainlink8={DataAnalyticsChennaiCourseData[0].Domainlink8}
              Domainlink9={DataAnalyticsChennaiCourseData[0].Domainlink9}
              Domainlink10={DataAnalyticsChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                DataAnalyticsChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                DataAnalyticsChennaiCourseData[0].CertificationBot1
              }
              CertificationBot2={
                DataAnalyticsChennaiCourseData[0].CertificationBot2
              }
              src={DataAnalyticsChennaiCourseData[0].src}
              src22={DataAnalyticsChennaiCourseData[0].src22}
              ModuleHead1={DataAnalyticsChennaiCourseData[0].ModuleHead1}
              ModuleBot1={DataAnalyticsChennaiCourseData[0].ModuleBot1}
              ModuleBot2={DataAnalyticsChennaiCourseData[0].ModuleBot2}
              syllabush1={DataAnalyticsChennaiCourseData[0].syllabush1}
              syllabusb1={DataAnalyticsChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={DataAnalyticsChennaiCourseData[0].syllabush2}
              syllabusb2={DataAnalyticsChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={DataAnalyticsChennaiCourseData[0].syllabush3}
              syllabusb3={DataAnalyticsChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={DataAnalyticsChennaiCourseData[0].syllabush4}
              syllabusb4={DataAnalyticsChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DataAnalyticsChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DataAnalyticsChennaiCourseData[0].syllabussrc}
              JobHead1={DataAnalyticsChennaiCourseData[0].JobHead1}
              JobBot1={DataAnalyticsChennaiCourseData[0].JobBot1}
              JobBot2={DataAnalyticsChennaiCourseData[0].JobBot2}
              JobBot5={DataAnalyticsChennaiCourseData[0].JobBot5}
              JobHead2={DataAnalyticsChennaiCourseData[0].JobHead2}
              JobBot3={DataAnalyticsChennaiCourseData[0].JobBot3}
              JobBot4={DataAnalyticsChennaiCourseData[0].JobBot4}
              JobHead3={DataAnalyticsChennaiCourseData[0].JobHead3}
              JobBot6={DataAnalyticsChennaiCourseData[0].JobBot6}
              ProjectsHead1={DataAnalyticsChennaiCourseData[0].ProjectsHead1}
              ProjectsBot1={DataAnalyticsChennaiCourseData[0].ProjectsBot1}
              ProjectsBot2={DataAnalyticsChennaiCourseData[0].ProjectsBot2}
              src1={DataAnalyticsChennaiCourseData[0].src1}
              ProjectsH1={DataAnalyticsChennaiCourseData[0].ProjectsH1}
              Projectsp1={DataAnalyticsChennaiCourseData[0].Projectsp1}
              src2={DataAnalyticsChennaiCourseData[0].src2}
              ProjectsH2={DataAnalyticsChennaiCourseData[0].ProjectsH2}
              Projectsp2={DataAnalyticsChennaiCourseData[0].Projectsp2}
              src3={DataAnalyticsChennaiCourseData[0].src3}
              ProjectsH3={DataAnalyticsChennaiCourseData[0].ProjectsH3}
              Projectsp3={DataAnalyticsChennaiCourseData[0].Projectsp3}
              src4={DataAnalyticsChennaiCourseData[0].src4}
              ProjectsH4={DataAnalyticsChennaiCourseData[0].ProjectsH4}
              Projectsp4={DataAnalyticsChennaiCourseData[0].Projectsp4}
              AlumniBot1={DataAnalyticsChennaiCourseData[0].AlumniBot1}
              Asrc1={DataAnalyticsChennaiCourseData[0].Asrc1}
              AlumniH1={DataAnalyticsChennaiCourseData[0].AlumniH1}
              Alumnip1={DataAnalyticsChennaiCourseData[0].Alumnip1}
              Asrc2={DataAnalyticsChennaiCourseData[0].Asrc2}
              AlumniH2={DataAnalyticsChennaiCourseData[0].AlumniH2}
              Alumnip2={DataAnalyticsChennaiCourseData[0].Alumnip2}
              Asrc3={DataAnalyticsChennaiCourseData[0].Asrc3}
              AlumniH3={DataAnalyticsChennaiCourseData[0].AlumniH3}
              Alumnip3={DataAnalyticsChennaiCourseData[0].Alumnip3}
              Asrc4={DataAnalyticsChennaiCourseData[0].Asrc4}
              AlumniH4={DataAnalyticsChennaiCourseData[0].AlumniH4}
              Alumnip4={DataAnalyticsChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataAnalyticsChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataAnalyticsChennaiCourseData[0].CityTextB}
          CityText={DataAnalyticsChennaiCourseData[0].CityText}
          CityTextLB={DataAnalyticsChennaiCourseData[0].CityTextLB}
          CityTextL={DataAnalyticsChennaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
