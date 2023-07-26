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
import {  FullStackChennaiCourseData } from "../../../../CityData/Chennai/fullstackSoftwareDeveloperCourseInChennai";
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
      <title>Full Stack Developer Course In Chennai - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Looking for Best Full Stack Training Program in Chennai? Become A Skilled Full Stack Developer with Learnbay's Advance Full Stack Curriculum Modules with Best Career Assistance."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course training in Chennai, Full-Stack Software Developer Course institute in Chennai, best Full-Stack Software Developer Course institute in Chennai, data scientist course in Chennai,data scientist certification in Chennai, Full-Stack Software Developer Course training institute in Chennai, advanced Full-Stack Software Developer Course in Chennai, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-chennai"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
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
            __html: `${ FullStackChennaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ FullStackChennaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ FullStackChennaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${ FullStackChennaiCourseData[0].script4} `,
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
          cityParaCont=" Enroll in the best Job-ready full-stack software development course in Chennai. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
          titleCourse="Full-Stack Software Developer Course In Chennai To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstHeading="Full-Stack Software Developer Course In Chennai To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          idss="bfl64ANfSV0"


          
        />
        <SecondSection SecondSectionData={ FullStackChennaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={ FullStackChennaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹ 1,10,000 + 18% GST"
            FeeEmi="₹10,816"
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
              fullStackCity={true}
                 
              ProgramBot1={ FullStackChennaiCourseData[0].ProgramBot1}
              ProgramBot2={ FullStackChennaiCourseData[0].ProgramBot2}
              ProgramBot3={ FullStackChennaiCourseData[0].ProgramBot3}
              ProgramHead4={ FullStackChennaiCourseData[0].ProgramHead4}
              ProgramBot4={ FullStackChennaiCourseData[0].ProgramBot4}
              ProgramHead5={ FullStackChennaiCourseData[0].ProgramHead5}
              ProgramBot5={ FullStackChennaiCourseData[0].ProgramBot5}
              ProgramHead6={ FullStackChennaiCourseData[0].ProgramHead6}
              ProgramBot6={ FullStackChennaiCourseData[0].ProgramBot6}
              ProgramHead7={ FullStackChennaiCourseData[0].ProgramHead7}
              ProgramBot8={ FullStackChennaiCourseData[0].ProgramBot8}
              ProgramHead8 ={FullStackChennaiCourseData[0].ProgramHead8}
              ProgramHead9={FullStackChennaiCourseData[0].ProgramHead9}
              ProgramHead10={FullStackChennaiCourseData[0].ProgramHead10}
              ProgramHead11={FullStackChennaiCourseData[0].ProgramHead11}
              ProgramHead12={FullStackChennaiCourseData[0].ProgramHead12}
              ProgramHead13={FullStackChennaiCourseData[0].ProgramHead13}
              ProgramBot9={ FullStackChennaiCourseData[0].ProgramBot9}
              DomainHead1={ FullStackChennaiCourseData[0].DomainHead1}
              DomainBot1={ FullStackChennaiCourseData[0].DomainBot1}
              DomainHead2={ FullStackChennaiCourseData[0].DomainHead2}
              DomainHead3={ FullStackChennaiCourseData[0].DomainHead3}
              DomainHead4={ FullStackChennaiCourseData[0].DomainHead4}
              DomainHead5={ FullStackChennaiCourseData[0].DomainHead5}
              DomainHead6={ FullStackChennaiCourseData[0].DomainHead6}
              DomainHead7={ FullStackChennaiCourseData[0].DomainHead7}
              DomainBot2={ FullStackChennaiCourseData[0].DomainBot2}
              DomainBot3={ FullStackChennaiCourseData[0].DomainBot3}
              DomainList1={ FullStackChennaiCourseData[0].DomainList1}
              DomainList2={ FullStackChennaiCourseData[0].DomainList2}
              DomainList3={ FullStackChennaiCourseData[0].DomainList3}
              DomainList4={ FullStackChennaiCourseData[0].DomainList4}
              DomainList5={ FullStackChennaiCourseData[0].DomainList5}
              DomainList6={ FullStackChennaiCourseData[0].DomainList6}
              DomainList7={ FullStackChennaiCourseData[0].DomainList7}
              DomainList8={ FullStackChennaiCourseData[0].DomainList8}
              DomainList9={ FullStackChennaiCourseData[0].DomainList9}
              DomainList10={ FullStackChennaiCourseData[0].DomainList10}
              Domainlink1={ FullStackChennaiCourseData[0].Domainlink1}
              Domainlink2={ FullStackChennaiCourseData[0].Domainlink2}
              Domainlink3={ FullStackChennaiCourseData[0].Domainlink3}
              Domainlink4={ FullStackChennaiCourseData[0].Domainlink4}
              Domainlink5={ FullStackChennaiCourseData[0].Domainlink5}
              Domainlink6={ FullStackChennaiCourseData[0].Domainlink6}
              Domainlink7={ FullStackChennaiCourseData[0].Domainlink7}
              Domainlink8={ FullStackChennaiCourseData[0].Domainlink8}
              Domainlink9={ FullStackChennaiCourseData[0].Domainlink9}
              Domainlink10={ FullStackChennaiCourseData[0].Domainlink10}
              CertificationHead1={ FullStackChennaiCourseData[0].CertificationHead1}
              CertificationBot1={ FullStackChennaiCourseData[0].CertificationBot1}
              src={ FullStackChennaiCourseData[0].src}
              ModuleHead1={ FullStackChennaiCourseData[0].ModuleHead1}
              ModuleBot1={ FullStackChennaiCourseData[0].ModuleBot1}
              ModuleHead2={ FullStackChennaiCourseData[0].Head2}
              ModuleBot3={ FullStackChennaiCourseData[0].ModuleBot3}
              ModuleBot2={ FullStackChennaiCourseData[0].ModuleBot2}
              syllabush1={ FullStackChennaiCourseData[0].syllabush1}
              syllabusb1={ FullStackChennaiCourseData[0].syllabusb1}
              SyllabusBotlist11={ FullStackChennaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={ FullStackChennaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={ FullStackChennaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={ FullStackChennaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={ FullStackChennaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={ FullStackChennaiCourseData[0].SyllabusBotlist16}
              syllabush2={ FullStackChennaiCourseData[0].syllabush2}
              syllabusb2={ FullStackChennaiCourseData[0].syllabusb2}
              SyllabusBotlist21={ FullStackChennaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={ FullStackChennaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={ FullStackChennaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={ FullStackChennaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={ FullStackChennaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={ FullStackChennaiCourseData[0].SyllabusBotlist26}
              syllabush3={ FullStackChennaiCourseData[0].syllabush3}
              syllabusb3={ FullStackChennaiCourseData[0].syllabusb3}
              SyllabusBotlist31={ FullStackChennaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={ FullStackChennaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={ FullStackChennaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={ FullStackChennaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={ FullStackChennaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={ FullStackChennaiCourseData[0].SyllabusBotlist36}
              syllabush4={ FullStackChennaiCourseData[0].syllabush4}
              syllabusb4={ FullStackChennaiCourseData[0].syllabusb4}
              SyllabusBotlist41={ FullStackChennaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={ FullStackChennaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={ FullStackChennaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={ FullStackChennaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={ FullStackChennaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={ FullStackChennaiCourseData[0].SyllabusBotlist46}
              syllabussrc={ FullStackChennaiCourseData[0].syllabussrc}
              JobHead1={ FullStackChennaiCourseData[0].JobHead1}
              JobBot1={ FullStackChennaiCourseData[0].JobBot1}
              JobBot2={ FullStackChennaiCourseData[0].JobBot2}
              JobBot5={ FullStackChennaiCourseData[0].JobBot5}
              JobHead2={ FullStackChennaiCourseData[0].JobHead2}
              JobBot3={ FullStackChennaiCourseData[0].JobBot3}
              JobBot4={ FullStackChennaiCourseData[0].JobBot4}
              JobBot6={ FullStackChennaiCourseData[0].JobBot6}
              ProjectsBot1={ FullStackChennaiCourseData[0].ProgramBot1}
              ProjectsBot2={ FullStackChennaiCourseData[0].ProgramBot2}
              src1={ FullStackChennaiCourseData[0].src1}
              ProjectsH1={ FullStackChennaiCourseData[0].ProjectsH1}
              Projectsp1={ FullStackChennaiCourseData[0].Projectsp1}
              src2={ FullStackChennaiCourseData[0].src2}
              ProjectsH2={ FullStackChennaiCourseData[0].ProjectsH2}
              Projectsp2={ FullStackChennaiCourseData[0].Projectsp2}
              src3={ FullStackChennaiCourseData[0].src3}
              ProjectsH3={ FullStackChennaiCourseData[0].ProjectsH3}
              Projectsp3={ FullStackChennaiCourseData[0].Projectsp3}
              src4={ FullStackChennaiCourseData[0].src4}
              ProjectsH4={ FullStackChennaiCourseData[0].ProjectsH4}
              Projectsp4={ FullStackChennaiCourseData[0].Projectsp4}
              AlumniBot1={ FullStackChennaiCourseData[0].AlumniBot1}
              Asrc1={ FullStackChennaiCourseData[0].Asrc1}
              AlumniH1={ FullStackChennaiCourseData[0].AlumniH1}
              Alumnip1={ FullStackChennaiCourseData[0].Alumnip1}
              Asrc2={ FullStackChennaiCourseData[0].Asrc2}
              AlumniH2={ FullStackChennaiCourseData[0].AlumniH2}
              Alumnip2={ FullStackChennaiCourseData[0].Alumnip2}
              Asrc3={ FullStackChennaiCourseData[0].Asrc3}
              AlumniH3={ FullStackChennaiCourseData[0].AlumniH3}
              Alumnip3={ FullStackChennaiCourseData[0].Alumnip3}
              Asrc4={ FullStackChennaiCourseData[0].Asrc4}
              AlumniH4={ FullStackChennaiCourseData[0].AlumniH4}
              Alumnip4={ FullStackChennaiCourseData[0].Alumnip4}
           
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={ FullStackChennaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={ FullStackChennaiCourseData[0].CityTextB}
          CityText={ FullStackChennaiCourseData[0].CityText}
          CityTextLB={ FullStackChennaiCourseData[0].CityTextLB}
          CityTextL={ FullStackChennaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
