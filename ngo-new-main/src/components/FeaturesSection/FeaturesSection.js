import React from 'react';
import img1 from '../../images/healthcare.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';
const FeaturesSection = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="features-section">
      <div className="container">
        <div className=" wraper">
          <div className="row">
            {/* Feature Card 1 */}
            <div className="col-lg-4 col-md-6 col-12">
              <Link onClick={ClickHandler} to={`/get-involved/become-volunteer`}>
                <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                  <div className="feature-card">
                    <div className="content">
                      <h2>
                        {/* <img src={img1} alt="Healthcare" /> */}
                        Volunteer With Us
                      </h2>
                      <h3>Join Our Volunteer Network Today.</h3>
                    </div>
                    <div className="icon">
                      <i className="flaticon-heart"></i>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Feature Card 2 */}
            <div className="col-lg-4 col-md-6 col-12">
              <Link onClick={ClickHandler} to={`/about-us`}>
                <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                  <div className="feature-card">
                    <div className="content">
                      <h2>
                        {/* <img src={img1} alt="Healthcare" /> */}
                        Spread Awareness
                      </h2>
                      <h3>Be a Voice for the Voiceless.</h3>
                    </div>
                    <div className="icon">
                      <i className="flaticon-shield"></i>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="col-lg-4 col-md-6 col-12">
              <Link onClick={ClickHandler} to={`/contact`}>
                <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                  <div className="feature-card">
                    <div className="content">
                      <h2>
                        {/* <img src={img1} alt="Healthcare" /> */}
                        Partner With Us
                      </h2>
                      <h3>Collaborate with Us for Change.</h3>
                    </div>
                    <div className="icon">
                      <i className="flaticon-handshake"></i>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
