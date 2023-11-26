import React from 'react';
import ProgressBar from '../../user/Progress';

const Navbaruser = () => {
  return (
    <>
    <header id="header1" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h4 className="logo me-auto">
          <a href="/">
            <span>
             Hii, Edgar!
            </span>
          <p id='namep'>pesalok</p>
          </a>
         
        </h4>

        <a href="#" className="get-started-btnuser">
         
        </a>
        
      </div>
      <div className='container62'>
        <ProgressBar />
        </div> 
    </header>
    </>
  );
};

export default Navbaruser;
