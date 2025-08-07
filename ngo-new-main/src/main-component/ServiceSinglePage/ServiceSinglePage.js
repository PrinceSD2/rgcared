import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Accordion from '../../components/Accordion/Accordion';
import { useParams } from 'react-router-dom';
import FundSidebar from './fund-sidebar';
import logo from '../../images/logo.png';
import VideoModal from '../../components/ModalVideo/VideoModal';
import FooterS3 from '../../components/footerS3/FooterS3';
// import donationImg from '../../images/service-single/donation.jpg';
import Bgimg from '../../images/volunteer/1.jpeg';
import whydonate from '../../images/why-donate.jpg';
import BannerImg from '../../images/banner-all.jpg';
// import Banner from '../../images/banners/img-3.jpg';
import Banner from '../../images/banners/img-15-1.jpg';

const ServiceSinglePage = props => {
  // const { slug } = useParams()

  // const serviceDetails = Services.find(item => item.slug === slug)
  const pageTitleStyle = {
    backgroundImage: `url(${Banner})`,
    zIndex: 'auto',
    // marginTop: '0px',
    // minHeight: '534px',
  };

  // margin-top: 67px;
  //   min-height: 227px;
  return (
    <Fragment>
      <NavbarS3 Logo={logo} hclass={'wpo-site-header'} />
      <PageTitle
        pageTitle="Fundraising"
        pagesub={
          <>
            Together, we can break the cycle of poverty <br />
            and give them a brighter future.
          </>
        }
        pageTitleStyle={pageTitleStyle}
      />
      <section className="service-single-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-lg-2">
              <div className="service-single-wrap">
                <div className="title-image">
                  <img src={BannerImg} alt="" />
                </div>
                <div id="fund-raised">
                  <h2>Fund Raised & Donation</h2>
                  <p>
                    Your generosity helps us create a brighter future for children in need. Every donation, no matter the size, makes a
                    significant impact in providing education, resources, and opportunities to underprivileged children. With your support,
                    we are able to fund essential programs that break the cycle of poverty and empower the next generation. Together, we can
                    build a world where every child has the chance to thrive. Thank you for being a part of our mission!
                  </p>
                </div>
                <div id="join-circle">
                  <h3>Join Our Circle of Giving</h3>
                  <p>
                    When you donate to our cause, you’re joining a community of like-minded individuals who are dedicated to creating
                    lasting change. Your support doesn’t just help one child; it helps build a stronger future for generations to come. Be a
                    part of this transformative journey, and help us create brighter futures together.
                  </p>
                </div>

                <div className="video-wrap" id="why-donate">
                  <div className="video-img">
                    <img src={whydonate} alt="" />
                    {/* <div className="video-holder">
                      <VideoModal />
                    </div> */}
                  </div>
                  <div className="video-content">
                    <h2>Why Donate ?</h2>
                    <p>
                      Education is the foundation for success, and every child deserves the chance to thrive. By contributing to our cause,
                      you're investing in the future of children who otherwise might not have access to the education they need to succeed.
                      Together, we can create a more equitable world where all children have the chance to achieve their dreams.
                    </p>
                    <ul>
                      <li>Support Meaningful Change Beyond Words</li>
                      <li>Maximize the Reach of Your Contribution</li>
                      <li>Empower Education for Every Child</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Your generous donations are not just a gift; they are an investment in the future of children who deserve a chance to
                  succeed. With every contribution, you are helping us provide quality education, nurture young minds, and create
                  opportunities for children to break free from the cycle of poverty. Your support allows us to expand our programs, offer
                  scholarships, and provide the essential resources that empower children to dream big and achieve their full potential.
                  Together, we can build a brighter, more equitable future for every child.
                </p>
                <h3 className="quate">
                  Every donation is a step toward breaking the cycle of poverty and creating opportunities for children to thrive. Together,
                  we can turn hope into reality.
                </h3>

                {/* <div className="image-gallery">
                  <h2>Eligibility checklist :</h2>
                  <ul>
                    <li>
                      <img src={simg1} alt="" />
                    </li>
                    <li>
                      <img src={simg2} alt="" />
                    </li>
                    <li>
                      <img src={simg3} alt="" />
                    </li>
                    <li>
                      <img src={simg4} alt="" />
                    </li>
                  </ul>
                </div> */}
                {/* <Accordion /> */}
              </div>
            </div>
            <div className="col-lg-4 col-12 order-lg-1">
              <FundSidebar />
            </div>
          </div>
        </div>
      </section>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
