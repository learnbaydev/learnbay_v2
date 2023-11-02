import styles from "./Media.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Pagination } from "swiper";
import "swiper/css";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";


import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";



SwiperCore.use([Navigation]);

const Media = ({ projectData }) => {
  const [projectArray, setProjectArray] = useState(projectData);
  return (
    <div className={styles.projectHeader}>
      <div className={styles.headWrapper}>
        <div className={styles.left}>
          <p className={styles.ptop}>Featured in</p>
          <h4>Media Spotlight</h4>
        </div>
        <div className={styles.pNavg}>
          <div className={`${styles.customArrow} custom-prev`}>
            <BsArrowLeft />
          </div>
          <div className={`${styles.customArrow} custom-next`}>
            <BsArrowRight />
          </div>
        </div>
      </div>
      <div className={styles.container}>

   
        <Swiper
    
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              slidesPerView: 1.2,
              spaceBetween: 35,
            },

            481: {
              slidesPerView: 1,
              spaceBetween: 35,
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
              slidesPerView: 4.1,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className={`mySwiper ${styles.myswiper}`}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        
        >
          {projectArray.map((data, index) => {
            const { id, domain, CLogo, SDesc, i} = data;
            return (
              <>
                <SwiperSlide className={styles.project} key={i}>
                  <div className={styles.header}>
                    <div className={styles.left}></div>
                    <div
                      className={styles.imgWrap}
                      style={
                        id === "BMW" ? { width: "35px" } : { width: "auto" }
                      }
                    >
                      <div className="imgWrapper">
                        <Image
                          src={CLogo}
                          alt="Learnbay"
                          quality={100}
                          width="80"
                          height="40"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h5>{domain}</h5>
                    <p>{SDesc}</p>
                  </div>
                </SwiperSlide>
                <div>
                  <div className="custom-prev">Previous</div>
                  <div className="custom-next">Next</div>
                </div>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Media;
