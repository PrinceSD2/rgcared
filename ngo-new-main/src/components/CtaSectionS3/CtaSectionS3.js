import React from 'react';
import { Link } from 'react-router-dom';

import Shape from '../../images/healthcare.svg'
import Shape2 from '../../images/cta-shap-2.svg'
import Shape3 from '../../images/cta-shap-3.svg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const CtaSectionS3 = () => {
    return (
        <section className="cta-section-s3">
            <div className="container">
                <div className="cta-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-12">
                            <div className="content">
                                <h2> <img src={Shape} alt="" /> Non profit Charity
                                    Fundation</h2>
                                <h3>ensure safety & non profit care
                                    & quality Services</h3>
                                <ul>
                                    <li><i className="flaticon-check"></i>Dedicated Team support</li>
                                    <li><i className="flaticon-check"></i>Excellent care service</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="all-btn">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now <i className="flaticon-heart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <img src={Shape2} alt="" />
                    </div>
                    <div className="shape1">
                        <img src={Shape3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS3;