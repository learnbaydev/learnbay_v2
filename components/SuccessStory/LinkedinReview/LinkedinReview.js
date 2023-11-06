import React from 'react';
import styles from "./LinkedinReview.module.css"

const imageSources = [
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-1.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-6.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-3.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-4.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-5.webp',
  'https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/linked-in-2.webp',
  
];

function LinkedinReview() {
  return (
    <div className={styles.LinkedinReviewMain}>
        <h2>Linkedin</h2>



      <div className={styles.LinkedinReviewBoxHead}>
        {imageSources.map((imageSource, index) => (
          <div className={styles.LinkedinReviewBox} key={index}>
            <img src={imageSource} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkedinReview;
