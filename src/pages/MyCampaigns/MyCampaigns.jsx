import React, { useContext, useEffect, useState } from 'react';

import MainLayout from '../../layouts/MainLayout';
import { AuthContext } from '../../features/AuthProvider';
import CampaignRow from './CampaignRow';
import { del, get } from '../../services/api';
import Modal from '../../components/Modal/Modal';

const MyCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [delCampId, setDelCampId] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    res: '',
    title: '',
  });

  const { darkTheme, serverUrl, user } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'My Campaigns | CrowdCube';

    get(`${serverUrl}/campaigns?user_email=${user.email}`).then(
      data => data && setCampaigns(data)
    );
  }, [serverUrl, user]);

  const handleDelete = id => {
    setDelCampId(id);

    setModal({ show: true, res: 'warn', title: 'Delete Campaign?' });
  };

  const deleteModal = () => {
    del(`${serverUrl}/campaigns/${delCampId}`).then(
      res =>
        res.acknowledged &&
        (get(`${serverUrl}/campaigns?user_email=${user.email}`).then(data =>
          setCampaigns(data)
        ),
        setDeleted(true),
        setModal({ show: true, res: 'success', title: 'Campaign Deleted' }))
    );
  };

  return (
    <section className="bg-tealBg pt-8 pb-24">
      <MainLayout>
        <h1
          className={`text-2xl leading-[44px] font-semibold ${
            darkTheme ? 'text-light2' : 'text-dark'
          }`}
        >
          Your Campaigns
        </h1>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr
                className={`border border-[#C7E5E3] ${
                  darkTheme && 'text-light2'
                }`}
              >
                <th>No</th>
                <th>Title</th>
                <th>Deadline</th>
                <th>Donation</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {campaigns.length > 0 &&
                campaigns.map((campaign, index) => (
                  <CampaignRow
                    key={campaign._id}
                    campaign={campaign}
                    index={index}
                    handleDelete={handleDelete}
                  />
                ))}
            </tbody>
          </table>

          {!deleted ? (
            <Modal property={modal}>
              <div className="flex gap-4">
                <button
                  onClick={deleteModal}
                  className="bg-coral2 text-white text-lg font-medium px-6 py-2 rounded-full"
                >
                  Delete
                </button>
                <button
                  onClick={() => setModal({ ...modal, show: false })}
                  className="bg-gray-500 text-white text-lg font-medium px-6 py-2 rounded-full"
                >
                  Cancel
                </button>
              </div>
            </Modal>
          ) : (
            <Modal property={modal}>
              <button
                onClick={() => {
                  setModal({ ...modal, show: false });
                  setDeleted(false);
                }}
                className="bg-teal text-white text-lg font-medium px-6 py-2 rounded-full"
              >
                OK
              </button>
            </Modal>
          )}
        </div>
      </MainLayout>
    </section>
  );
};

export default MyCampaigns;
