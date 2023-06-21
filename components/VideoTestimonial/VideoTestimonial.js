import dynamic from "next/dynamic";
import styles from "./VideoTestimonial.module.css";
import { dsReview } from "./VideoTestimonialData";

import { useState } from "react";
const VideoTestimonialSwiper = dynamic(() =>
  import("./VideoTestimonialSwiper")
);

const VideoTestimonial = ({ event }) => {
  const [review, setReview] = useState(dsReview);

  // const [video, setVideo] = useState(false);
  // const videoSHow = () => {
  //   setVideo(true);
  // };
  return (
    <>
      {/* <VideoPopup triggers={video} setTriggers={setVideo} ids="iT54dOHPQpU" /> */}

      <div>
        <div className={styles.headings}>
          <h4>Learners Reviews</h4>
          <VideoTestimonialSwiper review={review} />
        </div>
      </div>
    </>
  );
};

export default VideoTestimonial;
