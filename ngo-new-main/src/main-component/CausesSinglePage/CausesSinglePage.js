import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import causes from '../../api/causes';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import shape from '../../images/cause-single/shape.svg';
import Icon from '../../images/cause-single/icon.svg';
import DonationForm from './DonationForm';
import SidebarSection from './sidebarSection';
import simg1 from '../../images/image-gallery/1.jpg';
import simg2 from '../../images/image-gallery/2.jpg';
import simg3 from '../../images/image-gallery/3.jpg';
import simg4 from '../../images/image-gallery/4.jpg';
import Accordion from '../../components/Accordion/Accordion';

const CausesSinglePage = () => {
  const { slug } = useParams();
  const CausesSingle = causes.find(item => item.slug === slug);

  return (
    <Fragment>
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={CausesSingle.title} />
      <div className="case-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">
              <div className="case-details-left">
                <div className="image">
                  <img src={CausesSingle.CSimg} alt="" />
                  <div className="shape">
                    <img src={shape} alt="" />
                  </div>
                </div>
                <div className="case-details-content">
                  <h2>{CausesSingle.title}</h2>
                  <p>
                    Lorem Ipsum is simply dummy a of the printing and type setting industry Loreaim Ipsum has been the industry's standard
                    dummy
                  </p>
                  <h3>This Poor it Important So Support</h3>
                  <div className="notice">
                    <p>
                      <span>Notice:</span> Test mode is enabled. While in test mode no live donations are processed.
                    </p>
                    <div className="icon">
                      <img src={Icon} alt="" />
                    </div>
                  </div>
                  <h4>Your Donation:</h4>
                  <DonationForm />
                </div>
                <div className="image-gallery">
                  <h3>Donation Gallery:</h3>
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
                </div>
                <Accordion />
              </div>
            </div>
            <div className="col col-lg-4 col-12">
              <SidebarSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CausesSinglePage;
