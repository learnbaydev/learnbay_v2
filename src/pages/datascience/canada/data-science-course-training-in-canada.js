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
import { DataSciencecanadaCourseData } from "../../../../CityData/Canada/DataScienceCourseTrainingCanadadata";
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
        <title>Best Data Science Course in Canada With IBM Certification</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Enroll now in Learnbay's top-notch Data Science Training Program in Canada, Includes one-on-one mentorship and guaranteed job assistance."
        />
        <meta
          name="keywords"
          content="data science course in Canada, data science training in Canada, data science institute in Canada, best data science institute in Canada, data scientist course in Canada,data scientist certification in Canada, data science training institute in Canada, advanced data science course in Canada, data science course with Placement Assistance, data science course"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-canada"
        />
        <meta
          property="og:title"
          content="ata Science Course in Canada | Data Science Training in Canada"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Data science course in Canada. Learnbay is Advanced Data Science Course Training Institute in Canada. Data science course in Canada will enhance your career"
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
          content="ata Science Course in Canada | Data Science Training in Canada"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Data science course in Canada. Learnbay is Advanced Data Science Course Training Institute in Canada. Data science course in Canada will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Data science course in Canada. Learnbay is Advanced Data Science Course Training Institute in Canada. Data science course in Canada will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-course-training-in-canada"
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
            __html: `${DataSciencecanadaCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataSciencecanadaCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataSciencecanadaCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DataSciencecanadaCourseData[0].script4} `,
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
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          idss="Jn2puEQC8yk"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course2.png"
          firstToparaImg="Enroll Now"
          firstHeading="Data Science Course in Canada "
          firstTopPara="Foundational and Advance Job-ready Program"
          cityParaCont="Enhance your Data Science career with our comprehensive Data Science course in Canada with IBM Certification. Our advanced Data Science training in Canada will help you to make experts in Python, Power BI, etc. You will get training from industry leaders and masters. to gain the most in-demand data science and AI skills."
        />
        <SecondSection SecondSectionData={DataSciencecanadaCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={DataSciencecanadaCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
            Fee="₹99,000 + 18% GST"
            FeeEmi="₹ 9,735/month"
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
             ProgramHead1={DataSciencecanadaCourseData[0].ProgramHead1}
              ProgramBot1={DataSciencecanadaCourseData[0].ProgramBot1}
              ProgramBot2={DataSciencecanadaCourseData[0].ProgramBot2}
              ProgramHead3={DataSciencecanadaCourseData[0].ProgramHead3}
              ProgramHead4={DataSciencecanadaCourseData[0].ProgramHead4}
              ProgramBot3={DataSciencecanadaCourseData[0].ProgramBot3}
              ProgramBot31={DataSciencecanadaCourseData[0].ProgramBot31}
              ProgramBot4={DataSciencecanadaCourseData[0].ProgramBot4}
              ProgramBot5={DataSciencecanadaCourseData[0].ProgramBot5}
              ProgramBot6={DataSciencecanadaCourseData[0].ProgramBot6}
              Courselink1={DataSciencecanadaCourseData[0].Courselink1}
              Courselink2={DataSciencecanadaCourseData[0].Courselink2}
              Courselink3={DataSciencecanadaCourseData[0].Courselink3}
              Courselink4={DataSciencecanadaCourseData[0].Courselink4}
              Courselink5={DataSciencecanadaCourseData[0].Courselink5}
              Course1={DataSciencecanadaCourseData[0].Course1}
              Course2={DataSciencecanadaCourseData[0].Course2}
              Course3={DataSciencecanadaCourseData[0].Course3}
              Course4={DataSciencecanadaCourseData[0].Course4}
              Course5={DataSciencecanadaCourseData[0].Course5}
              DomainHead1={DataSciencecanadaCourseData[0].DomainHead1}
              DomainBot1={DataSciencecanadaCourseData[0].DomainBot1}
              DomainBot2={DataSciencecanadaCourseData[0].DomainBot2}
              DomainBot3={DataSciencecanadaCourseData[0].DomainBot3}
              DomainList1={DataSciencecanadaCourseData[0].DomainList1}
              DomainList2={DataSciencecanadaCourseData[0].DomainList2}
              DomainList3={DataSciencecanadaCourseData[0].DomainList3}
              DomainList4={DataSciencecanadaCourseData[0].DomainList4}
              DomainList5={DataSciencecanadaCourseData[0].DomainList5}
              DomainList6={DataSciencecanadaCourseData[0].DomainList6}
              DomainList7={DataSciencecanadaCourseData[0].DomainList7}
              DomainList8={DataSciencecanadaCourseData[0].DomainList8}
              DomainList9={DataSciencecanadaCourseData[0].DomainList9}
              DomainList10={DataSciencecanadaCourseData[0].DomainList10}
              Domainlink1={DataSciencecanadaCourseData[0].Domainlink1}
              Domainlink2={DataSciencecanadaCourseData[0].Domainlink2}
              Domainlink3={DataSciencecanadaCourseData[0].Domainlink3}
              Domainlink4={DataSciencecanadaCourseData[0].Domainlink4}
              Domainlink5={DataSciencecanadaCourseData[0].Domainlink5}
              Domainlink6={DataSciencecanadaCourseData[0].Domainlink6}
              Domainlink7={DataSciencecanadaCourseData[0].Domainlink7}
              Domainlink8={DataSciencecanadaCourseData[0].Domainlink8}
              Domainlink9={DataSciencecanadaCourseData[0].Domainlink9}
              Domainlink10={DataSciencecanadaCourseData[0].Domainlink10}
              CertificationBot1={DataSciencecanadaCourseData[0].CertificationBot1}
              CertificationBot2={DataSciencecanadaCourseData[0].CertificationBot2}
              src={DataSciencecanadaCourseData[0].src}
              src22={DataSciencecanadaCourseData[0].src22}
              src33={DataSciencecanadaCourseData[0].src33}
             ModuleHead1={DataSciencecanadaCourseData[0].ModuleHead1}
              ModuleBot1={DataSciencecanadaCourseData[0].ModuleBot1}
              ModuleBot2={DataSciencecanadaCourseData[0].ModuleBot2}
              syllabush1={DataSciencecanadaCourseData[0].syllabush1}
              syllabusb1={DataSciencecanadaCourseData[0].syllabusb1}
              SyllabusBotlist11={DataSciencecanadaCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DataSciencecanadaCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DataSciencecanadaCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DataSciencecanadaCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DataSciencecanadaCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DataSciencecanadaCourseData[0].SyllabusBotlist16}
              syllabush2={DataSciencecanadaCourseData[0].syllabush2}
              syllabusb2={DataSciencecanadaCourseData[0].syllabusb2}
              SyllabusBotlist21={DataSciencecanadaCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DataSciencecanadaCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DataSciencecanadaCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DataSciencecanadaCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DataSciencecanadaCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DataSciencecanadaCourseData[0].SyllabusBotlist26}
              syllabush3={DataSciencecanadaCourseData[0].syllabush3}
              syllabusb3={DataSciencecanadaCourseData[0].syllabusb3}
              SyllabusBotlist31={DataSciencecanadaCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DataSciencecanadaCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DataSciencecanadaCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DataSciencecanadaCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DataSciencecanadaCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DataSciencecanadaCourseData[0].SyllabusBotlist36}
              syllabush4={DataSciencecanadaCourseData[0].syllabush4}
              syllabusb4={DataSciencecanadaCourseData[0].syllabusb4}
              SyllabusBotlist41={DataSciencecanadaCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DataSciencecanadaCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DataSciencecanadaCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DataSciencecanadaCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DataSciencecanadaCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DataSciencecanadaCourseData[0].SyllabusBotlist46}
              syllabussrc={DataSciencecanadaCourseData[0].syllabussrc}
              JobHead1={DataSciencecanadaCourseData[0].JobHead1}
              JobBot1={DataSciencecanadaCourseData[0].JobBot1}
              JobBot2={DataSciencecanadaCourseData[0].JobBot2}
              JobBot3={DataSciencecanadaCourseData[0].JobBot3}
              JobHead2={DataSciencecanadaCourseData[0].JobHead2}
              JobBot5={DataSciencecanadaCourseData[0].JobBot5}
              JobBot4={DataSciencecanadaCourseData[0].JobBot4}
              ProjectsBot1={DataSciencecanadaCourseData[0].ProjectsBot1}
              ProjectsBot2={DataSciencecanadaCourseData[0].ProjectsBot2}
              src1={DataSciencecanadaCourseData[0].src1}
              ProjectsHead1={DataSciencecanadaCourseData[0].ProjectsHead1}
              ProjectsH1={DataSciencecanadaCourseData[0].ProjectsH1}
              Projectsp1={DataSciencecanadaCourseData[0].Projectsp1}
              src2={DataSciencecanadaCourseData[0].src2}
              ProjectsH2={DataSciencecanadaCourseData[0].ProjectsH2}
              Projectsp2={DataSciencecanadaCourseData[0].Projectsp2}
              src3={DataSciencecanadaCourseData[0].src3}
              ProjectsH3={DataSciencecanadaCourseData[0].ProjectsH3}
              Projectsp3={DataSciencecanadaCourseData[0].Projectsp3}
              src4={DataSciencecanadaCourseData[0].src4}
              ProjectsH4={DataSciencecanadaCourseData[0].ProjectsH4}
              Projectsp4={DataSciencecanadaCourseData[0].Projectsp4}
              AlumniBot1={DataSciencecanadaCourseData[0].AlumniBot1}
              Asrc1={DataSciencecanadaCourseData[0].Asrc1}
              AlumniH1={DataSciencecanadaCourseData[0].AlumniH1}
              Alumnip1={DataSciencecanadaCourseData[0].Alumnip1}
              Asrc2={DataSciencecanadaCourseData[0].Asrc2}
              AlumniH2={DataSciencecanadaCourseData[0].AlumniH2}
              Alumnip2={DataSciencecanadaCourseData[0].Alumnip2}
              Asrc3={DataSciencecanadaCourseData[0].Asrc3}
              AlumniH3={DataSciencecanadaCourseData[0].AlumniH3}
              Alumnip3={DataSciencecanadaCourseData[0].Alumnip3}
              Asrc4={DataSciencecanadaCourseData[0].Asrc4}
              AlumniH4={DataSciencecanadaCourseData[0].AlumniH4}
              Alumnip4={DataSciencecanadaCourseData[0].Alumnip4}
              alt1={DataSciencecanadaCourseData[0].alt1}
              alt2={DataSciencecanadaCourseData[0].alt2}
              alt3={DataSciencecanadaCourseData[0].alt3}
              alt4={DataSciencecanadaCourseData[0].alt4}
              alt5={DataSciencecanadaCourseData[0].alt5}
              alt6={DataSciencecanadaCourseData[0].alt6}
              alt7={DataSciencecanadaCourseData[0].alt7}
              alt8={DataSciencecanadaCourseData[0].alt8}
              alt9={DataSciencecanadaCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DataSciencecanadaCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DataSciencecanadaCourseData[0].CityTextB}
          CityText={DataSciencecanadaCourseData[0].CityText}
          CityTextLB={DataSciencecanadaCourseData[0].CityTextLB}
          CityTextL={DataSciencecanadaCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
