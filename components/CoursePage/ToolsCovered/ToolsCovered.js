// import React, { useState, useEffect } from "react";
// import styles from "./ToolsCovered.module.css";
// import Image from "next/image";

// function ToolsCovered({
//   deskImg,
//   mobImage,
// }) { 
//   const [mobile, setMobile] = useState(false);
//   useEffect(() => {
//     let width = window.innerWidth;
//     if (width <= 641) {
//       setMobile(true);
//     }
//   }, []);
//   return (
//     <div>
//       <div className={styles.toolscoverd}>
//         <p className={styles.infop}>Wide Range Of Tools & Modules</p>
//         <div className="imgWrapper">
//           <Image
//             src={mobile ?  mobImage  :  deskImg }
//             alt="github"
//             width="1458"
//             height="186"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ToolsCovered;


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
          500: {
            slidesPerView: 1.5,
            spaceBetween: 40,
          },
          961: {
            slidesPerView: 1.9,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.column}>
              <Image src={image} width={100} height={60} style={{
           margin: 'auto',
      }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};
export default ToolsCovered;
