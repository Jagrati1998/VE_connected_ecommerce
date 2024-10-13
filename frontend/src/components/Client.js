// src/components/Clients.jsx
import React from "react";

const Clients = () => {
  const clientLogos = [
    "https://via.placeholder.com/100x50?text=Logo1",
    "https://via.placeholder.com/100x50?text=Logo2",
    "https://via.placeholder.com/100x50?text=Logo3",
    "https://via.placeholder.com/100x50?text=Logo4",
    "https://via.placeholder.com/100x50?text=Logo5",
    "https://via.placeholder.com/100x50?text=Logo6",
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-600">
            Our Clients
          </h2>
          <p className="mt-2 text-sm  font-light tracking-tight text-gray-400 sm:text-xl">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 pb-10 px-20 ">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img src={logo} alt={`Client logo ${index + 1}`} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
