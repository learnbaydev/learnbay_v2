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
import { MachineLearningChennaiCourseData } from "../../../../CityData/Chennai/machineLearningCourseTrainingInChennai";
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
          Best Machine Learning Course in Chennai with Career Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join-us The Learnbay's Extensive Machine Learning Training Course in Chennai. Get mentored by top industry experts, multiple batches available. Enroll Now."
        />
        <meta
          name="keywords"
          content="Machine learning course in Chennai, Machine learning training in Chennai, Machine learning institute in Chennai, best Machine learning institute in Chennai, Machine learning course in Chennai, Machine learning certification in Chennai, Machine learning training institute in Chennai, advanced Machine learning course in Chennai, Machine learning course with Placement Assistance, Machine learning course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/machine-learning-course-training-in-chennai"
        />
        <meta
          name="copyright"
          content="Learnbay: Machine Learning Courses Certification Training India"
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
            __html: `${MachineLearningChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MachineLearningChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MachineLearningChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${MachineLearningChennaiCourseData[0].script4} `,
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
          cityParaCont=" Be eligible to work as an AI/ML expert in MNC/PRODUCT Based Companies. Earn the most advanced industrial machine learning skill via fast-paced industry capstones. Be pros of NLP and computer vision."
          dataScience={true}
          titleCourse="Machine Learning Course Training In Chennai"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/ML.png"
          firstHeading="Machine Learning Course "
          firstTopPara="Machine Learning Course For Experienced Tech Professionals"
          firstToparaImg="Training In Chennai"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={MachineLearningChennaiCourseData[0].secondSection}
        />
        <Testimonial
          redirectDS={true}
          Testimonial={MachineLearningChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹ 1,10,000 + 18% GST"
            FeeEmi="₹ 10,816/month"
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
              ProgramBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProgramBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              ProgramBot3={MachineLearningChennaiCourseData[0].ProgramBot3}
              ProgramHead4={MachineLearningChennaiCourseData[0].ProgramHead4}
              ProgramBot4={MachineLearningChennaiCourseData[0].ProgramBot4}
              ProgramHead5={MachineLearningChennaiCourseData[0].ProgramHead5}
              ProgramBot5={MachineLearningChennaiCourseData[0].ProgramBot5}
              ProgramHead6={MachineLearningChennaiCourseData[0].ProgramHead6}
              ProgramBot6={MachineLearningChennaiCourseData[0].ProgramBot6}
              ProgramHead7={MachineLearningChennaiCourseData[0].ProgramHead7}
              ProgramBot8={MachineLearningChennaiCourseData[0].ProgramBot8}
              ProgramBot9={MachineLearningChennaiCourseData[0].ProgramBot9}
              DomainHead1={MachineLearningChennaiCourseData[0].DomainHead1}
              DomainBot1={MachineLearningChennaiCourseData[0].DomainBot1}
              DomainBot2={MachineLearningChennaiCourseData[0].DomainBot2}
              DomainBot3={MachineLearningChennaiCourseData[0].DomainBot3}
              DomainList1={MachineLearningChennaiCourseData[0].DomainList1}
              DomainList2={MachineLearningChennaiCourseData[0].DomainList2}
              DomainList3={MachineLearningChennaiCourseData[0].DomainList3}
              DomainList4={MachineLearningChennaiCourseData[0].DomainList4}
              DomainList5={MachineLearningChennaiCourseData[0].DomainList5}
              DomainList6={MachineLearningChennaiCourseData[0].DomainList6}
              DomainList7={MachineLearningChennaiCourseData[0].DomainList7}
              DomainList8={MachineLearningChennaiCourseData[0].DomainList8}
              DomainList9={MachineLearningChennaiCourseData[0].DomainList9}
              DomainList10={MachineLearningChennaiCourseData[0].DomainList10}
              Domainlink1={MachineLearningChennaiCourseData[0].Domainlink1}
              Domainlink2={MachineLearningChennaiCourseData[0].Domainlink2}
              Domainlink3={MachineLearningChennaiCourseData[0].Domainlink3}
              Domainlink4={MachineLearningChennaiCourseData[0].Domainlink4}
              Domainlink5={MachineLearningChennaiCourseData[0].Domainlink5}
              Domainlink6={MachineLearningChennaiCourseData[0].Domainlink6}
              Domainlink7={MachineLearningChennaiCourseData[0].Domainlink7}
              Domainlink8={MachineLearningChennaiCourseData[0].Domainlink8}
              Domainlink9={MachineLearningChennaiCourseData[0].Domainlink9}
              Domainlink10={MachineLearningChennaiCourseData[0].Domainlink10}
              CertificationHead1={
                MachineLearningChennaiCourseData[0].CertificationHead1
              }
              CertificationBot1={
                MachineLearningChennaiCourseData[0].CertificationBot1
              }
              src={MachineLearningChennaiCourseData[0].src}
              ModuleHead1={MachineLearningChennaiCourseData[0].ModuleHead1}
              ModuleBot1={MachineLearningChennaiCourseData[0].ModuleBot1}
              ModuleBot2={MachineLearningChennaiCourseData[0].ModuleBot2}
              syllabush1={MachineLearningChennaiCourseData[0].syllabush1}
              syllabusb1={MachineLearningChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={
                MachineLearningChennaiCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                MachineLearningChennaiCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                MachineLearningChennaiCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                MachineLearningChennaiCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                MachineLearningChennaiCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                MachineLearningChennaiCourseData[0].SyllabusBotlist16
              }
              syllabush2={MachineLearningChennaiCourseData[0].syllabush2}
              syllabusb2={MachineLearningChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={
                MachineLearningChennaiCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                MachineLearningChennaiCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                MachineLearningChennaiCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                MachineLearningChennaiCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                MachineLearningChennaiCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                MachineLearningChennaiCourseData[0].SyllabusBotlist26
              }
              syllabush3={MachineLearningChennaiCourseData[0].syllabush3}
              syllabusb3={MachineLearningChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={
                MachineLearningChennaiCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                MachineLearningChennaiCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                MachineLearningChennaiCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                MachineLearningChennaiCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                MachineLearningChennaiCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                MachineLearningChennaiCourseData[0].SyllabusBotlist36
              }
              syllabush4={MachineLearningChennaiCourseData[0].syllabush4}
              syllabusb4={MachineLearningChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={
                MachineLearningChennaiCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                MachineLearningChennaiCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                MachineLearningChennaiCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                MachineLearningChennaiCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                MachineLearningChennaiCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                MachineLearningChennaiCourseData[0].SyllabusBotlist46
              }
              syllabussrc={MachineLearningChennaiCourseData[0].syllabussrc}
              JobHead1={MachineLearningChennaiCourseData[0].JobHead1}
              JobBot1={MachineLearningChennaiCourseData[0].JobBot1}
              JobBot2={MachineLearningChennaiCourseData[0].JobBot2}
              JobBot5={MachineLearningChennaiCourseData[0].JobBot5}
              JobHead2={MachineLearningChennaiCourseData[0].JobHead2}
              JobBot3={MachineLearningChennaiCourseData[0].JobBot3}
              JobBot4={MachineLearningChennaiCourseData[0].JobBot4}
              JobBot6={MachineLearningChennaiCourseData[0].JobBot6}
              ProjectsBot1={MachineLearningChennaiCourseData[0].ProgramBot1}
              ProjectsBot2={MachineLearningChennaiCourseData[0].ProgramBot2}
              src1={MachineLearningChennaiCourseData[0].src1}
              ProjectsH1={MachineLearningChennaiCourseData[0].ProjectsH1}
              Projectsp1={MachineLearningChennaiCourseData[0].Projectsp1}
              src2={MachineLearningChennaiCourseData[0].src2}
              ProjectsH2={MachineLearningChennaiCourseData[0].ProjectsH2}
              Projectsp2={MachineLearningChennaiCourseData[0].Projectsp2}
              src3={MachineLearningChennaiCourseData[0].src3}
              ProjectsH3={MachineLearningChennaiCourseData[0].ProjectsH3}
              Projectsp3={MachineLearningChennaiCourseData[0].Projectsp3}
              src4={MachineLearningChennaiCourseData[0].src4}
              ProjectsH4={MachineLearningChennaiCourseData[0].ProjectsH4}
              Projectsp4={MachineLearningChennaiCourseData[0].Projectsp4}
              AlumniBot1={MachineLearningChennaiCourseData[0].AlumniBot1}
              Asrc1={MachineLearningChennaiCourseData[0].Asrc1}
              AlumniH1={MachineLearningChennaiCourseData[0].AlumniH1}
              Alumnip1={MachineLearningChennaiCourseData[0].Alumnip1}
              Asrc2={MachineLearningChennaiCourseData[0].Asrc2}
              AlumniH2={MachineLearningChennaiCourseData[0].AlumniH2}
              Alumnip2={MachineLearningChennaiCourseData[0].Alumnip2}
              Asrc3={MachineLearningChennaiCourseData[0].Asrc3}
              AlumniH3={MachineLearningChennaiCourseData[0].AlumniH3}
              Alumnip3={MachineLearningChennaiCourseData[0].Alumnip3}
              Asrc4={MachineLearningChennaiCourseData[0].Asrc4}
              AlumniH4={MachineLearningChennaiCourseData[0].AlumniH4}
              Alumnip4={MachineLearningChennaiCourseData[0].Alumnip4}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={MachineLearningChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={MachineLearningChennaiCourseData[0].CityTextB}
          CityText={MachineLearningChennaiCourseData[0].CityText}
          CityTextLB={MachineLearningChennaiCourseData[0].CityTextLB}
          CityTextL={MachineLearningChennaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
