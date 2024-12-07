import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../features/AuthProvider';
import CampaignCard from './CampaignCard';
import MainLayout from '../../../layouts/MainLayout';
import { get } from '../../../services/api';

const HomeCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { serverUrl, darkTheme } = useContext(AuthContext);

  useEffect(() => {
    get(`${serverUrl}/campaigns?limit=8&latest=true`).then(
      data => data && setCampaigns(data)
    );
  }, [serverUrl]);

  return (
    <section id="campaigns" className="bg-coralBg pt-16 pb-12">
      <MainLayout>
        <h2
          className={`text-3xl font-bold ${
            darkTheme ? 'text-light2' : 'text-gray-800'
          }`}
        >
          Our Running Campaigns
        </h2>
        <p className="text-coral3 font-medium mt-4 mb-10">
          How do something great to help others
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {campaigns.length > 0 &&
            campaigns?.map(campaign => (
              <CampaignCard key={campaign._id} campaign={campaign} />
            ))}
        </div>
      </MainLayout>
    </section>
  );
};

export default HomeCampaigns;
