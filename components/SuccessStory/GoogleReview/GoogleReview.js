import React from "react";
import styles from "./GoogleReview.module.css";
import Image from "next/image";

const reviews = [
  {
    imageSrc: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/google-review-1.webp",
    content:
      
    "The course content was exceptionally well-structured and covered all the essential topics in data science and machine learning. Starting from the fundamentals and progressing to advanced concepts, the curriculum provided a solid foundation for my journey into the field of data science. The instructors at Learnbay are true experts in their field. Their deep knowledge, industry experience, and passion for teaching were evident throughout the course. They made complex concepts easy to understand, provided practical insights, and were always willing to answer questions and provide guidance. ",
  contentpara : "The Learnbay support team deserves special mention. They were always available to assist with any issues or queries I had, ensuring a smooth and enjoyable learning experience. Their responsiveness and dedication to student success were truly commendable."
  
  },
  {
    imageSrc: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/google-review-2.webp",
    content:
      "I have joined Learnbay for Full Stack Development in Java program. Currently I have completed the Data Structures and Algorithms module. The instructor is very calm, patient and knowledgeable. They are very much experienced in solving students' queries. The course is structured very well which covers most of the concepts and practice questions that are required to be prepared for the interviews. The Learnbay support team is also very prompt and responsive. They take immediate actions to our given feedback and requirements. I would definitely recommend this course for the aspiring full stack developers.",
  },
  {
    imageSrc: "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/coursePage/google-review-3.webp",
    content:
      "Learnbay offers an outstanding Data Science course with highly qualified and experienced instructors who make complex concepts accessible. Their exceptional doubt-solving team provides quick, clear explanations, enhancing the learning experience. The comprehensive curriculum, practical approach, and strong community support, along with job assistance, make Learnbay a top choice for anyone interested in Data Science. I highly recommend their courses for aspiring data scientists.",
  },
];

function GoogleReview() {
  return (
    <div className={styles.GoogleReviewMain}>
      <h2>Google</h2>
      <div className={styles.googleboxMain}>
      {reviews.map((review, index) => (
        <div className={styles.lin}>
        <div key={index} className={styles.googlebox}>
          <img src={review.imageSrc} alt={`Review Image ${index}`} 
          width={160}
          height={50}
          />

          <p>{review.content}</p>
          <p>{review.contentpara}</p>

        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default GoogleReview;
