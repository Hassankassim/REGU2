import React, { useEffect } from 'react';
import Carduser from '../user/Carduser';
import image1 from '../assets/img/vcard icon2.png';

function Count() {
  return (
    <section id="counts" className="counts section-bg margintt">
      <div className="container margint">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image1} title="Roadmap" />
            </span>
            <p>Roadmap</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image1} title="Tax/License" />
            </span>
            <p>Tax/License</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser title="Economy Bot" />
            </span>
            <p>Economy Bot</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser title="Compliances checklists" />
            </span>
            <p>Compliances checklists</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
