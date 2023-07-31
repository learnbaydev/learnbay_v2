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
import { FSDPuneCourseData} from "../../../../CityData/Pune/FSDCourseInPune";
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
          Best Full Stack Developer Course in Pune with Job Assistance
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Join the best Full-stack Software Developer course in Pune and acquire the skills needed to excel in this field. Sign-up Now."
        />
        <meta
          name="keywords"
          content="Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course training in Pune, Full-Stack Software Developer Course institute in Pune, best Full-Stack Software Developer Course institute in Pune, data scientist course in Pune,data scientist certification in Pune, Full-Stack Software Developer Course training institute in Pune, advanced Full-Stack Software Developer Course in Pune, Full-Stack Software Developer Course with Placement Assistance, Full-Stack Software Developer Course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/full-stack-software-developer-course-in-pune"
        />
        <meta
          name="copyright"
          content="Learnbay: Full-Stack Software Developer Courses Certification Training India"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
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
          fullStack={true}
          FirstTyped="Guaranteed Interview Calls"
          SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}  
          titleCourse="Full-Stack Software Developer Course In Pune To Achieve Your Dream Job"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Full+Stack+Software+Development+Program+Learnbay.pdf"
          idss="y_0IdhFKJKM"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/head/W+Dev.png"
         
          firstHeading="Full-Stack Software Developer Course In Pune To Achieve Your Dream Job"
          firstTopPara="Ace Your Coding Interview at PRODUCT Based Companies"
          cityParaCont="Enroll in the best Job-ready full-stack software development course in Pune. Take a 10-step step ahead of others towards the most lucrative salary package of product-based MNCs, which you deserve."
        />
        <SecondSection SecondSectionData={FSDPuneCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={FSDPuneCourseData[0].testimonial}
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
            
              ProgramHead1={FSDPuneCourseData[0].ProgramHead1}
              ProgramBot1={FSDPuneCourseData[0].ProgramBot1}
              ProgramBot2={FSDPuneCourseData[0].ProgramBot2}
              ProgramBot3={FSDPuneCourseData[0].ProgramBot3}
              ProgramHead3={FSDPuneCourseData[0].ProgramHead3}
            
              ProgramBot31={FSDPuneCourseData[0].ProgramBot31}
              ProgramHead4={FSDPuneCourseData[0].ProgramHead4}
              ProgramHead5={FSDPuneCourseData[0].ProgramHead5}
              ProgramBot4={FSDPuneCourseData[0].ProgramBot4}
              CertificationHead1={FSDPuneCourseData[0].CertificationHead1}
              ProgramBot5={FSDPuneCourseData[0].ProgramBot5}
              ProgramHead6={FSDPuneCourseData[0].ProgramHead6}
              ProgramBot6={FSDPuneCourseData[0].ProgramBot6}
              ProgramHead7={FSDPuneCourseData[0].ProgramHead7}
              ProgramBot8={FSDPuneCourseData[0].ProgramBot8}
              ProgramBot9={FSDPuneCourseData[0].ProgramBot9}
              ProgramBot10={FSDPuneCourseData[0].ProgramBot10}

              ProgramHead8={FSDPuneCourseData[0].ProgramHead8}
              ProgramHead9={FSDPuneCourseData[0].ProgramHead9}
              ProgramHead10={FSDPuneCourseData[0].ProgramHead10}
              ProgramHead11={FSDPuneCourseData[0].ProgramHead11}
              ProgramHead12={FSDPuneCourseData[0].ProgramHead12}
              ProgramHead13={FSDPuneCourseData[0].ProgramHead13}

              Courselink1={FSDPuneCourseData[0].Courselink1}
              Courselink2={FSDPuneCourseData[0].Courselink2}
              Courselink3={FSDPuneCourseData[0].Courselink3}
              Courselink4={FSDPuneCourseData[0].Courselink4}
              Courselink5={FSDPuneCourseData[0].Courselink5}
              Course1={FSDPuneCourseData[0].Course1}
              Course2={FSDPuneCourseData[0].Course2}
              Course3={FSDPuneCourseData[0].Course3}
              Course4={FSDPuneCourseData[0].Course4}
              Course5={FSDPuneCourseData[0].Course5}
              DomainHead1={FSDPuneCourseData[0].DomainHead1}
              DomainBot1={FSDPuneCourseData[0].DomainBot1}
              DomainHead2={FSDPuneCourseData[0].DomainHead2}
              DomainHead3={FSDPuneCourseData[0].DomainHead3}
              DomainHead4={FSDPuneCourseData[0].DomainHead4}
              DomainHead5={FSDPuneCourseData[0].DomainHead5}
              DomainHead6={FSDPuneCourseData[0].DomainHead6}
              DomainHead7={FSDPuneCourseData[0].DomainHead7}
              
              DomainBot2={FSDPuneCourseData[0].DomainBot2}

              DomainBot3={FSDPuneCourseData[0].DomainBot3}
              DomainList1={FSDPuneCourseData[0].DomainList1}
              DomainList2={FSDPuneCourseData[0].DomainList2}
              DomainList3={FSDPuneCourseData[0].DomainList3}
              DomainList4={FSDPuneCourseData[0].DomainList4}
              DomainList5={FSDPuneCourseData[0].DomainList5}
              DomainList6={FSDPuneCourseData[0].DomainList6}
              DomainList7={FSDPuneCourseData[0].DomainList7}
              DomainList8={FSDPuneCourseData[0].DomainList8}
              DomainList9={FSDPuneCourseData[0].DomainList9}
              DomainList10={FSDPuneCourseData[0].DomainList10}
              Domainlink1={FSDPuneCourseData[0].Domainlink1}
              Domainlink2={FSDPuneCourseData[0].Domainlink2}
              Domainlink3={FSDPuneCourseData[0].Domainlink3}
              Domainlink4={FSDPuneCourseData[0].Domainlink4}
              Domainlink5={FSDPuneCourseData[0].Domainlink5}
              Domainlink6={FSDPuneCourseData[0].Domainlink6}
              Domainlink7={FSDPuneCourseData[0].Domainlink7}
              Domainlink8={FSDPuneCourseData[0].Domainlink8}
              Domainlink9={FSDPuneCourseData[0].Domainlink9}
              Domainlink10={FSDPuneCourseData[0].Domainlink10}
              CertificationBot1={FSDPuneCourseData[0].CertificationBot1}
              CertificationBot2={FSDPuneCourseData[0].CertificationBot2}
              src={FSDPuneCourseData[0].src}
              ModuleHead1={FSDPuneCourseData[0].ModuleHead1}

              src22={FSDPuneCourseData[0].src22}
              src33={FSDPuneCourseData[0].src33}
              ModuleBot1={FSDPuneCourseData[0].ModuleBot1}
              ModuleBot2={FSDPuneCourseData[0].ModuleBot2}
              ModuleBot3={FSDPuneCourseData[0].ModuleBot3}
              ModuleBot4={FSDPuneCourseData[0].ModuleBot4}
              syllabush1={FSDPuneCourseData[0].syllabush1}
              syllabusb1={FSDPuneCourseData[0].syllabusb1}
              SyllabusBotlist11={FSDPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={FSDPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={FSDPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={FSDPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={FSDPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={FSDPuneCourseData[0].SyllabusBotlist16}
              syllabush2={FSDPuneCourseData[0].syllabush2}
              syllabusb2={FSDPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={FSDPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={FSDPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={FSDPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={FSDPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={FSDPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={FSDPuneCourseData[0].SyllabusBotlist26}
              syllabush3={FSDPuneCourseData[0].syllabush3}
              syllabusb3={FSDPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={FSDPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={FSDPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={FSDPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={FSDPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={FSDPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={FSDPuneCourseData[0].SyllabusBotlist36}
              syllabush4={FSDPuneCourseData[0].syllabush4}
              syllabusb4={FSDPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={FSDPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={FSDPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={FSDPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={FSDPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={FSDPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={FSDPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={FSDPuneCourseData[0].syllabussrc}
              JobHead1={FSDPuneCourseData[0].JobHead1}
              JobBot1={FSDPuneCourseData[0].JobBot1}
              JobBot2={FSDPuneCourseData[0].JobBot2}
              JobBot5={FSDPuneCourseData[0].JobBot5}
              JobHead2={FSDPuneCourseData[0].JobHead2}
              JobBot3={FSDPuneCourseData[0].JobBot3}
              JobBot6={FSDPuneCourseData[0].JobBot6}
              ProjectsBot1={FSDPuneCourseData[0].ProjectsBot1}
              ProjectsBot2= {FSDPuneCourseData[0].ProjectsBot2}
  
        
              src1={FSDPuneCourseData[0].src1}
              ProjectsH1={FSDPuneCourseData[0].ProjectsH1}
              Projectsp1={FSDPuneCourseData[0].Projectsp1}
              src2={FSDPuneCourseData[0].src2}
              ProjectsH2={FSDPuneCourseData[0].ProjectsH2}
              Projectsp2={FSDPuneCourseData[0].Projectsp2}
              src3={FSDPuneCourseData[0].src3}
              ProjectsH3={FSDPuneCourseData[0].ProjectsH3}
              Projectsp3={FSDPuneCourseData[0].Projectsp3}
              src4={FSDPuneCourseData[0].src4}
              ProjectsH4={FSDPuneCourseData[0].ProjectsH4}
              Projectsp4={FSDPuneCourseData[0].Projectsp4}
              AlumniBot1={FSDPuneCourseData[0].AlumniBot1}
              Asrc1={FSDPuneCourseData[0].Asrc1}
              AlumniH1={FSDPuneCourseData[0].AlumniH1}
              Alumnip1={FSDPuneCourseData[0].Alumnip1}
              Asrc2={FSDPuneCourseData[0].Asrc2}
              AlumniH2={FSDPuneCourseData[0].AlumniH2}
              Alumnip2={FSDPuneCourseData[0].Alumnip2}
              Asrc3={FSDPuneCourseData[0].Asrc3}
              AlumniH3={FSDPuneCourseData[0].AlumniH3}
              Alumnip3={FSDPuneCourseData[0].Alumnip3}
              Asrc4={FSDPuneCourseData[0].Asrc4}
              AlumniH4={FSDPuneCourseData[0].AlumniH4}
              Alumnip4={FSDPuneCourseData[0].Alumnip4}
          
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={FSDPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={FSDPuneCourseData[0].CityTextB}
          CityText={FSDPuneCourseData[0].CityText}
          CityTextLB={FSDPuneCourseData[0].CityTextLB}
          CityTextL={FSDPuneCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
