import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import BecomeVolunteerForm from '../../components/BecomeVolunteerForm/BecomeVolunteerForm';
import FooterS3 from '../../components/footerS3/FooterS3';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
// import Bgimg from '../../images/volunteer.jpg';
// import Bgimg from '../../images/volunteer/1.jpeg';
import Bgimg from '../../images/banners/img-13.jpg';

import BannerImg from '../../images/banners/img-13.jpg';

const HomePage4 = () => {
  const pageTitleStyle = {
    backgroundImage: `url(${BannerImg})`,
    zIndex: 1,
  };
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle="Become a Volunteer"
        pagesub={
          <>
            Join Us in Empowering Underprivileged Children <br />
            Through Education.
          </>
        }
        pageTitleStyle={pageTitleStyle}
      />
      <div className="volunteer-area">
        <div className="volunteer-wrap">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-12 col-12">
                <div className="section-title">
                  <span style={{ paddingBottom: 30 }}>Volunteer with Us - Make a Difference</span>
                  <p>
                    Become a volunteer and directly impact the lives of children in need. Whether it’s teaching, mentoring, or supporting
                    local programs, your time and skills are invaluable. <b>Join Our Volunteer Network Today</b>.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="volunteer-item">
                  <div className="volunteer-img-wrap">
                    <div className="volunter-img">
                      <img src={Bgimg} alt="" />
                    </div>
                  </div>
                </div>
                <div className="volunteer-contact">
                  <div className="volunteer-contact-form">
                    <h2>Become a Volunteer</h2>
                    <BecomeVolunteerForm />
                  </div>
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
export default HomePage4;
