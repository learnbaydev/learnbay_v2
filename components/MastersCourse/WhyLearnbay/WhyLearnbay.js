import React from "react";
import styles from "./WhyLearnbay.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function WhyLearnbay() {
  return (
    <section className={styles.container}>
      <p className={styles.heading}>Why Learnbay?</p>
      <div className={styles.SliderContainer}>
        <Swiper
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            761: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            961: {
              slidesPerView: 2.1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2.8,
              spaceBetween: 45,
            },
            1280: {
              slidesPerView: 4.8,
              spaceBetween: 25,
            },
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          style={{ width: "100%" }}
          modules={[Pagination, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.InnerDiv}>
              <div className={styles.boxinner}>
                <p>Project Innovation Lab</p>
              </div>
              <div className={styles.ParaBox}>
                <p className={styles.para}>
                  Enhance your learning experience with hybrid model. Attend
                  offline sessions in our project innovation labs across in
                  several cities :{" "}
                  <span>Bengaluru, Pune, Hyderabad, Delhi.</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.InnerDiv}>
              <div className={styles.boxinner}>
                <p>Project Innovation Lab</p>
              </div>
              <div className={styles.ParaBox}>
                <p className={styles.para}>
                  Enhance your learning experience with hybrid model. Attend
                  offline sessions in our project innovation labs across in
                  several cities :{" "}
                  <span>Bengaluru, Pune, Hyderabad, Delhi.</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default WhyLearnbay;
