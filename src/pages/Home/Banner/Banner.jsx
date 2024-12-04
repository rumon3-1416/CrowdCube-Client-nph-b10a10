import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'animate.css';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Slide from './Slide';
import './carousel.css';

const Banner = () => {
  const [offersData, setOffersData] = useState([]);

  useEffect(() => {
    fetch('bannerCarousel.json')
      .then(res => res.json())
      .then(data => setOffersData(data));
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className={`slider-container ${
        inView ? 'animate__animated animate__zoomIn' : ''
      }`}
      style={{ animationDelay: '0.5s' }}
    >
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
