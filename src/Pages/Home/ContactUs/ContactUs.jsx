import React from 'react';
import PrimaryButton from '../../../utilities/Button/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section
      className="mt-16"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="w-full max-w-lg pt-16 pb-0 mx-auto">
        <div className="text-center">
          <h5 className="text-lg text-primary font-bold">Contact Us</h5>
          <h2 className="text-white text-3xl">Stay Connected with Us</h2>
        </div>
        <div className="card-body pt-6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <textarea
              className="textarea"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
