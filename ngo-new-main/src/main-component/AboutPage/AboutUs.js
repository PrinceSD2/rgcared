import React from 'react';
const AboutUs = props => {
  return (
    <>
      <section className={'' + props.hclass} id={props.id} ref={props.secRef} style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-center" style={{ paddingTop: 40 }}>
            <div className="col-lg-12 col-12">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
          <div className="service-wrap">
            <div className="service-card" style={{ width: '100%' }}>
              <div className="icon">
                <i className="flaticon-user"></i>
              </div>
              <span>
                The RG Care Foundation, accessible at{' '}
                <a className="link-lower-text" href={process.env.REACT_APP_BASE_URL} target="_blank">
                  www.rgcare.in
                </a>
                , is a non-governmental organization (NGO) dedicated to enhancing the quality of life for underprivileged communities. Their
                primary focus areas include:​
                <span>
                  📚 <b>Education:</b> Providing educational support and resources to children from marginalized backgrounds to ensure they
                  have access to quality learning opportunities.​
                </span>
                <span>
                  🏥 <b>Healthcare:</b> Offering medical assistance, health awareness programs, and essential healthcare services to
                  underserved populations to improve overall well-being.​
                </span>{' '}
                <span>
                  🔧 <b>Skill Development:</b> Implementing training programs aimed at empowering individuals with vocational skills,
                  thereby enhancing employment opportunities and promoting economic independence.​
                </span>{' '}
                <span>
                  🏡 <b>Community Development:</b> Engaging in various initiatives aimed at uplifting communities, including infrastructure
                  development, sanitation projects, and promoting sustainable livelihoods.​.
                </span>
                <span>
                  The foundation operates with a mission to create a positive and lasting impact on society by addressing critical issues
                  and fostering holistic development. For more detailed information about their programs, initiatives, and ways to get
                  involved, please visit their official website:{' '}
                  <a className="link-lower-text" href={process.env.REACT_APP_BASE_URL} target="_blank">
                    www.rgcare.in
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
