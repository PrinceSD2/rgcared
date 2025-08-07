import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Teams from '../../api/team';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Contact from './contact';
import logo from '../../images/logo.png';
import SkillProgress from './SkillProgress';
import FooterS3 from '../../components/footerS3/FooterS3';

const TeamSinglePage = props => {
  const { slug } = useParams();
  const TeamSingles = Teams.find(item => item.slug === slug);

  return (
    <Fragment>
      <NavbarS3 Logo={logo} hclass={'wpo-site-header'} border={{ borderBottom: '2px solid rgb(251, 173, 23)' }} />
      {/* <PageTitle pageTitle={TeamSingles.subtitle} pagesub={'Team'} /> */}
      <div className="team-pg-area section-padding" style={{ paddingTop: 90 }}>
        <div className="container">
          {/* <div className="team-info-wrap"> */}
          <div className="team-info-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="team-info-img">
                  <img src={TeamSingles.Sime} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-info-text">
                  <h2>{TeamSingles.title}</h2>
                  <span>{TeamSingles.subtitle}</span>

                  <div dangerouslySetInnerHTML={{ __html: TeamSingles.bio }} />
                  <div className="wpo-skill-section">{/* <SkillProgress /> */}</div>

                  <ul>
                    <li>Connect With:</li>
                    {/* <li>
                        <a href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-instagram"></i>
                        </a>
                      </li> */}
                    <li>
                      {/* <a href="#">
                          <i className="ti-google"></i>
                        </a> */}
                      <a href={TeamSingles.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="exprience-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="exprience-wrap">
                  <h2>About Our {TeamSingles.subtitle.replace('And', '&')}</h2>
                  <div dangerouslySetInnerHTML={{ __html: TeamSingles.about }} />
                </div>
                {/* <div className="education-area ex-wiget">
                    <h2>Education</h2>
                    <ul>
                      <li>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                        form, by injected humour.
                      </li>
                      <li>If you are going to use a passage of Lorem Ipsum.</li>
                      <li>Very popular during the Renaissance. </li>
                      <li>Many desktop publishing packages and web page editors now.</li>
                    </ul>
                  </div>
                  <div className="language-area ex-wiget">
                    <h2>Language</h2>
                    <ul>
                      <li>French(fluent), English (fluent), Greek , chinese.</li>
                    </ul>
                  </div>

                  <div className="wpo-contact-area ex-wiget">
                    <h2>Contact Me</h2>
                    <div className="quote-form">
                      <Contact />
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;
