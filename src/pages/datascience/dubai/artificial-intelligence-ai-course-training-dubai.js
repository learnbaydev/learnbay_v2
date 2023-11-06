import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { AIDubaiCourseData } from "../../../../CityData/Dubai/AITrainingDubaiData";
import FeeSection from "../../../../components/CoursePage/FeeSection/FeeSection";
import Footer from "../../../../components/Footer/Footer";
import Form from "../../../../components/Form/Form";
import Testimonial from "../../../../components/HomePage/Testimonial/Testimonial";
import Navbar from "../../../../components/Navbar/Navbar";
import Popup from "../../../../components/Popup/Popup";
import styles from "../../../styles/Home.module.css";
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
const FAQNew = dynamic(() =>
  import("../../../../components/CoursePage/FAQNew/FAQNew")
);

export default function Home() {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Artificial Intelligence Course in Dubai - Learnbay</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay offers the best Artificial Intelligence Training in Dubai. Get mentorship from the industry experts with best career assistance. Enroll Now."
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/datascience/dubai/artificial-intelligence-ai-course-training-dubai"
        />
        <meta
          property="og:title"
          content="Artificial Intelligence in Dubai | Data Science Training in Dubai"
        />
        <meta property="og:site_name" content="learnbay.co" />
        <meta property="og:type" content="Learnbay_co:course" />
        <meta
          property="og:description"
          content="Artificial Intelligence in Dubai. Learnbay is Advanced Artificial Intelligence Training Institute in Dubai. Artificial Intelligence in Dubai will enhance your career"
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
          content="Artificial Intelligence in Dubai | Data Science Training in Dubai"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Artificial Intelligence in Dubai. Learnbay is Advanced Artificial Intelligence Training Institute in Dubai. Artificial Intelligence in Dubai will enhance your career"
        />
        <meta
          name="twitter:description"
          content="Artificial Intelligence in Dubai. Learnbay is Advanced Artificial Intelligence Training Institute in Dubai. Artificial Intelligence in Dubai will enhance your career"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence course in Dubai, Artificial Intelligence training in Dubai, Artificial Intelligence institute in Dubai, best Artificial Intelligence institute in Dubai, Artificial Intelligence course in Dubai, Artificial Intelligence certification in Dubai, Artificial Intelligence training institute in Dubai, advanced Artificial Intelligence course in Dubai, Artificial Intelligence course with Placement Assistance, Artificial Intelligence course"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/dubai/artificial-intelligence-ai-course-training-dubai"
        />
        <meta
          name="copyright"
          content="Learnbay: Artificial Intelligence Courses Certification Training Dubai"
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
            __html: `${AIDubaiCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIDubaiCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIDubaiCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${AIDubaiCourseData[0].script4} `,
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
          firstHeading="Artificial Intelligence (AI) Course Training in Dubai"
          firstTopPara="Job-oriented Data Science Training for working professionals"
          cityParaCont=" Become a successful data science manager/leader within 11 months. Learn the secret data scientific tricks of managing data science projects. Learn directly from industry leaders via live classes and live projects."
        />
        <SecondSection SecondSectionData={AIDubaiCourseData[0].secondSection} />
        <Testimonial
          redirectDS={true}
          Testimonial={AIDubaiCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            Fee="₹ 1,10,000"
            FeeEmi="₹ 7,211/month"
            WeekdayDate="NOV 17th"
            WeekendDate="NOV 26th"
            WeekendTime="09:30 AM - 1:00 PM"
            WeekdayTime="08:00 AM - 10:00 AM"
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
              ProgramBot1={AIDubaiCourseData[0].ProgramBot1}
              ProgramHead3={AIDubaiCourseData[0].ProgramHead3}
              ProgramBot3={AIDubaiCourseData[0].ProgramBot3}
              ProgramBot66={AIDubaiCourseData[0].ProgramBot66}
              ProgramBot67={AIDubaiCourseData[0].ProgramBot67}
              ProgramBot4={AIDubaiCourseData[0].ProgramBot4}
              ProgramBot5={AIDubaiCourseData[0].ProgramBot5}
              ProgramBot6={AIDubaiCourseData[0].ProgramBot6}
              Courselink1={AIDubaiCourseData[0].Courselink1}
              Courselink2={AIDubaiCourseData[0].Courselink2}
              Courselink3={AIDubaiCourseData[0].Courselink3}
              Courselink4={AIDubaiCourseData[0].Courselink4}
              Courselink5={AIDubaiCourseData[0].Courselink5}
              Course1={AIDubaiCourseData[0].Course1}
              Course2={AIDubaiCourseData[0].Course2}
              Course3={AIDubaiCourseData[0].Course3}
              Course4={AIDubaiCourseData[0].Course4}
              Course5={AIDubaiCourseData[0].Course5}
              DomainHead1={AIDubaiCourseData[0].DomainHead1}
              DomainBot1={AIDubaiCourseData[0].DomainBot1}
              DomainBot2={AIDubaiCourseData[0].DomainBot2}
              DomainBot3={AIDubaiCourseData[0].DomainBot3}
              DomainList1={AIDubaiCourseData[0].DomainList1}
              DomainList2={AIDubaiCourseData[0].DomainList2}
              DomainList3={AIDubaiCourseData[0].DomainList3}
              DomainList4={AIDubaiCourseData[0].DomainList4}
              DomainList5={AIDubaiCourseData[0].DomainList5}
              DomainList6={AIDubaiCourseData[0].DomainList6}
              DomainList7={AIDubaiCourseData[0].DomainList7}
              DomainList8={AIDubaiCourseData[0].DomainList8}
              DomainList9={AIDubaiCourseData[0].DomainList9}
              DomainList10={AIDubaiCourseData[0].DomainList10}
              Domainlink1={AIDubaiCourseData[0].Domainlink1}
              Domainlink2={AIDubaiCourseData[0].Domainlink2}
              Domainlink3={AIDubaiCourseData[0].Domainlink3}
              Domainlink4={AIDubaiCourseData[0].Domainlink4}
              Domainlink5={AIDubaiCourseData[0].Domainlink5}
              Domainlink6={AIDubaiCourseData[0].Domainlink6}
              Domainlink7={AIDubaiCourseData[0].Domainlink7}
              Domainlink8={AIDubaiCourseData[0].Domainlink8}
              Domainlink9={AIDubaiCourseData[0].Domainlink9}
              Domainlink10={AIDubaiCourseData[0].Domainlink10}
              CertificationBot1={AIDubaiCourseData[0].CertificationBot1}
              CertificationHead1={AIDubaiCourseData[0].CertificationHead1}
              CertificationBot2={AIDubaiCourseData[0].CertificationBot2}
              src={AIDubaiCourseData[0].src}
              src22={AIDubaiCourseData[0].src22}
              src33={AIDubaiCourseData[0].src33}
              ModuleBot1={AIDubaiCourseData[0].ModuleBot1}
              ModuleBot2={AIDubaiCourseData[0].ModuleBot2}
              ModuleBot3={AIDubaiCourseData[0].ModuleBot3}
              ModuleBot4={AIDubaiCourseData[0].ModuleBot4}
              syllabush1={AIDubaiCourseData[0].syllabush1}
              syllabusb1={AIDubaiCourseData[0].syllabusb1}
              SyllabusBotlist11={AIDubaiCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={AIDubaiCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={AIDubaiCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={AIDubaiCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={AIDubaiCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={AIDubaiCourseData[0].SyllabusBotlist16}
              syllabush2={AIDubaiCourseData[0].syllabush2}
              syllabusb2={AIDubaiCourseData[0].syllabusb2}
              SyllabusBotlist21={AIDubaiCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={AIDubaiCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={AIDubaiCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={AIDubaiCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={AIDubaiCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={AIDubaiCourseData[0].SyllabusBotlist26}
              syllabush3={AIDubaiCourseData[0].syllabush3}
              syllabusb3={AIDubaiCourseData[0].syllabusb3}
              SyllabusBotlist31={AIDubaiCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={AIDubaiCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={AIDubaiCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={AIDubaiCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={AIDubaiCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={AIDubaiCourseData[0].SyllabusBotlist36}
              syllabush4={AIDubaiCourseData[0].syllabush4}
              syllabusb4={AIDubaiCourseData[0].syllabusb4}
              SyllabusBotlist41={AIDubaiCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={AIDubaiCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={AIDubaiCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={AIDubaiCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={AIDubaiCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={AIDubaiCourseData[0].SyllabusBotlist46}
              syllabussrc={AIDubaiCourseData[0].syllabussrc}
              JobBot1={AIDubaiCourseData[0].JobBot1}
              JobBot2={AIDubaiCourseData[0].JobBot2}
              JobHead2={AIDubaiCourseData[0].JobHead2}
              JobHead1={AIDubaiCourseData[0].JobHead1}
              JobBot3={AIDubaiCourseData[0].JobBot3}
              JobBot4={AIDubaiCourseData[0].JobBot4}
              JobBot5={AIDubaiCourseData[0].JobBot5}
              ProjectsHead1={AIDubaiCourseData[0].ProjectsHead1}
              ProjectsBot1={AIDubaiCourseData[0].ProjectsBot1}
              src1={AIDubaiCourseData[0].src1}
              ProjectsH1={AIDubaiCourseData[0].ProjectsH1}
              Projectsp1={AIDubaiCourseData[0].Projectsp1}
              src2={AIDubaiCourseData[0].src2}
              ProjectsH2={AIDubaiCourseData[0].ProjectsH2}
              Projectsp2={AIDubaiCourseData[0].Projectsp2}
              src3={AIDubaiCourseData[0].src3}
              ProjectsH3={AIDubaiCourseData[0].ProjectsH3}
              Projectsp3={AIDubaiCourseData[0].Projectsp3}
              src4={AIDubaiCourseData[0].src4}
              ProjectsH4={AIDubaiCourseData[0].ProjectsH4}
              Projectsp4={AIDubaiCourseData[0].Projectsp4}
              AlumniBot1={AIDubaiCourseData[0].AlumniBot1}
              Asrc1={AIDubaiCourseData[0].Asrc1}
              AlumniH1={AIDubaiCourseData[0].AlumniH1}
              Alumnip1={AIDubaiCourseData[0].Alumnip1}
              Asrc2={AIDubaiCourseData[0].Asrc2}
              AlumniH2={AIDubaiCourseData[0].AlumniH2}
              Alumnip2={AIDubaiCourseData[0].Alumnip2}
              Asrc3={AIDubaiCourseData[0].Asrc3}
              AlumniH3={AIDubaiCourseData[0].AlumniH3}
              Alumnip3={AIDubaiCourseData[0].Alumnip3}
              Asrc4={AIDubaiCourseData[0].Asrc4}
              AlumniH4={AIDubaiCourseData[0].AlumniH4}
              Alumnip4={AIDubaiCourseData[0].Alumnip4}
              alt1={AIDubaiCourseData[0].alt1}
              alt2={AIDubaiCourseData[0].alt2}
              alt3={AIDubaiCourseData[0].alt3}
              alt4={AIDubaiCourseData[0].alt4}
              alt5={AIDubaiCourseData[0].alt5}
              alt6={AIDubaiCourseData[0].alt6}
              alt7={AIDubaiCourseData[0].alt7}
              alt8={AIDubaiCourseData[0].alt8}
              alt9={AIDubaiCourseData[0].alt9}
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={AIDubaiCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={AIDubaiCourseData[0].CityTextB}
          CityText={AIDubaiCourseData[0].CityText}
          CityTextLB={AIDubaiCourseData[0].CityTextLB}
          CityTextL={AIDubaiCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
