import React from "react";
import Image from "next/image";
import styles from "./SecondSection.module.css";

function SecondSection({ SecondSectionData }) {
  return (
    // <div className={`${styles.second} wrapper`}>
    //   <div>
    //     <h4 className={styles.h1}>Why Choose Us?</h4>
    //     <p className={styles.ptop}>
    //       India&apos;s top rated bootcamp for working professionals
    //     </p>
    //   </div>
    //   <div className={styles.secondBox}>
    //     {SecondSectionData.map((data, index) => {
    //       const { heading, para, img, width, height } = data;
    //       return (
    //         <div className={styles.blue} key={index}>
    //           <div>
    //             <h5 className={styles.heading}>{heading}</h5>
    //             <p className={styles.textBox}>{para}</p>
    //           </div>
    //           <div className={styles.imgWrap}>
    //             <Image
    //               src={img}
    //               width={width}
    //               height={height}
    //               alt="data science"
    //             />
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className={styles.boxP}>
    <div className={styles.boxC}>
      <div> 
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/f1.webp"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            />
          </div> <p>176% Average Salary Hike</p> 
    </div>
    <div  className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/f2.webp"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p> 1-on-1 Dedicated Doubt Sessions</p>
    </div>
    <div className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/f3.webp"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p> 450+ Placement Partners </p>
    </div>
    <div className={styles.boxC}>
      <div>
        <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/f4.webp"
              width="50"
              height="50"
              priority={true}
              alt="data science course"
            /></div> <p>Curriculum inclusive of Generative AI</p>
    </div>
  </div>
  );
}

export default SecondSection;
