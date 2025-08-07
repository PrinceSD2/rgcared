import React from 'react';
// import Logo from '../../images/logo.svg';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Midbar = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="midbar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-12">
            <Link onClick={ClickHandler} to="/" className="logo-mid">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="col-lg-9 col-12">
            <ul>
              <li>
                <div className="icon">
                  <i className="flaticon-clock"></i>
                </div>
                <div className="text">
                  <h3>Opening Houres</h3>
                  <span>Mon _ Sat: 9.00 to 18.00</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fi flaticon-home-address"></i>
                </div>
                <div className="text">
                  <h3>Our Address</h3>
                  <span>Bowery St, New York, USA</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="flaticon-phone-1"></i>
                </div>
                <div className="text">
                  <h3>Contact Us</h3>
                  <span>(671) 555-0110</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midbar;
