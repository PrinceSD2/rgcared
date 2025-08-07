import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../../api/Instagram';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
// import Logo from '../../images/logo.png';
import Logo from '../../images/logo.png';
import FooterS3 from '../../components/footerS3/FooterS3';

import BgImg2 from '../../images/line-ing.svg';

const InstagamSectionS2 = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const openModal = image => {
    setSelectedImage(image);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Success Stories'} />
      <section className={'' + props.hclass}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title">
                <span>We are always open for children</span>
                <h2>Recent Instagram Post</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-main-wrap">
          <div className="sortable-gallery">
            {Instagram.map(item => (
              <div className="grid" key={item.id}>
                <div className="img-holder">
                  <Link
                    to={item.imag}
                    className="fancybox"
                    data-fancybox-group="gall-1"
                    onClick={e => {
                      e.preventDefault();
                      openModal(item.imag);
                    }}
                  >
                    <img src={item.imag} alt={`Instagram ${item.id}`} className="img img-responsive" />
                    <div className="hover-content">
                      <i className="flaticon-camera"></i>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-wrap">
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <img src={selectedImage} alt="Modal" />
              </div>
            </div>
          </div>
        )}

        <div className="line-in">
          <img src={BgImg2} alt="" />
        </div>
      </section>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};

export default InstagamSectionS2;
