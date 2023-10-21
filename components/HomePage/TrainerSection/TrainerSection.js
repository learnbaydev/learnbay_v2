import React, { useState } from "react";
import Styles from "./TrainerSection.module.css";
import Button from "../../Global/Button/Button";
import Image from "next/image";
import VideoPopup from "../../Global/VideoPopup/VideoPopup";
import { AiFillStar } from "react-icons/ai";
import { switchData } from "../../HomePage/KeyFeatures/switchData";

function TrainerSection() {
  const [vId, setVId] = useState("");
  const [video, setVideo] = useState("");
  const videoShow = (id) => {
    setVideo(true);
    setVId(id);
  };
  return (
    <>
    <section className={Styles.container}>
      <h4>Alumni Spotlight</h4>
      <div className={Styles.First}>
      <VideoPopup triggers={video} setTriggers={setVideo} ids={vId} />
      <div className={Styles.switch}>
        <p>Hear it from our Alumni</p>
        {switchData.map((data) => {
          const { img, height, url, width, text, alt, id, bgBlue, bgGreen, bgRed } = data;
          return (
            <a href={url} target="_blank" key={id}>
              <div
                className={
                  bgBlue
                    ? Styles.switchInnerBlue
                    : bgGreen
                    ? Styles.switchInnerGreen
                    : bgRed
                    ? Styles.switchInnerRed
                    : Styles.switchInner
                }
              >
                <div className={Styles.rating}>
                  {text} <AiFillStar className={Styles.star} />
                </div>
                <div className="imgWrapper">
                  <Image src={img} width={120} height={60} alt={alt} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div className={Styles.proImgWrap}>
        <div className="imgWrapper">
          <Image
            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/learnbay-review.webp"
            loading="lazy"
            width="358"
            height="212"
            alt="profile-Img"
            onClick={() => videoShow()}
          />
        </div>
      </div>
      </div>
    </section>
    </>
  );
}

export default TrainerSection;
