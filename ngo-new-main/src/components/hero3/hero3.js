import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../ModalVideo/VideoModal';

import shape from '../../images/healthcare.svg';
import Img1 from '../../images/slider/img-1.jpg';
import shape7 from '../../images/f-shape7.png';
import shape3 from '../../images/slider/shape-3.svg';
import shape9 from '../../images/f-shape9.png';
import shapeline from '../../images/slider/img-shape2.png';
import heroVideo from '../../images/slider/cry-hero-video.mp4';
import placeholderImage from '../../images/about/video-3.png';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const hero3 = () => {
  return (
    <section className="static-hero">
      <div className="container">
        <div className="wraper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 ">
              <div className="slide-sub-title">
                <h2>
                  <span style={{ color: ' #FBAD17', fontWeight: 800 }}>Reddington Global Care Foundation </span>
                  to Educate Underprivileged Children of India
                  {/* <br /> */}
                  {/* <span className="text"> Children of India</span> */}
                </h2>

                <Link onClick={ClickHandler} className="theme-btn" to="/donate">
                  Yes, I want to help!
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="hero-image">
                <video src={heroVideo} autoPlay muted loop playsInline poster={placeholderImage} />
                {/* <VideoModal /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-2">
        <img src={shape3} alt="" />
      </div>
    </section>
  );
};

export default hero3;
