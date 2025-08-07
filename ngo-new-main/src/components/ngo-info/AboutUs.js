import React from 'react';
import Slider from 'react-slick';
import { about_us_points } from '../../main-component/AboutPage/AboutData';

const RGCareLink = () => (
  <a className="link-lower-text" href={process.env.REACT_APP_BASE_URL || 'https://www.rgcare.in'} target="_blank" rel="noopener noreferrer">
    www.rgcare.in
  </a>
);
const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
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
    <section className="causes-section-s3 custom-cause-container section-padding ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="section-title">
              <span> Transforming Lives with Compassion and Action.</span>

              <h2>
                Why <span>RG</span> Care?
              </h2>
              <p>
                The RG Care Foundation, accessible at <RGCareLink />, is a non-governmental organization (NGO) dedicated to enhancing the
                quality of life for underprivileged communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings} className="causes-slider-s2">
        {about_us_points.map(point => (
          <div className="causes-card cause-custom-min-height" key={point.id}>
            <div className="text">
              <p key={point.id}>
                <h2 className="point-img">
                  {point.img} {point.title}
                </h2>
                {point.Des}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AboutUs;
