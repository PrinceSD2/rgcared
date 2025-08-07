import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutS2 from '../../components/about2/about2';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSectionS3 from '../../components/PartnerSectionS3/PartnerSectionS3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import FooterS3 from '../../components/footerS3/FooterS3';
import OurMission from './OurMission';
import AboutUs from './AboutUs';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';
import Banner from '../../images/about/banner-4.png';
import { Element } from 'react-scroll'; // Import Element from react-scroll

const AboutPage = () => {
  const pageTitleStyle = {
    backgroundImage: `url(${Banner})`,
    zIndex: 'auto',
    marginTop: '0px',
  };

  return (
    <Fragment>
      <NavbarS3 hclass="wpo-site-header" Logo={Logo} />
      <PageTitle
        pageTitle="About Us"
        pagesub={
          <>
            Together, we can provide education and opportunities <br /> to underprivileged children, empowering them to reach <br />
            their full potential.
          </>
        }
      />
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <Element id="about-us">
          <AboutUs hclass="service-section-s3 section-padding" />
        </Element>
      </motion.div>
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <Element id="who-we-are">
          <AboutS2 hclass="service-section-s3 section-padding" />
        </Element>
      </motion.div>
      <Element id="our-mission-and-vision">
        <OurMission hclass="service-section-s3 section-padding" />
      </Element>
      <Element id="our-team">
        <TeamSection hclass="volunteer-section section-padding" />
      </Element>
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <Element id="partners-and-sponsors">
          <PartnerSectionS3 />
        </Element>
      </motion.div>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
