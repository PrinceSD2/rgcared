import React from 'react';
import { motion } from 'framer-motion';
import { variants } from '../../helpers';
import { Element } from 'react-scroll';
import groupPerson from '../../images/icons/group-person.png';
const OurMission = props => {
  return (
    <>
      <section className={'' + props.hclass} id={props.id} ref={props.secRef} style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div>
            <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="section-title">
                    <h2>Our Mission</h2>
                  </div>
                </div>
              </div>
              <div className="service-wrap">
                <div className="service-card" style={{ width: '100%' }}>
                  <div className="icon">
                    <i className="flaticon-people"></i>
                    <img src={groupPerson} alt="" />
                  </div>
                  <h2>Transforming Lives Through Education for All</h2>
                  <span>
                    Our NGO provides quality education to underprivileged children across India, empowering them with the tools and
                    opportunities to break the cycle of poverty and build brighter futures. We believe that every child, regardless of their
                    background, deserves access to education that unlocks their potential.
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
              <div className="row justify-content-center" style={{ paddingTop: 40 }}>
                <div className="col-lg-12 col-12">
                  <div className="section-title">
                    {/* <span>Our Vision</span> */}
                    <h2>Our Vision</h2>
                  </div>
                </div>
              </div>
              <div className="service-wrap">
                <div className="service-card" style={{ width: '100%' }}>
                  <div className="icon">
                    <i className="flaticon-graduation-cap"></i>
                  </div>
                  {/* <h2>We Educate &amp; help poor people</h2> */}
                  <h2>Empowering Every Child Through Education</h2>
                  <span>
                    {/* To create a world where education is a right, not a privilege, and where every child, irrespective of their
                    socio-economic background, can achieve their full potential. */}
                  </span>
                  <p>
                    We dream of a world where every child has the opportunity to learn, grow, and thrive—where education isn’t just a
                    privilege for some but a basic right for all. It doesn’t matter where a child comes from or what challenges they face;
                    every single one deserves a chance to reach their full potential.
                  </p>
                  <p>
                    We’re working to break down the barriers that stand in the way of this dream, whether it’s poverty, lack of resources,
                    or access to quality schools. Our goal is simple yet profound: to give every child the tools and support they need to
                    build a better future for themselves and their communities.
                  </p>
                  <p>
                    Because when we invest in education, we’re not just shaping individual lives—we’re creating a better, more equal world
                    for everyone.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
              <div className="row justify-content-center" style={{ paddingTop: 40 }}>
                <div className="col-lg-12 col-12">
                  <div className="section-title">
                    <h2>Our Excellence</h2>
                  </div>
                </div>
              </div>
              <div className="service-wrap">
                <div className="service-card" style={{ width: '100%' }}>
                  <div className="icon">
                    <i className="flaticon-graduation-cap"></i>
                  </div>
                  <h2>Committed to Empowering Children Through Education</h2>
                  <span>
                    We are committed to providing quality education to children, regardless of their background. Through dedicated teaching,
                    strong community involvement, and a compassionate team, we empower children to realize their full potential and create
                    brighter futures.
                  </span>
                </div>
              </div>
            </motion.div>
            <Element id="our-values">
              <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                <div className="row justify-content-center" style={{ paddingTop: 40 }}>
                  <div className="col-lg-12 col-12">
                    <div className="section-title">
                      <h2>Our Values</h2>
                    </div>
                  </div>
                </div>
                <div className="service-wrap">
                  <div className="service-card" style={{ width: '100%' }}>
                    <div className="icon">
                      <i className="flaticon-checklist"></i>
                    </div>
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Equality
                      </b>
                      : We believe in providing every child with an equal opportunity to access education, irrespective of their
                      socio-economic background, caste, religion, or gender.
                    </span>
                    <span>
                      <b>
                        {' '}
                        <i class="flaticon-check"></i> Empathy
                      </b>
                      : We understand the challenges faced by underprivileged children and are committed to making a meaningful difference
                      in their lives with compassion and understanding.
                    </span>
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Integrity
                      </b>
                      : We uphold the highest standards of transparency, honesty, and accountability in all our operations, ensuring that
                      every contribution is used responsibly for the benefit of the children.
                    </span>
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Excellence
                      </b>
                      : We strive for excellence in our educational programs, continuously working to improve the quality of education,
                      resources, and support we provide to the children.
                    </span>
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Sustainability
                      </b>
                      : We are committed to creating long-term impact through sustainable educational solutions, which empower children not
                      just for today, but for their future as well.
                    </span>{' '}
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Collaboration
                      </b>
                      : We believe in the power of collaboration and partnerships with communities, schools, donors, and volunteers to
                      create a network of support that maximizes the impact of our work.
                    </span>
                    <span>
                      <b>
                        <i class="flaticon-check"></i> Empowerment
                      </b>
                      : We are dedicated to empowering children, their families, and communities by nurturing skills, encouraging
                      self-confidence, and promoting the importance of lifelong learning.
                    </span>
                  </div>
                </div>
              </motion.div>
            </Element>
            <Element id="key-programs-and-initiatives">
              <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                <div className="row justify-content-center" style={{ paddingTop: 40 }}>
                  <div className="col-lg-12 col-12">
                    <div className="section-title">
                      <h2>Key Programs and Initiatives</h2>
                    </div>
                  </div>
                </div>
                <div className="service-wrap">
                  <div className="service-card" style={{ width: '100%' }}>
                    <div className="icon">
                      <i className="flaticon-graduation-cap"></i>
                    </div>
                    <h2>Community Learning Centers (CLC)</h2>
                    <span>
                      We have set up community learning centers in underserved regions to provide free educational support, after-school
                      programs, and remedial classes for children who are out of school.
                    </span>
                    <span>
                      <b>Target Audience</b>: Children between 6-16 years from economically disadvantaged families.
                    </span>
                    <span>
                      <b>Key Focus Areas</b>: Literacy, numeracy, life skills, and holistic development.
                    </span>
                    <h2>School Supplies Distribution</h2>
                    <span>
                      Providing essential school supplies such as uniforms, textbooks, and stationery to children from underprivileged
                      backgrounds. This ensures that financial constraints do not hinder a child's right to education.
                    </span>
                    <span>
                      <b>Impact</b>: Distributed over 10,000 school kits in the last year alone.
                    </span>
                    <h2>Scholarships and Sponsorships</h2>
                    <span>
                      Our scholarship program helps bright students continue their education by covering school fees, uniforms, and other
                      necessary expenses..
                    </span>
                    <span>
                      <b>Key Areas</b>: Primary, secondary, and vocational education.
                    </span>
                    <span>
                      <b>Impact</b>: 500+ students supported in the last year.
                    </span>
                    <h2>Skill Development and Vocational Training</h2>
                    <span>
                      Offering skill development programs for older children who have dropped out of school, focusing on vocational training
                      in areas like tailoring, computer literacy, carpentry, and hospitality.
                    </span>
                    <span>
                      <b>Objective</b>: To provide employable skills to ensure a sustainable livelihood.
                    </span>
                    <span>
                      <b>Outcome</b>: 200+ youth successfully employed through skill development programs.
                    </span>
                    <h2>Teacher Training and Capacity Building</h2>
                    <span>
                      We train teachers from local communities in modern educational methods and child-centric approaches, ensuring that
                      they are equipped to meet the needs of underprivileged children.
                    </span>
                    <span>
                      <b>Goal</b>: To improve the quality of teaching in rural and marginalized areas.
                    </span>
                    <span>
                      <b>Impact</b>:Over 100 teachers trained, benefitting over 5,000 students annually.
                    </span>
                  </div>
                </div>
              </motion.div>
            </Element>
            <Element id="impact-metrics">
              <motion.div variants={variants} initial="hidden" animate="visible" whileHover="hover">
                <div className="row justify-content-center" style={{ paddingTop: 40 }}>
                  <div className="col-lg-12 col-12">
                    <div className="section-title">
                      <h2>Impact Metrics</h2>
                    </div>
                  </div>
                </div>
                <div className="service-wrap">
                  <div className="service-card" style={{ width: '100%' }}>
                    <div className="icon">
                      <i className="flaticon-graduation-cap"></i>
                    </div>
                    <span>
                      <b>Number of Children to be educated</b>: We plan to educate over 20,000 children through our programs in the coming 5
                      years.
                    </span>
                    <span>
                      <b>Retention Rate</b>: 85% of children enrolled in our programs continue their education and progress to higher levels
                      of schooling..
                    </span>
                    <span>
                      <b>Scholarships Planned</b>: 1,000+ scholarships awarded to meritorious students, enabling them to complete their
                      studies.
                    </span>
                    <span>
                      <b>Teacher Impact</b>:100% of trained teachers have demonstrated improved teaching outcomes, with significant
                      improvement in student performance in literacy and numeracy.
                    </span>
                    <span>
                      <b>Community Engagement</b>: More than 25,000 community members engaged through workshops, awareness campaigns, and
                      volunteer programs.
                    </span>
                  </div>
                </div>
              </motion.div>
            </Element>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
