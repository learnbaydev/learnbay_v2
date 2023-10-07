

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";
const ToolsCovered = () => {
  // Sample image URLs, replace these with your own image URLs
  const images = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/tool1.png",
  ];
  return (
    <>
      <p className={styles.infop}>Programming Languages & Tools Covered</p>
      <div className={styles.sliderContainer}>
        <Swiper
          navigation={true}
          grabCursor={true}
          breakpoints={{
            500: { slidesPerView: 1.5, spaceBetween: 40 },
            961: { slidesPerView: 1.9, spaceBetween: 40 },
            1024: { slidesPerView: 2.5, spaceBetween: 50 },
            1280: { slidesPerView: 5.25, spaceBetween: 30 },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
         
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} style={{marginLeft:'40px'}}>
              <div className={styles.column}>
                <Image
                  src={image}
                  width={100}
                  height={60}
                  style={{
                    margin: "auto",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ToolsCovered;
