import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/Services';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shape from '../../images/healthcare.svg';
import Shape4 from '../../images/service/shape-4.png';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';

const ServiceSection4 = props => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section className={'' + props.hclass} style={{ padding: '40px 0px' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="section-title">
              <span>
                {/* <img src={Shape} alt="" /> */}
                {/* Together, We Can Change Lives Forever. */}
                Empowering minds, inspiring growth, and fostering a lifelong love for learning
              </span>
              <h2>
                {/* how we connect with people <span>helping</span> */}
                Our <span>Values</span>
              </h2>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            {/* <div className="service-btn">
              <Link onClick={ClickHandler} to="/service" className="theme-btn">
                All Services
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <Slider {...settings} className="service-slider-s4">
        {/* {Services.slice(9, 14).map((service, index) => ( */}
        {Services.map((service, index) => (
          <div className="service-card-s2" key={index}>
            <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
              <div className="icon">
                <img src={service.image} alt="" style={{ width: '344px', height: '226px' }} />
              </div>
              <div className="content" style={{ paddingTop: '85px' }}>
                <h2>
                  {/* <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}> */}
                  {service.title}
                  {/* </Link> */}
                </h2>
                <p style={{ minHeight: '150px' }}>{service.description}</p>
                <div className="services-btn">
                  {/* <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                  See Details{' '}
                </Link> */}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
      <div className="shape">
        <img src={Shape4} alt="" />
      </div>
    </section>
  );
};

export default ServiceSection4;
