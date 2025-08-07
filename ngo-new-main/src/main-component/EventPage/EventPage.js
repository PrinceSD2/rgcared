import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import EventSectionS2 from '../../components/EventSectionS2/EventSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';

const EventPage = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={'Events'}
        pagesub={
          <>
            Be part of our efforts to provide education
            <br />
            and transform lives through our events.
          </>
        }
      />
      <EventSectionS2 />

      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default EventPage;
