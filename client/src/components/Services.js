// Services.js
// Starts at 2:10:55

import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);
const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div
        className="flex-1 flex flex-col justify-start items-center"
        style={{ maxWidth: '700px' }}
      >
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Your assets are safe with us. Our crypto exchange employs state-of-the-art security measures, including advanced encryption and multi-factor authentication, to ensure your transactions and personal information are fully protected."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Discover the most competitive exchange rates in the crypto market. Our platform offers unbeatable rates for buying, selling, and trading a wide range of cryptocurrencies, ensuring you get the best value for your digital assets."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Experience lightning-fast transactions with our crypto exchange. Our advanced technology ensures your trades are executed in seconds, providing you with the speed and efficiency you need in the fast-paced world of cryptocurrency."
        />
      </div>
    </div>
  );
};

export default Services;
