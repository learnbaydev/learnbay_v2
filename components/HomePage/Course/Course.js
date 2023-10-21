import React, { useState, useEffect } from "react";
import styles from "./Course.module.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popup from "../../Popup/Popup";
import Form from "../../Form/Form";
import { FaDownload } from "react-icons/fa";
import { courseDetails } from "./courseDetails";
import { IoTimeOutline } from "react-icons/io5";

import { BsCheckLg } from "react-icons/bs";

const Course = ({ dataScience, radio, dataScienceCounselling, Green }) => {
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.68);
  const [popups, setPopups] = useState(false);

  const [CourseLoop, setCourseLoop] = useState([
    { title: "Popular Courses", value: true },
    { title: "Certification Program", value: false },
    // { title: "Software Development", value: false },
    { title: "Master's Degree Program", value: false },
    // { title: "View All", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
    }
  };

  const popupShow = () => {
    setPopups(true);
  };
  const [titleCourse, setTitleCourse] = useState();
  const [brochureLinks, setBrochureLinks] = useState();

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setValue(1.4);
      setMobile(true);
    }
    if (width < 600) {
      setValue(1.2);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.6);
    } else if (width <= 801) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(3);
    } else if (width <= 1281) {
      setValue(2.4);
    } else if (width > 1281) {
      setValue(3.1);
    }
  }, []);
  return (
    <div className={styles.Course} id="course">
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
            titleCourse={titleCourse}
            brochureLink={brochureLinks}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            radio={radio}
            downloadBrochure
            upSkillingHide={true}
          />
        </div>
      </Popup>
      <h2>Our Courses</h2>

      <div className={styles.courses}>
        <div className={styles.listPanel}>
          {courseDetails.map((CourseData, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  menuChange(CourseData.title, index);
                }}
                className={
                  CourseLoop[index].value ? styles.ActiveSpan : styles.span
                }
              >
                {CourseData.title}
              </span>
            );
          })}
        </div>
        <div>
          {courseDetails.map((courseDetail, index) => {
            const { courses } = courseDetail;
            return CourseLoop[index].value ? (
              <div key={index}>
                {courses.map((courseDetail, index) => {
                  return (
                    <div key={index} className={styles.divBox}>
                      <h5 className={styles.h5font}>
                        {courseDetail.courseName}
                        {/* ({courseDetail.courseDetails.length}) */}
                      </h5>
                      <div className={styles.gridPanel}>
                        <Swiper
                          slidesPerView={value}
                          spaceBetween={mobile ? 20 : 60}
                          navigation={{
                            clickable: true,
                          }}
                          grabCursor={true}
                          modules={[Navigation]}
                          className="mySwiper"
                        >
                          {courseDetail.courseDetails.map((viewAllData) => {
                            const {
                              id,
                              title,
                              title1,
                              img,
                              para,
                              link1,
                              titleCourse,
                              brochureLinks,
                              courseTime,
                              Green,
                            } = viewAllData;
                            return (
                              <SwiperSlide className={styles.leftSide} key={id}>
                                <div key={id} className={styles.SliderWrap}>
                                  <a href={link1} className={styles.imgWrap}>
                                    <div className="imgWrapper">
                                      <Image
                                        src={img}
                                        width={100}
                                        height={272}
                                        quality={100}
                                        unoptimized={true}
                                        style={{ objectFit: "cover" }}
                                        alt="data science course"
                                      />
                                    </div>
                                  </a>
                                  <div className={styles.contButton}>
                                    <div className={styles.contentBox}>
                                      <div className={styles.headWrapper}>
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title}
                                        </h6>
                                        <h6
                                          className={
                                            Green
                                              ? styles.mainHeadGreen
                                              : styles.mainHead
                                          }
                                        >
                                          {title1}
                                        </h6>
                                      </div>
                                      <hr className={styles.hr} />
                                      <div className={styles.paraDiv}>
                                        <p className={styles.singleP}>
                                          {/* <BiTimeFive
                                            className={styles.checkCircle}
                                          /> */}
                                          <IoTimeOutline
                                            className={styles.timeIcon}
                                          />{" "}
                                          {para[0]} | {courseTime}
                                        </p>
                                        {/* <p>
                                        <AiOutlineFundProjectionScreen
                                          className={styles.checkCircle}
                                          style={{ color: "#edb552" }}
                                        />
                                        {para[1]}
                                      </p> */}
                                        <p className={styles.singleP}>
                                          {/* <TbCurrencyRupee
                                            className={styles.checkCircle}
                                          /> */}
                                          <BsCheckLg
                                            className={styles.checkIcon}
                                          />
                                          {para[2]}
                                        </p>
                                        <p className={styles.singleP}>
                                          {/* <TbCurrencyRupee
                                            className={styles.checkCircle}
                                          /> */}
                                          <BsCheckLg
                                            className={styles.checkIcon}
                                          />
                                          {para[2]}
                                        </p>
                                      </div>
                                      <hr className={styles.hr1} />
                                    </div>
                                    <div className={styles.btnWrapper}>
                                      <a
                                        onClick={() => {
                                          setTitleCourse(titleCourse);
                                          setBrochureLinks(brochureLinks);
                                          popupShow();
                                        }}
                                      >
                                        <button
                                          className="outLineBtn1"
                                          style={{
                                            color: "#2979AD",
                                            background: "#fff",
                                          }}
                                        >
                                          Brochure
                                          <FaDownload
                                            className="bIcon"
                                            style={{ color: "#2979AD" }}
                                          />
                                        </button>
                                      </a>
                                      <hr className={styles.btnLine} />
                                      <a href={link1} className={styles.link1}>
                                        <button
                                          className={
                                            Green
                                              ? styles.green
                                              : styles.fillBtn
                                          }
                                        >
                                          View Details{" "}
                                          <TbListDetails
                                            className={styles.bellIcon}
                                          />
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
