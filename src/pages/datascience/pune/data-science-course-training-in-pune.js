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
<<<<<<< HEAD
import { DSPuneCourseData } from "../../../../CityData/Pune/dataScienceCourseTrainingInPune";
=======
import { DSPuneCourseData } from "../../../../CityData/Pune/DataScienceCourseTrainingPuneData";
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
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
<<<<<<< HEAD
      <title>
            Best Data Science Courses Training in Pune- Learnbay

        </title>
=======
        <title>Best Data Science Courses Training in Pune- Learnbay</title>
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content=" Are you searching for the best data science courses online in Pune? Learnbay is providing the best online data science course training in Pune. Visit now."
        />
        <meta
          name="keywords"
          content="data science online course, data science certification in pune, data science course in india, data science course in pune, data science training in pune, data science courses, data science courses in pune, data science course, data science training, data science institute, data science certification,"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/data-science-course-training-in-pune"
        />
<<<<<<< HEAD
        {/* <meta name="HandheldFriendly" content="true" /> */}
        {/* <meta name="distribution" content="global" /> */}
        <meta name="copyright" content="Learnbay" />
        {/* <meta name="language" content="English" /> */}
        {/* <meta name="rating" content="general" /> */}
        {/* <meta name="revisit-after" content="Daily" /> */}
        {/* <meta name="author" content="Learnbay" /> */}
        {/* <meta name="googlebot" content="index,follow" /> */}
        {/* <meta name="bingbot" content="index,follow" /> */}
        {/* <meta name="expires" content="never" /> */}
        {/* <meta name="coverage" content="Worldwide" /> */}
        {/* <meta name="robots" content="ALL" /> */}
=======
        <meta name="copyright" content="Learnbay" />
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Training in Pune"
        />
        <meta
          property="og:url"
          content="https://www.learnbay.co/data-science-course-training-in-pune"
        />
        <meta
          property="og:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta property="og:site_name" content="www.learnbay.co" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          property="og:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        />
        <meta property="og:image:height" content="240" />
        <meta property="og:image:width" content="360" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Learnbay" />
        <meta
          name="twitter:title"
          content="Data Science Course Pune | Data Scientist Course Pune | Learnbay"
        />
        <meta name="twitter:creator" content="@Learnbay" />
        <meta
          itemProp="description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:description"
          content="Enroll for Data Science Course and Certification Training in Pune from Learnbay in association with IBM. This Data Scientist course in Pune will give you hands-on experience with technologies and job assistance.
"
        />
        <meta
          name="twitter:image"
          content="https://www.learnbay.co/_next/image?url=https%3A%2F%2Flearnbay-wb.s3.ap-south-1.amazonaws.com%2Fmain%2FLearnbay-Logo.webp&w=256&q=100"
        ></meta>
<<<<<<< HEAD

