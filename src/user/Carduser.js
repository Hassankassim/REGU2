import React from 'react';
import './Carduser.css';
import image1 from '../assets/img/vcard icon2.png'

const CardUser = ({ title, image }) => {
  return (
    <div className="card-user">
       
      <div className="img-user">
        <div className="save-user">
          {/* Your SVG code */}
        </div>
      </div>
     
      <div className="text-user">
        <p className="h3-user">{title}</p>
        <div className="p-user">
          {/* Displaying the image */}
          <img width={'100px'} src={image} />
        </div>
      </div>
    </div>
  );
};

export default CardUser;
