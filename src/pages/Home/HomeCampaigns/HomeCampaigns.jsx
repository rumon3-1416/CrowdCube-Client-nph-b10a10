import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../features/AuthProvider';
import CampaignCard from './CampaignCard';

const HomeCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { serverUrl, darkTheme } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${serverUrl}/campaigns?limit=8&latest=true`)
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, [serverUrl]);

  return (
    <section id="campaigns" className="mt-24">
      <h2
        className={`text-3xl font-bold ${
          darkTheme ? 'text-light2' : 'text-gray-800'
        }`}
      >
        Our Running Campaigns
      </h2>
      <p className="text-coral font-medium mt-4 mb-10">
        How do something great to help others
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {campaigns.length > 0 &&
          campaigns?.map(campaign => (
            <CampaignCard key={campaign._id} campaign={campaign} />
          ))}
      </div>
    </section>
  );
};

export default HomeCampaigns;
