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
import {  BusinessAnalyticsChennaiCourseData } from "../../../../CityData/Chennai/businessAnalyticsCourseTrainingInChennai";
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
      <title>Business Analyst Course in Chennai with IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Business Analytics Training in Chennai, Expert led and IBM Certified Course with Job Assistance Assistance. Signup Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Chennai, Business Analytics training in Chennai, Business Analytics institute in Chennai, best Business Analytics institute in Chennai, Business Analytics course in Chennai, Business Analytics certification in Chennai, Business Analytics training institute in Chennai, advanced Business Analytics course in Chennai, Business Analytics course with Placement Assistance, Business Analytics course"
        />

<meta
          property="og:url"
          content="https://www.learnbay.co/datascience/chennai/business-analytics-course-training-in-chennai"
        />
        <meta
          property="og:title"
          content="Business Analytics Course in Chennai | Data Science Training in Chennai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Business Analytics Course in Chennai. Learnbay is Advanced Business Analytics Course Training Institute in Chennai. Business Analytics Course in Chennai will enhance your career"
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
          content="Business Analytics Course in Chennai | Data Science Training in Chennai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Business Analytics Course in Chennai. Learnbay is Advanced Business Analytics Course Training Institute in Chennai. Business Analytics Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Business Analytics Course in Chennai. Learnbay is Advanced Business Analytics Course Training Institute in Chennai. Business Analytics Course in Chennai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />


        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/chennai/business-analytics-course-training-in-chennai"
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
            __html: `${ BusinessAnalyticsChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ BusinessAnalyticsChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ BusinessAnalyticsChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ BusinessAnalyticsChennaiCourseData[0].script4} `,
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
          titleCourse="Business Analytics Course Training In Chennai"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Business+Analytics+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/manager+header+image.webp"
          firstHeading="Business Analytics Course "
          firstTopPara="Professional Business Analytics Program"
          firstToparaImg="Training In Chennai"
          idss="4j80WXLTvGE"

          
        />
        <SecondSection SecondSectionData={ BusinessAnalyticsChennaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={ BusinessAnalyticsChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
        <FeeSection
            Fee="₹ 90,000"
            FeeEmi="₹ 5,900/month"
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

              ProgramHead1={ BusinessAnalyticsChennaiCourseData[0].ProgramHead1}
              ProgramBot1={ BusinessAnalyticsChennaiCourseData[0].ProgramBot1}
              ProgramBot2={ BusinessAnalyticsChennaiCourseData[0].ProgramBot2}
              ProgramHead3={ BusinessAnalyticsChennaiCourseData[0].ProgramHead3}
              ProgramBot3={ BusinessAnalyticsChennaiCourseData[0].ProgramBot3}
              ProgramBot66={ BusinessAnalyticsChennaiCourseData[0].ProgramBot66}
              ProgramBot67={ BusinessAnalyticsChennaiCourseData[0].ProgramBot67}
              ProgramHead4={ BusinessAnalyticsChennaiCourseData[0].ProgramHead4}
              ProgramBot4={ BusinessAnalyticsChennaiCourseData[0].ProgramBot4}
              ProgramHead5={ BusinessAnalyticsChennaiCourseData[0].ProgramHead5}
              ProgramBot5={ BusinessAnalyticsChennaiCourseData[0].ProgramBot5}
              ProgramHead6={ BusinessAnalyticsChennaiCourseData[0].ProgramHead6}
              ProgramBot6={ BusinessAnalyticsChennaiCourseData[0].ProgramBot6}
              ProgramHead7={ BusinessAnalyticsChennaiCourseData[0].ProgramHead7}
              ProgramBot8={ BusinessAnalyticsChennaiCourseData[0].ProgramBot8}
              ProgramBot9={ BusinessAnalyticsChennaiCourseData[0].ProgramBot9}
              DomainHead1={ BusinessAnalyticsChennaiCourseData[0].DomainHead1}
              DomainBot1={ BusinessAnalyticsChennaiCourseData[0].DomainBot1}
              DomainBot2={ BusinessAnalyticsChennaiCourseData[0].DomainBot2}
              DomainBot3={ BusinessAnalyticsChennaiCourseData[0].DomainBot3}
              DomainList1={ BusinessAnalyticsChennaiCourseData[0].DomainList1}
              DomainList2={ BusinessAnalyticsChennaiCourseData[0].DomainList2}
              DomainList3={ BusinessAnalyticsChennaiCourseData[0].DomainList3}
              DomainList4={ BusinessAnalyticsChennaiCourseData[0].DomainList4}
              DomainList5={ BusinessAnalyticsChennaiCourseData[0].DomainList5}
              DomainList6={ BusinessAnalyticsChennaiCourseData[0].DomainList6}
              DomainList7={ BusinessAnalyticsChennaiCourseData[0].DomainList7}
              DomainList8={ BusinessAnalyticsChennaiCourseData[0].DomainList8}
              DomainList9={ BusinessAnalyticsChennaiCourseData[0].DomainList9}
              DomainList10={ BusinessAnalyticsChennaiCourseData[0].DomainList10}
              Domainlink1={ BusinessAnalyticsChennaiCourseData[0].Domainlink1}
              Domainlink2={ BusinessAnalyticsChennaiCourseData[0].Domainlink2}
              Domainlink3={ BusinessAnalyticsChennaiCourseData[0].Domainlink3}
              Domainlink4={ BusinessAnalyticsChennaiCourseData[0].Domainlink4}
              Domainlink5={ BusinessAnalyticsChennaiCourseData[0].Domainlink5}
              Domainlink6={ BusinessAnalyticsChennaiCourseData[0].Domainlink6}
              Domainlink7={ BusinessAnalyticsChennaiCourseData[0].Domainlink7}
              Domainlink8={ BusinessAnalyticsChennaiCourseData[0].Domainlink8}
              Domainlink9={ BusinessAnalyticsChennaiCourseData[0].Domainlink9}
              Domainlink10={ BusinessAnalyticsChennaiCourseData[0].Domainlink10}
              CertificationHead1={ BusinessAnalyticsChennaiCourseData[0].CertificationHead1}
              CertificationBot1={ BusinessAnalyticsChennaiCourseData[0].CertificationBot1}
              CertificationBot2={ BusinessAnalyticsChennaiCourseData[0].CertificationBot2}
              src={ BusinessAnalyticsChennaiCourseData[0].src}
              src22={ BusinessAnalyticsChennaiCourseData[0].src22}
              src33={ BusinessAnalyticsChennaiCourseData[0].src33}
              ModuleHead1={ BusinessAnalyticsChennaiCourseData[0].ModuleHead1}
              ModuleHead2={ BusinessAnalyticsChennaiCourseData[0].ModuleHead2}
        
              ModuleBot3={ BusinessAnalyticsChennaiCourseData[0].ModuleBot3}
              ModuleHead3={ BusinessAnalyticsChennaiCourseData[0].ModuleHead3}
              ModuleBot4={ BusinessAnalyticsChennaiCourseData[0].ModuleBot4}
              syllabush1={ BusinessAnalyticsChennaiCourseData[0].syllabush1}
              syllabusb1={ BusinessAnalyticsChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist16}
              syllabush2={ BusinessAnalyticsChennaiCourseData[0].syllabush2}
              syllabusb2={ BusinessAnalyticsChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist26}
              syllabush3={ BusinessAnalyticsChennaiCourseData[0].syllabush3}
              syllabusb3={ BusinessAnalyticsChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist36}
              syllabush4={ BusinessAnalyticsChennaiCourseData[0].syllabush4}
              syllabusb4={ BusinessAnalyticsChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={ BusinessAnalyticsChennaiCourseData[0].SyllabusBotlist46}
              syllabussrc={ BusinessAnalyticsChennaiCourseData[0].syllabussrc}
              JobHead1={ BusinessAnalyticsChennaiCourseData[0].JobHead1}
              JobBot1={ BusinessAnalyticsChennaiCourseData[0].JobBot1}
              JobBot2={ BusinessAnalyticsChennaiCourseData[0].JobBot2}
              JobBot5={ BusinessAnalyticsChennaiCourseData[0].JobBot5}
              JobHead2={ BusinessAnalyticsChennaiCourseData[0].JobHead2}
              JobBot3={ BusinessAnalyticsChennaiCourseData[0].JobBot3}
             
              JobBot4={ BusinessAnalyticsChennaiCourseData[0].JobBot4}
              JobBot6={ BusinessAnalyticsChennaiCourseData[0].JobBot6}
              ProjectsHead1={ BusinessAnalyticsChennaiCourseData[0].ProjectsHead1}
              ProjectsBot1={ BusinessAnalyticsChennaiCourseData[0].ProjectsBot1}
              ProjectsBot2={ BusinessAnalyticsChennaiCourseData[0].ProjectsBot2}
              src1={ BusinessAnalyticsChennaiCourseData[0].src1}
              ProjectsH1={ BusinessAnalyticsChennaiCourseData[0].ProjectsH1}
              Projectsp1={ BusinessAnalyticsChennaiCourseData[0].Projectsp1}
              src2={ BusinessAnalyticsChennaiCourseData[0].src2}
              ProjectsH2={ BusinessAnalyticsChennaiCourseData[0].ProjectsH2}
              Projectsp2={ BusinessAnalyticsChennaiCourseData[0].Projectsp2}
              src3={ BusinessAnalyticsChennaiCourseData[0].src3}
              ProjectsH3={ BusinessAnalyticsChennaiCourseData[0].ProjectsH3}
              Projectsp3={ BusinessAnalyticsChennaiCourseData[0].Projectsp3}
              src4={ BusinessAnalyticsChennaiCourseData[0].src4}
              ProjectsH4={ BusinessAnalyticsChennaiCourseData[0].ProjectsH4}
              Projectsp4={ BusinessAnalyticsChennaiCourseData[0].Projectsp4}
              AlumniBot1={ BusinessAnalyticsChennaiCourseData[0].AlumniBot1}
              Asrc1={ BusinessAnalyticsChennaiCourseData[0].Asrc1}
              AlumniH1={ BusinessAnalyticsChennaiCourseData[0].AlumniH1}
              Alumnip1={ BusinessAnalyticsChennaiCourseData[0].Alumnip1}
              Asrc2={ BusinessAnalyticsChennaiCourseData[0].Asrc2}
              AlumniH2={ BusinessAnalyticsChennaiCourseData[0].AlumniH2}
              Alumnip2={ BusinessAnalyticsChennaiCourseData[0].Alumnip2}
              Asrc3={ BusinessAnalyticsChennaiCourseData[0].Asrc3}
              AlumniH3={ BusinessAnalyticsChennaiCourseData[0].AlumniH3}
              Alumnip3={ BusinessAnalyticsChennaiCourseData[0].Alumnip3}
              Asrc4={ BusinessAnalyticsChennaiCourseData[0].Asrc4}
              AlumniH4={ BusinessAnalyticsChennaiCourseData[0].AlumniH4}
              Alumnip4={ BusinessAnalyticsChennaiCourseData[0].Alumnip4}
           
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={ BusinessAnalyticsChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={ BusinessAnalyticsChennaiCourseData[0].CityTextB}
          CityText={ BusinessAnalyticsChennaiCourseData[0].CityText}
          CityTextLB={ BusinessAnalyticsChennaiCourseData[0].CityTextLB}
          CityTextL={ BusinessAnalyticsChennaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
