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
import { AIcanadaCourseData } from "../../../../CityData/Canada/ArtificaialIntellginceCourseTrainingCanadaData";
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
    <title>Best Artificial Intelligence Course in Canada - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers best Artificial Intelligence Training in Canada with live projects, IBM certification with best placement assistance. Enroll Now."
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Canada, Artificial Intelligence training in Canada, Artificial Intelligence institute in Canada, best Artificial Intelligence institute in Canada, Artificial Intelligence course in Canada, Artificial Intelligence certification in Canada, Artificial Intelligence training institute in Canada, advanced Artificial Intelligence course in Canada, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/artificial-intelligence-ai-course-training-canada"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Canada"
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
            __html: `${AIcanadaCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIcanadaCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIcanadaCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIcanadaCourseData[0].script4} `,
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
          firstToparaImg="For Managers and Leaders"
          firstHeading="Artificial Intelligence(Ai) Course Training In Canada"
          firstTopPara="Job-Assured Artificial Intelligence Training  Program"
          cityParaCont="Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects. "

        />
        <SecondSection SecondSectionData={AIcanadaCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={AIcanadaCourseData[0].testimonial}
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
             ProgramHead1={AIcanadaCourseData[0].ProgramHead1}
              ProgramBot1={AIcanadaCourseData[0].ProgramBot1}
              ProgramBot2={AIcanadaCourseData[0].ProgramBot2}
              ProgramHead3={AIcanadaCourseData[0].ProgramHead3}
              ProgramHead4={AIcanadaCourseData[0].ProgramHead4}
              ProgramBot3={AIcanadaCourseData[0].ProgramBot3}
              ProgramBot66={AIcanadaCourseData[0].ProgramBot66}
              ProgramBot32={AIcanadaCourseData[0].ProgramBot32}
              ProgramBot4={AIcanadaCourseData[0].ProgramBot4}
              ProgramBot5={AIcanadaCourseData[0].ProgramBot5}
              ProgramBot6={AIcanadaCourseData[0].ProgramBot6}
              ProgramBot8={AIcanadaCourseData[0].ProgramBot8}
              ProgramBot9={AIcanadaCourseData[0].ProgramBot9}
              ProgramBot10={AIcanadaCourseData[0].ProgramBot10}
              Courselink1={AIcanadaCourseData[0].Courselink1}
              Courselink2={AIcanadaCourseData[0].Courselink2}
              Courselink3={AIcanadaCourseData[0].Courselink3}
              Courselink4={AIcanadaCourseData[0].Courselink4}
              Courselink5={AIcanadaCourseData[0].Courselink5}
              Course1={AIcanadaCourseData[0].Course1}
              Course2={AIcanadaCourseData[0].Course2}
              Course3={AIcanadaCourseData[0].Course3}
              Course4={AIcanadaCourseData[0].Course4}
              Course5={AIcanadaCourseData[0].Course5}
              DomainHead1={AIcanadaCourseData[0].DomainHead1}
              DomainBot1={AIcanadaCourseData[0].DomainBot1}
              DomainBot2={AIcanadaCourseData[0].DomainBot2}
              DomainBot3={AIcanadaCourseData[0].DomainBot3}
              DomainList1={AIcanadaCourseData[0].DomainList1}
              DomainList2={AIcanadaCourseData[0].DomainList2}
              DomainList3={AIcanadaCourseData[0].DomainList3}
              DomainList4={AIcanadaCourseData[0].DomainList4}
              DomainList5={AIcanadaCourseData[0].DomainList5}
              DomainList6={AIcanadaCourseData[0].DomainList6}
              DomainList7={AIcanadaCourseData[0].DomainList7}
              DomainList8={AIcanadaCourseData[0].DomainList8}
              DomainList9={AIcanadaCourseData[0].DomainList9}
              DomainList10={AIcanadaCourseData[0].DomainList10}
              Domainlink1={AIcanadaCourseData[0].Domainlink1}
              Domainlink2={AIcanadaCourseData[0].Domainlink2}
              Domainlink3={AIcanadaCourseData[0].Domainlink3}
              Domainlink4={AIcanadaCourseData[0].Domainlink4}
              Domainlink5={AIcanadaCourseData[0].Domainlink5}
              Domainlink6={AIcanadaCourseData[0].Domainlink6}
              Domainlink7={AIcanadaCourseData[0].Domainlink7}
              Domainlink8={AIcanadaCourseData[0].Domainlink8}
              Domainlink9={AIcanadaCourseData[0].Domainlink9}
              Domainlink10={AIcanadaCourseData[0].Domainlink10}
              CertificationHead1={AIcanadaCourseData[0].CertificationHead1}
              CertificationBot1={AIcanadaCourseData[0].CertificationBot1}
              CertificationBot2={AIcanadaCourseData[0].CertificationBot2}
              src={AIcanadaCourseData[0].src}
              src22={AIcanadaCourseData[0].src22}
              src33={AIcanadaCourseData[0].src33}
             ModuleHead1={AIcanadaCourseData[0].ModuleHead1}
              ModuleBot1={AIcanadaCourseData[0].ModuleBot1}
              ModuleBot2={AIcanadaCourseData[0].ModuleBot2}
              ModuleBot3={AIcanadaCourseData[0].ModuleBot3}
              ModuleHead3={AIcanadaCourseData[0] .ModuleHead3}
              ModuleBot4={AIcanadaCourseData[0].ModuleBot4}
              ModuleHead2={AIcanadaCourseData[0].ModuleHead2}
              syllabush1={AIcanadaCourseData[0].syllabush1}
              syllabusb1={AIcanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={AIcanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIcanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIcanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIcanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIcanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIcanadaCourseData[0].SyllabusBotlist16}
              syllabush2={AIcanadaCourseData[0].syllabush2}
              syllabusb2={AIcanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={AIcanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIcanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIcanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIcanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIcanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIcanadaCourseData[0].SyllabusBotlist26}
              syllabush3={AIcanadaCourseData[0].syllabush3}
              syllabusb3={AIcanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={AIcanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIcanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIcanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIcanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIcanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIcanadaCourseData[0].SyllabusBotlist36}
              syllabush4={AIcanadaCourseData[0].syllabush4}
              syllabusb4={AIcanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={AIcanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIcanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIcanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIcanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIcanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIcanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={AIcanadaCourseData[0].syllabussrc}
              JobHead1={AIcanadaCourseData[0].JobHead1}
              JobBot1={AIcanadaCourseData[0].JobBot1}
              JobBot2={AIcanadaCourseData[0].JobBot2}
              JobBot3={AIcanadaCourseData[0].JobBot3}
              JobHead2={AIcanadaCourseData[0].JobHead2}
              JobBot5={AIcanadaCourseData[0].JobBot5}
              JobBot4={AIcanadaCourseData[0].JobBot4}
              JobBot6={AIcanadaCourseData[0].JobBot6}
              ProjectsBot1={AIcanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={AIcanadaCourseData[0].ProjectsBot2}
              src1={AIcanadaCourseData[0].src1}
              ProjectsHead1={AIcanadaCourseData[0].ProjectsHead1}
              ProjectsH1={AIcanadaCourseData[0].ProjectsH1}
              Projectsp1={AIcanadaCourseData[0].Projectsp1}
              src2={AIcanadaCourseData[0].src2}
              ProjectsH2={AIcanadaCourseData[0].ProjectsH2}
              Projectsp2={AIcanadaCourseData[0].Projectsp2}
              src3={AIcanadaCourseData[0].src3}
              ProjectsH3={AIcanadaCourseData[0].ProjectsH3}
              Projectsp3={AIcanadaCourseData[0].Projectsp3}
              src4={AIcanadaCourseData[0].src4}
              ProjectsH4={AIcanadaCourseData[0].ProjectsH4}
              Projectsp4={AIcanadaCourseData[0].Projectsp4}
              AlumniBot1={AIcanadaCourseData[0].AlumniBot1}
              Asrc1={AIcanadaCourseData[0].Asrc1}
              AlumniH1={AIcanadaCourseData[0].AlumniH1}
              Alumnip1={AIcanadaCourseData[0].Alumnip1}
              Asrc2={AIcanadaCourseData[0].Asrc2}
              AlumniH2={AIcanadaCourseData[0].AlumniH2}
              Alumnip2={AIcanadaCourseData[0].Alumnip2}
              Asrc3={AIcanadaCourseData[0].Asrc3}
              AlumniH3={AIcanadaCourseData[0].AlumniH3}
              Alumnip3={AIcanadaCourseData[0].Alumnip3}
              Asrc4={AIcanadaCourseData[0].Asrc4}
              AlumniH4={AIcanadaCourseData[0].AlumniH4}
              Alumnip4={AIcanadaCourseData[0].Alumnip4}
              alt1={AIcanadaCourseData[0].alt1}
              alt2={AIcanadaCourseData[0].alt2}
              alt3={AIcanadaCourseData[0].alt3}
              alt4={AIcanadaCourseData[0].alt4}
              alt5={AIcanadaCourseData[0].alt5}
              alt6={AIcanadaCourseData[0].alt6}
              alt7={AIcanadaCourseData[0].alt7}
              alt8={AIcanadaCourseData[0].alt8}
              alt9={AIcanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIcanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIcanadaCourseData[0].CityTextB}
          CityText={AIcanadaCourseData[0].CityText}
          CityTextLB={AIcanadaCourseData[0].CityTextLB}
          CityTextL={AIcanadaCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
