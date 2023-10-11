import React from "react";
import styles from "./MentorsSection.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function MentorsSection() {
  return (
    <section className={styles.container}>
      <h4>Meet Our Mentors</h4>
      <p>Guiding You Every Step of the WayTowards Professional Excellence</p>
      <div className={styles.SliderDiv}>
      <Swiper
          loop={true}
          breakpoints={{
            1280: {
              slidesPerView: 4.8,
              spaceBetween: 25,
            },
            1024: {
                slidesPerView: 2.8,
                spaceBetween: 45,
              },
              961: {
                slidesPerView: 2.1,
                spaceBetween: 40,
              },
              761: {
                slidesPerView: 1,
                spaceBetween: 30,
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
        <div className={styles.mainDiv}>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
        <div className={styles.mainDiv}>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.box}>
            <div>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Mentor.png"
                width="50"
                height="60"
                priority={true}
                alt="data science course"
              />
            </div>
            <div>
              <p>Priya Vajpeyi</p>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                width="70"
                height="14"
                priority={true}
                alt="data science course"
              />
            </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>

      </div>
    </section>
  );
}

export default MentorsSection;
