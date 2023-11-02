import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaBell, FaCheck, FaChevronDown } from "react-icons/fa";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./FirstSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));

const FirstSection = ({
  dataScience,
  radio,

  dataScienceCounselling,
}) => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);

  const el = useRef(null);

  const popupShow = () => {
    setPopups(true);
  };

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "Are you looking to upskill ?",
  //       "Gain a competitive edge",
  //       "Land your dream job",
  //     ],
  //     startDelay: 100,
  //     typeSpeed: 80,
  //     backSpeed: 50,
  //     backDelay: 200,
  //     smartBackspace: true,
  //     loop: true,
  //     showCursor: false,
  //   });

  //   // Destropying
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            radio={radio}
            upSkillingHide={true}
          />
        </div>
      </Popup>
      <Swiper
        slidesPerView={1}
        spaceBetween={mobile ? 0 : 0}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.slide}>
          <div className={styles.First}>
            <div className={styles.FirstLeft}>
              <p className={styles.pTop}>Advance your tech career with</p>
              <h1 className={styles.h1}>
                India’s #1 Upskilling Platform for Working Professionals
              </h1>
              <p className={styles.blinkMobile}>
                Master real world skills with our domain specialised
                certification and Degree programs
              </p>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              {/* <div className={styles.ibmLogoMobile}>
                <p className={styles.ptop}>In Collaboration With</p>
                <div className={styles.ImageBlock}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
                    width="283"
                    height="51"
                    loading="lazy"
                    alt="data science course"
                  />
                </div>
              </div> */}
              <p className={styles.blink}>
                Master real world skills with our domain specialised
                certification and Degree programs
              </p>
              <div className={styles.GenAiBox}>
                <div className={styles.GenImageBlock}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/genAi.png"
                    width="32"
                    height="32"
                    loading="lazy"
                    alt="data science course"
                  />
                </div>
                <p className={styles.TextGreen}>Curricullum inclusive of GenAI and ChatGPT</p>
              </div>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.outLineBtn}
                    ButtonWhiteBg
                    text="Courses"
                    passIcon={<FaChevronDown className="bIconS" />}
                  />
                </a>
                <div onClick={popupShow}>
                  <Button
                    className={styles.Btn}
                    text="Enquire Now"
                    passIcon={<FaBell className="bIconS" />}
                  />
                </div>
              </div>
              {/* <div className={styles.box}>
                <p>
                  <span className={styles.blue}>35K+ </span>Trusted Learners
                </p>
                <p>
                  <span className={styles.orange}>8LPA </span>Average Salary
                </p>
                <p>
                  <span className={styles.green}>40LPA </span>Highest Salary
                </p>
              </div> */}
            </div>

            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.Second}>
            <div className={styles.SecondSectionLeft}>
              <p className={styles.SecondBlink}>
                <span className={styles.SecondpTop}>Switch</span> from{" "}
                <span className={styles.SecondpTop}>
                  Service based to Product Based
                </span>{" "}
                company with our
              </p>
              <h1 className={styles.h1}>
                Software Development Certification Program
              </h1>
              <div className={styles.reviewBox}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/preksha-home.png"
                    width="60"
                    height="60"
                    alt="data science course"
                  />
                </div>
                <div>
                  <p className={styles.authorName}>Shravanthi A.</p>
                  <p className={styles.authorPostion}>Data Scientist @HCL</p>
                </div>
              </div>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/secondSection.webp"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              <div className={styles.btnWrapper}>
                <div onClick={popupShow}>
                  <Button
                    className={styles.Btn}
                    text="View Program Details"
                    passIcon={<FaBell className="bIconS" />}
                  />
                </div>
              </div>
            </div>

            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/secondSection.webp"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <div className={styles.forth}>
            <div className={styles.forthFirstLeft}>
              <p className={styles.SecondBlink}>
                Get
                <span className={styles.SecondpTop}> job-ready </span> within 6
                months
              </p>
              <h1 className={styles.h1}>Masters in Computer Science</h1>

              <p className={styles.blinkMobile}>
                Get equipped with industry standard skills and unlock job abroad
                opportunities
              </p>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job-ready.webp"
                  width="234"
                  height="300"
                  alt="data science course"
                />
              </div>

              <div className={styles.BoxUpper}>
                <div className={styles.InnerBox}>
                  <FaCheck className={styles.iconBoxCheck} />
                  Data Science & AI
                </div>
                <div className={styles.InnerBox}>
                  <FaCheck className={styles.iconBoxCheck} />
                  Software Engineering
                </div>
              </div>
              <p className={styles.blink}>
                Get equipped with industry standard skills and unlock{" "}
                <span style={{ color: "#F99600", fontWeight: "700" }}>
                  job abroad opportunities
                </span>
              </p>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.Btn}
                    text="Explore Masters Program"
                    passIcon={<FaChevronDown className="bIconS" />}
                  />
                </a>
              </div>
            </div>

            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/job-ready.webp"
                  width="234"
                  height="300"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className={styles.slide}>
          <div className={styles.Third}>
            <div className={styles.ThirdFirstLeft}>
              <h1 className={styles.h1}>
                All our<span className={styles.h1Span}> top programs</span> just
                got upgraded with{" "}
                <span className={styles.h1Span}>Generative AI modules</span>
              </h1>
              <p className={styles.blinkMobile}>
                Be the first to Change, Adapt and Build in AI with the Advanced
                Gen-AI add on
              </p>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/thirdSection.webp"
                  width="580"
                  height="380"
                  alt="data science course"
                />
              </div>
              <div className={styles.ibmLogoMobile}>
                <div className={styles.ImageBlock}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/generativeAi.png"
                    width="283"
                    height="51"
                    loading="lazy"
                    alt="data science course"
                  />
                </div>
              </div>
              <p className={styles.blink}>
                Be the first to Change, Adapt and <b>Build in AI</b> with the{" "}
                <b>Advanced Gen-AI add on</b>
              </p>
              <div className={styles.ImageBlock}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/generativeAi.png"
                  width="400"
                  height="91"
                  loading="lazy"
                  alt="data science course"
                />
              </div>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.Btn}
                    text="Explore Courses"
                    passIcon={<FaChevronDown className="bIconS" />}
                  />
                </a>
              </div>
            </div>

            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/thirdSection.webp"
                  width="580"
                  height="380"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default FirstSection;
