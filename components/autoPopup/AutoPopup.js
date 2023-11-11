import React, { useEffect, useState } from "react";
import styles from "./AutoPopup.module.scss";
import { IoClose } from "react-icons/io5";

const AutoPopup = (props) => {
  if (props.price) color = "white";

  const [popupShown, setPopupShown] = useState(false);

  useEffect(() => {
    let timer;
    if (!popupShown) {
      timer = setTimeout(() => {
        props.setTrigger(true);
        setPopupShown(true);
      }, 10000); // 10 seconds in milliseconds
    }

    return () => clearTimeout(timer);
  }, []);
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

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default AutoPopup;
