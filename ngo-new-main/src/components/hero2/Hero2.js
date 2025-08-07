import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero4 from '../../images/slider/slide-1.jpg';
import hero5 from '../../images/slider/slide-3.jpg';


import shape1 from '../../images/healthcare.svg';
import shape2 from '../../images/slider/shape-9.svg';
import shape3 from '../../images/slider/shape-10.svg';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = (props) => {
    return (

        <section className="wpo-hero-slider-s2" >
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
                                    <span><img src={shape1} alt="" /> We can brighten every
                                        child's future.</span>
                                </div>
                                <div  className="slide-sub-title">
                                    <h2>Charities focused
                                        <span> education </span> <span className="text">help</span></h2>
                                </div>
                                <div  className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
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
                                <div className="shape">
                                    <img src={shape2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="shape">
                            <img src={shape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <span><img src={shape1} alt="" /> We are always open for
                                        children</span>
                                </div>
                                <div  className="slide-sub-title">
                                    <h2>Charities focused
                                        <span> education </span> <span className="text">help</span></h2>
                                </div>
                                <div  className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us</Link>
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
                                <div className="shape">
                                    <img src={shape2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="shape">
                            <img src={shape3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
           
                ...
            </Swiper>
        </section>
    )
}

export default Hero2;