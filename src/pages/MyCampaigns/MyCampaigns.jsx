import React, { useContext, useEffect, useState } from 'react';

import MainLayout from '../../layouts/MainLayout';
import { AuthContext } from '../../features/AuthProvider';
import CampaignRow from './CampaignRow';
import { get } from '../../services/api';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { darkTheme, serverUrl, user } = useContext(AuthContext);

  useEffect(() => {
    get(`${serverUrl}/campaigns?user_email=${user.email}`).then(
      data => data && setCampaigns(data)
    );
  }, [serverUrl, user]);

  return (
    <section className="bg-[#5DADAA0e] pt-8 pb-24">
      <MainLayout>
        <h1
          className={`text-2xl leading-[44px] font-semibold ${
            darkTheme ? 'text-light2' : 'text-dark'
          }`}
        >
          Your Campaigns
        </h1>

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
                <th>Donation</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {campaigns.length > 0 &&
                campaigns.map((campaign, index) => (
                  <CampaignRow
                    key={campaign._id}
                    campaign={campaign}
                    setCampaigns={setCampaigns}
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

export default MyCampaigns;
