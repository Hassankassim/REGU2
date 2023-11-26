import React, { useEffect } from 'react';
import Carduser from '../user/Carduser';
import image1 from '../assets/img/vcard icon2.png';
import image2 from '../assets/img/icons8-chat-bot-96.png';
import image3 from '../assets/img/license.png';
import image4 from '../assets/img/icons8-rules-100.png';

function Count() {
  return (
    <section id="counts" className="counts section-bg margintt">
      <div className="container margint">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image1}  />
            </span>
            <p>Roadmap</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image2} />
            </span>
            <p>Tax/License</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image3}  />
            </span>
            <p>Economy Bot</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span className="purecounter">
              <Carduser image={image4}  />
            </span>
            <p>Compliances checklists</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Count;