=======
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
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
            __html: `${DSPuneCourseData[0].script1}`,
          }}
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DSPuneCourseData[0].script2}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DSPuneCourseData[0].script3} `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` ${DSPuneCourseData[0].script4} `,
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
<<<<<<< HEAD
          dataScience={true}  
          titleCourse="Best Data Science Courses in Pune"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          idss="bfl64ANfSV0"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/course2.png"
         
          firstHeading="Best Data Science Courses in Pune"
          firstTopPara="Foundational and Advanced Job-ready"
          cityParaCont=" Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited training from the best Data Science courses in Pune. This course will help you to capitalize on your domain expertise by utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
        />
        <SecondSection SecondSectionData={DSPuneCourseData[0].secondSection} />
=======
          cityParaCont="Acquire the weight of an experienced candidate even at your first data science job. Get Industry-accredited training from the best Data Science courses in Pune. This course will help you to capitalize on your domain expertise by utilizing your existing domain knowledge in the data science field via fresh industrial capstones."
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/advance+DS+header+image.webp"
          firstToparaImg=" Courses in Pune"
          firstHeading="Best Data Science"
          firstTopPara="Foundational and Advance Job-ready Program"
          idss="bfl64ANfSV0"
        />
        <SecondSection
          SecondSectionData={DSPuneCourseData[0].secondSection}
        />
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
        <Testimonial
          redirectDS={true}
          Testimonial={DSPuneCourseData[0].testimonial}
          heading="Our Alumni Speak"
          para="Discover the impact of our programs on career growth"
        />
        <div className={styles.cityFee}>
          <FeeSection
            AIMLCertificate={true}
<<<<<<< HEAD
            Fee="₹99,000 + 18% GST"
            FeeEmi="₹ 9,735/month"
=======
            Fee="₹  99,000 + 18% GST"
            FeeEmi="₹  9,735/month"
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
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
<<<<<<< HEAD
            
              cityTextDSPune={true}
              ProgramBot1={DSPuneCourseData[0].ProgramBot1}
              ProgramHead3={DSPuneCourseData[0].ProgramHead3}
              ProgramBot3={DSPuneCourseData[0].ProgramBot3}
              ProgramBot31={DSPuneCourseData[0].ProgramBot31}
              ProgramBot4={DSPuneCourseData[0].ProgramBot4}
              ProgramBot5={DSPuneCourseData[0].ProgramBot5}
              ProgramBot6={DSPuneCourseData[0].ProgramBot6}
              Courselink1={DSPuneCourseData[0].Courselink1}
              Courselink2={DSPuneCourseData[0].Courselink2}
              Courselink3={DSPuneCourseData[0].Courselink3}
              Courselink4={DSPuneCourseData[0].Courselink4}
              Courselink5={DSPuneCourseData[0].Courselink5}
              Course1={DSPuneCourseData[0].Course1}
              Course2={DSPuneCourseData[0].Course2}
              Course3={DSPuneCourseData[0].Course3}
              Course4={DSPuneCourseData[0].Course4}
              Course5={DSPuneCourseData[0].Course5}
=======
              cityTextDSPune={true}
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
              DomainHead1={DSPuneCourseData[0].DomainHead1}
              DomainBot1={DSPuneCourseData[0].DomainBot1}
              DomainBot2={DSPuneCourseData[0].DomainBot2}
              DomainBot3={DSPuneCourseData[0].DomainBot3}
              DomainList1={DSPuneCourseData[0].DomainList1}
              DomainList2={DSPuneCourseData[0].DomainList2}
              DomainList3={DSPuneCourseData[0].DomainList3}
              DomainList4={DSPuneCourseData[0].DomainList4}
              DomainList5={DSPuneCourseData[0].DomainList5}
              DomainList6={DSPuneCourseData[0].DomainList6}
              DomainList7={DSPuneCourseData[0].DomainList7}
              DomainList8={DSPuneCourseData[0].DomainList8}
              DomainList9={DSPuneCourseData[0].DomainList9}
              DomainList10={DSPuneCourseData[0].DomainList10}
              Domainlink1={DSPuneCourseData[0].Domainlink1}
              Domainlink2={DSPuneCourseData[0].Domainlink2}
              Domainlink3={DSPuneCourseData[0].Domainlink3}
              Domainlink4={DSPuneCourseData[0].Domainlink4}
              Domainlink5={DSPuneCourseData[0].Domainlink5}
              Domainlink6={DSPuneCourseData[0].Domainlink6}
              Domainlink7={DSPuneCourseData[0].Domainlink7}
              Domainlink8={DSPuneCourseData[0].Domainlink8}
              Domainlink9={DSPuneCourseData[0].Domainlink9}
              Domainlink10={DSPuneCourseData[0].Domainlink10}
<<<<<<< HEAD
              CertificationBot1={DSPuneCourseData[0].CertificationBot1}
=======
              CertificationBot1={
                DSPuneCourseData[0].CertificationBot1
              }
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
              src={DSPuneCourseData[0].src}
              src22={DSPuneCourseData[0].src22}
              src33={DSPuneCourseData[0].src33}
              ModuleBot1={DSPuneCourseData[0].ModuleBot1}
              ModuleBot2={DSPuneCourseData[0].ModuleBot2}
              syllabush1={DSPuneCourseData[0].syllabush1}
              syllabusb1={DSPuneCourseData[0].syllabusb1}
<<<<<<< HEAD
              SyllabusBotlist11={DSPuneCourseData[0].SyllabusBotlist11}
              SyllabusBotlist12={DSPuneCourseData[0].SyllabusBotlist12}
              SyllabusBotlist13={DSPuneCourseData[0].SyllabusBotlist13}
              SyllabusBotlist14={DSPuneCourseData[0].SyllabusBotlist14}
              SyllabusBotlist15={DSPuneCourseData[0].SyllabusBotlist15}
              SyllabusBotlist16={DSPuneCourseData[0].SyllabusBotlist16}
              syllabush2={DSPuneCourseData[0].syllabush2}
              syllabusb2={DSPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={DSPuneCourseData[0].SyllabusBotlist21}
              SyllabusBotlist22={DSPuneCourseData[0].SyllabusBotlist22}
              SyllabusBotlist23={DSPuneCourseData[0].SyllabusBotlist23}
              SyllabusBotlist24={DSPuneCourseData[0].SyllabusBotlist24}
              SyllabusBotlist25={DSPuneCourseData[0].SyllabusBotlist25}
              SyllabusBotlist26={DSPuneCourseData[0].SyllabusBotlist26}
              syllabush3={DSPuneCourseData[0].syllabush3}
              syllabusb3={DSPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={DSPuneCourseData[0].SyllabusBotlist31}
              SyllabusBotlist32={DSPuneCourseData[0].SyllabusBotlist32}
              SyllabusBotlist33={DSPuneCourseData[0].SyllabusBotlist33}
              SyllabusBotlist34={DSPuneCourseData[0].SyllabusBotlist34}
              SyllabusBotlist35={DSPuneCourseData[0].SyllabusBotlist35}
              SyllabusBotlist36={DSPuneCourseData[0].SyllabusBotlist36}
              syllabush4={DSPuneCourseData[0].syllabush4}
              syllabusb4={DSPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={DSPuneCourseData[0].SyllabusBotlist41}
              SyllabusBotlist42={DSPuneCourseData[0].SyllabusBotlist42}
              SyllabusBotlist43={DSPuneCourseData[0].SyllabusBotlist43}
              SyllabusBotlist44={DSPuneCourseData[0].SyllabusBotlist44}
              SyllabusBotlist45={DSPuneCourseData[0].SyllabusBotlist45}
              SyllabusBotlist46={DSPuneCourseData[0].SyllabusBotlist46}
              syllabussrc={DSPuneCourseData[0].syllabussrc}
              JobHead1={DSPuneCourseData[0].JobHead1}
              JobBot1={DSPuneCourseData[0].JobBot1}
              JobHead2={DSPuneCourseData[0].JobHead2}
              JobBot3={DSPuneCourseData[0].JobBot3}
              ProjectsBot1={DSPuneCourseData[0].ProjectsBot1}
              ProjectsBot2= {DSPuneCourseData[0].ProjectsBot2}
  
        
=======
              SyllabusBotlist11={
                DSPuneCourseData[0].SyllabusBotlist11
              }
              SyllabusBotlist12={
                DSPuneCourseData[0].SyllabusBotlist12
              }
              SyllabusBotlist13={
                DSPuneCourseData[0].SyllabusBotlist13
              }
              SyllabusBotlist14={
                DSPuneCourseData[0].SyllabusBotlist14
              }
              SyllabusBotlist15={
                DSPuneCourseData[0].SyllabusBotlist15
              }
              SyllabusBotlist16={
                DSPuneCourseData[0].SyllabusBotlist16
              }
              syllabush2={DSPuneCourseData[0].syllabush2}
              syllabusb2={DSPuneCourseData[0].syllabusb2}
              SyllabusBotlist21={
                DSPuneCourseData[0].SyllabusBotlist21
              }
              SyllabusBotlist22={
                DSPuneCourseData[0].SyllabusBotlist22
              }
              SyllabusBotlist23={
                DSPuneCourseData[0].SyllabusBotlist23
              }
              SyllabusBotlist24={
                DSPuneCourseData[0].SyllabusBotlist24
              }
              SyllabusBotlist25={
                DSPuneCourseData[0].SyllabusBotlist25
              }
              SyllabusBotlist26={
                DSPuneCourseData[0].SyllabusBotlist26
              }
              syllabush3={DSPuneCourseData[0].syllabush3}
              syllabusb3={DSPuneCourseData[0].syllabusb3}
              SyllabusBotlist31={
                DSPuneCourseData[0].SyllabusBotlist31
              }
              SyllabusBotlist32={
                DSPuneCourseData[0].SyllabusBotlist32
              }
              SyllabusBotlist33={
                DSPuneCourseData[0].SyllabusBotlist33
              }
              SyllabusBotlist34={
                DSPuneCourseData[0].SyllabusBotlist34
              }
              SyllabusBotlist35={
                DSPuneCourseData[0].SyllabusBotlist35
              }
              SyllabusBotlist36={
                DSPuneCourseData[0].SyllabusBotlist36
              }
              syllabush4={DSPuneCourseData[0].syllabush4}
              syllabusb4={DSPuneCourseData[0].syllabusb4}
              SyllabusBotlist41={
                DSPuneCourseData[0].SyllabusBotlist41
              }
              SyllabusBotlist42={
                DSPuneCourseData[0].SyllabusBotlist42
              }
              SyllabusBotlist43={
                DSPuneCourseData[0].SyllabusBotlist43
              }
              SyllabusBotlist44={
                DSPuneCourseData[0].SyllabusBotlist44
              }
              SyllabusBotlist45={
                DSPuneCourseData[0].SyllabusBotlist45
              }
              SyllabusBotlist46={
                DSPuneCourseData[0].SyllabusBotlist46
              }
              syllabussrc={DSPuneCourseData[0].syllabussrc}
              JobBot1={DSPuneCourseData[0].JobBot1}
              JobHead2={DSPuneCourseData[0].JobHead2}
              JobBot3={DSPuneCourseData[0].JobBot3}
              JobBot4={DSPuneCourseData[0].JobBot4}
              ProjectsBot1={DSPuneCourseData[0].ProgramBot1}
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
              src1={DSPuneCourseData[0].src1}
              ProjectsH1={DSPuneCourseData[0].ProjectsH1}
              Projectsp1={DSPuneCourseData[0].Projectsp1}
              src2={DSPuneCourseData[0].src2}
              ProjectsH2={DSPuneCourseData[0].ProjectsH2}
              Projectsp2={DSPuneCourseData[0].Projectsp2}
              src3={DSPuneCourseData[0].src3}
              ProjectsH3={DSPuneCourseData[0].ProjectsH3}
              Projectsp3={DSPuneCourseData[0].Projectsp3}
              src4={DSPuneCourseData[0].src4}
              ProjectsH4={DSPuneCourseData[0].ProjectsH4}
              Projectsp4={DSPuneCourseData[0].Projectsp4}
              AlumniBot1={DSPuneCourseData[0].AlumniBot1}
              Asrc1={DSPuneCourseData[0].Asrc1}
              AlumniH1={DSPuneCourseData[0].AlumniH1}
              Alumnip1={DSPuneCourseData[0].Alumnip1}
              Asrc2={DSPuneCourseData[0].Asrc2}
              AlumniH2={DSPuneCourseData[0].AlumniH2}
              Alumnip2={DSPuneCourseData[0].Alumnip2}
              Asrc3={DSPuneCourseData[0].Asrc3}
              AlumniH3={DSPuneCourseData[0].AlumniH3}
              Alumnip3={DSPuneCourseData[0].Alumnip3}
              Asrc4={DSPuneCourseData[0].Asrc4}
              AlumniH4={DSPuneCourseData[0].AlumniH4}
              Alumnip4={DSPuneCourseData[0].Alumnip4}
<<<<<<< HEAD
          
=======
              alt1={DSPuneCourseData[0].alt1}
              alt2={DSPuneCourseData[0].alt2}
              alt3={DSPuneCourseData[0].alt3}
              alt4={DSPuneCourseData[0].alt4}
              alt5={DSPuneCourseData[0].alt5}
              alt6={DSPuneCourseData[0].alt6}
              alt7={DSPuneCourseData[0].alt7}
              alt8={DSPuneCourseData[0].alt8}
              alt9={DSPuneCourseData[0].alt9}
>>>>>>> 16a04a77d8cb922b9e53f4dd315ff72be00f6905
            />
            <div className={styles.faqCity}>
              <FAQNew FAQNewData={DSPuneCourseData[0].faq} />
            </div>
          </div>
        </div>
        <SeventhSection />
        <CityText
          CityTextB={DSPuneCourseData[0].CityTextB}
          CityText={DSPuneCourseData[0].CityText}
          CityTextLB={DSPuneCourseData[0].CityTextLB}
          CityTextL={DSPuneCourseData[0].CityTextL}
        />
        <Footer />
      </main>
    </div>
  );
}
