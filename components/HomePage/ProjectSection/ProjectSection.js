import React from "react";
import styles from "./ProjectSection.module.css";
import Image from "next/image";
import { FaCheckCircle, FaDownload } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Pagination, Navigation } from "swiper";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

function ProjectSection() {
  return (
    <section className={styles.container}>
      <h4 className={styles.h4}>
        Learnbay’s <span className={styles.span}>ProjectLab</span>
      </h4>
      <div className={styles.box}>
        <div className={styles.InnerBox1}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/project-innovation.webp"
              loading="lazy"
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoShow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Innovation Lab</p>
          <p className={styles.para}>
            Our Project Innovation Lab offers{" "}
            <b>real-world project simulations</b>, teaching project execution
            like leading companies. It's a dynamic platform to apply your
            learning effectively.
          </p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Globally recognized degree from IBM
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Validate your real-work experience
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Globally recognized degree from IBM
            </p>
          </div>
        </div>
        <div className={styles.InnerBox2}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Project-Certification.webp"
              loading="lazy"
              width="358"
              height="212"
              alt="profile-Img"
              onClick={() => videoShow()}
            />
          </div>
          <p className={styles.BlueHed}>Project Certification from IBM</p>
          <div className={styles.iconPara}>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Globally recognized degree from IBM
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Validate your real-work experience
            </p>
            <p className={styles.para}>
              <FaCheckCircle className={styles.greenIcon} />
              Globally recognized degree from IBM
            </p>
          </div>
        </div>
      </div>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // scrollbar={{ draggable: true }}
        grabCursor={true}
        style={{ width: "100%" }}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.secondDiv}>
            <div className={styles.firstDiv}>
              <p className={styles.BlueHed}>Domain Specialization</p>
              <p className={styles.para}>
                Our Project Innovation Lab offers{" "}
                <b>real-world project simulations</b>, teaching project
                execution like leading companies. It's a dynamic platform to
                apply your learning effectively.
              </p>
              <div className={styles.iconBoxDesktop}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
              </div>
              <div className={styles.iconBoxMobile}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                </div>
                <div className={styles.buttonDiv}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/domainSlider.png"
                  loading="lazy"
                  width="517"
                  height="300"
                  alt="profile-Img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.secondDiv}>
            <div className={styles.firstDiv}>
              <p className={styles.BlueHed}>Domain Specialization</p>
              <p className={styles.para}>
                Our Project Innovation Lab offers{" "}
                <b>real-world project simulations</b>, teaching project
                execution like leading companies. It's a dynamic platform to
                apply your learning effectively.
              </p>
              <div className={styles.iconBoxDesktop}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                </div>
                <div className={styles.iconButton}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
              </div>
              <div className={styles.iconBoxMobile}>
                <div className={styles.iconBox}>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/bank.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>BFSI</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/heartbeat.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>HEALTHCARE</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/live.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>MARKETING & HR</p>
                  </div>
                  <div className={styles.BoxIconinner}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/delivery-truck.gif"
                      loading="lazy"
                      width={40}
                      height={40}
                    />
                    <p>SUPPLYCHAIN</p>
                  </div>
                </div>
                <div className={styles.buttonDiv}>
                  <Button
                    bannerButton={true}
                    text="Download Domain Brochures"
                    passIcon={<FaDownload className="bIconS" />}
                  />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/domainSlider.png"
                  loading="lazy"
                  width="517"
                  height="300"
                  alt="profile-Img"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProjectSection;
