
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";
const ToolsCovered = () => {
  // Sample image URLs, replace these with your own image URLs

  return (
    <>
    <p className={styles.infop}>Programming Languages & Tools Covered</p>
    <div className={styles.container}>

      <div className="imgWrapper">

        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/toolscover.webp"
          width="800"
          height="800"
          loading="lazy"
          alt="data science course"
        />
      </div>

    </div>
    </>


  );
};
export default ToolsCovered;