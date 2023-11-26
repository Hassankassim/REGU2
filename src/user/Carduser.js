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
        
        <p className="p-user">
        <img width={'50px'} src={image} />
          
        </p>
      </div>
    </div>
  );
};

export default CardUser;
