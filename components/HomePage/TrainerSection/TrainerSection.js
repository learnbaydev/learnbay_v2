import React from "react";
import Styles from "./TrainerSection.module.css";
import Button from "../../Global/Button/Button";

function TrainerSection() {
  return (
    <section className={Styles.First}>
        <h3>Meet Our Mentors</h3>
        <p>Guiding You Every Step of the WayTowards<br/> Professional Excellence</p>
        <a href="" target="_blank" className={Styles.Button}>
          <Button text="Know More" />
        </a>
    </section>
  );
}

export default TrainerSection;
