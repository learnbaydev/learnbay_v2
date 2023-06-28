import React, { useState, useEffect } from "react";
import styles from "./ToolsCovered.module.css";
import Image from "next/image";

function ToolsCovered({
  softTools,
  blockChainTools,
  baFamilyTools,
  hidetools,
  deskImg,
  mobImage,
}) { 
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width <= 641) {
      setMobile(true);
    }
  }, []);
  return (
    <div>
      <div className={styles.toolscoverd}>
        <p className={styles.infop}>Wide Range Of Tools & Modules</p>
        <div className="imgWrapper">
          <Image
            src={mobile ?  mobImage  :  deskImg }
            alt="github"
            width="1458"
            height="186"
          />
        </div>
      </div>
      {/* {blockChainTools ? (
        <>
          {" "}
          <div className={styles.toolscoverd}>
            <p className={styles.infop}>Wide Range Of Tools & Modules</p>
            <div className="imgWrapper">
              <Image
                src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-Blockchain.png"
                alt="github"
                width="1458"
                height="186"
                objectFit="contain"
              />
            </div>
            <div className={styles.sliderTopD}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-Blockchain.png"
                  alt="github"
                  width="1458"
                  height="186"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={styles.sliderTopM}>
              <div className="imgWrapper">
                <Image
                  src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-Blockchain-mobile.png"
                  alt="github"
                  width="481"
                  height="153"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          {softTools ? (
            <>
              {" "}
              <div className={styles.toolscoverd}>
                <p className={styles.infop}>Wide Range Of Tools & Modules</p>
                <div className={styles.sliderTopD}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo-SDE.png"
                      alt="github"
                      width="1458"
                      height="186"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className={styles.sliderTopM}>
                  <div className="imgWrapper">
                    <Image
                      src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/TOOLS-SDE-mobile.png"
                      alt="github"
                      width="481"
                      height="153"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>{" "}
            </>
          ) : (
            <>
              {" "}
              {baFamilyTools ? (
                <div className={styles.toolscoverd}>
                  <p className={styles.infop}>Wide Range Of Tools & Modules</p>
                  <div className={styles.sliderTopD}>
                    <div className="imgWrapper">
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA+Family+Tools+Covered.png"
                        alt="github"
                        width="1458"
                        height="186"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className={styles.sliderTopM}>
                    <div className="imgWrapper">
                      <Image
                        src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/BA-Family-Tools-Covered-mobile.png"
                        alt="github"
                        width="481"
                        height="153"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {hidetools ? (
                    ""
                  ) : (
                    <div className={styles.toolscoverd}>
                      <p className={styles.infop}>
                        Wide Range Of Tools & Modules
                      </p>
                      <div className="imgWrapper">
                        <Image
                          src={mobile ? { mobImage } : { deskImg }}
                          alt="github"
                          width="1458"
                          height="186"
                        />
                      </div>
                      <div className={styles.sliderTopD}>
                        <div className="imgWrapper">
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Tools-Logo.png"
                            alt="github"
                            width="1458"
                            height="186"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className={styles.sliderTopM}>
                        <div className="imgWrapper">
                          <Image
                            src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/Mobile-Tools-Covered.png"
                            alt="github"
                            width="481"
                            height="153"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}{" "}
            </>
          )}
        </>
      )} */}
    </div>
  );
}

export default ToolsCovered;
