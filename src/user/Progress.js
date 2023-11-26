import React from 'react';
import './Progress.css';

const ProgressBar = ({ percentage }) => {
  const progressStyle = {
    width: `70%`,
  };

  return (
<>
<p className='percentage'>sucessful</p>
    <div className="progress-bar">
    <span className="percentage">70%</span>
      <div className="progress" style={progressStyle}></div>
      
    </div>
    </>
  );
};

export default ProgressBar;
