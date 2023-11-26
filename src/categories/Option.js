import React from 'react';

const Option = () => {
  return (
    <div className="option-cards">
      <div className="option-card option-red">
        <p className="option-tip">Financial allerts</p>
        <p className="option-second-text"> Dealing with tax-related matters</p>
      </div>
      <div className="option-card option-blue">
        <p className="option-tip">Regulation change</p>
        <p className="option-second-text">From Business Registration and Licensing Agency (BRELA)</p>
      </div>
      <div className="option-card option-green">
        <p className="option-tip">Taxation and licences</p>
        <p className="option-second-text">From Capital Markets and Securities Authority (CMSA)</p>
      </div>
    </div>
  );
};

export default Option;
