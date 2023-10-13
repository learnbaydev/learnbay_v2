import React, { useEffect, useState } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { FaDownload } from "react-icons/fa";
// import Link from "next/link";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
// import Button from "../../Global/Button/Button";
// import { DomainSectionData, BAdomainData } from "./DomainSectionData";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));

function DomainSection({ dataScience, domainSectionData }) {
  const [domainDataArray, setDomainDataArray] = useState(domainSectionData);

  const [mobile, setMobile] = useState(false);
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLink, setBrochureLink] = useState();
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
    // if (dataScience) {
    //   setDomainDataArray(DomainSectionData);
    // } else if (BAdomain) {
    //   setDomainDataArray(BAdomainData);
    // } else if (Blockchain) {
    //   setDomainDataArray(BlockchainData);
    // } else if (Software) {
    //   setDomainDataArray(SoftwareData);
    // } else if (Cloud) {
    //   setDomainDataArray(CloudData);
    // }
  }, []);

  return (
    <div className={styles.sliderBox}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Download Brochure</h5>
          <Form
            dataScience={dataScience}
            downloadBrochure
            upSkillingHide={true}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <>
        <h4 className={styles.h1}>
          <p className={styles.h1Span}>Domain Electives</p>
        </h4>
        <div>
          <section>
            <div className={styles.Section1}>
              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.1 : 2}
                    spaceBetween={mobile ? 10 : 15}
                    breakpoints={{
                      1280: {
                        slidesPerView: 3.2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                      },
                      961: {
                        slidesPerView: 1.4,
                        spaceBetween: 15,
                      },
                      801: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      641: {
                        slidesPerView: 1.6,
                        spaceBetween: 20,
                      },
                      481: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                    }}
                    // scrollbar={{ draggable: true }}
                    pagination={true}
                    // autoplay={{
                    //   delay: 2500,
                    // }}
                    grabCursor={true}
                    modules={[Autoplay, Pagination]}
                    // autoPlay={true}
                    className="mySwiper"
                  >
                    {domainDataArray.map((data, index) => {
                      const {
                        id,
                        p1,
                        p2,
                        desc,
                        btn,
                        BrochureLink,
                        TitleCourse,
                      } = data;

                      return (
                        <SwiperSlide className={styles.slide} key={index}>
                          <div className={styles.bulb}>
                            <div className={styles.imgDiv}>
                              <div class={styles.img}>
                                <Image
                                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/bfsi.png"
                                  loading="lazy"
                                  width="50"
                                  height="50"
                                  alt="Bulb"
                                />
                              </div>
                              <div className={styles.bgPDiv}>
                                <p className={styles.bgP}>{p2}</p>
                              </div>
                            </div>
                          </div>
                          <div className={styles.mainSliderYellow}>
                            
                            <div key={index}>
                              <p
                                style={{
                                  padding: "0px 0px 0px 20px",
                                }}
                                className={styles.para}
                                key={titleCourse}
                              >
                                {desc.map((data) => {
                                  return <span key={data}>{data}</span>;
                                })}
                              </p>
                            </div>
                            <div
                              onClick={() => {
                                setBrochureLink(BrochureLink);
                                setTitleCourse(TitleCourse);
                                popupShow();
                              }}
                              className={styles.butonDiv}
                            >
                              <Button
                                className={styles.fillBtn}
                                text={btn}
                                style={{margin:"auto"}}
                                passIcon={<FaDownload className="bIconS" />}
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

export default DomainSection;
