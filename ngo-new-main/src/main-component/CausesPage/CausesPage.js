import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.png';
import causes from '../../api/causes';
import FooterS3 from '../../components/footerS3/FooterS3';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';
import Banner from '../../images/success_stories_2.jpg';

const CausesPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const pageTitleStyle = {
    backgroundImage: `url(${Banner})`,
    zIndex: 'auto',
    marginTop: '0px',
    minHeight: '534px',
  };
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={'Our Success Stories'}
        pagesub={
          <>
            From struggles to success—these are the stories <br />
            of hope, perseverance, and a brighter future
          </>
        }
        pageTitleStyle={pageTitleStyle}
      />
      <section className="cause-pg-section section-padding">
        <div className="container">
          <div className="row">
            {causes.slice(0, 6).map((causesData, item) => (
              <div className="col-lg-4 col-md-6 col-12" key={item}>
                <motion.div className={`stories-`.item} variants={variants} initial="hidden" animate="visible" whileHover="hover">
                  <div className="causes-card" key={item} style={{ minHeight: '480px !important' }}>
                    <div className="image">
                      {/* <span>{causesData.tag}</span> */}
                      <img src={causesData.Cimg} alt="" style={{ width: '354px', height: '257px' }} />
                    </div>
                    <div className="text">
                      <h2>
                        <Link onClick={ClickHandler} to={`/causes-single/${causesData.slug}`}>
                          {causesData.title}
                        </Link>
                      </h2>
                      <p>{causesData.docomunt}</p>
                    </div>
                    {/* <div className="progress-wrap">
                    <div className="progress-item">
                      <div className="progress">
                        <div className="bar" style={{ width: `${causesData.progress}%` }}>
                          <span className="cssProgress-label">{causesData.progress}%</span>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <span className="title">Goal:</span>
                        <span>${causesData.goal}</span>
                      </li>
                      <li>
                        <span className="title">Raised:</span>
                        <span>${causesData.raised}</span>
                      </li>
                      <li>
                        <span className="title">Goal:</span>
                        <span>${causesData.targetGoal}</span>
                      </li>
                    </ul>
                  </div> */}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Footer /> */}
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default CausesPage;
