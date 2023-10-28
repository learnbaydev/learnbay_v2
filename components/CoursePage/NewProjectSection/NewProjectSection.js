import React from "react";
import Styles from "./NewProjectSection.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

function NewProjectSection() {
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
          <SwiperSlide>
            <div className={Styles.Box}>
              <div className={Styles.boxGreen}>26 Hours</div>
              <div className={Styles.content}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+170.png"
                    loading="lazy"
                    width="215"
                    height="79"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.heading}>
                  Career progression planning of employees with workforce
                  defections & efficiency
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
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values...
                </p>
                <div className={Styles.ImgBox}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconProject.webp"
                    loading="lazy"
                    width="420"
                    height="50"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.blue}>Learn more</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.Box}>
              <div className={Styles.boxGreen}>26 Hours</div>
              <div className={Styles.content}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+170.png"
                    loading="lazy"
                    width="215"
                    height="79"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.heading}>
                  Career progression planning of employees with workforce
                  defections & efficiency
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
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values...
                </p>
                <div className={Styles.ImgBox}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconProject.webp"
                    loading="lazy"
                    width="420"
                    height="50"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.blue}>Learn more</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.Box}>
              <div className={Styles.boxGreen}>26 Hours</div>
              <div className={Styles.content}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+170.png"
                    loading="lazy"
                    width="215"
                    height="79"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.heading}>
                  Career progression planning of employees with workforce
                  defections & efficiency
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
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values...
                </p>
                <div className={Styles.ImgBox}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconProject.webp"
                    loading="lazy"
                    width="420"
                    height="50"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.blue}>Learn more</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.Box}>
              <div className={Styles.boxGreen}>26 Hours</div>
              <div className={Styles.content}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+170.png"
                    loading="lazy"
                    width="215"
                    height="79"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.heading}>
                  Career progression planning of employees with workforce
                  defections & efficiency
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
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values...
                </p>
                <div className={Styles.ImgBox}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconProject.webp"
                    loading="lazy"
                    width="420"
                    height="50"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.blue}>Learn more</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Styles.Box}>
              <div className={Styles.boxGreen}>26 Hours</div>
              <div className={Styles.content}>
                <div>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/image+170.png"
                    loading="lazy"
                    width="215"
                    height="79"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.heading}>
                  Career progression planning of employees with workforce
                  defections & efficiency
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
                  BMW allows existing customers to sell used cars but many
                  competitors are now offering better resale values...
                </p>
                <div className={Styles.ImgBox}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/iconProject.webp"
                    loading="lazy"
                    width="420"
                    height="50"
                    alt="microsoft"
                  />
                </div>
                <p className={Styles.blue}>Learn more</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default NewProjectSection;