// TestimonialItem.js
import React from 'react';

const TestimonialItem = (props) => {
  const { imgSrc, name, occupation, quote } = props;

  return (
    <div className="swiper-slide">
      <div className="testimonial-wrap">
        <div className="testimonial-item">
          <img src={imgSrc} className="testimonial-img" alt={name} />
          <h3>{name}</h3>
          <h4>{occupation}</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {quote}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
