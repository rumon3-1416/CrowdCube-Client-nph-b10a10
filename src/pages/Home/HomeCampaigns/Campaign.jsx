import React from 'react';
import { useNavigate } from 'react-router-dom';

import gpsIcon from '../../assets/icons/gps-gold.png';

const Campaign = ({ data }) => {
  const { image, title, description, division } = data;

  const navigate = useNavigate();

  const handleDonate = () => {
    localStorage.setItem('details', JSON.stringify(data));
    navigate('/donate-details');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start">
      <img
        className="w-full aspect-[4/3] object-cover rounded-2xl"
        src={image}
        alt={title}
      />

      {/* Desc */}
      <div className="px-6 pt-4 pb-8 grow flex flex-col items-start">
        <div className="grow">
          <div className="bg-[#ec932d24] px-3 py-1 rounded-full inline-flex items-center gap-1">
            <img className="h-5" src={gpsIcon} alt="time" />
            <p className="text-[#EC922D]">{division}</p>
          </div>

          <h4 className="text-xl font-semibold mt-3">{title}</h4>

          <p className="text-gray-600 mt-2 mb-4">{description}</p>
        </div>

        <button
          onClick={handleDonate}
          className="bg-[#0a7558] text-white font-medium px-6 py-2.5 rounded-full"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default Campaign;
