import React, { useState, useEffect } from "react";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";

function ToolsCovered({
  deskImg,
  mobImage,
}) { 
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width <= 641) {
      setMobile(true);
    }
  }, []);
  return (
    <div>
      <div className={styles.toolscoverd}>
        <p className={styles.infop}>Wide Range Of Tools & Modules</p>
        <div className="imgWrapper">
          <Image
            src={mobile ?  mobImage  :  deskImg }
            alt="github"
            width="1458"
            height="186"
          />
        </div>
      </div>
    </div>
  );
}

export default ToolsCovered;
