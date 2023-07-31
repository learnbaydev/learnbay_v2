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
import { DADubaiCourseData } from "../../../../CityData/Bangalore/DataAnalyticsCourseTrainingBangaloreData";
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
          Best IBM Certified Data Analytics Course in Dubai - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enhance your Data Analytics skills with Learnbay's comprehensive course in Dubai. Gain practical knowledge from industry experts through live classes. Enroll Now."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Dubai, Data Analytics training in Dubai, Data Analytics institute in Dubai, best Data Analytics institute in Dubai, Data Analytics course in Dubai, Data Analytics certification in Dubai, Data Analytics training institute in Dubai, advanced Data Analytics course in Dubai, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-dubai"
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
            __html: `${DADubaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADubaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADubaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DADubaiCourseData[0].script4} `,
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
          firstToparaImg="Course in Bangalore"
          firstHeading="Online Data Analytics"
          firstTopPara="IBM Certified Industry-paced Training"
          cityParaCont="Enhance your Data Analyst career with our comprehensive Data Analytics course in Bangalore with IBM Certification. Our advanced Data Analytics training in Bangalore will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters to gain the most in-demand data analytics and AI skills."
        />
        <SecondSection SecondSectionData={DADubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DADubaiCourseData[0].testimonial}
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
              ProgramBot1={DADubaiCourseData[0].ProgramBot1}
              ProgramHead3={DADubaiCourseData[0].ProgramHead3}
              ProgramBot3={DADubaiCourseData[0].ProgramBot3}
              ProgramBot31={DADubaiCourseData[0].ProgramBot31}
              ProgramBot32={DADubaiCourseData[0].ProgramBot32}
              ProgramBot4={DADubaiCourseData[0].ProgramBot4}
              ProgramBot5={DADubaiCourseData[0].ProgramBot5}
              ProgramBot6={DADubaiCourseData[0].ProgramBot6}
              ProgramBot7={DADubaiCourseData[0].ProgramBot7}
              ProgramBot8={DADubaiCourseData[0].ProgramBot8}
              ProgramBot9={DADubaiCourseData[0].ProgramBot9}
              ProgramBot10={DADubaiCourseData[0].ProgramBot10}
              ProgramBot11={DADubaiCourseData[0].ProgramBot11}
              ProgramBot12={DADubaiCourseData[0].ProgramBot12}
              ProgramBot13={DADubaiCourseData[0].ProgramBot13}
              ProgramBot14={DADubaiCourseData[0].ProgramBot14}
              ProgramBot15={DADubaiCourseData[0].ProgramBot15}
              ProgramBot16={DADubaiCourseData[0].ProgramBot16}
              Courselink1={DADubaiCourseData[0].Courselink1}
              Courselink2={DADubaiCourseData[0].Courselink2}
              Courselink3={DADubaiCourseData[0].Courselink3}
              Courselink4={DADubaiCourseData[0].Courselink4}
              Courselink5={DADubaiCourseData[0].Courselink5}
              Course1={DADubaiCourseData[0].Course1}
              Course2={DADubaiCourseData[0].Course2}
              Course3={DADubaiCourseData[0].Course3}
              Course4={DADubaiCourseData[0].Course4}
              Course5={DADubaiCourseData[0].Course5}
              DomainHead1={DADubaiCourseData[0].DomainHead1}
              DomainBot1={DADubaiCourseData[0].DomainBot1}
              DomainBot2={DADubaiCourseData[0].DomainBot2}
              DomainBot3={DADubaiCourseData[0].DomainBot3}
              DomainList1={DADubaiCourseData[0].DomainList1}
              DomainList2={DADubaiCourseData[0].DomainList2}
              DomainList3={DADubaiCourseData[0].DomainList3}
              DomainList4={DADubaiCourseData[0].DomainList4}
              DomainList5={DADubaiCourseData[0].DomainList5}
              DomainList6={DADubaiCourseData[0].DomainList6}
              DomainList7={DADubaiCourseData[0].DomainList7}
              DomainList8={DADubaiCourseData[0].DomainList8}
              DomainList9={DADubaiCourseData[0].DomainList9}
              DomainList10={DADubaiCourseData[0].DomainList10}
              Domainlink1={DADubaiCourseData[0].Domainlink1}
              Domainlink2={DADubaiCourseData[0].Domainlink2}
              Domainlink3={DADubaiCourseData[0].Domainlink3}
              Domainlink4={DADubaiCourseData[0].Domainlink4}
              Domainlink5={DADubaiCourseData[0].Domainlink5}
              Domainlink6={DADubaiCourseData[0].Domainlink6}
              Domainlink7={DADubaiCourseData[0].Domainlink7}
              Domainlink8={DADubaiCourseData[0].Domainlink8}
              Domainlink9={DADubaiCourseData[0].Domainlink9}
              Domainlink10={DADubaiCourseData[0].Domainlink10}
              CertificationBot1={DADubaiCourseData[0].CertificationBot1}
              src={DADubaiCourseData[0].src}
              src22={DADubaiCourseData[0].src22}
              ModuleBot1={DADubaiCourseData[0].ModuleBot1}
              ModuleBot2={DADubaiCourseData[0].ModuleBot2}
              syllabush1={DADubaiCourseData[0].syllabush1}
              syllabusb1={DADubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={DADubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DADubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DADubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DADubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DADubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DADubaiCourseData[0].SyllabusBotlist16}
              syllabush2={DADubaiCourseData[0].syllabush2}
              syllabusb2={DADubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={DADubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DADubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DADubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DADubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DADubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DADubaiCourseData[0].SyllabusBotlist26}
              syllabush3={DADubaiCourseData[0].syllabush3}
              syllabusb3={DADubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={DADubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DADubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DADubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DADubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DADubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DADubaiCourseData[0].SyllabusBotlist36}
              syllabush4={DADubaiCourseData[0].syllabush4}
              syllabusb4={DADubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={DADubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DADubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DADubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DADubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DADubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DADubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={DADubaiCourseData[0].syllabussrc}
              JobBot1={DADubaiCourseData[0].JobBot1}
              JobHead2={DADubaiCourseData[0].JobHead2}
              JobBot3={DADubaiCourseData[0].JobBot3}
              JobBot4={DADubaiCourseData[0].JobBot4}
              ProjectsBot1={DADubaiCourseData[0].ProgramBot1}
              src1={DADubaiCourseData[0].src1}
              ProjectsH1={DADubaiCourseData[0].ProjectsH1}
              Projectsp1={DADubaiCourseData[0].Projectsp1}
              src2={DADubaiCourseData[0].src2}
              ProjectsH2={DADubaiCourseData[0].ProjectsH2}
              Projectsp2={DADubaiCourseData[0].Projectsp2}
              src3={DADubaiCourseData[0].src3}
              ProjectsH3={DADubaiCourseData[0].ProjectsH3}
              Projectsp3={DADubaiCourseData[0].Projectsp3}
              src4={DADubaiCourseData[0].src4}
              ProjectsH4={DADubaiCourseData[0].ProjectsH4}
              Projectsp4={DADubaiCourseData[0].Projectsp4}
              AlumniBot1={DADubaiCourseData[0].AlumniBot1}
              Asrc1={DADubaiCourseData[0].Asrc1}
              AlumniH1={DADubaiCourseData[0].AlumniH1}
              Alumnip1={DADubaiCourseData[0].Alumnip1}
              Asrc2={DADubaiCourseData[0].Asrc2}
              AlumniH2={DADubaiCourseData[0].AlumniH2}
              Alumnip2={DADubaiCourseData[0].Alumnip2}
              Asrc3={DADubaiCourseData[0].Asrc3}
              AlumniH3={DADubaiCourseData[0].AlumniH3}
              Alumnip3={DADubaiCourseData[0].Alumnip3}
              Asrc4={DADubaiCourseData[0].Asrc4}
              AlumniH4={DADubaiCourseData[0].AlumniH4}
              Alumnip4={DADubaiCourseData[0].Alumnip4}
              alt1={DADubaiCourseData[0].alt1}
              alt2={DADubaiCourseData[0].alt2}
              alt3={DADubaiCourseData[0].alt3}
              alt4={DADubaiCourseData[0].alt4}
              alt5={DADubaiCourseData[0].alt5}
              alt6={DADubaiCourseData[0].alt6}
              alt7={DADubaiCourseData[0].alt7}
              alt8={DADubaiCourseData[0].alt8}
              alt9={DADubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DADubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DADubaiCourseData[0].CityTextB}
          CityText={DADubaiCourseData[0].CityText}
          CityTextLB={DADubaiCourseData[0].CityTextLB}
          CityTextL={DADubaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
