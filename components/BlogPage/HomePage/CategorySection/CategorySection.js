import React from "react";
import styles from "./CategorySection.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
// import { getSortedPostsData } from "../../../../lib/posts";
// import generateRssFeed from "../../../../lib/generateRss";
// import generateCategoryRssFeed from "geneRateCategoryRss";


export default function CategorySection({ allPostsData }){
  return (
    <section className={styles.categoryPosts}>
      <div className={styles.viewMoreSection}>
        <h2>Data Science & Business Analytics (234)</h2>
        <Link href="#" passHref>
        <p>View More</p>
        </Link>
      </div>

      <div className={styles.categoryWrapper}>
        <div className={styles.blogWrap}>
          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />

                  <p>
                    26/05/2023 <b>By</b>

                    
                    <span>Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />

                  <p>
                    26/05/2023 <b>By</b>
                    <span>Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />

                  <p>
                    26/05/2023 <b>By</b>
                    <span>Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />

                  <p>
                    26/05/2023 <b>By</b>
                    <span>Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />
                  <p>
                    26/05/2023
                    <b>By</b> <span> Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.blog}>
              <div className="bgWrap">
                {" "}
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/blog/scp.jpg"
                  fill={true}
                  alt="backround image"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.profileWrap}>
              <Link href="#" passHref>
                <h4>The Future of Data Analytics Career</h4>
                <p>
                  The willingness of businesses to invest in Artificial
                  Intelligence (AI)....
                </p>

                <span>Read More</span>

                <div className={styles.authordiv}>
                  <hr className={styles.hrline} />

                  <p>
                    26/05/2023 <b>By</b>
                    <span>Manas Khochar</span>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.categoryPostRightSide}>
          <div className={styles.categoryPost}>
            <div className={styles.rightCategoryPostFirst}>
              <a href="#" target="_blank" rel="noreferrer">
                <p>An Introduction to Python Programming : Core Concepts</p>
              </a>
              <div className={styles.rightCategoryPostSecond}>
                <p>21/06/2023</p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  <p className={styles.tagSpan}>Data Science</p>
                </Link>
              </div>
              <hr className={styles.hrline} />
            </div>
            <div className={styles.rightCategoryPostFirst}>
              <a href="#" target="_blank" rel="noreferrer">
                <p>An Introduction to Python Programming : Core Concepts</p>
              </a>
              <div className={styles.rightCategoryPostSecond}>
                <p>21/06/2023</p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  <p className={styles.tagSpan}>Data Science</p>
                </Link>
              </div>
              <hr className={styles.hrline} />
            </div>
            <div className={styles.rightCategoryPostFirst}>
              <a href="#" target="_blank" rel="noreferrer">
                <p>An Introduction to Python Programming : Core Concepts</p>
              </a>
              <div className={styles.rightCategoryPostSecond}>
                <p>21/06/2023</p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  <p className={styles.tagSpan}>Data Science</p>
                </Link>
              </div>
              <hr className={styles.hrline} />
            </div>
            <div className={styles.rightCategoryPostFirst}>
              <a href="#" target="_blank" rel="noreferrer">
                <p>An Introduction to Python Programming : Core Concepts</p>
              </a>
              <div className={styles.rightCategoryPostSecond}>
                <p>21/06/2023</p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  <p className={styles.tagSpan}>Data Science</p>
                </Link>
              </div>
              <hr className={styles.hrline} />
            </div>
            <div className={styles.rightCategoryPostFirst}>
              <a href="#" target="_blank" rel="noreferrer">
                <p>An Introduction to Python Programming : Core Concepts</p>
              </a>
              <div className={styles.rightCategoryPostSecond}>
                <p>21/06/2023</p>
                <Link
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  <p className={styles.tagSpan}>Data Science</p>
                </Link>
              </div>
              <hr className={styles.hrline} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps(_context) {
  await generateRssFeed();
  await generateCategoryRssFeed();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData: allPostsData.sort(sortByDate),
    },
  };
}

