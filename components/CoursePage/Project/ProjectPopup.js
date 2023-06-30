import React, { useEffect } from "react";
import styles from "./ProjectPopup.module.scss";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const ProjectPopup = (props) => {
  let color = "transparent";
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);

  return props.trigger ? (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

        <div className={styles.InnerGrid}>
          <div className={styles.imgWrap}>
            <div className="imgWrapper">
              <Image
                src={props.imgsrc.PopupImg}
                width="200"
                height="200"
                alt="data science course"
              />
            </div>
          </div>
          <div className={styles.contentWrap}>
            <h5>{props.title.Title}</h5>
            <p>
              <b>{props.PTitle.ProjectTitle}</b>
            </p>
            <p>{props.desc.LDesc}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProjectPopup;
