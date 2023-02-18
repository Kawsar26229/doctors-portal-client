import React from 'react';

const AppointmentOptions = ({ appoinmentOption, setTreatment }) => {
  const { name, slots, price } = appoinmentOption;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center ">
        <h2 className="text-2xl text-center font-bold text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available
        </p>
        <p>Price: $ {price}</p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setTreatment(appoinmentOption)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
