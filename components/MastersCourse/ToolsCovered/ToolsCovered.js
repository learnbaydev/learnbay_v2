

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
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
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            1280: { slidesPerView: 5.25, spaceBetween: 30 },
            481: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            393: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
         
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.column}>
                <Image
                  src={image}
                  width={80}
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
