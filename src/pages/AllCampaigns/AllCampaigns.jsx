import React, { useContext, useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { AuthContext } from '../../features/AuthProvider';
import CampaignRow from './CampaignRow';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { darkTheme, serverUrl } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${serverUrl}/campaigns`)
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, [serverUrl]);

  const handleSort = method => {
    const sortedCampaigns = [...campaigns].sort((a, b) =>
      method === 'l-h'
        ? a.minimumDonation - b.minimumDonation
        : method === 'h-l' && b.minimumDonation - a.minimumDonation
    );
    setCampaigns(sortedCampaigns);
  };

  return (
    <section className="bg-[#5DADAA0e] pt-8 pb-24">
      <MainLayout>
        <h1
          className={`text-2xl leading-[44px] font-semibold ${
            darkTheme ? 'text-light2' : 'text-dark'
          }`}
        >
          All Campaigns
        </h1>

        <div className="flex justify-end">
          <div className="group cursor-pointer relative">
            <p className="bg-teal text-gray-100 font-medium w-28 px-4 py-1 rounded-t-lg rounded-b-lg group-hover:rounded-b-none">
              Sort By
            </p>

            <ul className="bg-teal text-light2 w-28 font-medium rounded-b-lg hidden group-hover:block absolute top-8 right-0 z-10">
              <li
                onClick={() => handleSort('l-h')}
                className="hover:text-coral text-nowrap px-4 py-1"
              >
                Low-High
              </li>
              <li
                onClick={() => handleSort('h-l')}
                className="hover:text-coral text-nowrap px-4 py-1 rounded-b-lg"
              >
                High-Low
              </li>
            </ul>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr
                className={`border border-[#C7E5E3] ${
                  darkTheme && 'text-light2'
                }`}
              >
                <th>No</th>
                <th>Title</th>
                <th>Deadline</th>
                <th className="text-center">Min-Donation</th>
                <th className="text-center">View</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {campaigns.length > 0 &&
                campaigns.map((campaign, index) => (
                  <CampaignRow
                    key={campaign._id}
                    campaign={campaign}
                    index={index}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </MainLayout>
    </section>
  );
};

export default AllCampaigns;
