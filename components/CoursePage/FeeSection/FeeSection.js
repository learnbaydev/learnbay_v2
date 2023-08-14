import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./FeeSection.module.css";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaMobileAlt, FaBell } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));

const FeeSection = ({
  FeeHeading,
  Fee,
  dataScience,
  FeeContent2,
  FeeContent3,
  FeeContent4,
  FeeContent5,
  dataScienceCounselling,
  FeeEmi,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <div className={`${styles.feeWrapper} wrapper`}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>

          <Form
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
          />
        </div>
      </Popup>
      <h4>{FeeHeading}</h4>
      <p className={styles.ptop}>
        Invest in your future with quality education
      </p>
      <div className={styles.priceWrap}>
        <div className={styles.leftSide}>
          <div className={styles.price}>
            <p>Program Fee:</p>
            <h5>{Fee}</h5>
          </div>

          <div className={styles.list}>
            <div className={styles.left}>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent2}
              </p>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent5}
              </p>
            </div>
            <div className={styles.right}>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent4}
              </p>
              <p>
                <BsCheckCircleFill className={styles.check} />
                {FeeContent3}
              </p>
            </div>
          </div>

          <div onClick={popupShow}>
            <Button className={styles.Btn} text="Enroll Now" />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.top}>
            <div className={styles.right}>
              <p>Financing as low as</p>
              <h3>{FeeEmi}</h3>
            </div>
            <div className={styles.left}>
              <div onClick={() => popupShow(false, true)}>
                <Button className={styles.Btn} text="Start Learning" />
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.right}>
              <p>Multiple Payment Modes</p>
              <div>
                <span>
                  <MdPayment className={styles.icon} /> <p>Card</p>
                </span>
                <span>
                  <AiOutlineBank className={styles.icon} /> <p>Banking</p>
                </span>
                <span>
                  <FaMobileAlt className={styles.icon} /> <p>UPI</p>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.top}>
            <div className={styles.slider}>
              <p className={styles.sliderHeading}>Payment Partner</p>
              <Swiper
                slidesPerView={3}
                spaceBetween={40}
                breakpoints={{
                  1024: { slidesPerView: 3, spaceBetween: 40 },
                  961: { slidesPerView: 2, spaceBetween: 20 },
                  801: { slidesPerView: 2, spaceBetween: 40 },
                  641: { slidesPerView: 2, spaceBetween: 10 },
                  481: { slidesPerView: 3, spaceBetween: 10 },
                  100: { slidesPerView: 3, spaceBetween: 10 },
                }}
                autoplay={{
                  delay: 1500,
                  loop: true,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/liquiloans.webp"
                      alt="liqiLoans"
                      width="300"
                      height="120"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/propelld.webp"
                      alt="propelld"
                      width="500"
                      height="200"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/zest-logo.webp"
                      alt="Zest"
                      width="200"
                      height="58"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/liquiloans.webp"
                      alt="liqiLoans"
                      width="300"
                      height="120"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/propelld.webp"
                      alt="propelld"
                      width="500"
                      height="200"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/zest-logo.webp"
                      alt="Zest"
                      width="200"
                      height="58"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeSection;
