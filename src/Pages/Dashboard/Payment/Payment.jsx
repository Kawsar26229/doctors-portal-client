import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(
  'pk_test_51Mcn6ZJkvnr82DRjiSBQ1xGg8fPEt21O7ptxn8c7h3ygn3GiIdXuyh7uIy2TkNuu0PDoyqhZpK3598jYfEarPND100EvbYYFf3'
);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  if (navigation.state === 'loading') {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-3xl">Payment for {treatment}</h2>
      <p>
        Please pay <strong>$ {price}</strong> for you appointment on{' '}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
