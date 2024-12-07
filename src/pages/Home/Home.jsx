import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import MainLayout from '../../layouts/MainLayout';
import HomeCampaigns from './HomeCampaigns/HomeCampaigns';
import About from './About/About';
import Volunteer from './Volunteer/Volunteer';
import Categories from './Categories/Categories';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | CrowdCube';
  }, []);

  return (
    <>
      <Banner />
      <About />
      <HomeCampaigns />
      <Categories />
      <Volunteer />
    </>
  );
};

export default Home;
