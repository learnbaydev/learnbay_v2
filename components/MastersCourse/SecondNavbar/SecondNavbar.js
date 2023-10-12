import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./SecondNavbar.module.css";
import Button from "../../Global/Button/Button";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../../Popup/Popup"));

function SecondNavbar() {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the ID of the section that is currently in the viewport
            const sectionId = entry.target.getAttribute('id');
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections with IDs matching your navigation links
    const sections = document.querySelectorAll("#alumni, #eligibility, #curriculum, #fees, #faqs");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const popupShow = () => {
    setPopups(true);
  };

  return (
    <>
      <div className={styles.upperDiv}>
        <div className={styles.innerP}>
          <Link href="#alumni">
            <p className={activeSection === 'alumni' ? styles.active : styles.inactive}>
              Alumni
            </p>
          </Link>
          <Link href="#eligibility">
            <p className={activeSection === 'eligibility' ? styles.active : styles.inactive}>
              Eligibility
            </p>
          </Link>
          <Link href="#curriculum">
            <p className={activeSection === 'curriculum' ? styles.active : styles.inactive}>
              Curriculum
            </p>
          </Link>
          <Link href="#fees">
            <p className={activeSection === 'fees' ? styles.active : styles.inactive}>
              Fees
            </p>
          </Link>
          <Link href="#faqs">
            <p className={activeSection === 'faqs' ? styles.active : styles.inactive}>
              FAQs
            </p>
          </Link>
        </div>
        <div onClick={popupShow} className={styles.btnHide}>
          <Button text="APPLY FOR COUNSELLING" outline={true} />
        </div>
      </div>
      <hr />
    </>
  );
}

export default SecondNavbar;
