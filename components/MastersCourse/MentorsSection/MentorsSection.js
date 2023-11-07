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
  const [value, setValue] = useState(3.68);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
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
      setValue(1.5);
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
      setValue(4);
    }
  }, []);
  return (
    <section className={styles.container}>
      <h4>Meet Our Mentors</h4>
      <p>Guiding You Every Step of the WayTowards Professional Excellence</p>
      <div className={styles.SliderDiv}>
        <Swiper
          loop={true}
          slidesPerView={value}
          spaceBetween={"20px"}
          
           
            
            
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
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/mentor-desktop.webp"
                      width="100"
                      height="100"
                      //  
                      alt="data science course"
                      //  quality={80}
                      // loading="lazy"

                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Mohit S.</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/kryndal.webp"
                      width="100"
                      height="25"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/puulkit.webp"
                      width="100"
                      height="100"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Pulkit Jain</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paypal.webp"
                      width="100"
                      height="30"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/tripti.webp"
                      width="100"
                      height="100"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Tripti Jain</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/paytm.webp"
                      width="100"
                      height="30"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.slide}>
                <div className={styles.box}>
                  <div>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/AnkurK.webp"
                      width="100"
                      height="100"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className={styles.Name}>Ankur K.</p>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/walmart.webp"
                      width="100"
                      height="20"
                       
                      alt="data science course"
                       quality={80}
                      loading="lazy"
                    />
                  </div>
                  {/* <p className={styles.cont}>Elevate Your Profile: Boost your career prospects </p> */}
                </div>
              </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default MentorsSection;
