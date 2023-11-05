import React from "react";
import Styles from "./NewProjectSection.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

function NewProjectSection({ projectSection }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
  }, []);
  return (
    <section className={Styles.container}>
      <h4>Industry Projects</h4>
      <p>
        Curriculum is specifically engineered to meet the expectations of
        leading tech companies.{" "}
      </p>
      <div className={Styles.BoxDiv}>
        <Swiper
          breakpoints={{
            1280: {
              slidesPerView: 3,
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
          modules={[Pagination]}
          className="mySwiper"
        >
          {projectSection.map((data, index) => {
            const {
              id,
              duration,
              logo,
              heading,
              img,
              para,
              toolImg,
              learnMore

            } = data;

            return (
              <SwiperSlide key={index}>
                <div className={Styles.Box}>
                  <div className={Styles.boxGreen}>{data.duration}</div>
                  <div className={Styles.content}>
                    <div className={Styles.DivImg}>
                      <Image
                        src={img}
                        loading="lazy"
                        width="215"
                        height="79"
                        alt="microsoft"
                      />
                    </div>
                    <p className={Styles.heading}>
                    {data.heading}
                    </p>
                    <div className={Styles.strip}>
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Group+502.png"
                        loading="lazy"
                        width="370"
                        height="41"
                        alt="microsoft"
                      />
                    </div>
                    <p className={Styles.para}>
                      {data.para}
                    </p>
                    <div className={Styles.ImgBox}>
                      <Image
                        src={toolImg}
                        loading="lazy"
                        width="420"
                        height="70"
                        alt="microsoft"
                      />
                    </div>
                    {/* <p className={Styles.blue}>Learn more</p> */}
                  </div>
                </div>
              </SwiperSlide>
            );

          })}


        </Swiper>
      </div>
    </section>
  );
}

export default NewProjectSection;
