import React, { useContext, useEffect, useState } from 'react';
import { get } from '../../services/api';
import { AuthContext } from '../../features/AuthProvider';
import MainLayout from '../../layouts/MainLayout';
import DonationCard from './DonationCard';

const MyDonations = () => {
  const [donations, setDonations] = useState([]);

  const { darkTheme, serverUrl, user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'My Donations | CrowdCube';

    get(`${serverUrl}/donations?user_email=${user.email}`).then(data =>
      setDonations(data)
    );
  }, [serverUrl, user]);

  return (
    <section id="campaigns" className="bg-tealBg pt-16 pb-24">
      <MainLayout>
        <h2
          className={`text-3xl font-bold mb-10 ${
            darkTheme ? 'text-light2' : 'text-gray-800'
          }`}
        >
          Your Donations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {donations.length > 0 &&
            donations?.map(donation => (
              <DonationCard key={donation._id} donation={donation} />
            ))}
        </div>
      </MainLayout>
    </section>
  );
};

export default MyDonations;
