import React from 'react';
import { Link } from 'react-router-dom';

import shape from '../../images/healthcare-with.svg'

const CtaSectionS2 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-section-s2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2> <img src={shape} alt="" />Give Your Big Hand Forever</h2>
                            <h3>Helping each other can
                                make <span>world</span> better</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="all-btn">
                            <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now <i className="flaticon-heart"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;