import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
  return (
    <footer className="p-10 mt-12">
      <div
        className="footer"
        style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover' }}
      >
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <p>Mirpur-10, Dhaka-1216</p>
        </div>
      </div>
      <div className="text-center mt-16">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Doctors
          Portal Community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
