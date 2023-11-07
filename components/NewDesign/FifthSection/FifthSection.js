import React, { useState, useEffect } from "react";
import styles from "./  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section.module.css";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import FeeSection from "./Fee";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";
import Certificate from "../  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section/CertificateTabAdvance";
import AnalyticsCertificateTab from "../CertificateTab/AnalyticsCertificateTab";
import BlockchainCertificateTab from "../CertificateTab/BlockchainCertificate";
import CertificateTabAdvance from "../  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section/CertificateTabAdvance";
import CertificateAIML from "../  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section/CertificateTabAIML";
import CertificateSoftware from "../  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section/CertificateSoftware";
import CertificateTabSoft from "../  testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section/CertificateTabSoft";

function   testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section({
  FeeHeading,
  dataAnalyticsCertificate,
  dataScience,
  CertificateSoftwareD,
  AIMLCertificate,
  Fee,
  FeeContent1,
  FeeContent2,
  FeeContent3,
  FeeContent4,
  FeeContent5,
  FeeContent6,
  FeeEmi,
  hidetools,
  advanceCertificate,
  IBMMicrosoft,
  AnalyticsCertificate,
  NoCertficate,
  baFamilyTools,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  softTools,
  blockChainTools,
  BlockchainCertificate,
  IBMMicrosoftsoft,
}) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
  });

  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setChangeHeading(demoClass);
    setChangeText(changeText);
    setPopups(true);
  };

  return (
    <>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            dataScience={dataScience}
            upSkillingHide={true}
            dataScienceCounselling={dataScienceCounselling}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            popup={true}
            setTrigger={setPopups}
            dataScience={dataScience}
            upSkillingHide={true}
            dataScienceCounselling={dataScienceCounselling}
            titleCourse={titleCourse}
            brochureLink={brochureLink}
          />
        </div>
      </Popup>
      {blockChainTools ? (
        <>
          {" "}
          <div className={styles.toolscoverd}>
            <p className={styles.infop}>Wide Range Of Tools & Modules</p>
            <div className={styles.sliderTopD}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-Blockchain.png"
                alt="github"
                layout="intrinsic"
                width="1458"
                height="186"
                objectFit="contain"
              />
            </div>
            <div className={styles.sliderTopM}>
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-Blockchain-mobile.png"
                alt="github"
                layout="intrinsic"
                width="481"
                height="153"
                objectFit="contain"
              />
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          {softTools ? (
            <>
              {" "}
              <div className={styles.toolscoverd}>
                <p className={styles.infop}>Wide Range Of Tools & Modules</p>
                <div className={styles.sliderTopD}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-SDE.png"
                    alt="github"
                    layout="intrinsic"
                    width="1458"
                    height="186"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.sliderTopM}>
                  <Image
                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-SDE-mobile.png"
                    alt="github"
                    layout="intrinsic"
                    width="481"
                    height="153"
                    objectFit="contain"
                  />
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              {baFamilyTools ? (
                <div className={styles.toolscoverd}>
                  <p className={styles.infop}>Wide Range Of Tools & Modules</p>
                  <div className={styles.sliderTopD}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA+Family+Tools+Covered.png"
                      alt="github"
                      layout="intrinsic"
                      width="1458"
                      height="186"
                      objectFit="contain"
                    />
                  </div>
                  <div className={styles.sliderTopM}>
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Family-Tools-Covered-mobile.png"
                      alt="github"
                      layout="intrinsic"
                      width="481"
                      height="153"
                      objectFit="contain"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {hidetools ? (
                    ""
                  ) : (
                    <div className={styles.toolscoverd}>
                      <p className={styles.infop}>
                        Wide Range Of Tools & Modules
                      </p>
                      <div className={styles.sliderTopD}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
                          alt="github"
                          layout="intrinsic"
                          width="1458"
                          height="186"
                          objectFit="contain"
                        />
                      </div>
                      <div className={styles.sliderTopM}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
                          alt="github"
                          layout="intrinsic"
                          width="481"
                          height="153"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                  )}
                </>
              )}{" "}
            </>
          )}
        </>
      )}

      {NoCertficate ? (
        ""
      ) : (
        <div>
          <p className={styles.infop}>Globally Recognized Program</p>
          {/* <p className={styles.ptop}>Sponsored by IBM and Microsoft</p> */}
          {advanceCertificate ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>{" "}
              <Certificate />
            </>
          ) : (
            ""
          )}
          {AIMLCertificate ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>{" "}
              <CertificateAIML />
            </>
          ) : (
            ""
          )}
          {AnalyticsCertificate ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>{" "}
              <AnalyticsCertificateTab />
            </>
          ) : (
            ""
          )}
          {BlockchainCertificate ? <><p className={styles.ptop}>Sponsored by IBM</p> <BlockchainCertificateTab /></> : ""}
          {IBMMicrosoft ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
              <CertificateTabAdvance Ibm={true} twoCertificateIBM={true} />
            </>
          ) : (
            ""
          )}
          {IBMMicrosoftsoft ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
              <CertificateTabSoft Ibm={true} twoCertificateIBM={true} />
            </>
          ) : (
            ""
          )}
          {dataAnalyticsCertificate ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
              <CertificateTabAdvance Ibm={true} />
            </>
          ) : (
            ""
          )}
          {CertificateSoftwareD ? (
            <>
              <p className={styles.ptop}>Sponsored by IBM and Microsoft</p>
              <CertificateSoftware Ibm={true} />
            </>
          ) : (
            ""
          )}
        </div>
      )}
      {/* <div className={styles.fee}>
        <p className={styles.infop} style={{ color: "#fff" }}>
          Program fee & financing
        </p>
        <div className={styles.feeBox}>
          <p>Total fee</p>
          <h2 style={{ color: "#0072bc" }}>{Fee}</h2>
          <div className={styles.line}></div>
          <p>Easy No-Cost EMI</p>
          <h2 style={{ color: "#0072bc" }}>{FeeEmi}</h2>
          <p>Financing partners</p>
          <div>
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Financing-Parnters-Logos.png"
              alt="pm"
              layout="intrinsic"
              objectFit="contain"
              width="427"
              height="38"
            />
          </div>
          <button onClick={popupShow} className={styles.btn}>
            Enroll now
          </button>
        </div>
      </div> */}
      <div className={styles.feeD}>
        <FeeSection
          dataScienceCounselling={true}
          upSkillingHide={true}
          Fee={Fee}
          FeeHeading={FeeHeading}
          FeeContent1={FeeContent1}
          FeeContent2={FeeContent2}
          FeeContent3={FeeContent3}
          FeeContent4={FeeContent4}
          FeeContent5={FeeContent5}
          FeeContent6={FeeContent6}
          FeeEmi={FeeEmi}
        />
      </div>
    </>
  );
}

