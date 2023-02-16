import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed id dicta rerum ut veritatis quasi illum exercitationem at quaerat.',
      icon: fluoride,
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed id dicta rerum ut veritatis quasi illum exercitationem at quaerat.',
      icon: cavity,
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed id dicta rerum ut veritatis quasi illum exercitationem at quaerat.',
      icon: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-lg font-bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
