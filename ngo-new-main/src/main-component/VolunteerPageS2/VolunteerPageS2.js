import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import TeamSectionS4 from '../../components/TeamSectionS4/TeamSectionS4';
import VolunteerForm from '../../components/VolunteerForm/VolunteerForm';
import FooterS3 from '../../components/footerS3/FooterS3';
import BecomeVolunteerForm from '../../components/BecomeVolunteerForm/BecomeVolunteerForm';

const VolunteerPageS2 = () => {
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Volunteer'} />
      <section className="volunteer-section-s2 volunteer-section-s4 section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12 col-12">
              <div className="section-title">
                <span style={{ paddingBottom: 30 }}>Volunteer with Us - Make a Difference</span>
                <p>
                  At our NGO, we believe that <b>together, we can make a difference</b>. By volunteering with us, you will play an important
                  role in helping children through education and contributing to brighter futures for those in need. Our volunteer
                  opportunities are perfect for people who are passionate about education and social change, and want to make a positive
                  impact.
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <div className="title">
                <h2>Fill Up The Form</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
              </div>
              <BecomeVolunteerForm />
            </div>
          </div>
        </div>
      </section>
      <TeamSectionS4 hclass={'volunteer-section-s2 volunteer-section-s4 section-padding'} />
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default VolunteerPageS2;
