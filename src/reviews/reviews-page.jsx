import React from "react";
import Review from "./review";
import "./review.styles.scss";

const ReviewsPage = () => {
  return (
    <main className="review">
      <section className="review__container ">
        <div className="review__title">
          <h2>Our reviews</h2>
          <div className="review__underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
};

export default ReviewsPage;
