import styles from "./VideoTestimonial.module.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import { BsFillPlayFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination, FreeMode } from "swiper";
import Image from "next/image";
import VideoPopup from "../Global/VideoPopup/VideoPopup";

const VideoTestimonialSwiper = ({ review }) => {
  const [vId, setVId] = useState("");

  const [video, setVideo] = useState(false);

  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <Swiper
        slidesPerView={4.2}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          1024: { slidesPerView: 4.2, spaceBetween: 40 },
          961: { slidesPerView: 1.8, spaceBetween: 20 },
          801: { slidesPerView: 2.3, spaceBetween: 40 },
          641: { slidesPerView: 2.1, spaceBetween: 10 },
          481: { slidesPerView: 1.6, spaceBetween: 10 },
          100: { slidesPerView: 1.2, spaceBetween: 10 },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        grabCursor={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {review.map((data) => {
          return (
            <SwiperSlide key={data.id} id="1" className={styles.ReviewBox}>
              <div className="bgWrap">
                <Image
                  src={data.img}
                  alt={data.alt}
                  loading="lazy"
                  fill={true}
                />
              </div>
              <BsFillPlayFill
                className={styles.playIcon}
                onClick={() => videoShow(data.link)}
              />

              <div className={styles.nameWrap}>
                <h5>{data.name}</h5>
                <p>Data Scientist</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  ) : (
    ""
  );
};

export default VideoTestimonialSwiper;
