import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
const Footer = dynamic(() => import("../../components/Footer/Footer"));
  import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";
 import dynamic from "next/dynamic";
const BottomBar = dynamic(() =>
  import("../../components/WebPage/BottomBar/BottomBar")
);
const Button = dynamic(() => import("../../components/Global/Button/Button"));
const GoogleReview = dynamic(() =>
  import("../../components/SuccessStory/GoogleReview/GoogleReview")
);
const LinkedinReview = dynamic(() =>
  import("../../components/SuccessStory/LinkedinReview/LinkedinReview")
);
const TrainerSection = dynamic(() =>
  import("../../components/SuccessStory/TrainerSection/TrainerSection")
);
const ReviewCourse = dynamic(() =>
  import("../../components/SuccessStory/ReviewCourse/ReviewCourse")
);
const ReviewSwitch = dynamic(() =>
  import("../../components/SuccessStory/ReviewSwitch/ReviewSwitch")
);
const VideoReview = dynamic(() =>
  import("../../components/SuccessStory/VideoReview/VideoReview")
);
const Testimonial = dynamic(() =>
  import("../../components/HomePage/Testimonial/Testimonial")
);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Success Story</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay - The best online professional learning platform, has received numerous positive student reviews. Gain knowledge and make sound decisions. Join today!"
        />
        <link rel="canonical" href="https://www.learnbay.co/reviews" />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
      </Head>
      <main>
        {" "}
        <Navbar popup={true} dataScienceCounselling={true} radio={true} />
        <TrainerSection idss="bfl64ANfSV0" />
        <LinkedinReview />
        <GoogleReview />
        <VideoReview idss="bfl64ANfSV0" />
        <ReviewCourse />
        <ReviewSwitch />
        <Testimonial
          redirectDS={true}
          heading="Alumni Review"
          Testimonial={DataScienceCourseData[0].testimonial}
        />
        <Footer />
        <BottomBar radio={true} />
      </main>
    </div>
  );
}