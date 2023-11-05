import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MentorsSection.module.css";

function MentorsSection() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  return (
    <section className={styles.container}>
      <h4>Meet Our Mentors</h4>
      <p>Guiding You Every Step of the WayTowards Professional Excellence</p>
      <div className={styles.SliderDiv}>
        <Swiper
          loop={true}
          breakpoints={{
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
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
          {mobile ? (
            <>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
                      <p className={styles.Name}>Priya Vajpeyi</p>
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
            </>
          ) : (
            <>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.png"
                      width="100"
                      height="100"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Priya Vajpeyi</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp"
                      width="100"
                      height="20"
                      priority={true}
                      alt="data science course"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </section>
  );
}

export default MentorsSection;
