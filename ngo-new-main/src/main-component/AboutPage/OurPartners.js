import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import FooterS3 from '../../components/footerS3/FooterS3';

const OurPartners = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={'Partner with Us'}
        pagesub={
          <>
            Transform the Future of Underprivileged Children <br />
            Through Education.
          </>
        }
      />
      <div className="volunteer-area">
        <div className="volunteer-wrap">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-12 col-12">
                <div className="section-title">
                  <span style={{ paddingBottom: 30 }}>Collaborate with Us for Change</span>
                  <p>
                    If you represent an organization, school, or business, partner with us to create a larger impact. Together, we can
                    provide educational resources and create sustainable solutions for children in need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default OurPartners;
