import React, { useState } from "react";
import styles from "./KeyFeatures.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaDownload } from "react-icons/fa";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay } from "swiper";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import Image from "next/image";
import { KeyFeaturesSwiper } from "./KeyFeatureSwiperData";
import VideoTestimonial from "../../VideoTestimonial/VideoTestimonial";
const KeyFeatures = ({
  dataScience,
  radio,
  idss,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
}) => {
  const [popups, setPopups] = useState(false);
  const [popupsB, setPopupsB] = useState(false);

  const popupShowD = () => {
    setPopupsB(true);
  };

  const popupShow = () => {
    setPopups(true);
  };
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  return (
    <>
      <section className={`${styles.Features} wrapper`}>
        <Popup
          trigger={popups}
          setTrigger={setPopups}
          className="popupModal"
          downloadBrochure
        >
          <div className="leftPopup">
            <div
              className="whiteP"
              style={{ width: "340px", height: "400px" }}
            ></div>
          </div>
          <div className="RightPopup">
            <h5>Download Brochure</h5>
            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              downloadBrochure
            />
          </div>
        </Popup>
        <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />
        <div>
          <h6 className={styles.topHead}>Why Learnbay?</h6>
          <div className={styles.FeatureWrap}>
            <div className={styles.LeftWrap}>
              <div className="imgWrapper">
                <Image
                  onClick={videoSHow}
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/whylearnbay-left-image.png"
                  width={686}
                  height={393}
                  alt="whylearnbay"
                  className={styles.LeftWrapImg}
                />
              </div>
            </div>
            <div className={styles.rightSide}>
              <Swiper
                direction={"vertical"}
                slidesPerView={3}
                // slidesPerColumn={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                loopfillgroupwithblank="true"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {KeyFeaturesSwiper.map((data, index) => {
                  return (
                    <SwiperSlide className={styles.slide} key={index}>
                      <div className={styles.slideWrap}>
                        <div className={styles.number}>{data.icon}</div>
                        <p>{data.para}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <VideoTestimonial />
      </section>

      <div className={styles.RightWrap}>
        <h2>300+ placement and hiring partners</h2>
        <div className={styles.imgWrap}>
          <div className={`${styles.imgShowD} imgWrapper`}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Network-reach-company-logos.png"
              width={1148}
              height={414}
              alt="Learnbay"
            />
          </div>
          <div className={styles.imgShowM}></div>
          <button onClick={popupShowD} className={styles.btn}>
            Download Placement Report{" "}
            <FaDownload style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
