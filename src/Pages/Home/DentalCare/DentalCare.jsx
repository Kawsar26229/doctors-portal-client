import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../utilities/Button/PrimaryButton/PrimaryButton';

const DentalCare = () => {
  return (
    <div className="card lg:card-side bg-base-100 mt-16">
      <figure>
        <img src={treatment} alt="Album" className="w-1/2 rounded-lg" />
      </figure>
      <div className="card-body w-1/2 flex justify-center mx-auto">
        <React.Fragment>
          <h2 className="card-title text-4xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="flex flex-grow-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
        </React.Fragment>
        <div className="card-actions justify-start py-3">
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
