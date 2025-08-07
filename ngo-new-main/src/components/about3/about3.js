import React, { useState } from 'react';
import VideoModal from '../ModalVideo/VideoModal';
import { Link } from 'react-router-dom';
import missionIMG from '../../images/about/mission-2.jpg';
import visionIMG from '../../images/about/vision.jpg';
import Shape6 from '../../images/about/shape13.png';
import Image1 from '../../images/gallery/image-6.jpeg';
import Image2 from '../../images/gallery/image-9.jpeg';
import Image3 from '../../images/gallery/image-7.jpeg';
import excellenceIMG from '../../images/about/mission.jpg';

const AboutS3 = props => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = index => {
    setActiveTab(index);
  };
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={'' + props.hclass}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-image">
              <div className="image1">
                <img src={Image3} alt="" />
              </div>
              <div className="image2">
                <img src={Image1} alt="" />
                <div className="shape">
                  <img src={Shape6} alt="" />
                </div>
              </div>
              <div className="image3">
                <img src={Image2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="right-content">
              <h3>
                Giving <span> education </span> is the best gift ever
              </h3>
              <p>
                We empower local nonprofits by providing them with the funding, tools, training, and support they need to thrive and create
                a greater impact in their communities.
              </p>

              <div className="tab">
                <div className="tab">
                  <button className={activeTab === 0 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(0)}>
                    Our Mission
                  </button>
                  <button className={activeTab === 1 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(1)}>
                    Our Vission
                  </button>
                  <button className={activeTab === 2 ? 'tablinks active' : 'tablinks'} onClick={() => handleTabClick(2)}>
                    Excellence
                  </button>
                </div>
                <div className={activeTab === 0 ? ' tabcontent active' : 'hidden'}>
                  <div className="tab-wrap">
                    <div className="left">
                      <img src={missionIMG} alt="" />
                      {/* <VideoModal /> */}
                    </div>
                    <div className="right">
                      <ul>
                        {/* <li>
                          <i className="flaticon-check"></i> Providing Quality Education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Empowering Through Education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Equal Access for All
                        </li> */}
                        <li>
                          <i className="flaticon-check"></i>Educate and empower marginalized youth
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Universal health access
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Build skills and sustainable livelihoods
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to={`/about-us#our-mission-and-vision`}>
                            <i className="flaticon-next"></i> Read More
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={activeTab === 1 ? ' tabcontent active' : 'hidden'}>
                  <div className="tab-wrap">
                    <div className="left">
                      <img src={visionIMG} alt="" />
                      {/* <VideoModal /> */}
                    </div>
                    <div className="right">
                      <ul>
                        {/* <li>
                          <i className="flaticon-check"></i> Education as a Right
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Inclusive Education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Unlocking Potential
                        </li> */}
                        <li>
                          <i className="flaticon-check"></i>Dignity through Education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Health for All
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Empowered Communities
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to={`/about-us#our-mission-and-vision`}>
                            <i className="flaticon-next"></i> Read More
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={activeTab === 2 ? ' tabcontent active' : 'hidden'}>
                  <div className="tab-wrap">
                    <div className="left">
                      <img src={excellenceIMG} alt="" />
                      {/* <VideoModal /> */}
                    </div>
                    <div className="right">
                      <ul>
                        {/* <li>
                          <i className="flaticon-check"></i>Committed to excellence in education.
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Continuously improving educational quality.
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Boosting resources and support for children.
                        </li> */}
                        <li>
                          <i className="flaticon-check"></i>Excellence in transformative education
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Healthcare access par excellence
                        </li>
                        <li>
                          <i className="flaticon-check"></i>Community development through excellence
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to={`/about-us#our-mission-and-vision`}>
                            <i className="flaticon-next"></i> Read More
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dog-sidimg">
        <img src={Image1} alt="" />
      </div>
    </section>
  );
};

export default AboutS3;
