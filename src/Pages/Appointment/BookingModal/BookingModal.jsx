import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, 'PP');
  const { user } = useContext(AuthContext);
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

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success('Booking Successfull');
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              defaultValue={user?.displayName}
              disabled
              name="name"
              placeholder="Your Name"
              className="input w-full mt-4 input-bordered"
            />
            <input
              type="email"
              defaultValue={user?.email}
              disabled
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
