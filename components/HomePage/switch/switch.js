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
                <div className="imgWrapper">
                  <Image src={img} width={120} height={60} alt={alt} />
                </div>
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
