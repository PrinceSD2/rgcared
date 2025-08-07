import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import TeamSectionS3 from '../../components/TeamSectionS3/TeamSectionS3';
import FooterS3 from '../../components/footerS3/FooterS3';

const VolunteerPage = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Volunteer'} />
      <TeamSectionS3 hclass={'volunteer-section volunteer-section-s3 section-padding'} />
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default VolunteerPage;
