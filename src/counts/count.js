import React, { useEffect } from 'react';
import Carduser from '../user/Carduser'
const Count = () => {
  
  return (
    <section id="counts" className="counts section-bg margintt">
      <div className="container margint">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span
             
              className="purecounter"
            ><Carduser /></span>
            <p>Roadmap</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
         
              className="purecounter"
            ><Carduser details="" /></span>
            <p>Tax/License</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
         
              className="purecounter"
            > <Carduser /></span>
            <p>Economy Bot</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span
             
              className="purecounter"
            >
              <Carduser />
            </span>
            <p>Compliances checklists</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
