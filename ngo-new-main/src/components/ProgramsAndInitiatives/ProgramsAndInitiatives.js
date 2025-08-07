import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shape3 from '../../images/image-gallery/306.jpg';
import Shape4 from '../../images/image-gallery/305.jpg';
import Image4 from '../../images/image-gallery/image-4.jpg';
const programs = [
  {
    id: '01',
    title: 'Community Learning Centers (CLC)',
    sub: 'Underserved Regions Educational Support',
    Des: 'We have set up community learning centers in underserved regions to provide free educational support, after-school programs, and remedial classes for children who are out of school.',
    targetAudience: 'Children between 6-16 years from economically disadvantaged families.',
    keyFocusAreas: 'Literacy, numeracy, life skills, and holistic development.',
  },
  {
    id: '02',
    title: 'School Supplies Distribution',
    sub: 'Ensuring Equal Education Access',
    Des: 'Providing essential school supplies such as uniforms, textbooks, and stationery to children from underprivileged backgrounds, ensuring financial constraints don’t hinder education.',
    impact: 'Distributed over 10,000 school kits in the last year.',
  },
  {
    id: '03',
    title: 'Scholarships and Sponsorships',
    sub: 'Supporting Bright Students',
    Des: 'Our scholarship program helps bright students continue their education by covering school fees, uniforms, and other necessary expenses.',
    keyAreas: 'Primary, secondary, and vocational education.',
    impact: '500+ students supported in the last year.',
  },
  {
    id: '04',
    title: 'Skill Development and Vocational Training',
    sub: 'Empowering Youth for Sustainable Livelihoods',
    Des: 'Offering skill development programs for older children who have dropped out of school, focusing on areas like tailoring, computer literacy, carpentry, and hospitality.',
    objective: 'To provide employable skills and ensure a sustainable livelihood.',
    outcome: '200+ youth successfully employed through skill development programs.',
  },
  {
    id: '05',
    title: 'Teacher Training and Capacity Building',
    sub: 'Improving Teaching in Rural Areas',
    Des: 'We train teachers from local communities in modern educational methods and child-centric approaches, ensuring that they are equipped to meet the needs of underprivileged children.',
    goal: 'To improve the quality of teaching in rural and marginalized areas.',
    impact: 'Over 100 teachers trained, benefitting over 5,000 students annually.',
  },
];

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  arrows: false,
  fade: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProgramsAndInitiatives = () => {
  return (
    <section className="testimonial-section-s3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="left-img">
              <img src={Image4} alt="" />
              {/* <video src={heroVideo} autoPlay muted loop style={{ mixBlendMode: 'lighten' }} /> */}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="testimonial-wrap">
              <div className="section-title">
                <span>
                  {/* <img src={Shape2} alt="" /> */}
                  Key Programs and Initiatives
                </span>
                <h2>
                  Our <span>Programs</span> and <span>Initiatives</span>
                </h2>
              </div>
              <Slider {...settings} className="testimonial-slider-s3">
                {/* {testimonials.map((testitem, titem) => (
                  <div className="item" key={titem}>
                    <h3>{testitem.Des}</h3>
                    <div className="author">
                      <div className="image">
                        <img src={testitem.img} alt="" />
                      </div>
                      <div className="text">
                        <h4>{testitem.title}</h4>
                        <span>{testitem.sub}</span>
                      </div>
                    </div>
                  </div>
                ))} */}
                {programs.map((program, index) => (
                  <div className="item" key={index}>
                    <h3>{program.title}</h3>
                    <div className="author">
                      <div className="text">
                        <h4>{program.sub}</h4>
                        <p>{program.Des}</p>
                        {program.targetAudience && (
                          <p>
                            <strong>Target Audience:</strong> {program.targetAudience}
                          </p>
                        )}
                        {program.keyFocusAreas && (
                          <p>
                            <strong>Key Focus Areas:</strong> {program.keyFocusAreas}
                          </p>
                        )}
                        {program.impact && (
                          <p>
                            <strong>Impact:</strong> {program.impact}
                          </p>
                        )}
                        {program.objective && (
                          <p>
                            <strong>Objective:</strong> {program.objective}
                          </p>
                        )}
                        {program.outcome && (
                          <p>
                            <strong>Outcome:</strong> {program.outcome}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="side-img-1">
        <img src={Shape3} alt="" />
      </div>
      <div className="side-img-2">
        <img src={Shape4} alt="" />
      </div>
    </section>
  );
};

export default ProgramsAndInitiatives;
