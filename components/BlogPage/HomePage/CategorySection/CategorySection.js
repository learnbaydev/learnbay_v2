import React from "react";
import styles from "./CategorySection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CategorySection({ categoryPostTag, allPostsData }) {
  return (
    <>
      {[...categoryPostTag].map((post, i) => {
        let tag = post;
        const categoryPosts = allPostsData.filter(
          (post) => post.category === tag
        );
        let makeUrl = post.toLowerCase().replace(/\s+/g, "-");
        let url = `/blog/category/${makeUrl}`;

        return (
          <section className={styles.categoryPosts} key={i}>
            <div className={styles.viewMoreSection}>
              <h2>{post} (234)</h2>
              <Link href={url} passHref>
                <p>View More</p>
              </Link>
            </div>

            <div className={styles.categoryWrapper}>
              <div className={styles.blogWrap}>
                {categoryPosts
                  .slice(0, 6)
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
                        <div key={id}>
                          <div className={styles.blog}>
                            <div className="bgWrap">
                              {" "}
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
                            <Link href={url}  passHref>
                              <h4>{title}</h4>
                              <p>
                              {desc}
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
                      );
                    }
                  )}
              </div>

              <div className={styles.categoryPostRightSide}>
                <div className={styles.categoryPost}>
                  <div className={styles.rightCategoryPostFirst}>
                    <a href="#" target="_blank" rel="noreferrer">
                      <p>
                        An Introduction to Python Programming : Core Concepts
                      </p>
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
      })}
    </>
  );
}
