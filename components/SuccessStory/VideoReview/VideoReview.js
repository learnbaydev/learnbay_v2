import React, { useState } from "react";
import styles from "./VideoReview.module.css";
import Image from "next/image";
import VideoPopup from "../../VideoPopup/VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const VideoReview = ({ idss }) => {
  const [popups, setPopups] = useState(false);
  const [video, setVideo] = useState(false);
  const videoSHow = () => {
    setVideo(true);
  };
  // const el = useRef(null);
  const popupShow = () => {
    setPopups(true);
  };

  const images = [
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/video-review.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/video-review.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/video-review.webp",
    "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/video-review.webp",
  ];

  return (
    <section className={styles.container}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

      <h4>Career Stories & Reviews</h4>
      <div className={styles.BoxDiv}>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            1280: { slidesPerView: 3, spaceBetween: 30 },
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
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/video-review.webp"
                  width={548}
                  height={364}
                  style={{ height: "fit-content" }}
                  onClick={() => videoSHow()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoReview;
