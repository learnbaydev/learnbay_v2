import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./FirstSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Search } from "../../search";

import { Pagination, FreeMode } from "swiper";
import { CiSearch } from "react-icons/ci";

function FirstSection({ postData, posts, navData }) {
  const [search, setSearch] = useState();
  function findSerach(value) {
    setSearch(value.target.value);
  }

  return (
    <>
      <div className={styles.upperDiv}>
        <div className={styles.innerP}>
          <Link href="#featured">
            <p>FEATURED BLOG POSTS</p>
          </Link>
          <Link href="#data-science">
            <p>DATA SCIENCE & BUSINESS ANALYTICS</p>
          </Link>
          <Link href="#software">
            <p>SOFTWARE DEVELOPMENT</p>
          </Link>
        </div>
        <div className="col-lg-4">
          <div className={styles.formControl}>
            <CiSearch />
            <input
              onChange={findSerach}
              type="text"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-search"
            />
            <Link
              href={{
                pathname: "/Search",
                query: { q: search?.toLowerCase() },
              }}
            ></Link>
          </div>
        </div>
      </div>
      <div className={styles.upperBanner}>
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          // freeMode={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.banner}>
              <div className={styles.divFirst}>
                <Image
                  // src={postData.img}
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/Python+Header.png"
                  alt="Learnbay"
                  layout="intrinsic"
                  width="765"
                  height="516"
                ></Image>
              </div>
              <div className={styles.divSecond}>
                <p className={styles.headP}>Introductry</p>
                {/* <p className={styles.headP}>{postData.infoP}</p> */}
                <h2 className={styles.headH2}>
                  {/* {postData.mainH1}
              <span className={styles.spanH2}>{postData.spanH2}</span> */}
                  An Introduction to Python Programming :
                  <span className={styles.spanH2}>Core Concepts</span>
                </h2>
                <p className={styles.bottomP}>
                  Placeholder text lorem ipsum doret lorem ipsum text lorem
                  ipsum doret lorem ipsum text lorem ipsum doret lorem ipsum
                  text lorem ipsum doret lorem ipsum
                </p>
                {/* <p className={styles.bottomP}>{postData.bottomP}</p> */}
                <div className={styles.imgText}>
                  <div className={styles.imgC}>
                    <Image
                      // src={postData.imgC}
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/amritansh.png"
                      alt="Learnbay"
                      width="71"
                      height="71"
                    ></Image>
                    <div className={styles.insDate}>
                      {/* <p className={styles.PH}>{postData.PH}</p>
              <p className={styles.pD}>{postData.pD}</p> */}
                      <p className={styles.PH}>Amritansh</p>
                      <p className={styles.pD}>November 1, 2022</p>
                    </div>
                  </div>
                  <p className={styles.readMore}>Read More...</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner}>
              <div className={styles.divFirst}>
                <Image
                  // src={postData.img}
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/Python+Header.png"
                  alt="Learnbay"
                  layout="intrinsic"
                  width="765"
                  height="516"
                ></Image>
              </div>
              <div className={styles.divSecond}>
                <p className={styles.headP}>Introductry</p>
                {/* <p className={styles.headP}>{postData.infoP}</p> */}
                <h2 className={styles.headH2}>
                  {/* {postData.mainH1}
              <span className={styles.spanH2}>{postData.spanH2}</span> */}
                  An Introduction to Python Programming :
                  <span className={styles.spanH2}>Core Concepts</span>
                </h2>
                <p className={styles.bottomP}>
                  Placeholder text lorem ipsum doret lorem ipsum text lorem
                  ipsum doret lorem ipsum text lorem ipsum doret lorem ipsum
                  text lorem ipsum doret lorem ipsum
                </p>
                {/* <p className={styles.bottomP}>{postData.bottomP}</p> */}
                <div className={styles.imgText}>
                  <div className={styles.imgC}>
                    <Image
                      // src={postData.imgC}
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/amritansh.png"
                      alt="Learnbay"
                      width="71"
                      height="71"
                    ></Image>
                    <div className={styles.insDate}>
                      {/* <p className={styles.PH}>{postData.PH}</p>
              <p className={styles.pD}>{postData.pD}</p> */}
                      <p className={styles.PH}>Amritansh</p>
                      <p className={styles.pD}>November 1, 2022</p>
                    </div>
                  </div>
                  <p className={styles.readMore}>Read More...</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner}>
              <div className={styles.divFirst}>
                <Image
                  // src={postData.img}
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/Python+Header.png"
                  alt="Learnbay"
                  layout="intrinsic"
                  width="765"
                  height="516"
                ></Image>
              </div>
              <div className={styles.divSecond}>
                <p className={styles.headP}>Introductry</p>
                {/* <p className={styles.headP}>{postData.infoP}</p> */}
                <h2 className={styles.headH2}>
                  {/* {postData.mainH1}
              <span className={styles.spanH2}>{postData.spanH2}</span> */}
                  An Introduction to Python Programming :
                  <span className={styles.spanH2}>Core Concepts</span>
                </h2>
                <p className={styles.bottomP}>
                  Placeholder text lorem ipsum doret lorem ipsum text lorem
                  ipsum doret lorem ipsum text lorem ipsum doret lorem ipsum
                  text lorem ipsum doret lorem ipsum
                </p>
                {/* <p className={styles.bottomP}>{postData.bottomP}</p> */}
                <div className={styles.imgText}>
                  <div className={styles.imgC}>
                    <Image
                      // src={postData.imgC}
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/tutorial/amritansh.png"
                      alt="Learnbay"
                      width="71"
                      height="71"
                    ></Image>
                    <div className={styles.insDate}>
                      {/* <p className={styles.PH}>{postData.PH}</p>
              <p className={styles.pD}>{postData.pD}</p> */}
                      <p className={styles.PH}>Amritansh</p>
                      <p className={styles.pD}>November 1, 2022</p>
                    </div>
                  </div>
                  <div>
                    <p className={styles.readMore}>Read More...</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default FirstSection;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  const postData = getPostData(params.id);
  const navData = getSortedPostsData();
  return {
    props: {
      postData,
      posts: posts.sort(sortByDate),
      navData,
    },
    revalidate: 18000,
  };
}
