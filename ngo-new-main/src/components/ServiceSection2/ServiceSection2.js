import React from "react";
import { Link } from 'react-router-dom'
import Services from "../../api/Services";


import Shape from '../../images/healthcare.svg'
import Bgimg from '../../images/service/bg-img.jpg'
import Shape2 from '../../images/service/shape-3.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection2 = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                        <div className="section-title">
                            <span><img src={Shape} alt="" />Together, We Can Change Lives Forever.</span>
                            <h2>our <span>non-profit</span> services
                                you must love</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="all-Service-btn">
                            <Link onClick={ClickHandler} to="/service" className="theme-btn">All Services</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-image">
                    <img src={Bgimg} alt="" />
                    <div className="shape">
                        <img src={Shape2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="service-wrap">
                    {Services.slice(0, 5).map((service, index) => (
                        <div className="item" key={index}>
                            <div className="visible-content">
                                <div className="icon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                </div>
                            </div>
                            <div className="hover-content">
                                <div className="text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <span>{service.subtitle}</span>
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>Read More<i className="flaticon-right-arrow-1"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection2;




