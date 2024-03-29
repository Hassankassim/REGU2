import React from 'react';

const CardWork = (props) => {
  return (
    <div className="col-sm center margint">
      <div className="custom-card">
        <div className="custom-content">
          <p className="custom-heading">{props.heading}</p>
          <p className="custom-para">
            <span className="center">
              <img width="90px" className="center" src={props.imgSrc} alt="" />
            </span>
            {props.description}
          </p>
         <a href={props.link}> <button className="custom-btn">{props.buttonText}</button></a>
        </div>
      </div>
    </div>
  );
};

export default CardWork;