export default   testimonial: [
      {
        id: 1,
        name: "Preksha Mishra",
        working: "HCL",
        link: "vSjfKdIzUjY",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/preksha-testimonial.webp",
        sDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job ...",
        lDesc:
          "I had a great learning experience at Learnbay. The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate. Thanks to all the trainers, backend team, the HR team and to the directors for making this journey smooth.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "140% Hike",
      },
      {
        id: 2,
        name: "Shubham Kumar",
        working: "Cendrol Technology",
        link: "JoKquvfAhZU",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/Shubham-kumar-thumb+.webp",
        sDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech...",
        lDesc:
          "I moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world. Their mock interviews also prepared me for job interviews, and I got a data analyst job at Cendrol. This course really helped me change my career.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: "  210% Hike",
      },
      {
        id: 4,
        name: "Arvind Kumar",
        working: "The Math Company",
        link: "hewBtR_WoDM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/aravind-k-thumb.webp",
        sDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that...",
        lDesc:
          "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage my time and learn while working. Thanks to Learnbay for my lucrative placement.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
        statLogo: " 150% Hike",
      },
      {
        id: 5,
        name: "Jaya sinha",
        working: "Amazon",
        link: "A-BkcEM0rQM",
        proImg:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/jaya-sinha-thumb.webp",
        sDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's...",
        lDesc:
          "Transitioning from a non-tech role, LearnBay's IBM data science certification equipped me with the skills needed in today's market. The course's interactive sessions and personalized guidance from Abhishek sir were invaluable. Post-completion, I had received two offers, one from Amazon and other from Infosys for the role of senior data analyst. Highly recommend for anyone stepping into data science.",
        complogo:
          "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/amazon.webp",
        statLogo: " 150% Hike",
      },
      // {
      //   id: 6,
      //   name: "Abhishek Singh",
      //   working: "Working at AGS",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are the best part here since ...",
      //   lDesc:
      //     "I got placed at AGS within 9 months of joining Learnbay institute. Live interaction sessions are  the best part here since we could clear all queries. The projects are excellent. Overall I had a great  experience and I urge everyone to enroll in this institute.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  132% Hike",
      // },
      // {
      //   id: 7,
      //   name: "Vishal",
      //   working: "Working at Bridge i2i",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "One on One counseling from experts has guided me to  make the right decision. The Learnbay team was amazing in assisting me with ...",
      //   lDesc:
      //     "One on One counseling from experts has guided me to make the right decision. The Learnbay team was amazing in assisting me with live projects and preparing for the placements. Thank you! Learnbay for your tremendous support in excelling in my Data Science Career.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "  127% Hike",
      // },
      // {
      //   id: "math",
      //   name: "Aravind Kumar",
      //   working: "SA - Data Scientist",
      //   link: "D-gcPaK_-x4",
      //   proImg:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/reviewNew.webp",
      //   sDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that ...",
      //   lDesc:
      //     "Choosing Learnbay was my best decision ever. The instructors were encouraging and glad to answer questions. The best feature is that their flexible modules & small size batches. I was able to manage  my time and learn while working. Thanks to Learnbay for my lucrative placement.",
      //   complogo:
      //     "https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/microsoft.webp",
      //   statLogo: "142% Hike",
      // },
    ]Section;
