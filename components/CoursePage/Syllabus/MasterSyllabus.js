import React, { useEffect, useState } from "react";
import styles from "./Syllabus.module.css";
import { FaChevronUp, FaChevronDown, FaRegUser } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import Form from "../../Form/Form";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Popup from "../../Popup/Popup";
import Button from "../../Global/Button/Button";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import ProgressBar from "../../../components/ProgresBar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

SwiperCore.use([Navigation]);

function SyllabusNew({
  syllabus,
  masterSyllabusMobile,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  buttonHide,
  advSyllabus,
  dataScienceCounselling,
  pop,
  syllabusHead,
  masterSyllabus,
  MasterSyllabusDefault,
  progress,
  setProgress,
  interstedInHide,
}) {
  const [popups, setPopups] = useState(false);
  const [active, setActive] = useState([]);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setMobile(true);
    }
  });

  const popupShow = () => {
    setPopups(true);
  };
  useEffect(() => {
    syllabusHead.map((data, i) => {
      let value = false;
      if (i == 0) value = true;
      return setActive((prevActive) => [
        ...prevActive,
        { id: i, value: value },
      ]);
    });
  }, []);
  const [mSyllabus, setMSyllabus] = useState(masterSyllabusMobile);
  const [cSyllabus, setCSyllabus] = useState(MasterSyllabusDefault);
  const changeSyllabus = (data) => {
   
    for (const key in masterSyllabus) {
      if (masterSyllabus.hasOwnProperty(key)) {
        if (key === data) {
          // console.log(key, data);
          setCSyllabus(masterSyllabus[key]);
        }
      }
    }
  };
  const changeActive = (id) => {
    setActive(
      active.map((faq, i) => {
        if (i === id) {
          faq.value = !faq.value;
        } else {
          faq.value = false;
        }
        return faq;
      })
    );
  };
  const [state, setState] = useState(syllabus);
  const [Beginner, setBeginner] = useState(true);
  const [Advanced, setAdvanced] = useState(false);
  const [Pop, setPop] = useState(false);
  useEffect(() => {
    if (Advanced) {
      setState(advSyllabus);
    } else {
      setState(syllabus);
    }
  }, [Advanced, advSyllabus, syllabus]);
  const handleChange = (index) => {
    // console.log(index, "handelChange");
    setCSyllabus(
      cSyllabus.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };
  const handleChangeMobile = (index) => {
    // console.log(index, "handelChange");
    setMSyllabus(
      mSyllabus.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };

  const handleClick = (data) => {
    setProgress(data);
  };

  // useEffect(() => {
  //   const currentIndex = syllabusHead.indexOf(progress);
  //   const progressBar = (currentIndex / (syllabusHead.length - 1)) * 100;
  //   setProgress(progressBar);
  // }, [progress]);

  // const [progress, setProgress] = useState(0);

  return (
    <>
      <div id="curriculum" className={styles.containerDiv}>
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
              downloadBrochure
              titleCourse={titleCourse}
              brochureLink={brochureLink}
              interstedInHide={interstedInHide}
              upSkillingHide={true}
            />
          </div>
        </Popup>
        <div className={styles.project}>
          <h4 className={styles.h1}>Explore our Syllabus</h4>
          <p className={styles.ptop}>
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies
          </p>
        </div>{" "}
        <div className={styles.pNavg}>
          <div className={`${styles.customArrow1} custom-prev`}>
            <IoIosArrowBack />
          </div>
          <div className={`${styles.customArrow2} custom-next`}>
            <IoIosArrowForward />
          </div>
        </div>
        <div className={styles.topBar}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={mobile ? 1.19 : 2.7}
            spaceBetween={mobile ? 0 : 0}
            grabCursor={true}
            className="mySwiper"
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {active.length > 0
              ? syllabusHead.map((data, i) => {
                  const splitString = data.split("(");
                  return (
                    <SwiperSlide
                      className={active[i].value ? styles.ASlide : styles.slide}
                      key={i}
                    >
                      <span
                        onClick={() => {
                          changeActive(i);
                          changeSyllabus(data);
                          if (i === 0) {
                            setProgress(20); // Set progress to 25% when the first item is clicked
                          } else if (i == 1) {
                            setProgress(50);
                          } else if (i == 2) {
                            setProgress(90);
                          } else if (i == 3) {
                            setProgress(50);
                          } else {
                            setProgress(100);
                          }
                          // else {
                          //   // Calculate and set progress for other items based on the total number of items
                          //   const progressBar =
                          //     (i / (syllabusHead.length - 1)) * 90 + 40;
                          //   setProgress(progressBar);
                          // }
                        }}
                        className={styles.wrapSpan}
                        style={
                          active[i].value
                            ? { color: "#0072bc", fontWeight: "700" }
                            : { color: "#646464" }
                        }
                      >
                        {splitString[0]}
                        <span
                          className={
                            active[i].value ? styles.colorHeading : styles.blank
                          }
                        >
                          ({splitString[1]}
                        </span>
                      </span>
                    </SwiperSlide>
                  );
                })
              : ""}
            <ProgressBar progress={progress} />
          </Swiper>
        </div>
        <section className={styles.Syllabus}>
          <div className={styles.syllabusLeft}>
            <div className={styles.mobileSyllabus}>
              {mSyllabus.map((data, i) => {
                const { Module0 } = data;

                return (
                  <div key={Module0.title}>
                    <div className={styles.QOuter}>
                      <div className={styles.QInner}>
                        <div className={styles.line}>
                          {/* <BsFillCircleFill className={styles.bIcons} /> */}
                        </div>
                        <div
                          className={styles.FaqWrapper}
                          onClick={() => {
                            let id = i;
                            handleChangeMobile(id);
                          }}
                          key={Module0.title}
                        >
                          {Module0.open ? (
                            <div className={styles.quesO}>
                              <h2>{Module0.title}</h2>

                              <span>
                                {Module0.open ? (
                                  <FaChevronUp className="icon" />
                                ) : (
                                  <FaChevronDown className="icon" />
                                )}
                              </span>
                            </div>
                          ) : (
                            <div className={styles.ques}>
                              <h2>{Module0.title}</h2>
                              <span>
                                {Module0.open ? (
                                  <FaChevronUp className="icon" />
                                ) : (
                                  <FaChevronDown className="icon" />
                                )}
                              </span>
                            </div>
                          )}

                          {Module0.open ? (
                            <div className={styles.ans}>
                              <p>{Module0.desc}</p>
                              {Module0.content.map((content, i) => {
                                return (
                                  <div key={content.chap.title}>
                                    <h5>{content.chap.title}</h5>
                                    {content.chap.desc.map((desc, i) => {
                                      return (
                                        <div key={i}>
                                          {desc === "" ? (
                                            ""
                                          ) : (
                                            <li key={desc}>{desc}</li>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.desktopSyllabus}>
              {cSyllabus.map((data, i) => {
                const { Module0 } = data;

                return (
                  <div key={Module0.title}>
                    <div className={styles.QOuter}>
                      <div className={styles.QInner}>
                        <div className={styles.line}>
                          {/* <BsFillCircleFill className={styles.bIcons} /> */}
                        </div>
                        <div
                          className={styles.FaqWrapper}
                          onClick={() => {
                            let id = i;
                            handleChange(id);
                          }}
                          key={Module0.title}
                        >
                          {Module0.open ? (
                            <div className={styles.quesO}>
                              <h2>{Module0.title}</h2>

                              <span>
                                {Module0.open ? (
                                  <FaChevronUp className="icon" />
                                ) : (
                                  <FaChevronDown className="icon" />
                                )}
                              </span>
                            </div>
                          ) : (
                            <div className={styles.ques}>
                              <h2>{Module0.title}</h2>
                              <span>
                                {Module0.open ? (
                                  <FaChevronUp className="icon" />
                                ) : (
                                  <FaChevronDown className="icon" />
                                )}
                              </span>
                            </div>
                          )}

                          {Module0.open ? (
                            <div className={styles.ans}>
                              <p>{Module0.desc}</p>
                              {Module0.content.map((content, i) => {
                                return (
                                  <div key={content.chap.title}>
                                    <h5>{content.chap.title}</h5>
                                    {content.chap.desc.map((desc, i) => {
                                      return (
                                        <div key={i}>
                                          {desc === "" ? (
                                            ""
                                          ) : (
                                            <li key={desc}>{desc}</li>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.formWrapper}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                interstedInHide={interstedInHide}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                fullStack={fullStack}
                syllabus={true}
                upSkillingHide={true}
              />
            </div>
          </div>
        </section>
        <div className={styles.buttonDiv}>
          {buttonHide ? ("") : (
            <Link href="/master-application">
          <div>
            <Button
              bannerButton={true}
              text="START YOUR APPLICATION"
              // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
          </Link>
          )}
          <div onClick={popupShow}>
            <Button
              nobannerButton={true}
              text="DOWNLOAD BROCHURE"
              // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SyllabusNew;
