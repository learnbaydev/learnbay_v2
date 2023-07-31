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
import { MLDubaiCourseData } from "../../../../CityData/Dubai/MLCourseTrainingDubaiData";
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
          Best Machine Learning Course in Dubai with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Boost your skills in Machine Learning with Learnbay's top-notch Machine Learning Certification Program in Dubai with Best Career Assistance. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Dubai, Machine learning training in Dubai, Machine learning institute in Dubai, best Machine learning institute in Dubai, Machine learning course in Dubai, Machine learning certification in Dubai, Machine learning training institute in Dubai, advanced Machine learning course in Dubai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training Dubai"
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
            __html: `${MLDubaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDubaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDubaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MLDubaiCourseData[0].script4} `,
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
          titleCourse="AI & ML Program for tech professionals"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+AI+%26+ML+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/AIML-Header.png"
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence (AI) Course Training in Dubai"
          firstTopPara="Job-oriented Data Science Training for working professionals"
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        />
        <SecondSection SecondSectionData={MLDubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={MLDubaiCourseData[0].testimonial}
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
              ProgramBot1={MLDubaiCourseData[0].ProgramBot1}
              ProgramHead3={MLDubaiCourseData[0].ProgramHead3}
              ProgramBot3={MLDubaiCourseData[0].ProgramBot3}
              ProgramBot31={MLDubaiCourseData[0].ProgramBot31}
              ProgramBot4={MLDubaiCourseData[0].ProgramBot4}
              ProgramBot5={MLDubaiCourseData[0].ProgramBot5}
              ProgramBot6={MLDubaiCourseData[0].ProgramBot6}
              Courselink1={MLDubaiCourseData[0].Courselink1}
              Courselink2={MLDubaiCourseData[0].Courselink2}
              Courselink3={MLDubaiCourseData[0].Courselink3}
              Courselink4={MLDubaiCourseData[0].Courselink4}
              Courselink5={MLDubaiCourseData[0].Courselink5}
              Course1={MLDubaiCourseData[0].Course1}
              Course2={MLDubaiCourseData[0].Course2}
              Course3={MLDubaiCourseData[0].Course3}
              Course4={MLDubaiCourseData[0].Course4}
              Course5={MLDubaiCourseData[0].Course5}
              DomainHead1={MLDubaiCourseData[0].DomainHead1}
              DomainBot1={MLDubaiCourseData[0].DomainBot1}
              DomainBot2={MLDubaiCourseData[0].DomainBot2}
              DomainBot3={MLDubaiCourseData[0].DomainBot3}
              DomainList1={MLDubaiCourseData[0].DomainList1}
              DomainList2={MLDubaiCourseData[0].DomainList2}
              DomainList3={MLDubaiCourseData[0].DomainList3}
              DomainList4={MLDubaiCourseData[0].DomainList4}
              DomainList5={MLDubaiCourseData[0].DomainList5}
              DomainList6={MLDubaiCourseData[0].DomainList6}
              DomainList7={MLDubaiCourseData[0].DomainList7}
              DomainList8={MLDubaiCourseData[0].DomainList8}
              DomainList9={MLDubaiCourseData[0].DomainList9}
              DomainList10={MLDubaiCourseData[0].DomainList10}
              Domainlink1={MLDubaiCourseData[0].Domainlink1}
              Domainlink2={MLDubaiCourseData[0].Domainlink2}
              Domainlink3={MLDubaiCourseData[0].Domainlink3}
              Domainlink4={MLDubaiCourseData[0].Domainlink4}
              Domainlink5={MLDubaiCourseData[0].Domainlink5}
              Domainlink6={MLDubaiCourseData[0].Domainlink6}
              Domainlink7={MLDubaiCourseData[0].Domainlink7}
              Domainlink8={MLDubaiCourseData[0].Domainlink8}
              Domainlink9={MLDubaiCourseData[0].Domainlink9}
              Domainlink10={MLDubaiCourseData[0].Domainlink10}
              CertificationBot1={MLDubaiCourseData[0].CertificationBot1}
              src={MLDubaiCourseData[0].src}
              src22={MLDubaiCourseData[0].src22}
              src33={MLDubaiCourseData[0].src33}
              ModuleBot1={MLDubaiCourseData[0].ModuleBot1}
              ModuleBot2={MLDubaiCourseData[0].ModuleBot2}
              syllabush1={MLDubaiCourseData[0].syllabush1}
              syllabusb1={MLDubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={MLDubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={MLDubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={MLDubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={MLDubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={MLDubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={MLDubaiCourseData[0].SyllabusBotlist16}
              syllabush2={MLDubaiCourseData[0].syllabush2}
              syllabusb2={MLDubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={MLDubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={MLDubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={MLDubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={MLDubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={MLDubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={MLDubaiCourseData[0].SyllabusBotlist26}
              syllabush3={MLDubaiCourseData[0].syllabush3}
              syllabusb3={MLDubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={MLDubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={MLDubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={MLDubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={MLDubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={MLDubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={MLDubaiCourseData[0].SyllabusBotlist36}
              syllabush4={MLDubaiCourseData[0].syllabush4}
              syllabusb4={MLDubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={MLDubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={MLDubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={MLDubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={MLDubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={MLDubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={MLDubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={MLDubaiCourseData[0].syllabussrc}
              JobBot1={MLDubaiCourseData[0].JobBot1}
              JobHead2={MLDubaiCourseData[0].JobHead2}
              JobBot3={MLDubaiCourseData[0].JobBot3}
              JobBot4={MLDubaiCourseData[0].JobBot4}
              ProjectsBot1={MLDubaiCourseData[0].ProgramBot1}
              src1={MLDubaiCourseData[0].src1}
              ProjectsH1={MLDubaiCourseData[0].ProjectsH1}
              Projectsp1={MLDubaiCourseData[0].Projectsp1}
              src2={MLDubaiCourseData[0].src2}
              ProjectsH2={MLDubaiCourseData[0].ProjectsH2}
              Projectsp2={MLDubaiCourseData[0].Projectsp2}
              src3={MLDubaiCourseData[0].src3}
              ProjectsH3={MLDubaiCourseData[0].ProjectsH3}
              Projectsp3={MLDubaiCourseData[0].Projectsp3}
              src4={MLDubaiCourseData[0].src4}
              ProjectsH4={MLDubaiCourseData[0].ProjectsH4}
              Projectsp4={MLDubaiCourseData[0].Projectsp4}
              AlumniBot1={MLDubaiCourseData[0].AlumniBot1}
              Asrc1={MLDubaiCourseData[0].Asrc1}
              AlumniH1={MLDubaiCourseData[0].AlumniH1}
              Alumnip1={MLDubaiCourseData[0].Alumnip1}
              Asrc2={MLDubaiCourseData[0].Asrc2}
              AlumniH2={MLDubaiCourseData[0].AlumniH2}
              Alumnip2={MLDubaiCourseData[0].Alumnip2}
              Asrc3={MLDubaiCourseData[0].Asrc3}
              AlumniH3={MLDubaiCourseData[0].AlumniH3}
              Alumnip3={MLDubaiCourseData[0].Alumnip3}
              Asrc4={MLDubaiCourseData[0].Asrc4}
              AlumniH4={MLDubaiCourseData[0].AlumniH4}
              Alumnip4={MLDubaiCourseData[0].Alumnip4}
              alt1={MLDubaiCourseData[0].alt1}
              alt2={MLDubaiCourseData[0].alt2}
              alt3={MLDubaiCourseData[0].alt3}
              alt4={MLDubaiCourseData[0].alt4}
              alt5={MLDubaiCourseData[0].alt5}
              alt6={MLDubaiCourseData[0].alt6}
              alt7={MLDubaiCourseData[0].alt7}
              alt8={MLDubaiCourseData[0].alt8}
              alt9={MLDubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MLDubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <Footer />
      </main>
    </div>
  );
}
