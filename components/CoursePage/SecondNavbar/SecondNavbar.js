import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./SecondNavbar.module.css";

function SecondNavbar() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  return (
    <>
    <div className={styles.upperDiv}>
    <div className={styles.innerP}>
      <Link href="#alumni ">
        <p
          className={active2 ? styles.active : styles.inactive}
          onClick={() => {
            setActive(false);
            setActive1(false);
            setActive3(false);
            setActive2(true);
            setActive4(false);
          }}
        >
          Alumni 
        </p>
      </Link>
      <Link href="#eligibility">
        <p
          className={active ? styles.active : styles.inactive}
          onClick={() => {
            setActive(true);
            setActive1(false);
            setActive3(false);
            setActive2(false);
            setActive4(false);
          }}
        >
          Eligibility
        </p>
      </Link>
      <Link href="#curriculum">
        <p
          className={active1 ? styles.active : styles.inactive}
          onClick={() => {
            setActive1(true);
            setActive(false);
            setActive2(false);
            setActive3(false);
            setActive4(false);
          }}
        >
         Curriculum
        </p>
      </Link>
      <Link href="#fees">
        <p
          className={active3 ? styles.active : styles.inactive}
          onClick={() => {
            setActive1(false);
            setActive(false);
            setActive2(false);
            setActive3(true);
            setActive4(false);
          }}
        >
         Fees
        </p>
      </Link>
      <Link href="#faqs">
        <p
          className={active4 ? styles.active : styles.inactive}
          onClick={() => {
            setActive1(false);
            setActive(false);
            setActive2(false);
            setActive3(false);
            setActive4(true);
          }}
        >
          FAQs
        </p>
      </Link>
    </div>
    
   
  </div>
  <hr />
  </>
  );
}

export default SecondNavbar