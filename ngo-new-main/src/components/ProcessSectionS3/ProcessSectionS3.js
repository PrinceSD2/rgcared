import React from 'react';

import Shape from '../../images/healthcare.svg';
import Shape2 from '../../images/process/process-right.png';
import Icon1 from '../../images/process/icon-1.svg';
import Icon2 from '../../images/process/icon-2.svg';
import Icon3 from '../../images/process/icon-3.svg';
import Image2 from '../../images/image-gallery/education.jpeg';
import heroVideo from '../../images/slider/cry-hero-video.mp4';

const ProcessSectionS3 = props => {
  return (
    <section className={'' + props.hclass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="content">
              <div className="section-title">
                <h2>
                  Get <span> Involved</span> Today!
                </h2>
                <p>
                  The future of a child is shaped by the opportunities they receive today. By supporting our cause, you are contributing to
                  building a brighter, more equitable future for thousands of underprivileged children across India. Let’s work together to
                  make sure that no child is left behind.
                </p>
              </div>
              <ul>
                <li>
                  <span className="num">1</span>
                  <div className="icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <h3>have to know about us</h3>
                </li>
                <li>
                  <span className="num">2</span>
                  <div className="icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <h3>start donate for our organization</h3>
                </li>
                <li>
                  <span className="num">3</span>
                  <div className="icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <h3>confirmation from our team</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="right-img">
              <img src={Image2} alt="" style={{ width: 700, height: 516 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSectionS3;
