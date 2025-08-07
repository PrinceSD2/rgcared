import React from 'react';
const AboutS2 = props => {
  return (
    <>
      <section className={'' + props.hclass} id={props.id} ref={props.secRef} style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="row justify-content-center" style={{ paddingTop: 40 }}>
            <div className="col-lg-12 col-12">
              <div className="section-title">
                <h2>Who We Are</h2>
              </div>
            </div>
          </div>
          <div className="service-wrap">
            <div className="service-card" style={{ width: '100%' }}>
              <div className="icon">
                <i className="flaticon-user"></i>
              </div>
              <span>
                We are a diverse and committed team of educators, volunteers, social workers, and community leaders, united by our shared
                mission of empowering children through education. Each of us brings unique skills, experiences, and perspectives to our
                work, but we are all driven by the same goal: to provide children with the chance to succeed. Our work is grounded in
                compassion and the belief that education is the foundation for a better life. Through collaboration and dedication, we
                create lasting impact by partnering with local communities, schools, and other organizations to make education accessible
                for all children.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutS2;
