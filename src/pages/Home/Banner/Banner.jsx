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

const Banner = () => {
  const [offersData, setOffersData] = useState([]);

  const { serverUrl } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${serverUrl}/slides`)
      .then(res => res.json())
      .then(data => setOffersData(data));
  }, []);

  return (
    <section>
      {offersData?.length > 2 && (
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
          {offersData?.map(data => (
            <SwiperSlide key={data._id}>
              <Slide data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Banner;
