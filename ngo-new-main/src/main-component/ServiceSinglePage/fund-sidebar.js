import React from 'react';
import { Link } from 'react-router-dom';
import Image7 from '../../images/image-gallery/image-7.jpg';
import integrity from '../../images/image-gallery/integrity.avif';
import empthy from '../../images/image-gallery/empthy.jpeg';
const FundSidebar = props => {
  const ClickHandler = divID => {
    const targetSection = document.getElementById(divID);
    if (targetSection) {
      const position = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position - 190,
        behavior: 'smooth',
      });
    }
  };
  const fundTabs = [
    {
      id: 1,
      image: Image7,
      icon: 'flaticon-fund',
      title: 'Fund Raised & Donation',
      divID: 'fund-raised',
    },
    {
      id: 2,
      image: empthy,
      icon: 'flaticon-first-aid-kit',
      title: 'Join Our Circle of Giving',
      divID: 'join-circle',
    },
    {
      id: 3,
      image: integrity,
      icon: 'flaticon-charity',
      title: 'Why Donate ?',
      divID: 'why-donate',
    },
  ];

  return (
    <div className="service-sidebar">
      <div className="service-catagory">
        <ul>
          {fundTabs.slice(0, 5).map((Service, item) => (
            <li key={item}>
              <Link onClick={() => ClickHandler(Service.divID)} to="#">
                <i className={Service.icon}></i>
                {Service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-info">
        <div className="icon">
          <i className="flaticon-phone-call"></i>
        </div>
        <h2>Please contact us for further information</h2>
        {/* <span>Call anytime</span> */}
        <div className="num">
          <span>+919220815624</span>
        </div>
      </div>
    </div>
  );
};

export default FundSidebar;
