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
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

function SyllabusNew({
  syllabus,
  dataScience,
  fullStack,
  titleCourse,
  brochureLink,
  software,
  advSyllabus,
  dataScienceCounselling,
  pop,
  syllabusHead,
  masterSyllabus,
  MasterSyllabusDefault,
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
  const [cSyllabus, setCSyllabus] = useState(MasterSyllabusDefault);
  const changeSyllabus = (data) => {
    console.log("hello");
    for (const key in masterSyllabus) {
      if (masterSyllabus.hasOwnProperty(key)) {
        if (key === data) {
          console.log(key, data);
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
    console.log(index, "handelChange");
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
              upSkillingHide={true}
            />
          </div>
        </Popup>
        <div className={styles.project}>
          <h4 className={styles.h1}>Explore our Syllabus</h4>
          <p className={styles.ptop}>
            Curriculum is specifically engineered to meet the expectations of
            leading tech companies.
          </p>
        </div>{" "}
        <div className={styles.topBar}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={mobile ? 3 : 2.7}
            spaceBetween={mobile ? 0 : 0}
            navigation
            grabCursor={true}
            className="mySwiper"
          >
            {active.length > 0
              ? syllabusHead.map((data, i) => {
                  const splitString = data.split("(");
                  return (
                    <SwiperSlide
                      className={active[i].value ? styles.ASlide : styles.slide}
                    >
                      <span
                        key={i}
                        onClick={() => {
                          changeActive(i);
                          changeSyllabus(data);
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
          </Swiper>
        </div>
        <section className={styles.Syllabus}>
          <div className={styles.syllabusLeft}>
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
          <div className={styles.button}>
            <div className={styles.formWrapper}>
              <div className={styles.boxDiv}>
                <div className={styles.formBox}>
                  {" "}
                  <FaRegUser className={styles.iconUser} /> 7,568 people filled
                </div>
              </div>
              {/* <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Form-Girl.png"
                width={535}
                height={239}
                alt="girl"
              />
            </div> */}
              <h4>
                Interested in <span>Master’s Degree?</span>
              </h4>
              <Form
                dataScienceCounselling={dataScienceCounselling}
                titleCourse={titleCourse}
                brochureLink={brochureLink}
                fullStack={fullStack}
                syllabus={true}
              />
            </div>
          </div>
        </section>
        <div className={styles.buttonDiv}>
          <div onClick={popupShow}>
            <Button
              bannerButton={true}
              text="START YOUR APPLICATION"
              // passIcon={<FaDownload style={{ marginLeft: "10px" }} />}
            />
          </div>
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