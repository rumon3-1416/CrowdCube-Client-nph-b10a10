import React, { useContext } from 'react';

import clockIcon from '../../../assets/icons/clock.png';
import { AuthContext } from '../../../features/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { _id, image, title, description, deadline } = campaign;

  const navigate = useNavigate();
  const { darkTheme } = useContext(AuthContext);

  return (
    <div
      className={`rounded-2xl shadow-lg flex flex-col items-start ${
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
          {/* Deadline */}
          <div className="bg-[#ff75681f] px-3 py-1 rounded-full inline-flex items-center gap-1">
            <img className="h-5" src={clockIcon} alt="time" />
            <p className="text-coral ms-1">{deadline.split('T')[0]}</p>
          </div>

          <h4
            className={`text-xl font-semibold mt-3 ${
              darkTheme && 'text-light2'
            }`}
          >
            {title}
          </h4>

          <p
            className={`mt-2 mb-4 ${
              darkTheme ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {description?.slice(0, 74) + '...'}
          </p>
        </div>

        <button
          onClick={() => navigate(`/campaigns/${_id}`)}
          className="bg-teal text-white font-medium px-6 py-2.5 rounded-full"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
