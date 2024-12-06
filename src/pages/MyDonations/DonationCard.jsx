import React, { useContext } from 'react';
import { AuthContext } from '../../features/AuthProvider';

const DonationCard = ({ donation }) => {
  const { image, title, donation: donate, date } = donation;

  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={`rounded-2xl shadow-lg hover:scale-[1.02] transition-transform cursor-pointer flex flex-col items-start ${
        darkTheme ? 'bg-dark4' : 'bg-white'
      }`}
    >
      <img
        className="w-full aspect-[4/3] object-cover rounded-2xl"
        src={image}
        alt={title}
      />

      {/* Desc */}
      <div className="px-6 pt-4 pb-8 grow flex flex-col items-start">
        <div className="grow">
          <h4
            className={`text-xl font-semibold mt-3 ${
              darkTheme && 'text-light2'
            }`}
          >
            {title}
          </h4>

          <ul
            className={`text-lg ${
              darkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            <li className="font-medium mt-3">
              Amount : <span className="font-semibold">{donate}$</span>
            </li>
            <li className="font-medium mt-1">
              Date : <span className="font-semibold">{date.split('T')[0]}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
