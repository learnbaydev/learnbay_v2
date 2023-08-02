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
import { AIelhiCourseData } from "../../../../CityData/Delhi/ArtificialIntelligenceCourseTrainingDelhiData";
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
        <title>Best Artificial Intelligence Course in Delhi - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay Provides Artificial Intelligence Training in Delhi for Managers and Leaders in Collaboration with IBM and Microsoft Certification. Enroll Now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Delhi, Artificial Intelligence training in Delhi, Artificial Intelligence institute in Delhi, best Artificial Intelligence institute in Delhi, Artificial Intelligence course in Delhi, Artificial Intelligence certification in Delhi, Artificial Intelligence training institute in Delhi, advanced Artificial Intelligence course in Delhi, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-delhi"
        />

        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training India"
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
            __html: `${AIelhiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIelhiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIelhiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIelhiCourseData[0].script4} `,
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
          titleCourse="Data Science and AI Program For Manager & Leaders"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Science+%26+AI+Certification+Program+For+Managers+%26+Leaders+Learnbay.pdf"
          idss="osYNvuuI1_8"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Business-Analytics-Masters-Header.png"
          firstToparaImg=" For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Training in Delhi"
          firstTopPara="Becomes an AI Expertise In Product Based MNCs"
          cityParaCont="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "

        />
        <SecondSection SecondSectionData={AIelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={AIelhiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
        <FeeSection
          Fee="₹ 1,10,000 + 18% GST"
          FeeEmi="₹ 10,817/month"
          FeeHeading="Program Fee & Financing"
          FeeContent1="0% interest rate"
          FeeContent2="No cost EMI"
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
              ProgramBot1={AIelhiCourseData[0].ProgramBot1}
              ProgramHead3={AIelhiCourseData[0].ProgramHead3}
              ProgramBot3={AIelhiCourseData[0].ProgramBot3}
              ProgramBot31={AIelhiCourseData[0].ProgramBot31}
              ProgramBot4={AIelhiCourseData[0].ProgramBot4}
              ProgramBot5={AIelhiCourseData[0].ProgramBot5}
              ProgramBot6={AIelhiCourseData[0].ProgramBot6}
              Courselink1={AIelhiCourseData[0].Courselink1}
              Courselink2={AIelhiCourseData[0].Courselink2}
              Courselink3={AIelhiCourseData[0].Courselink3}
              Courselink4={AIelhiCourseData[0].Courselink4}
              Courselink5={AIelhiCourseData[0].Courselink5}
              Course1={AIelhiCourseData[0].Course1}
              Course2={AIelhiCourseData[0].Course2}
              Course3={AIelhiCourseData[0].Course3}
              Course4={AIelhiCourseData[0].Course4}
              Course5={AIelhiCourseData[0].Course5}
              DomainHead1={AIelhiCourseData[0].DomainHead1}
              DomainBot1={AIelhiCourseData[0].DomainBot1}
              DomainBot2={AIelhiCourseData[0].DomainBot2}
              DomainBot3={AIelhiCourseData[0].DomainBot3}
              DomainList1={AIelhiCourseData[0].DomainList1}
              DomainList2={AIelhiCourseData[0].DomainList2}
              DomainList3={AIelhiCourseData[0].DomainList3}
              DomainList4={AIelhiCourseData[0].DomainList4}
              DomainList5={AIelhiCourseData[0].DomainList5}
              DomainList6={AIelhiCourseData[0].DomainList6}
              DomainList7={AIelhiCourseData[0].DomainList7}
              DomainList8={AIelhiCourseData[0].DomainList8}
              DomainList9={AIelhiCourseData[0].DomainList9}
              DomainList10={AIelhiCourseData[0].DomainList10}
              Domainlink1={AIelhiCourseData[0].Domainlink1}
              Domainlink2={AIelhiCourseData[0].Domainlink2}
              Domainlink3={AIelhiCourseData[0].Domainlink3}
              Domainlink4={AIelhiCourseData[0].Domainlink4}
              Domainlink5={AIelhiCourseData[0].Domainlink5}
              Domainlink6={AIelhiCourseData[0].Domainlink6}
              Domainlink7={AIelhiCourseData[0].Domainlink7}
              Domainlink8={AIelhiCourseData[0].Domainlink8}
              Domainlink9={AIelhiCourseData[0].Domainlink9}
              Domainlink10={AIelhiCourseData[0].Domainlink10}
              CertificationBot1={AIelhiCourseData[0].CertificationBot1}
              src={AIelhiCourseData[0].src}
              src22={AIelhiCourseData[0].src22}
              src33={AIelhiCourseData[0].src33}
              ModuleBot1={AIelhiCourseData[0].ModuleBot1}
              ModuleBot2={AIelhiCourseData[0].ModuleBot2}
              syllabush1={AIelhiCourseData[0].syllabush1}
              syllabusb1={AIelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIelhiCourseData[0].SyllabusBotlist16}
              syllabush2={AIelhiCourseData[0].syllabush2}
              syllabusb2={AIelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIelhiCourseData[0].SyllabusBotlist26}
              syllabush3={AIelhiCourseData[0].syllabush3}
              syllabusb3={AIelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIelhiCourseData[0].SyllabusBotlist36}
              syllabush4={AIelhiCourseData[0].syllabush4}
              syllabusb4={AIelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIelhiCourseData[0].syllabussrc}
              JobBot1={AIelhiCourseData[0].JobBot1}
              JobHead2={AIelhiCourseData[0].JobHead2}
              JobBot3={AIelhiCourseData[0].JobBot3}
              JobBot4={AIelhiCourseData[0].JobBot4}
              ProjectsBot1={AIelhiCourseData[0].ProgramBot1}
              src1={AIelhiCourseData[0].src1}
              ProjectsH1={AIelhiCourseData[0].ProjectsH1}
              Projectsp1={AIelhiCourseData[0].Projectsp1}
              src2={AIelhiCourseData[0].src2}
              ProjectsH2={AIelhiCourseData[0].ProjectsH2}
              Projectsp2={AIelhiCourseData[0].Projectsp2}
              src3={AIelhiCourseData[0].src3}
              ProjectsH3={AIelhiCourseData[0].ProjectsH3}
              Projectsp3={AIelhiCourseData[0].Projectsp3}
              src4={AIelhiCourseData[0].src4}
              ProjectsH4={AIelhiCourseData[0].ProjectsH4}
              Projectsp4={AIelhiCourseData[0].Projectsp4}
              AlumniBot1={AIelhiCourseData[0].AlumniBot1}
              Asrc1={AIelhiCourseData[0].Asrc1}
              AlumniH1={AIelhiCourseData[0].AlumniH1}
              Alumnip1={AIelhiCourseData[0].Alumnip1}
              Asrc2={AIelhiCourseData[0].Asrc2}
              AlumniH2={AIelhiCourseData[0].AlumniH2}
              Alumnip2={AIelhiCourseData[0].Alumnip2}
              Asrc3={AIelhiCourseData[0].Asrc3}
              AlumniH3={AIelhiCourseData[0].AlumniH3}
              Alumnip3={AIelhiCourseData[0].Alumnip3}
              Asrc4={AIelhiCourseData[0].Asrc4}
              AlumniH4={AIelhiCourseData[0].AlumniH4}
              Alumnip4={AIelhiCourseData[0].Alumnip4}
              alt1={AIelhiCourseData[0].alt1}
              alt2={AIelhiCourseData[0].alt2}
              alt3={AIelhiCourseData[0].alt3}
              alt4={AIelhiCourseData[0].alt4}
              alt5={AIelhiCourseData[0].alt5}
              alt6={AIelhiCourseData[0].alt6}
              alt7={AIelhiCourseData[0].alt7}
              alt8={AIelhiCourseData[0].alt8}
              alt9={AIelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIelhiCourseData[0].CityTextB}
          CityText={AIelhiCourseData[0].CityText}
          CityTextLB={AIelhiCourseData[0].CityTextLB}
          CityTextL={AIelhiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
