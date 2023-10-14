import React, { useState, useEffect, useRef } from "react";
import styles from "./FirstSection.module.css";
import { FaChevronDown, FaBell, FaDownload } from "react-icons/fa";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import Image from "next/image";
import Typed from "typed.js";
import dynamic from "next/dynamic";
import { Content } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
              <p className={styles.pTop}>Learn More</p>
              <h1 className={styles.h1}>
                India’s #1 Upskilling Platform for Working Professionals
              </h1>
              <p className={styles.blinkMobile}>
                Elevate your tech career with our Master's programs, where
                practical skills meet excellence.
              </p>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              <div className={styles.ibmLogoMobile}>
              <p className={styles.ptop}>In Collaboration With</p>
                <div className={styles.ImageBlock}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ibm%26microsoft.webp"
                    width="283"
                    height="51"
                    loading="lazy"
                    alt="data science course"
                  />
                </div>
              </div>
              <p className={styles.blink}>
                Elevate your tech career with our Master's programs, where
                practical skills meet excellence.
              </p>
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
              <div className={styles.box}>
                <p>
                  <span className={styles.blue}>35K+ </span>Trusted Learners
                </p>
                <p>
                  <span className={styles.orange}>8LPA </span>Average Salary
                </p>
                <p>
                  <span className={styles.green}>40LPA </span>Highest Salary
                </p>
              </div>
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
        {/* <SwiperSlide className={styles.slide}>
          <div className={styles.First}>
            <div className="bgWrap">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSectionBg.png"
                fill={true}
                priority={true}
                alt="background Image"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles.FirstLeft}>
              <div className={styles.animationTextWrap}>
                <span ref={el} className={styles.animationText}></span>
              </div>
              <h1>
                Domain Specialized Certification Program{" "}
                <span className={styles.h1Span}>For Working Professionals</span>
              </h1>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              <p className={styles.ptop}>In collaboration with</p>
              <div className={styles.ImageBlock}>
                <div className="imgWrapper">
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/FirstSection.png"
                    width="283"
                    height="51"
                    priority={true}
                    alt="data science course"
                  />
                </div>
              </div>
              <p className={styles.blink}>
                Advance your career by gaining expertise in your field and ace
                interviews with India’s leading companies
              </p>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.outLineBtn}
                    outline
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
            </div>

            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.First}>
            <div className={styles.FirstLeft}>
              <p className={styles.pTop}>Learn More</p>
              <h1 className={styles.h1}>
                India’s #1 Upskilling Platform for Working Professionals
              </h1>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              <p className={styles.blink}>
                Elevate your tech career with our Master's programs, where
                practical skills meet excellence.
              </p>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.outLineBtn}
                    outline
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
              <div className={styles.box}>
                <p>
                  <span className={styles.blue}>35K+ </span>Trusted Learners
                </p>
                <p>
                  <span className={styles.orange}>8LPA </span>Average Salary
                </p>
                <p>
                  <span className={styles.green}>40LPA </span>Highest Salary
                </p>
              </div>
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
          <div className={styles.First}>
            <div className={styles.FirstLeft}>
              <p className={styles.pTop}>Learn More</p>
              <h1 className={styles.h1}>
                India’s #1 Upskilling Platform for Working Professionals
              </h1>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Home-Page-Header.png"
                  width="580"
                  height="450"
                  alt="data science course"
                />
              </div>
              <p className={styles.blink}>
                Elevate your tech career with our Master's programs, where
                practical skills meet excellence.
              </p>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.outLineBtn}
                    outline
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
              <div className={styles.box}>
                <p>
                  <span className={styles.blue}>35K+ </span>Trusted Learners
                </p>
                <p>
                  <span className={styles.orange}>8LPA </span>Average Salary
                </p>
                <p>
                  <span className={styles.green}>40LPA </span>Highest Salary
                </p>
              </div>
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
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default FirstSection;
