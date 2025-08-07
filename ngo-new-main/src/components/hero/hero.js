import React from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import hero4 from '../../images/slider/slide-1.jpg';
import hero5 from '../../images/slider/slide-2.jpg';

import shape1 from '../../images/slider/shape-1.svg';
import shape2 from '../../images/slider/shape-2.svg';
import shape3 from '../../images/slider/shape-3.svg';
import shape4 from '../../images/slider/shape-4.png';
import shape5 from '../../images/slider/shape-5.svg';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Hero = props => {
  return (
    <section className={'' + props.hclass}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1800}
        parallax={true}
        navigation
      >
        <SwiperSlide>
          <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
            <div className="container-fluid">
              <div className="slide-content">
                <div className="slide-title">
                  <span>We can brighten every child's future.</span>
                </div>
                <div className="slide-sub-title">
                  <h2>
                    Give support to <span>poverties</span> & <span className="text">Old </span>
                    non profit Care
                  </h2>
                </div>
                <div data-swiper-parallax="500" className="slide-btns">
                  <Link onClick={ClickHandler} to="/about" className="theme-btn">
                    About Us
                  </Link>
                  <div className="call">
                    <div className="icon">
                      <i className="flaticon-phone"></i>
                    </div>
                    <div className="text">
                      <h3>Call Us Now</h3>
                      <span>+025 757 576 560</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-shape">
              <img src={shape1} alt="" />
            </div>
            <div className="shape-1">
              <img src={shape2} alt="" />
            </div>
            <div className="shape-2">
              <img src={shape3} alt="" />
            </div>
            <div className="shape-3">
              <img src={shape4} alt="" />
            </div>
            <div className="shape-4">
              <img src={shape5} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
            <div className="container-fluid">
              <div className="slide-content">
                <div className="slide-title">
                  <span>We are always open for children</span>
                </div>
                <div className="slide-sub-title">
                  <h2>
                    Give support to <span>poverties</span> & <span className="text">Old </span>
                    non profit Care
                  </h2>
                </div>
                <div data-swiper-parallax="500" className="slide-btns">
                  <Link onClick={ClickHandler} to="/about" className="theme-btn">
                    About Us
                  </Link>
                  <div className="call">
                    <div className="icon">
                      <i className="flaticon-phone"></i>
                    </div>
                    <div className="text">
                      <h3>Call Us Now</h3>
                      <span>+025 757 576 560</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-shape">
              <img src={shape1} alt="" />
            </div>
            <div className="shape-1">
              <img src={shape2} alt="" />
            </div>
            <div className="shape-2">
              <img src={shape3} alt="" />
            </div>
            <div className="shape-3">
              <img src={shape4} alt="" />
            </div>
            <div className="shape-4">
              <img src={shape5} alt="" />
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Hero;
