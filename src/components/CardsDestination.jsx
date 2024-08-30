import React from 'react'

const CardsDestination  = ({ image, altText, title, description }) => {
    return (
      <div className="relative mt-12 min-w-[120px] h-[400px]  bg-white rounded-lg shadow-lg p-2 overflow-hidden">
        <img
          src={image}
          alt={altText}
          className="w-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-2">
          <h3 className="text-lg font-bold -mt-36 -ml-24 ">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };

export default CardsDestination
