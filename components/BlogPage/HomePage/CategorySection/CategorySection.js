import React from "react";
import styles from "./CategorySection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CategorySection({ categoryPostTag, allPostsData }) {
  return (
    <>
      {[...categoryPostTag].slice(0, 2).map((post, i) => {
        let tag = post;
        const categoryPosts = allPostsData.filter(
          (post) => post.category === tag
        );
        let makeUrl = post.toLowerCase().replace(/\s+/g, "-");
        let url = `/blog/category/${makeUrl}`;

        console.log("@@@@", categoryPostTag);

        const firstBlogPosts = categoryPosts.slice(0, 6);
        const secondBlogPosts = categoryPosts.slice(0, 4);

        return (
          <section className={styles.categoryPosts} key={i}>
            <div className={styles.viewMoreSection}>
              <div className={styles.viewMoreSection1}>
                <h2>{post} (234)</h2>
                <Link href={url} passHref>
                  <p>View All</p>
                </Link>
              </div>

              <div></div>
            </div>

            <div className={styles.categoryWrapper}>
              <div className={styles.blogWrap}>
                {firstBlogPosts.map(
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
                      <div key={id}>
                        <div className={styles.blog}>
                          <div className="bgWrap">
                            <Image
                              src={headerImg}
                              width="300"
                              height="180"
                              alt={categoryPosts.id}
                              className={styles.categoryPostImg}
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                        <div className={styles.profileWrap}>
                          <Link href={url} passHref>
                            <h4>
                              The Future of Data Analytics Career Career{"..."}
                            </h4>
                            <p>
                              The willingness of businesses to invest in
                              Artificial Intelligence (AI){"..."}
                            </p>
                            <span>Read More</span>
                            <div className={styles.authordiv}>
                              <hr className={styles.hrline} />
                              <p>
                                {date} <b>By</b>
                                <span>{author}</span>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              {i === 0 && (
                <div className={styles.categoryPostRightSide}>
                  <div className={styles.categoryPost}>
                    <div className={styles.rightCategoryPostFirst}>
                      {secondBlogPosts.map(
                        ({ id, date, title, author, category, desc }) => {
                          let url = `/blog/${id}`;
                          let tUrl = `/blog/category/${category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`;

                          let amakeUrl = author
                            .toLowerCase()
                            .replace(/\s+/g, "-");
                          let aurl = `/blog/author/${amakeUrl}`;
                          return (
                            <div key={id}>
                              <a href="#" target="_blank" rel="noreferrer">
                                <p>{title}</p>
                              </a>
                              <div className={styles.rightCategoryPostSecond}>
                                <p>{date}</p>
                                <Link
                                  href="#"
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.link}
                                >
                                  <p className={styles.tagSpan}>{category}</p>
                                </Link>
                              </div>
                              <hr className={styles.hrline} />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {i === 1 && (
              <div className={styles.categoryPostRightSideM}>
                <div className={styles.categoryPost}>
                  <div className={styles.rightCategoryPostFirst}>
                    {secondBlogPosts.map(
                      ({ id, date, title, author, category, desc }) => {
                        let url = `/blog/${id}`;
                        let tUrl = `/blog/category/${category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`;

                        let amakeUrl = author
                          .toLowerCase()
                          .replace(/\s+/g, "-");
                        let aurl = `/blog/author/${amakeUrl}`;
                        return (
                          <div key={id}>
                            <a href="#" target="_blank" rel="noreferrer">
                              <p>{title}</p>
                            </a>
                            <div className={styles.rightCategoryPostSecond}>
                              <p>{date}</p>
                              <Link
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.link}
                              >
                                <p className={styles.tagSpan}>{category}</p>
                              </Link>
                            </div>
                            <hr className={styles.hrline} />
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
