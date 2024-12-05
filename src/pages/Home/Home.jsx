import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import MainLayout from '../../layouts/MainLayout';
import HomeCampaigns from './HomeCampaigns/HomeCampaigns';
import About from './About/About';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Clothing Donation';
  }, []);

  return (
    <MainLayout>
      <Banner />
      <HomeCampaigns />
      <About />
    </MainLayout>
  );
};

export default Home;
