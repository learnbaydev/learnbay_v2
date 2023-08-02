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
import { DAPuneCourseData } from "../../../../CityData/Pune/dataAnalyticsCourseTrainingInPune";
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
          Best IBM Certified Data Analytics Course in Pune - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll in our Advanced Data Analytics Course in Pune now and earn an IBM Certification to accelerate your career as a Data Analytics professional."
        />
        <meta
          name="keywords"
          content="Data Analytics course in Pune, Data Analytics training in Pune, Data Analytics institute in Pune, best Data Analytics institute in Pune, Data Analytics course in Pune, Data Analytics certification in Pune, Data Analytics training institute in Pune, advanced Data Analytics course in Pune, Data Analytics course with Placement Assistance, Data Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-analytics-course-training-in-pune"
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
            __html: `${DAPuneCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAPuneCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAPuneCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DAPuneCourseData[0].script4} `,
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
          titleCourse="Data Analytics Course Training in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Data+Analytics+Certification+Program+Learnbay.pdf"
          idss="y_0IdhFKJKM"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/data+analytics+header+image.webp"
          firstToparaImg="For Professionals"
          firstHeading="Data Analytics Course Training in Pune"
          firstTopPara="Industrial Training Program for Early-professionals"
          cityParaCont="Working professionals with less than a year of experience who are hoping for a prosperous or even developing career path should take this course."
        />
        <SecondSection SecondSectionData={DAPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DAPuneCourseData[0].testimonial}
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
            
              ProgramHead1={DAPuneCourseData[0].ProgramHead1}
              ProgramBot1={DAPuneCourseData[0].ProgramBot1}
              ProgramBot2={DAPuneCourseData[0].ProgramBot2}
              ProgramBot3={DAPuneCourseData[0].ProgramBot3}
              ProgramHead3={DAPuneCourseData[0].ProgramHead3}
            
              ProgramBot31={DAPuneCourseData[0].ProgramBot31}
              ProgramHead4={DAPuneCourseData[0].ProgramHead4}
              ProgramHead5={DAPuneCourseData[0].ProgramHead5}
              ProgramBot4={DAPuneCourseData[0].ProgramBot4}
              CertificationHead1={DAPuneCourseData[0].CertificationHead1}
              ProgramBot5={DAPuneCourseData[0].ProgramBot5}
              ProgramHead6={DAPuneCourseData[0].ProgramHead6}
              ProgramBot6={DAPuneCourseData[0].ProgramBot6}
              Courselink1={DAPuneCourseData[0].Courselink1}
              Courselink2={DAPuneCourseData[0].Courselink2}
              Courselink3={DAPuneCourseData[0].Courselink3}
              Courselink4={DAPuneCourseData[0].Courselink4}
              Courselink5={DAPuneCourseData[0].Courselink5}
              Course1={DAPuneCourseData[0].Course1}
              Course2={DAPuneCourseData[0].Course2}
              Course3={DAPuneCourseData[0].Course3}
              Course4={DAPuneCourseData[0].Course4}
              Course5={DAPuneCourseData[0].Course5}
              DomainHead1={DAPuneCourseData[0].DomainHead1}
              DomainBot1={DAPuneCourseData[0].DomainBot1}
              DomainBot2={DAPuneCourseData[0].DomainBot2}
              DomainBot3={DAPuneCourseData[0].DomainBot3}
              DomainList1={DAPuneCourseData[0].DomainList1}
              DomainList2={DAPuneCourseData[0].DomainList2}
              DomainList3={DAPuneCourseData[0].DomainList3}
              DomainList4={DAPuneCourseData[0].DomainList4}
              DomainList5={DAPuneCourseData[0].DomainList5}
              DomainList6={DAPuneCourseData[0].DomainList6}
              DomainList7={DAPuneCourseData[0].DomainList7}
              DomainList8={DAPuneCourseData[0].DomainList8}
              DomainList9={DAPuneCourseData[0].DomainList9}
              DomainList10={DAPuneCourseData[0].DomainList10}
              Domainlink1={DAPuneCourseData[0].Domainlink1}
              Domainlink2={DAPuneCourseData[0].Domainlink2}
              Domainlink3={DAPuneCourseData[0].Domainlink3}
              Domainlink4={DAPuneCourseData[0].Domainlink4}
              Domainlink5={DAPuneCourseData[0].Domainlink5}
              Domainlink6={DAPuneCourseData[0].Domainlink6}
              Domainlink7={DAPuneCourseData[0].Domainlink7}
              Domainlink8={DAPuneCourseData[0].Domainlink8}
              Domainlink9={DAPuneCourseData[0].Domainlink9}
              Domainlink10={DAPuneCourseData[0].Domainlink10}
              CertificationBot1={DAPuneCourseData[0].CertificationBot1}
              CertificationBot2={DAPuneCourseData[0].CertificationBot2}
              src={DAPuneCourseData[0].src}
              src22={DAPuneCourseData[0].src22}
              ModuleHead1={DAPuneCourseData[0].ModuleHead1}
              ModuleBot1={DAPuneCourseData[0].ModuleBot1}
              ModuleBot2={DAPuneCourseData[0].ModuleBot2}
              ModuleBot3={DAPuneCourseData[0].ModuleBot3}
              ModuleBot4={DAPuneCourseData[0].ModuleBot4}
              syllabush1={DAPuneCourseData[0].syllabush1}
              syllabusb1={DAPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={DAPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DAPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DAPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DAPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DAPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DAPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DAPuneCourseData[0].syllabush2}
              syllabusb2={DAPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DAPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DAPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DAPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DAPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DAPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DAPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DAPuneCourseData[0].syllabush3}
              syllabusb3={DAPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DAPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DAPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DAPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DAPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DAPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DAPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DAPuneCourseData[0].syllabush4}
              syllabusb4={DAPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DAPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DAPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DAPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DAPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DAPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DAPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DAPuneCourseData[0].syllabussrc}
              JobHead1={DAPuneCourseData[0].JobHead1}
              JobBot1={DAPuneCourseData[0].JobBot1}
              JobBot2={DAPuneCourseData[0].JobBot2}
              JobBot5={DAPuneCourseData[0].JobBot5}
              JobHead2={DAPuneCourseData[0].JobHead2}
              JobBot3={DAPuneCourseData[0].JobBot3}
              JobBot6={DAPuneCourseData[0].JobBot6}
              ProjectsBot1={DAPuneCourseData[0].ProjectsBot1}
              ProjectsBot2= {DAPuneCourseData[0].ProjectsBot2}
  
        
              src1={DAPuneCourseData[0].src1}
              ProjectsH1={DAPuneCourseData[0].ProjectsH1}
              Projectsp1={DAPuneCourseData[0].Projectsp1}
              src2={DAPuneCourseData[0].src2}
              ProjectsH2={DAPuneCourseData[0].ProjectsH2}
              Projectsp2={DAPuneCourseData[0].Projectsp2}
              src3={DAPuneCourseData[0].src3}
              ProjectsH3={DAPuneCourseData[0].ProjectsH3}
              Projectsp3={DAPuneCourseData[0].Projectsp3}
              src4={DAPuneCourseData[0].src4}
              ProjectsH4={DAPuneCourseData[0].ProjectsH4}
              Projectsp4={DAPuneCourseData[0].Projectsp4}
              AlumniBot1={DAPuneCourseData[0].AlumniBot1}
              Asrc1={DAPuneCourseData[0].Asrc1}
              AlumniH1={DAPuneCourseData[0].AlumniH1}
              Alumnip1={DAPuneCourseData[0].Alumnip1}
              Asrc2={DAPuneCourseData[0].Asrc2}
              AlumniH2={DAPuneCourseData[0].AlumniH2}
              Alumnip2={DAPuneCourseData[0].Alumnip2}
              Asrc3={DAPuneCourseData[0].Asrc3}
              AlumniH3={DAPuneCourseData[0].AlumniH3}
              Alumnip3={DAPuneCourseData[0].Alumnip3}
              Asrc4={DAPuneCourseData[0].Asrc4}
              AlumniH4={DAPuneCourseData[0].AlumniH4}
              Alumnip4={DAPuneCourseData[0].Alumnip4}
          
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DAPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DAPuneCourseData[0].CityTextB}
          CityText={DAPuneCourseData[0].CityText}
          CityTextLB={DAPuneCourseData[0].CityTextLB}
          CityTextL={DAPuneCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
