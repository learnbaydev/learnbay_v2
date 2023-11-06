import React, { useEffect, useState } from "react";
import styles from "./DomainSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
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
  });
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
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderYellow}>
                      <div className={styles.number}>
                        <p>#1</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>BFSI</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            Designed for executive-level BFSI professionals,
                            accountant, etc.
                          </li>
                          <li>
                            Learn finance analysis tools, generate data
                            insights, integrate data-driven methods to
                            future-proof business operations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button 
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Banking%2C+Finance+and+Insurance+Domain.pdf"
                            );
                            setTitleCourse(
                              "BFSI (Banking, Finance, Services and Insurance) Domain"
                            );
                            popupShow();
                          }}
                          className={styles.Btn}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderOrange}>
                      <div className={styles.number}>
                        <p>#2</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Manufacturing</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            For production manager, quality control inspector,
                            manufacturing engineer etc.
                          </li>
                          <li>
                            Discover cutting-edge tech like AI and data science,
                            and develop strategic skills as a business or data
                            analyst
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button 
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Manufacturing%2C+Mechanical+and+Telecom+Domain.pdf"
                            );
                            setTitleCourse(
                              "Manufacturing, Mechanical and Telecom Domain"
                            );
                            popupShow();
                          }}
                          className={styles.Btn}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderRed}>
                      <div className={styles.number}>
                        <p>#3</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Healthcare</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            For pharmacists, therapists, health administrators,
                            etc.
                          </li>
                          <li>
                            Achieve success in a competitive market by utilizing
                            advanced tools and methodology to leverage
                            technology and gain a competitive edge
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button className={styles.Btn}
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Healthcare%2C+Pharma+and+Clinical+Research+Domain.pdf"
                            );
                            setTitleCourse(
                              "Healthcare, Pharma and Clinical Research Domain"
                            );
                            popupShow();
                          }}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderRed}>
                      <div className={styles.number}>
                        <p>#4</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>Supply Chain</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            Learn Supply Chain, E-Commerce & Retail analysis
                            tools, generate data insights, integrate data-driven
                            methods to future-proof business operations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button  className={styles.Btn}
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Retail%2C+Ecommerce+and+Supply+chain+Domain.pdf"
                            );
                            setTitleCourse(
                              "Retail, Ecommerce and Supply Chain Domain"
                            );
                            popupShow();
                          }}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderRed}>
                      <div className={styles.number}>
                        <p>#5</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>HR</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            Learn Human Resources
                            tools, generate data insights, integrate data-driven
                            methods to future-proof business operations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button  className={styles.Btn}
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                            );
                            setTitleCourse(
                              "Human Resources"
                            );
                            popupShow();
                          }}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.mainSliderRed}>
                      <div className={styles.number}>
                        <p>#6</p>
                        <hr className={styles.hr} />
                      </div>
                      <div className={styles.imgP}>
                        <p>MARKETING</p>
                      </div>
                      <div>
                        <ul
                          style={{
                            padding: "0px 0px 0px 20px",
                          }}
                          className={styles.para}
                        >
                          <li>
                            Work on 20+ real time case studies and assignments
                          </li>
                          <li>
                            Learn marketing
                            tools, generate data insights, integrate data-driven
                            methods to future-proof business operations
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button  className={styles.Btn}
                          onClick={() => {
                            setBrochureLink(
                              "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/domain/Sales%2C+Marketing+and+HR+Domain.pdf"
                            );
                            setTitleCourse(
                              "MARKETING"
                            );
                            popupShow();
                          }}
                        >
                          Download Brochure
                          <FaDownload style={{ marginLeft: "10px" }} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DomainSection;