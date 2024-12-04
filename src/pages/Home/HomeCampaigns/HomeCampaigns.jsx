import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../features/AuthProvider';
import CampaignCard from './CampaignCard';

const HomeCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  const { serverUrl } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${serverUrl}/campaigns?limit=6&latest=true`)
      .then(res => res.json())
      .then(data => setCampaigns(data));
  }, [serverUrl]);

  return (
    <div>
      <h2>Hello</h2>

      <div>
        {campaigns.length > 0 &&
          campaigns?.map(campaign => <CampaignCard key={campaign._id} />)}
      </div>
    </div>
  );
};

export default HomeCampaigns;
