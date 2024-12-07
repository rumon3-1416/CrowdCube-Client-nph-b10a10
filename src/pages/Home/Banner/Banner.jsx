import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Slide from './Slide';
import './carousel.css';
import { AuthContext } from '../../../features/AuthProvider';
import { get } from '../../../services/api';
import Loading from '../../../components/Loading/Loading';
import MainLayout from '../../../layouts/MainLayout';

const Banner = () => {
  const [offersData, setOffersData] = useState([]);

  const { serverUrl } = useContext(AuthContext);

  useEffect(() => {
    get(`${serverUrl}/slides`).then(data => data && setOffersData(data));
  }, [serverUrl]);

  return (
    <section className="bg-coralBg">
      <MainLayout>
        {offersData?.length >= 3 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
          >
            {offersData.length >= 2 &&
              offersData?.map(data => (
                <SwiperSlide key={data._id}>
                  <Slide data={data} />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </MainLayout>
    </section>
  );
};

export default Banner;
