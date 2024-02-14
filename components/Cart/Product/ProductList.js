import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";
import { BsCartFill, BsBank } from "react-icons/bs";
import Image from "next/image";
import { TbCurrencyRupee } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart.slice";
import { courseDetails } from "./ProductDetails";

const Course = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.2);
  const [showProduct, setShowProduct] = useState(false);
  const [CourseLoop, setCourseLoop] = useState([
    { title: "Data Science & AI", value: true },
    { title: "Software Development", value: false },
    { title: "Master Program", value: false },
    { title: "View All", value: false },
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
    }
  }, []);

  return (
    <div className={styles.Course} id="course">
      <h2>Industry Accredited Certification For Professionals</h2>

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
                    <div key={index}>
                      <h5 className={styles.h5font}>
                        {courseDetail.courseName} (
                        {courseDetail.courseDetails.length})
                      </h5>
                      <div className={styles.gridPanel}>
                        <Swiper
                          slidesPerView={value}
                          spaceBetween={mobile ? 20 : 20}
                          pagination={{
                            clickable: true,
                          }}
                          grabCursor={true}
                          modules={[Pagination]}
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
                              courseTime,
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
                                  <div className={styles.contentBox}>
                                    <div className={styles.headWrapper}>
                                      <h6 className={styles.mainHead}>
                                        {title}
                                      </h6>
                                      <h6>{title1}</h6>
                                    </div>
                                    <hr className={styles.hr} />
                                    <div className={styles.paraDiv}>
                                      <p>
                                        <BiTimeFive
                                          className={styles.checkCircle}
                                        />
                                        {para[0]} | {courseTime}
                                      </p>
                                      <p>
                                        <AiOutlineFundProjectionScreen
                                          className={styles.checkCircle}
                                          style={{ color: "#edb552" }}
                                        />
                                        {para[1]}
                                      </p>
                                      <p className={styles.singleP}>
                                        <TbCurrencyRupee
                                          className={styles.checkCircle}
                                        />
                                        {para[2]}
                                      </p>
                                    </div>
                                  </div>
                                  <div className={styles.btnWrapper}>
                                    <button
                                      // onClick={() => {
                                      //   dispatch(
                                      //     addToCart(viewAllData.product)
                                      //   );
                                      //   router.push("/cart");
                                      // }}
                                      style={{
                                        background: "transparent",
                                        color: "#0487d9 ",
                                        border: "1px solid #0487d9",
                                        borderRadius: "0 0 0 8px",
                                      }}
                                    >
                                      <BsBank /> Loan/EMi
                                    </button>
                                    <button
                                      onClick={() => {
                                        dispatch(
                                          addToCart(viewAllData.product)
                                        );
                                        router.push("/cart");
                                      }}
                                      style={{ borderRadius: "0 0 8px 0" }}
                                    >
                                      <FaCreditCard /> Pay by Card
                                    </button>
                                  </div>
                                  {/* {showProduct ? (
                                    <div className="cardWrap">
                                      <div className="cardPop">
                                        <IoIosCloseCircleOutline
                                          className={styles.crossProduct}
                                          onClick={() => setShowProduct(false)}
                                        />
                                        <ProductPopup data={viewAllData} />
                                      </div>
                                    </div>
                                  ) : (
                                    ""
                                  )} */}
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
