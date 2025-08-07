import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Contactpage from '../../components/Contactpage/Contactpage';
import Scrollbar from '../../components/scrollbar/scrollbar';
import FooterS3 from '../../components/footerS3/FooterS3';
// import BannerImg from '../../images/image-gallery/contact-us.jpeg';
import BannerImg from '../../images/banners/img-9-1.png';

import Logo from '../../images/logo.png';
const ContactPage = () => {
  const pageTitleStyle = {
    backgroundImage: `url(${BannerImg})`,
    zIndex: 1,
  };
  const breadcrumbStyle = {
    textAlign: 'left',
  };
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle="Contact Us"
        pagesub={
          <>
            <span style={{ color: '#ffffff' }}>
              {' '}
              Together, let's create a future
              <br /> where every child has the <br />
              chance to succeed through education
            </span>
          </>
        }
        pageTitleStyle={pageTitleStyle}
        breadcrumbStyle={breadcrumbStyle}
      />
      <Contactpage />
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default ContactPage;
