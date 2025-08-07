import React from 'react';
import { Link } from 'react-router-dom';
import Teams from '../../api/team';

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const TeamSection = props => {
  return (
    <section className={'' + props.hclass} id={props.id} ref={props.secRef}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="section-title text-center">
              <span>Join Us in Supporting Underprivileged Children</span>
              <h2>
                Meet the <span>Founders</span>
              </h2>
              <p>
                At Reddington Global Care Foundation, our dedicated team is united by a shared passion for empowering underprivileged
                children through education. With diverse backgrounds in education, psychology, and community development, we work
                collaboratively to create impactful programs that inspire and uplift. Together, we strive to ensure that every child has
                access to quality education and the opportunity to reach their full potential.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {Teams.slice(0, 4).map((team, titem) => (
            <div className="col-lg-3 col-md-6 col-12" key={titem}>
              <Link onClick={ClickHandler} to={`/our-team/${team.slug}`}>
                <div className="vol-card">
                  <div className="image">
                    <img src={team.timg} alt="" />
                    <span className="hover-icon">
                      <i className="flaticon-share"></i>
                    </span>
                    <ul>
                      <li>
                        <a onClick={ClickHandler} href={team.linkedin} target="_blank" rel="noopener noreferrer">
                          <i className="flaticon-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="text">
                    <h3>{team.title}</h3>
                    <span>{team.subtitle}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamSection;
