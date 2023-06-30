import styles from "./Demo.module.css";
import Image from "next/image";
import React, { useState } from "react";
import { demoDetails } from "./video";

function demo() {
  const [CourseLoop, setCourseLoop] = useState([
    { title: "Python", value: true },
    { title: "Statistics", value: false },
    { title: "Machine Learning", value: false },
    { title: "Deep Learning", value: false },
    { title: "Projects", value: false },
  ]);

  const menuChange = (title, index) => {
    if (title === CourseLoop[index].title) {
      setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
      for (let i = 0; i < CourseLoop.length; i++) {
        if (index === i) {
          setCourseLoop([...CourseLoop], (CourseLoop[index].value = true));
        } else {
          setCourseLoop([...CourseLoop], (CourseLoop[i].value = false));
        }
      }
    }
  };

  return (
    <section className={styles.Demo}>
      <div className={styles.Back}>
        <h4>Demo Session And Sample Class Recordings</h4>
        <div className={styles.right}>
          <div className="imgWrapper">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/demo-header.png"
              width="522"
              height="380"
              alt="data science course"
            />
          </div>
        </div>
      </div>
      <div className={styles.DemoInner}>
        <div className={styles.certificate}>
          <div className={styles.listPanel}>
            {demoDetails.map((DemoData, index) => {
              return (
                <span
                  key={DemoData.id}
                  onClick={() => {
                    menuChange(DemoData.title, index);
                  }}
                  style={
                    CourseLoop[index].value
                      ? { background: "#E5F3FA" }
                      : { background: "white" }
                  }
                >
                  {DemoData.title}
                </span>
              );
            })}
          </div>
          <div>
            {demoDetails.map((data, index) => {
              return CourseLoop[index].value ? (
                <div key={index}>
                  <div className={styles.gridPanel}>
                    {data.courses.map((viewAllData) => {
                      const { id, img, value } = viewAllData;
                      return (
                        <div className={styles.leftSide} key={id}>
                          <div className={styles.leftSideP}>
                            <a href={value} target="_blank">
                              <div className="imgWrapper">
                                <Image
                                  src={img}
                                  width="432"
                                  height="282"
                                  cursor="pointer"
                                  alt="data science course"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default demo;
