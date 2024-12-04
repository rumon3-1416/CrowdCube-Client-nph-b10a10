import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import MainLayout from '../../layouts/MainLayout';

const Home = () => {
  useEffect(() => {
    document.title = 'Home | Clothing Donation';
  }, []);

  return (
    <MainLayout>
      <Banner />
    </MainLayout>
  );
};

export default Home;
