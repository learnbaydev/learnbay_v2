import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { TabData } from "./TabData";
import styles from "./Tabs.module.css";


const Tabs = ({ handleIcon }) => {
  // const [viewAll, setViewAll] = useState(true);
  // const [oneYear, setOneYear] = useState(false);
  // const [nonTech, setNonTech] = useState(false);
  // const [Guarantee, setGuarantee] = useState(false);
  // const [Stack, setStack] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [dataLoop, setDataLoop] = useState([
    { title: "Popular Courses", value: true },
    { title: "Data Science & AI", value: false },
    { title: "Software Development", value: false },
    { title: "Master Program", value: false },
    { title: "View All", value: false },
  ]);

  const menuChange = (title, index) => {
    // console.log(i);

    if (title === dataLoop[index].title) {
      // for (let i = 0; i < dataLoop.length; i++) {
      setDataLoop([...dataLoop], (dataLoop[index].value = true));
      for (let i = 0; i < dataLoop.length; i++) {
        if (index === i) {
          setDataLoop([...dataLoop], (dataLoop[index].value = true));
        } else {
          setDataLoop([...dataLoop], (dataLoop[i].value = false));
        }
      }
    }
  };

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  });

  return (
    <div className="wrapper">
      <div className={styles.MenuTabs}>
        <div className={styles.leftPanel}>
          {TabData.map((data, index) => {
            return (
              <span
                key={data.id}
                id="0"
                onMouseOver={() => {
                  menuChange(data.title, index);
                }}
                className={
                  dataLoop[index].value ? styles.spanActive : styles.span
                }
              >
                {data.title}
                <IoIosArrowForward />
              </span>
            );
          })}
        </div>
        {mobile ? (
          ""
        ) : (
          <div className={styles.middlePanel}>
            {TabData.map((data, index) => {
              const { courseName } = data;
              return dataLoop[index].value ? (
                <div className={styles.RowWrap} key={index}>
                  {courseName.map((data, index) => {
                    return (
                      <div className={styles.Row} key={index}>
                        <a href={data.url}>
                          <div
                            className={styles.Program}
                            onClick={() => handleIcon(false)}
                          >
                            <div className={styles.ProLeft}>
                              <h5>{data.CName}</h5>
                              <span>{data.hours} </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
