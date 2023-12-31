import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import styles from "./FirstSection.module.css";
const Button = dynamic(() => import("../../Global/Button/Button"));
SwiperCore.use([Autoplay]);
const FirstSection = ({ dataScience, radio, dataScienceCounselling }) => {
  const [popups, setPopups] = useState(false);
  const [mobile, setMobile] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

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
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
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
                <div className="imgWrapper">
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                    width="580"
                    height="450"
                    loading="lazy"
                    quality={80} 
                    alt="data science course"
                  />
                </div>
              </div>
           
              <p className={styles.blink}>
                Master real world skills with our domain specialised
                certification and Degree programs
              </p>
              <div className={styles.GenAiBox}>
                <div className={styles.GenImageBlock}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/genAi1.webp"
                    width="32"
                    height="32"
                    loading="lazy"
                    quality={40}
                    alt="data science course"
                  />
                </div>
                <p className={styles.TextGreen}>
                  Curriculum inclusive of GenAI and ChatGPT
                </p>
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
          
            </div>
            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/newHeaderOne.webp"
                  width="580"
                  height="450"
              
          
                  quality={100}

                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.Second}>
            <div className="bgWrap">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/forthSection.webp"
                fill={true}
                loading="lazy"
   
              quality={40}
                alt="Header background"
              />
            </div>
            <div className={styles.SecondSectionLeft}>
              <h1 className={styles.h1}>
                Unlock Your Future: Master's Degree with Global Opportunities
              </h1>
              <p className={styles.SecondBlink}>Masters in Computer Science</p>
              <div className={styles.divgreen}>
                <div className={styles.greenBox}>
                  <p>Data Science & AI </p>
                </div>
                <div className={styles.greenBox}>
                  <p>Software Engineering</p>
                </div>
              </div>
              <div className={styles.imgWrapperMobile}>
                <div className="imgWrapper">
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/secondSection.webp"
                    width="580"
                    height="450"
                    loading="lazy"
                    quality={40}
                    alt="data science course"
                  />
                </div>
              </div>
              <p className={styles.iconText}>
                <FaEarthAmericas className={styles.iconYellow} />
                Globally recognised in EU, US and 60+ countries
              </p>
              <div className={styles.btnWrapper}>
                <a href="#course">
                  <Button
                    className={styles.Btn}
                    text="Explore Masters Degree"
                    passIcon={<FaChevronDown className="bIconS" />}
                  />
                </a>
              </div>
            </div>
            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/secondSection.webp"
                  width="580"
                  height="450"
                  loading="lazy"
                  quality={60}
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.forth}>
            <div className={styles.forthFirstLeft}>
              <p className={styles.SecondBlink}>Real project Real Impact</p>
              <h1 className={styles.h1}>
                Work on Real time Project and Gain Practical experience
              </h1>
              <p className={styles.blinkMobile}>
                Work on industry project like a data scientist and SDE with our
                dedicated <span>#ProjectLab</span>
              </p>
              <div className={styles.imgWrapperMobile}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ThirdSection1.webp"
                  width="806"
                  height="300"
                  loading="lazy"
                  quality={40}
                  alt="data science course"
                />
              </div>
              <p className={styles.blink}>
                Work on industry project like a data scientist and SDE with our
                dedicated <span>#ProjectLab</span>
              </p>
              <p className={styles.iconText}>
                <PiCertificate className={styles.iconYellow} />
                Domain Electives and Project certification from industry
              </p>
              <div className={styles.btnWrapper}>
                <a href="#ProjectLab">
                  <Button
                    className={styles.Btn}
                    text="Project Lab"
                    passIcon={<FaChevronDown className="bIconS" />}
                  />
                </a>
              </div>
            </div>
            <div className={styles.secondLeft}>
              <div className={styles.imgWrapperDesktop}>
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/ThirdSection1.webp"
                  width="806"
                  height="663"
                  loading="lazy"
                  quality={60}
                  alt="data science course"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default React.memo(FirstSection);
