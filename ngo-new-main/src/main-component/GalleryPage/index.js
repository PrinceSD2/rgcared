import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import FooterS3 from '../../components/footerS3/FooterS3';
import Gallery from '../../components/Gallery';
import Logo from '../../images/logo.png';
import Image10 from '../../images/gallery/image-10.jpeg';
import Image11 from '../../images/gallery/image-11.jpeg';
import Image12 from '../../images/gallery/image-12.jpeg';
import Image6 from '../../images/gallery/image-6.jpeg';
import Image7 from '../../images/gallery/image-7.jpeg';
import Image8 from '../../images/gallery/image-8.jpeg';
import Image14 from '../../images/gallery/image-14.jpeg';
import Image5 from '../../images/gallery/image-5.jpeg';
import Image22 from '../../images/gallery/image-22.jpeg';
import Image23 from '../../images/gallery/image-23.jpeg';
import Image24 from '../../images/gallery/image-24.jpeg';
import Image25 from '../../images/gallery/image-25.jpeg';
import Image26 from '../../images/gallery/image-26.jpeg';
import Image27 from '../../images/gallery/image-27.jpeg';
import Image28 from '../../images/gallery/image-28.jpeg';
import Image29 from '../../images/gallery/image-29.jpeg';
import Image30 from '../../images/gallery/image-30.jpeg';

const GalleryPage = () => {
  const gallery = [
    {
      id: '1',
      src: Image10,
    },
    {
      id: '2',
      src: Image11,
    },
    {
      id: '3',
      src: Image12,
    },
    {
      id: '5',
      src: Image5,
    },
    {
      id: '6',
      src: Image6,
    },
    {
      id: '7',
      src: Image7,
    },
    {
      id: '8',
      src: Image8,
    },
    {
      id: '9',
      src: Image14,
    },
    {
      id: '11',
      src: Image22,
    },
    {
      id: '12',
      src: Image23,
    },
    {
      id: '13',
      src: Image24,
    },
    {
      id: '14',
      src: Image25,
    },
    {
      id: '15',
      src: Image26,
    },
    {
      id: '16',
      src: Image27,
    },
    {
      id: '17',
      src: Image28,
    },
    {
      id: '18',
      src: Image29,
    },
    {
      id: '19',
      src: Image30,
    },
  ];
  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle
        pageTitle={'Our Gallery'}
        pagesub={
          <>
            See how your support is changing lives <br />
            and brightening futures
          </>
        }
      />
      <section className="shop-page section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Gallery gallery={gallery} />
            </div>
          </div>
        </div>
      </section>
      <FooterS3 />
      <Scrollbar />
    </Fragment>
  );
};

export default GalleryPage;
