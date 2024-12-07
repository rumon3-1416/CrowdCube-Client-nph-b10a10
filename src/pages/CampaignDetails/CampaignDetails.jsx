import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../features/AuthProvider';
import { useParams } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import { get, post } from '../../services/api';

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});

  const { _id, title, image, description, type, deadline, minimumDonation } =
    campaign;

  const { id } = useParams();
  const { serverUrl, darkTheme, user } = useContext(AuthContext);

  useEffect(() => {
    get(`${serverUrl}/campaigns/${id}`).then(data => data && setCampaign(data));
  }, [id, serverUrl]);

  const handlePostDonate = () => {
    const { displayName: name, email } = user;
    const date = new Date().toISOString();

    if (new Date(deadline) >= new Date()) {
      post(`${serverUrl}/donations`, {
        title,
        image,
        donation: minimumDonation,
        date,
        name,
        email,
      }).then(res => console.log(res));
    } else {
      console.log('Date Expired!');
    }
  };

  return (
    <div className="bg-[#5DADAA0e] pt-12 pb-24">
      <MainLayout>
        <div className="bg-[#FF74680e] p-8 shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            className="
        w-full aspect-video md:aspect-[4/3] lg:aspect-video object-cover rounded-xl"
            src={image}
            alt={title}
          />

          {/* Description */}
          <div className="flex flex-col justify-between items-start">
            <div>
              <h2
                className={`text-2xl font-bold mb-6 ${
                  darkTheme ? 'text-light2' : 'text-gray-800'
                }`}
              >
                {title}
              </h2>
              <p
                className={`${
                  darkTheme ? 'text-gray-300' : 'text-gray-600'
                } mb-8`}
              >
                {description}
              </p>
              <p
                className={`${
                  darkTheme ? 'text-gray-200' : 'text-gray-700'
                } mb-1.5`}
              >
                Type :<span className="font-semibold"> {type}</span>
              </p>
              <p
                className={`${
                  darkTheme ? 'text-gray-200' : 'text-gray-700'
                } mb-1.5`}
              >
                Deadline :
                <span className="font-semibold">
                  {' '}
                  {deadline?.split('T')[0]}
                </span>
              </p>
              <p
                className={`${
                  darkTheme ? 'text-gray-200' : 'text-gray-700'
                } mb-8`}
              >
                Min-Donation :
                <span className="font-semibold"> {minimumDonation}$</span>
              </p>
            </div>

            {/* Donate Button */}
            <button
              onClick={handlePostDonate}
              className="bg-teal text-light2 hover:text-coral font-medium px-9 py-2 mt-auto mb-2 rounded-full"
            >
              Donate
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default CampaignDetails;
