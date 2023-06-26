import React, { useEffect, useState } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
// import Button from "../../Global/Button/Button";
import { DomainSectionData, BAdomainData } from "./DomainSectionData";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../../Global/Button/Button"));

function DomainSection({
  dataScience,
  BAdomain,
  imgDomain,
  Blockchain,
  Cloud,
  Software,
}) {
  const [domainDataArray, setDomainDataArray] = useState(DomainSectionData);

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

    if (dataScience) {
      setDomainDataArray(DomainSectionData);
    } else if (BAdomain) {
      setDomainDataArray(BAdomainData);
    } else if (Blockchain) {
      setDomainDataArray(BlockchainData);
    } else if (Software) {
      setDomainDataArray(SoftwareData);
    } else if (Cloud) {
      setDomainDataArray(CloudData);
    }
  }, [dataScience, BAdomain, Blockchain, Software, Cloud]);

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
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <>
        <div className={styles.bulb}>
          <div className={styles.img}>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Domain-Electives-Left-Guy.png"
              layout="intrinsic"
              loading="lazy"
              width="671"
              height="704"
              alt="Bulb"
            />
          </div>
          <p className={styles.bgP}>Become a domain expert</p>
        </div>
        <div>
          <section>
            <div className={styles.Section1}>
              <h2 className={styles.h1}>
                <span className={styles.h1Span}>Domain Electives</span>
              </h2>

              <div className={styles.Testimonial}>
                <div className={styles.swiperleft}>
                  <Swiper
                    slidesPerView={mobile ? 1.1 : 2}
                    spaceBetween={mobile ? 10 : 15}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                      delay: 2500,
                    }}
                    grabCursor={true}
                    modules={[Autoplay, Scrollbar]}
                    autoPlay={true}
                    className="mySwiper"
                  >
                    {domainDataArray.map((data) => {
                      const { id, p1, p2, desc, btn, BrochureLink, TitleCourse } =
                        data;

                      return (
                        <SwiperSlide className={styles.slide} key={id}>
                          <div className={styles.mainSliderYellow} key={id}>
                            <div className={styles.number}>
                              <p>{p1}</p>
                              <hr className={styles.hr} />
                            </div>
                            <div className={styles.imgP}>
                              <p>{p2}</p>
                            </div>
                            <div>
                              <ul
                                style={{
                                  padding: "0px 0px 0px 20px",
                                }}
                                className={styles.para}
                              >
                                {desc.map((data) => {
                                  return <li>{data}</li>;
                                })}
                              </ul>
                            </div>
                            <div onClick={() => {
                                  setBrochureLink(BrochureLink);
                                  setTitleCourse(TitleCourse);
                                  popupShow();
                                }}>
                              <Button
                                
                                className={styles.fillBtn}
                              
                                text={btn}
                                
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
