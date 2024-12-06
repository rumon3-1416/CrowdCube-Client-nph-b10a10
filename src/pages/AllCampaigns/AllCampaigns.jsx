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

  return (
    <section className="bg-[#5DADAA0e] pt-8 pb-24">
      <MainLayout>
        <h1
          className={`text-4xl leading-[44px] font-semibold text-center mb-8 ${
            darkTheme ? 'text-light2' : 'text-dark'
          }`}
        >
          All Campaigns
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
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
                <th>Type</th>
                <th>Deadline</th>
                <th>View</th>
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
