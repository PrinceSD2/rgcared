import React from 'react';
import ContactForm from '../ContactFrom/ContactForm';

const Contactpage = () => {
  return (
    <section className="contact-page section-padding">
      <div className="container">
        <div className="contact-wrap">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="contact-left">
                <h2>Get in touch</h2>
                <p>
                  We’re here to make a difference together! Whether you have a question, want to partner with us, or support our mission,
                  we’d love to hear from you.
                </p>
                <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.86915099995!2d77.02647812540548!3d28.39301982579641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2355a6f04953%3A0x8cef57aba9150a8a!2sTulip%20Ivory%20Tower%20D!5e0!3m2!1sen!2sin!4v1735842341737!5m2!1sen!2sin"></iframe>{' '}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-right">
                <div className="title">
                  <h2>Fill Up The Form</h2>
                  <p>Your email address will not be published. Required fields are marked *</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
