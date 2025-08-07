import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const HeaderTopbarS3 = () => {
  return (
    <div className="topbar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            {/* <Marquee> */}
            <ul className="contact-info">
              <li>
                <i className="ti-email"></i>
                <span>info@rgcare.in</span>
              </li>
              <li>
                <a href="tel:+919220815624">
                <i className="flaticon-phone"></i>
                <span>+91</span>
                 </a> 
              </li>
            </ul>
            {/* </Marquee> */}
          </div>
          <div className="col-lg-6 col-12">
            {/* <Marquee> */}
            <div className="contact-into">
              <ul className="social-media">
                {/* <li>
                  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://in.linkedin.com/company/immergixthefuture" target="_blank" rel="noopener noreferrer">
                    <i className="flaticon-linkedin"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="flaticon-camera"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a href="https://vimeo.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <i className="flaticon-vimeo"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbarS3;
