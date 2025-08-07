import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../../images/up-arrow1.svg';
import Icon1 from '../../images/healthcare-icon1.svg';
import Icon2 from '../../images/healthcare-icon2.svg';
import Shape from '../../images/curved_shape2.svg';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';

const BecomeSection = props => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={'' + props.hclass}>
      <div className="left-content">
        <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
          <div className="icon">
            <img src={Icon1} alt="" />
          </div>
          <h2>Become an volunteer?</h2>
          <Link onClick={ClickHandler} to="/contact">
            Contact With us <img src={Arrow} alt="" />
          </Link>
        </motion.div>
      </div>

      <div className="right-content">
        <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
          <div className="icon">
            <img src={Icon2} alt="" />
          </div>
          <h2>Make donation to us?</h2>
          <Link onClick={ClickHandler} to="/donate">
            donation <img src={Arrow} alt="" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeSection;
