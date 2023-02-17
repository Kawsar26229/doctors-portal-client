import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  //treatment is appointment options just different name
  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patient = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: patient,
      slot,
      email,
      phone,
    };
    // TODO: send data to the server and once data is saved then close the modal and display success toast
    setTreatment(null);
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={format(selectedDate, 'PP')}
              className="input w-full mt-4 input-bordered"
              disabled
            />
            <select name="slot" className="select select-bordered w-full mt-4">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input w-full mt-4 input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input w-full mt-4 input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full mt-4 input-bordered"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full mt-4"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
