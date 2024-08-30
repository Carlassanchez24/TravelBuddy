import React from 'react'

const CardsTravel = ({ image, title, description }) => {
  return (
    <div className="min-w-[100px] bg-white rounded-lg shadow-lg p-2">
    <img
      src={image}
      alt= {title}
      className="w-full rounded-lg"
    />
    <h3 className="mt-2 text-center">{title}</h3>
    <p className="text-center text-gray-500">{description}</p>
  </div>

  )
}

export default CardsTravel