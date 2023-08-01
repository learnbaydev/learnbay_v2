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
import { BABangaloreCourseData } from "../../../../CityData/Bangalore/businessAnalyticsCourseTrainingBangaloreData";
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
          Business Analyst Certification Course in Bangalore - Learnbay
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay is providing Business Analytics in Bangalore along with live projects & IBM and Microsoft certifications. Enroll Now."
        />
        <meta
          name="keywords"
          content="Business Analytics course in Bangalore, Business Analytics training in Bangalore, Business Analytics institute in Bangalore, best Business Analytics institute in Bangalore, Business Analytics course in Bangalore, Business Analytics certification in Bangalore, Business Analytics training institute in Bangalore, advanced Business Analytics course in Bangalore, Business Analytics course with Placement Assistance, Business Analytics course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/business-analytics-course-training-in-bangalore"
        />
        <meta
          name="copyright"
          content="Learnbay: Business Analytics Courses Certification Training India"
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
            __html: `${BABangaloreCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BABangaloreCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BABangaloreCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${BABangaloreCourseData[0].script4} `,
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
          firstToparaImg="Training In Bangalore"
          firstHeading="Business Analytics Course"
          firstTopPara="Job-ready Business Analytics Program with Live Industrial Projects"
          cityParaCont="The best-suited course for working professionals with less than a year of work experience and dreaming for a lucrative and even growing future."
        />
        <SecondSection SecondSectionData={BABangaloreCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={BABangaloreCourseData[0].testimonial}
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
              ProgramBot1={BABangaloreCourseData[0].ProgramBot1}
              ProgramHead3={BABangaloreCourseData[0].ProgramHead3}
              ProgramBot3={BABangaloreCourseData[0].ProgramBot3}
              ProgramBot31={BABangaloreCourseData[0].ProgramBot31}
              ProgramBot4={BABangaloreCourseData[0].ProgramBot4}
              ProgramBot5={BABangaloreCourseData[0].ProgramBot5}
              ProgramBot6={BABangaloreCourseData[0].ProgramBot6}
              Courselink1={BABangaloreCourseData[0].Courselink1}
              Courselink2={BABangaloreCourseData[0].Courselink2}
              Courselink3={BABangaloreCourseData[0].Courselink3}
              Courselink4={BABangaloreCourseData[0].Courselink4}
              Courselink5={BABangaloreCourseData[0].Courselink5}
              Course1={BABangaloreCourseData[0].Course1}
              Course2={BABangaloreCourseData[0].Course2}
              Course3={BABangaloreCourseData[0].Course3}
              Course4={BABangaloreCourseData[0].Course4}
              Course5={BABangaloreCourseData[0].Course5}
              DomainHead1={BABangaloreCourseData[0].DomainHead1}
              DomainBot1={BABangaloreCourseData[0].DomainBot1}
              DomainBot2={BABangaloreCourseData[0].DomainBot2}
              DomainBot3={BABangaloreCourseData[0].DomainBot3}
              DomainList1={BABangaloreCourseData[0].DomainList1}
              DomainList2={BABangaloreCourseData[0].DomainList2}
              DomainList3={BABangaloreCourseData[0].DomainList3}
              DomainList4={BABangaloreCourseData[0].DomainList4}
              DomainList5={BABangaloreCourseData[0].DomainList5}
              DomainList6={BABangaloreCourseData[0].DomainList6}
              DomainList7={BABangaloreCourseData[0].DomainList7}
              DomainList8={BABangaloreCourseData[0].DomainList8}
              DomainList9={BABangaloreCourseData[0].DomainList9}
              DomainList10={BABangaloreCourseData[0].DomainList10}
              Domainlink1={BABangaloreCourseData[0].Domainlink1}
              Domainlink2={BABangaloreCourseData[0].Domainlink2}
              Domainlink3={BABangaloreCourseData[0].Domainlink3}
              Domainlink4={BABangaloreCourseData[0].Domainlink4}
              Domainlink5={BABangaloreCourseData[0].Domainlink5}
              Domainlink6={BABangaloreCourseData[0].Domainlink6}
              Domainlink7={BABangaloreCourseData[0].Domainlink7}
              Domainlink8={BABangaloreCourseData[0].Domainlink8}
              Domainlink9={BABangaloreCourseData[0].Domainlink9}
              Domainlink10={BABangaloreCourseData[0].Domainlink10}
              CertificationHead1={BABangaloreCourseData[0].CertificationHead1}

              CertificationBot1={BABangaloreCourseData[0].CertificationBot1}
              src={BABangaloreCourseData[0].src}
              src22={BABangaloreCourseData[0].src22}
              src33={BABangaloreCourseData[0].src33}
              ModuleBot1={BABangaloreCourseData[0].ModuleBot1}
              ModuleBot2={BABangaloreCourseData[0].ModuleBot2}
              ModuleBot3={BABangaloreCourseData[0].ModuleBot3}
              syllabush1={BABangaloreCourseData[0].syllabush1}
              syllabusb1={BABangaloreCourseData[0].syllabusb1}
              SyllabusBotlist11={BABangaloreCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={BABangaloreCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={BABangaloreCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={BABangaloreCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={BABangaloreCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={BABangaloreCourseData[0].SyllabusBotlist16}
              syllabush2={BABangaloreCourseData[0].syllabush2}
              syllabusb2={BABangaloreCourseData[0].syllabusb2}
              SyllabusBotlist21={BABangaloreCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={BABangaloreCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={BABangaloreCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={BABangaloreCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={BABangaloreCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={BABangaloreCourseData[0].SyllabusBotlist26}
              syllabush3={BABangaloreCourseData[0].syllabush3}
              syllabusb3={BABangaloreCourseData[0].syllabusb3}
              SyllabusBotlist31={BABangaloreCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={BABangaloreCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={BABangaloreCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={BABangaloreCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={BABangaloreCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={BABangaloreCourseData[0].SyllabusBotlist36}
              syllabush4={BABangaloreCourseData[0].syllabush4}
              syllabusb4={BABangaloreCourseData[0].syllabusb4}
              SyllabusBotlist41={BABangaloreCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={BABangaloreCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={BABangaloreCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={BABangaloreCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={BABangaloreCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={BABangaloreCourseData[0].SyllabusBotlist46}
              syllabussrc={BABangaloreCourseData[0].syllabussrc}
              JobBot1={BABangaloreCourseData[0].JobBot1}
              JobHead2={BABangaloreCourseData[0].JobHead2}
              JobBot3={BABangaloreCourseData[0].JobBot3}
              JobBot4={BABangaloreCourseData[0].JobBot4}
              ProjectsBot1={BABangaloreCourseData[0].ProgramBot1}
              src1={BABangaloreCourseData[0].src1}
              ProjectsH1={BABangaloreCourseData[0].ProjectsH1}
              Projectsp1={BABangaloreCourseData[0].Projectsp1}
              src2={BABangaloreCourseData[0].src2}
              ProjectsH2={BABangaloreCourseData[0].ProjectsH2}
              Projectsp2={BABangaloreCourseData[0].Projectsp2}
              src3={BABangaloreCourseData[0].src3}
              ProjectsH3={BABangaloreCourseData[0].ProjectsH3}
              Projectsp3={BABangaloreCourseData[0].Projectsp3}
              src4={BABangaloreCourseData[0].src4}
              ProjectsH4={BABangaloreCourseData[0].ProjectsH4}
              Projectsp4={BABangaloreCourseData[0].Projectsp4}
              AlumniBot1={BABangaloreCourseData[0].AlumniBot1}
              Asrc1={BABangaloreCourseData[0].Asrc1}
              AlumniH1={BABangaloreCourseData[0].AlumniH1}
              Alumnip1={BABangaloreCourseData[0].Alumnip1}
              Asrc2={BABangaloreCourseData[0].Asrc2}
              AlumniH2={BABangaloreCourseData[0].AlumniH2}
              Alumnip2={BABangaloreCourseData[0].Alumnip2}
              Asrc3={BABangaloreCourseData[0].Asrc3}
              AlumniH3={BABangaloreCourseData[0].AlumniH3}
              Alumnip3={BABangaloreCourseData[0].Alumnip3}
              Asrc4={BABangaloreCourseData[0].Asrc4}
              AlumniH4={BABangaloreCourseData[0].AlumniH4}
              Alumnip4={BABangaloreCourseData[0].Alumnip4}
              alt1={BABangaloreCourseData[0].alt1}
              alt2={BABangaloreCourseData[0].alt2}
              alt3={BABangaloreCourseData[0].alt3}
              alt4={BABangaloreCourseData[0].alt4}
              alt5={BABangaloreCourseData[0].alt5}
              alt6={BABangaloreCourseData[0].alt6}
              alt7={BABangaloreCourseData[0].alt7}
              alt8={BABangaloreCourseData[0].alt8}
              alt9={BABangaloreCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={BABangaloreCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={BABangaloreCourseData[0].CityTextB}
          CityText={BABangaloreCourseData[0].CityText}
          CityTextLB={BABangaloreCourseData[0].CityTextLB}
          CityTextL={BABangaloreCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
