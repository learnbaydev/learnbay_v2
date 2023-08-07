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
import { MLDelhiCourseData } from "../../../../CityData/delhi/MachineLearningCourseDelhiData";

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
          Best Machine Learning Course in Delhi with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay's Best Machine Learning Training Program in Delhi with Dedicated Career Assistance. Enroll Now and upscale your career."
        />
        <meta
          name="keywords"
          content="Machine learning course in Delhi, Machine learning training in Delhi, Machine learning institute in Delhi, best Machine learning institute in Delhi, Machine learning course in Delhi, Machine learning certification in Delhi, Machine learning training institute in Delhi, advanced Machine learning course in Delhi, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-delhi"
        />
        {/* <meta name="robots" content="NOODP,NOYDIR" /> */}
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
            __html: `${MLDelhiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDelhiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDelhiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDelhiCourseData[0].script4} `,
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
          titleCourse="Machine Learning Course in Delhi"
          brochureLink=" https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          firstToparaImg="Advance Program"
          firstHeading="Machine Learning Course Training In Delhi"
          firstTopPara="Job-Ready Machine Learning Training with Domain Specialization"
          cityParaCont="Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
        />
        <SecondSection SecondSectionData={MLDelhiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={MLDelhiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹  1,10,000 + 18% GST"
            FeeEmi="₹  10,816/month"
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
              ProgramHead1={MLDelhiCourseData[0].ProgramHead1}
              ProgramBot1={MLDelhiCourseData[0].ProgramBot1}
              ProgramBot2={MLDelhiCourseData[0].ProgramBot2}
              ProgramHead3={MLDelhiCourseData[0].ProgramHead3}
              ProgramHead4={MLDelhiCourseData[0].ProgramHead4}
              ProgramBot3={MLDelhiCourseData[0].ProgramBot3}
              ProgramBot31={MLDelhiCourseData[0].ProgramBot31}
              ProgramBot32={MLDelhiCourseData[0].ProgramBot32}
              ProgramBot4={MLDelhiCourseData[0].ProgramBot4}
              ProgramBot5={MLDelhiCourseData[0].ProgramBot5}
              ProgramBot6={MLDelhiCourseData[0].ProgramBot6}
              ProgramBot8={MLDelhiCourseData[0].ProgramBot8}
              ProgramBot9={MLDelhiCourseData[0].ProgramBot9}
              ProgramBot10={MLDelhiCourseData[0].ProgramBot10}
              Courselink1={MLDelhiCourseData[0].Courselink1}
              Courselink2={MLDelhiCourseData[0].Courselink2}
              Courselink3={MLDelhiCourseData[0].Courselink3}
              Courselink4={MLDelhiCourseData[0].Courselink4}
              Courselink5={MLDelhiCourseData[0].Courselink5}
              Course1={MLDelhiCourseData[0].Course1}
              Course2={MLDelhiCourseData[0].Course2}
              Course3={MLDelhiCourseData[0].Course3}
              Course4={MLDelhiCourseData[0].Course4}
              Course5={MLDelhiCourseData[0].Course5}
              DomainHead1={MLDelhiCourseData[0].DomainHead1}
              DomainBot1={MLDelhiCourseData[0].DomainBot1}
              DomainBot2={MLDelhiCourseData[0].DomainBot2}
              DomainBot3={MLDelhiCourseData[0].DomainBot3}
              DomainList1={MLDelhiCourseData[0].DomainList1}
              DomainList2={MLDelhiCourseData[0].DomainList2}
              DomainList3={MLDelhiCourseData[0].DomainList3}
              DomainList4={MLDelhiCourseData[0].DomainList4}
              DomainList5={MLDelhiCourseData[0].DomainList5}
              DomainList6={MLDelhiCourseData[0].DomainList6}
              DomainList7={MLDelhiCourseData[0].DomainList7}
              DomainList8={MLDelhiCourseData[0].DomainList8}
              DomainList9={MLDelhiCourseData[0].DomainList9}
              DomainList10={MLDelhiCourseData[0].DomainList10}
              Domainlink1={MLDelhiCourseData[0].Domainlink1}
              Domainlink2={MLDelhiCourseData[0].Domainlink2}
              Domainlink3={MLDelhiCourseData[0].Domainlink3}
              Domainlink4={MLDelhiCourseData[0].Domainlink4}
              Domainlink5={MLDelhiCourseData[0].Domainlink5}
              Domainlink6={MLDelhiCourseData[0].Domainlink6}
              Domainlink7={MLDelhiCourseData[0].Domainlink7}
              Domainlink8={MLDelhiCourseData[0].Domainlink8}
              Domainlink9={MLDelhiCourseData[0].Domainlink9}
              Domainlink10={MLDelhiCourseData[0].Domainlink10}
              CertificationHead1={MLDelhiCourseData[0].CertificationHead1}
              CertificationBot1={MLDelhiCourseData[0].CertificationBot1}
              CertificationBot2={MLDelhiCourseData[0].CertificationBot2}
              src={MLDelhiCourseData[0].src}
              src22={MLDelhiCourseData[0].src22}
              src33={MLDelhiCourseData[0].src33}
              ModuleHead1={MLDelhiCourseData[0].ModuleHead1}
              ModuleBot1={MLDelhiCourseData[0].ModuleBot1}
              ModuleBot2={MLDelhiCourseData[0].ModuleBot2}
              ModuleBot3={MLDelhiCourseData[0].ModuleBot3}
              ModuleHead3={MLDelhiCourseData[0].ModuleHead3}
              ModuleBot4={MLDelhiCourseData[0].ModuleBot4}
              ModuleHead2={MLDelhiCourseData[0].ModuleHead2}
              syllabush1={MLDelhiCourseData[0].syllabush1}
              syllabusb1={MLDelhiCourseData[0].syllabusb1}
              SyllabusBotlist11={MLDelhiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLDelhiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLDelhiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLDelhiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLDelhiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLDelhiCourseData[0].SyllabusBotlist16}
              syllabush2={MLDelhiCourseData[0].syllabush2}
              syllabusb2={MLDelhiCourseData[0].syllabusb2}
              SyllabusBotlist21={MLDelhiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLDelhiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLDelhiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLDelhiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLDelhiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLDelhiCourseData[0].SyllabusBotlist26}
              syllabush3={MLDelhiCourseData[0].syllabush3}
              syllabusb3={MLDelhiCourseData[0].syllabusb3}
              SyllabusBotlist31={MLDelhiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLDelhiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLDelhiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLDelhiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLDelhiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLDelhiCourseData[0].SyllabusBotlist36}
              syllabush4={MLDelhiCourseData[0].syllabush4}
              syllabusb4={MLDelhiCourseData[0].syllabusb4}
              SyllabusBotlist41={MLDelhiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLDelhiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLDelhiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLDelhiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLDelhiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLDelhiCourseData[0].SyllabusBotlist46}
              syllabussrc={MLDelhiCourseData[0].syllabussrc}
              JobHead1={MLDelhiCourseData[0].JobHead1}
              JobBot1={MLDelhiCourseData[0].JobBot1}
              JobBot2={MLDelhiCourseData[0].JobBot2}
              JobBot3={MLDelhiCourseData[0].JobBot3}
              JobHead2={MLDelhiCourseData[0].JobHead2}
              JobBot5={MLDelhiCourseData[0].JobBot5}
              JobBot4={MLDelhiCourseData[0].JobBot4}
              JobBot6={MLDelhiCourseData[0].JobBot6}
              ProjectsBot1={MLDelhiCourseData[0].ProjectsBot1}
              ProjectsBot2={MLDelhiCourseData[0].ProjectsBot2}
              src1={MLDelhiCourseData[0].src1}
              ProjectsHead1={MLDelhiCourseData[0].ProjectsHead1}
              ProjectsH1={MLDelhiCourseData[0].ProjectsH1}
              Projectsp1={MLDelhiCourseData[0].Projectsp1}
              src2={MLDelhiCourseData[0].src2}
              ProjectsH2={MLDelhiCourseData[0].ProjectsH2}
              Projectsp2={MLDelhiCourseData[0].Projectsp2}
              src3={MLDelhiCourseData[0].src3}
              ProjectsH3={MLDelhiCourseData[0].ProjectsH3}
              Projectsp3={MLDelhiCourseData[0].Projectsp3}
              src4={MLDelhiCourseData[0].src4}
              ProjectsH4={MLDelhiCourseData[0].ProjectsH4}
              Projectsp4={MLDelhiCourseData[0].Projectsp4}
              AlumniBot1={MLDelhiCourseData[0].AlumniBot1}
              Asrc1={MLDelhiCourseData[0].Asrc1}
              AlumniH1={MLDelhiCourseData[0].AlumniH1}
              Alumnip1={MLDelhiCourseData[0].Alumnip1}
              Asrc2={MLDelhiCourseData[0].Asrc2}
              AlumniH2={MLDelhiCourseData[0].AlumniH2}
              Alumnip2={MLDelhiCourseData[0].Alumnip2}
              Asrc3={MLDelhiCourseData[0].Asrc3}
              AlumniH3={MLDelhiCourseData[0].AlumniH3}
              Alumnip3={MLDelhiCourseData[0].Alumnip3}
              Asrc4={MLDelhiCourseData[0].Asrc4}
              AlumniH4={MLDelhiCourseData[0].AlumniH4}
              Alumnip4={MLDelhiCourseData[0].Alumnip4}
              alt1={MLDelhiCourseData[0].alt1}
              alt2={MLDelhiCourseData[0].alt2}
              alt3={MLDelhiCourseData[0].alt3}
              alt4={MLDelhiCourseData[0].alt4}
              alt5={MLDelhiCourseData[0].alt5}
              alt6={MLDelhiCourseData[0].alt6}
              alt7={MLDelhiCourseData[0].alt7}
              alt8={MLDelhiCourseData[0].alt8}
              alt9={MLDelhiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLDelhiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MLDelhiCourseData[0].CityTextB}
          CityText={MLDelhiCourseData[0].CityText}
          CityTextLB={MLDelhiCourseData[0].CityTextLB}
          CityTextL={MLDelhiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
