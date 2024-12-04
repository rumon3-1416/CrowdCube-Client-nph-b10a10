import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import MainLayout from '../../layouts/MainLayout';
import HomeCampaigns from './HomeCampaigns/HomeCampaigns';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Clothing Donation';
  }, []);

  return (
    <MainLayout>
      <Banner />
      <HomeCampaigns />
    </MainLayout>
  );
};

export default Home;
