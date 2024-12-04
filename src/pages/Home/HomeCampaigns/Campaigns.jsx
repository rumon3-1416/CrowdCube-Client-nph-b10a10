import React, { useEffect, useState } from 'react';
import Upcoming from './Upcoming';
import Campaign from './Campaign';

const Campaigns = () => {
  const [upcomingData, setUpcomingData] = useState([]);
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    document.title = 'Campaigns | Clothing Donation';

    fetch('upcoming.json')
      .then(res => res.json())
      .then(data => setUpcomingData(data))
      .catch(err => alert(err.message));

    fetch('donationData.json')
      .then(res => res.json())
      .then(data => setDonationData(data))
      .catch(err => alert(err.message));
  }, []);

  return (
    <div className="w-[95%] max-w-[1280px] mx-auto">
      <section className="bg-[#E6F1EF] px-3 md:px-6 lg:px-12 pt-16 pb-10 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-8 lg:gap-12">
        {/* Upcoming Cards */}
        <div className="md:order-2 grid grid-cols-2 gap-6">
          {upcomingData.map(data => (
            <Upcoming key={data.id} data={data} />
          ))}
        </div>
        {/* Upcoming desc */}
        <div className="md:order-1">
          <h2 className="max-w-[400px] text-3xl font-bold text-gray-800 mb-5">
            Ready to Join Our Latest Upcoming Events
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Join the community to give education for the children and together
            make them educated for their lives. We help companies develop
            powerful corporate. Every man must decide whether he will walk in
            the light of creative altruism or in the darkness.
          </p>
          <button
            onClick={() =>
              document
                .getElementById('campaigns')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-[#0a7558] text-white font-semibold px-6 py-3 rounded-xl me-auto"
          >
            Discover More
          </button>
        </div>
      </section>

      <section id="campaigns" className="mt-24">
        <p className="text-[#EC922D] font-medium  mb-3">Our Campaigns</p>
        <h2 className="max-w-[400px] text-3xl font-bold text-gray-800 mb-10">
          How do something great to help others
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {donationData.map(data => (
            <Campaign key={data.id} data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
