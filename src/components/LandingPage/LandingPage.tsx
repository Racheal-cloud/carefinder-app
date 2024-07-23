import LeftSide from "./LeftSide/LeftSide";
// import RightAligned from "./RightSide/RightSide";
import Offers from "./PageServices/Offers";
import React from "react";
import LandingHeader from "./LandingHeader/LandingList";
// import Footer from "../FooterPage/Footer";
// import Testimonials from "./PageTestimonials/Testimonials";
// import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className="w-full" id="landing__page">
      <LandingHeader />
      <LeftSide />
      {/* <RightAligned /> */}
      <Offers />
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default LandingPage;