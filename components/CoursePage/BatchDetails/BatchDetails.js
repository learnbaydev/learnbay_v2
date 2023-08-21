import React from "react";
import { MdDateRange } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import styles from "./BatchDetails.module.css";

function BatchDetails({ batchDetails }) {
  console.log(batchDetails, "inside compo");
  return batchDetails === "" ? (
    <p>No batch Date Available</p>
  ) : (
    <>
      <section className={styles.Syllabus}>
        <p className={styles.infop}>Batch Details </p>
        <div className={styles.mobileView}>
          <div className={styles.NewBatch}>
            {batchDetails === "" ? (
              <p>Batch Date will be updated soon!</p>
            ) : (
              batchDetails.map((data, index) => {
                const { daysInfo, dateInfo, timeInfo } = data;
                return (
                  <div className={styles.NewOrange} key={index}>
                    <div>
                      <p className={styles.listDay}>{daysInfo}</p>
                    </div>
                    <div className={styles.listMobile}>
                      <p className={styles.list}>
                        <MdDateRange className={styles.iconOrange} />
                        {dateInfo}
                      </p>
                      <p className={styles.list}>
                        <BiTimeFive className={styles.iconBlue} />
                        {timeInfo}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className={styles.desktopView}>
          <div className={styles.NewBatch}>
            {batchDetails.map((data, index) => {
              console.log(data, "inside map");
              const { daysInfo, dateInfo, timeInfo } = data;
              return (
                <div className={styles.NewBlue}>
                  <div>
                    <p className={styles.listDay}>{daysInfo}</p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <MdDateRange className={styles.iconOrange} />
                      {dateInfo}
                    </p>
                  </div>
                  <div>
                    <p className={styles.list}>
                      <BiTimeFive className={styles.iconBlue} />
                      {timeInfo}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default BatchDetails;
