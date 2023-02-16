import React from 'react';
import chair from '../../../assets/images/chair.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="hero bgImage">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold textShadow">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 textShadow">
            A dentist at work in his vocation always looks down in the
            mouth.Every tooth in a man's head is more valuable than a
            diamond.The tongue is ever turning to the aching tooth.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
