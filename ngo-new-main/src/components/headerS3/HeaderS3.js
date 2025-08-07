import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import MobileMenu from '../MobileMenu/MobileMenu';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/actions/action';
import HeaderTopbarS3 from '../HeaderTopbarS3/HeaderTopbarS3';

const HeaderS3 = props => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(true);
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <header id="header" className="header-s3" style={props.style}>
      <HeaderTopbarS3 />
      <div className={'' + props.hclass}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <MobileMenu />
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                    <img src={props.Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} className="active" to="/home">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us" onClick={() => setSubMenuVisible(true)}>
                        About Us
                      </Link>
                      {isSubMenuVisible && (
                        <ul className="sub-menu">
                          <li>
                            <ScrollLink to="about-us" smooth={true} duration={500} onClick={() => setSubMenuVisible(false)} offset={-150}>
                              About Us
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink to="who-we-are" smooth={true} duration={500} onClick={() => setSubMenuVisible(false)} offset={-150}>
                              Who We Are
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink
                              to="our-mission-and-vision"
                              offset={-150}
                              smooth={true}
                              duration={500}
                              onClick={() => setSubMenuVisible(false)}
                            >
                              Our Mission and Vision
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink to="our-values" offset={-50} smooth={true} duration={500} onClick={() => setSubMenuVisible(false)}>
                              Our Values
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink
                              to="key-programs-and-initiatives"
                              offset={-150}
                              smooth={true}
                              duration={500}
                              onClick={() => setSubMenuVisible(false)}
                            >
                              Key Programs and Initiatives
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink
                              to="impact-metrics"
                              offset={-150}
                              smooth={true}
                              duration={500}
                              onClick={() => setSubMenuVisible(false)}
                            >
                              Impact Metrics
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink to="our-team" offset={-50} smooth={true} duration={500} onClick={() => setSubMenuVisible(false)}>
                              Our Team
                            </ScrollLink>
                          </li>
                          <li>
                            <ScrollLink
                              to="partners-and-sponsors"
                              offset={-150}
                              smooth={true}
                              duration={500}
                              onClick={() => setSubMenuVisible(false)}
                            >
                              Partners & Sponsors
                            </ScrollLink>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/impact/success-stories">
                        Impact
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/impact/success-stories">
                            Success Stories
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/impact/gallery">
                            Photo/Video Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/get-involved/become-volunteer">
                        Get Involved
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/get-involved/become-volunteer">
                            Volunteer Opportunities or Join Our team
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/get-involved/fundraising-compaigns">
                            Fundraising Campaigns
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/get-involved/corporate-partnerships">
                            Corporate Partnerships
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/get-involved/events">
                            Events
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/donate">
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2">
                <div className="header-right d-flex align-items-center justify-content-end gap-2">
                  <div className="close-form">
                    <Link onClick={ClickHandler} className="theme-btn" to="/donate">
                      Donate now
                    </Link>
                  </div>
                  <div>
                    <Link onClick={ClickHandler} className="theme-btn btn-outline-primary" to="/login" style={{marginLeft: 10, background: '#fff', color: '#2e26b2', border: '2px solid #2e26b2'}}>
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(HeaderS3);
