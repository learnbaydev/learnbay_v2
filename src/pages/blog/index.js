import React from "react";
import { getSortedPostsData } from "../../../lib/posts";
import styles from "../../styles/blogM.module.css";
import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { sortByDate } from "../../../utils";
import { IoTimeOutline } from "react-icons/io5";
import generateRssFeed from "../../../lib/generateRss";
import generateCategoryRssFeed from "../../../lib/geneRateCategoryRss";
import Link from "next/link";
import Sidebar from "../../../components/BlogPage/Sidebar";
import Search from "../../../components/BlogPage/search";
import utilStyles from "../../styles/utils.module.css";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

export default function blog({ allPostsData }) {
  const length = parseInt(allPostsData.length);
  let singleCategoryPost = allPostsData.map((post) => {
    return post.category;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));

  return (
    <>
      <Head>
        <title>
          LearnBay Blogs - Latest Career Upskilling Trends and Learning
          Resources
        </title>

        <meta
          name="description"
          content="Stay Ahead with LearnBay Blogs on Upskilling Resources & IT Careers in AI, Data Science, Machine Learning & Full Stack Development For Learners & Professionals "
        />
        <link href="/Learnbay-Favicon-L.png" />
        <meta
          name="google-site-verification"
          content="q2xA2OZrvhAj8r1YGNF_3x5m5GuWCqo9rNb7atG4mXU"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link rel="canonical" href="https://blog.learnbay.co/" />
        <meta name="publisher" content="Learnbay" />
        <meta name="keywords" content="Learnbay Blogs" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className={styles.BackP} style={{ marginTop: "70px" }}>
        {/* <h4>
        <b>Our Blogs</b>

      </h4> */}
      </div>
      <section className={styles.blogHead}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <p>Latest Blogs</p>

          <Sidebar />
        </section>
      </section>
      <section className={styles.blogWrap}>
        {allPostsData
          .slice(0, 3)
          .map(({ id, date, title, author, readTime, headerImg }) => {
            const url = `/blog/${id}`;
            let makeUrl = author.toLowerCase().replace(/\s+/g, "-");
            let aurl = `/blog/author/${makeUrl}`;
            return (
              <div key={id}>
                <Link href={url}>
                  <div
                    className={styles.blog}
                    key={id}
                    style={{
                      background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 200%), url(${headerImg}) no-repeat center center `,
                      backgroundSize: "cover",
                    }}
                  >
                    <h4>{title}</h4>

                    <Link href={aurl}>
                      <div className={styles.profileWrap}>
                        <Image
                          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
                          width="80"
                          height="45"
                          layout="intrinsic"
                          alt="blog_writer"
                          className={styles.blogIMg}
                        />

                        <span>
                          <h5>{author}</h5>
                          <p>
                            {date} <BsDot className={styles.dot} />
                            <IoTimeOutline className={styles.time} />
                            {readTime}
                          </p>
                        </span>
                      </div>
                    </Link>
                  </div>
                </Link>
              </div>
            );
          })}
      </section>
      {[...categoryPostTag].map((post, i) => {
        let tag = post;
        const categoryPosts = allPostsData.filter(
          (post) => post.category === tag
        );
        let makeUrl = post.toLowerCase().replace(/\s+/g, "-");
        let url = `/blog/category/${makeUrl}`;
        // let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
        // let aurl = `/author/${makeUrl}`;
        return (
          <section className={styles.categoryPosts} key={i}>
            <span>
              <p className={styles.tagNameH}>
                {post}{" "}
                <a href={url}>
                  <button>View More</button>
                </a>
              </p>{" "}
            </span>
            <div className={styles.categoryWrapper}>
              <div>
                {categoryPosts
                  .slice(0, 2)
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/blog/${id}`;
                      let tUrl = `/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;

                      // console.log("@@@@", categoryPosts)
                      let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
                      let aurl = `/blog/author/${amakeUrl}`;
                      return (
                        <Link href={url} key={id}>
                          <div className={styles.categoryPost} key={id}>
                            <div className={styles.leftCategoryPost}>
                              <Image
                                src={headerImg}
                                width="300"
                                height="180"
                                alt={categoryPosts.id}
                                layout="intrinsic"
                                className={styles.categoryPostImg}
                              />
                            </div>
                            <div className={styles.rightCategoryPost} key={id}>
                              <a
                                href={tUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                              >
                                <span className={styles.tagSpan}>
                                  {category}
                                </span>
                              </a>
                              <a href={url} target="_blank" rel="noreferrer">
                                <h4>{title}</h4>
                              </a>
                              <p>{desc}</p>

                              <Link href={aurl}>
                                <div className={styles.profileWrap}>
                                  <Image
                                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
                                    width="80"
                                    height="45"
                                    layout="intrinsic"
                                    alt="blog_writer"
                                    className={styles.blogIMg}
                                  />
                                  <span>
                                    <h5>{author}</h5>
                                    <p>
                                      {date} <BsDot className={styles.dot} />
                                      <IoTimeOutline className={styles.time} />
                                      {readTime}
                                    </p>
                                  </span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  )}
              </div>
              <div className={styles.categoryPostRightSide}>
                {categoryPosts
                  .slice(2, 3)
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/blog/${id}`;
                      let tUrl = `/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;

                      let amakeUrl = author.toLowerCase().replace(/\s+/g, "-");
                      let aurl = `/blog/author/${amakeUrl}`;
                      return (
                        <Link href={url} key={id}>
                          <div className={styles.categoryPost} key={id}>
                            <div className={styles.leftCategoryPost}>
                              <Image
                                src={headerImg}
                                width="400"
                                height="190"
                                alt={categoryPosts.id}
                                layout="intrinsic"
                                className={styles.categoryPostImg}
                              />
                            </div>
                            <div className={styles.rightCategoryPost} key={id}>
                              <a
                                href={tUrl}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                              >
                                <span className={styles.tagSpan}>
                                  {category}
                                </span>
                              </a>
                              <a href={url} target="_blank" rel="noreferrer">
                                <h4>{title}</h4>
                              </a>
                              <p>{desc}</p>

                              <Link href={aurl}>
                                <div className={styles.profileWrap}>
                                  <Image
                                    src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main-blog/avatar-02.webp"
                                    width="80"
                                    height="45"
                                    layout="intrinsic"
                                    alt="blog_writer"
                                    className={styles.blogIMg}
                                  />
                                  <span>
                                    <h5>{author}</h5>
                                    <p>
                                      {date} <BsDot className={styles.dot} />
                                      <IoTimeOutline className={styles.time} />
                                      {readTime}
                                    </p>
                                  </span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  )}
              </div>
            </div>
          </section>
        );
      })}
    </>
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
