import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../Global/Button/Button";
import styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
const Header = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  return (
    <div className={styles.nav}>
      {" "}
      <Link href="/">
        <Image
          src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/ALight/learnbay-logo.png"
          alt="Learnbay"
          quality={100}
          style={{ objectFit: "contain" }}
          width={mobile ? "135" : "180"}
          height={60}
        />
      </Link>
      <Button text="Go to cart" passIcon={<BsCartFill />} />
    </div>
  );
};

export default Header;
