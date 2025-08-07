import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Error from '../../components/404/404';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import FooterS3 from '../../components/footerS3/FooterS3';
const ErrorPage = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'404'} pagesub={'404 error'} />
      <Error />
      <FooterS3 />

      <Scrollbar />
    </Fragment>
  );
};
export default ErrorPage;
