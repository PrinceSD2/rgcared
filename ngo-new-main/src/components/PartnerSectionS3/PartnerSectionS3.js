import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pimg1 from '../../images/partners/image-2.png';
import pimg2 from '../../images/partners/image-1.png';
const partners = [
  {
    id: '01',
    pimg: pimg1,
  },
  {
    id: '02',
    pimg: pimg2,
  },
];

const PartnerSectionS3 = props => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="partners-section-s3" id={props.id} ref={props.secRef}>
      <ul className="partners-slider-s3">
        <Slider {...settings}>
          {partners.map((partner, pitem) => (
            <li className="grid" key={pitem}>
              <img src={partner.pimg} alt="" />
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
};

export default PartnerSectionS3;
