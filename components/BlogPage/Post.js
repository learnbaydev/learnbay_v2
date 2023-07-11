import { sortByDate, slugify } from "../../utils";
import Link from "next/link";
// import { getSortedPostsData } from "../lib/posts";
import styles from "./CategoryPage/CategorySection.module.css";
import Image from "next/image";
// import { BsDot } from "react-icons/bs";
// import Head from "next/head";
// import { IoTimeOutline } from "react-icons/io5";

export default function Post({ post }) {
  const date = new Date(post.frontmatter?.date);

  console.log("@@@@@@@", post.frontmatter.image);
 
  return (
    <>
      <div className={styles.blogWrap}>
        <div>
          <div className={styles.blog}>
            <div className="bgWrap">
              <Image
                src={`${post.frontmatter.image}`}
                width="300"
                height="180"
                alt={post.frontmatter.id}
                className={styles.categoryPostImg}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.profileWrap}>
            <Link href={`/${post.slug}`} passHref>
              <h4>{post.frontmatter.title}...</h4>
            </Link>
            <p>{post.frontmatter.desc}...</p>
            <Link href={`/${post.slug}`} passHref>
              <span>Read More</span>
            </Link>
            <div className={styles.authordiv}>
              <hr className={styles.hrline} />
              <Link href={`/${post.slug}`}>
                <p>
                  {post.frontmatter.date} <b>By</b>
                  <span>{post.frontmatter.author}</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
