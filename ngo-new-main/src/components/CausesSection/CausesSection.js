import React from 'react';
import causes from '../../api/causes';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import shape from '../../images/causes/shape.svg';
import shape2 from '../../images/causes/bg.jpg';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';

const CausesSection = props => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={'' + props.hclass}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="section-title text-center" style={{ paddingTop: '40px' }}>
              <span>Our Success Stories</span>
              <h2>
                When children are <span>educated</span>, the world is transformed
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="causes-slider">
        <Slider {...settings}>
          {causes.slice(0, 6).map((causesData, item) => (
            <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
              <div className="causes-card" key={'causes-card' + item}>
                <div className="image">
                  <img src={causesData.Cimg} alt="" style={{ width: '354px', height: '257px' }} />
                </div>
                <div className="text">
                  {/* <h2>{causesData.title}</h2> */}
                  <h2>
                    <Link onClick={ClickHandler} to="/impact/success-stories">
                      {causesData.title}
                    </Link>
                  </h2>

                  <p>{causesData.docomunt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
      <div className="shape">
        <img src={shape} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default CausesSection;
