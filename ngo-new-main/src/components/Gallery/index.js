import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';

const Gallery = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = index => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="shop-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="shop-grids clearfix">
              {gallery.length > 0 &&
                // slice(0, 12)
                gallery.map((image, pitem) => (
                  <div className="grid" key={pitem}>
                    <motion.div className={`gallery-`.pitem} variants={variants} initial="hidden" animate="visible" whileHover="hover">
                      <div className="img-holder">
                        <img src={image.src} alt="" style={{ cursor: 'pointer' }} onClick={() => handleImageClick(pitem)} />
                      </div>
                    </motion.div>
                  </div>
                ))}
            </div>
            {/* <div className="pagination-wrapper pagination-wrapper-center">
              <ul className="pg-pagination">
                <li>
                  <Link to="/imapct/gallery" aria-label="Previous">
                    <i className="ti-angle-left"></i>
                  </Link>
                </li>
                <li className="active">
                  <Link to="/imapct/gallery">1</Link>
                </li>
                <li>
                  <Link to="/imapct/gallery">2</Link>
                </li>
                <li>
                  <Link to="/shop">3</Link>
                </li>
                <li>
                  <Link to="/shop" aria-label="Next">
                    <i className="ti-angle-right"></i>
                  </Link>
                </li>
              </ul>
            </div> */}
            {open && (
              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={gallery}
                index={currentIndex}
                on={{ click: () => setOpen(false) }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
