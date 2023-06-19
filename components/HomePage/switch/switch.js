import React from "react";
import styles from "./switch.module.css";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { switchData } from "./switchData";

function Switch() {
  return (
    <section className={styles.head}>
      <div className={styles.switch}>
        {switchData.map((data) => {
          const { img, height, url, width, text, alt, id } = data;
          return (
            <a href={url} target="_blank" key={id}>
              <div className={styles.switchInner}>
                <Image src={img} width={width} height={height} alt={alt} />
                <div className={styles.rating}>
                  {text} <AiFillStar className={styles.star} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Switch;
