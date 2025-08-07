import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import Hero3 from '../../components/hero3/hero3';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import About3 from '../../components/about3/about3';
import ServiceSection4 from '../../components/ServiceSection4/ServiceSection4';
import ProcessSectionS3 from '../../components/ProcessSectionS3/ProcessSectionS3';
import CausesSection from '../../components/CausesSection/CausesSection';
import PartnerSectionS3 from '../../components/PartnerSectionS3/PartnerSectionS3';
import BecomeSectionS2 from '../../components/BecomeSectionS2/BecomeSectionS2';
import MapSection from '../../components/MapSection/MapSection';
import FooterS3 from '../../components/footerS3/FooterS3';
import Scrollbar from '../../components/scrollbar/scrollbar';
// import Logo from '../../images/logo.svg';
import Logo from '../../images/logo.png';
import ProgramsAndInitiatives from '../../components/ProgramsAndInitiatives/ProgramsAndInitiatives';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';
import AboutUs from '../../components/ngo-info/AboutUs';

const HomePage3 = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />\
      <Hero3 />
      <FeaturesSection />
      <AboutUs hclass={'about-section-s3 section-padding'} />
      <About3 hclass={'about-section-s3 section-padding'} />
      <ServiceSection4 hclass={'service-section-s5 section-padding'} />
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <ProgramsAndInitiatives hclass={'pt-0'} />
      </motion.div>
      <CausesSection hclass={'causes-section section-padding pt-0'} />
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <ProcessSectionS3 hclass={'process-section-s3 section-padding'} />
      </motion.div>
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <PartnerSectionS3 />
      </motion.div>
      <BecomeSectionS2 hclass={'become_volunteer become_volunteer-s2'} />
      <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
        <MapSection />
      </motion.div>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage3;
