import React, { useContext } from 'react';
import { AuthContext } from '../../features/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { del, get } from '../../services/api';

const CampaignRow = ({ campaign, setCampaigns, index }) => {
  const { _id, title, deadline, minimumDonation } = campaign;

  const navigate = useNavigate();
  const { darkTheme, serverUrl, user } = useContext(AuthContext);

  const handleDelete = () => {
    del(`${serverUrl}/campaigns/${_id}`).then(
      res =>
        res.acknowledged &&
        get(`${serverUrl}/campaigns?user_email=${user.email}`).then(data =>
          setCampaigns(data)
        )
    );
  };

  return (
    <tr
      className={`hover:bg-[#FF74680e] border-x border-b border-teal2 ${
        darkTheme && 'text-gray-300'
      }`}
    >
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{deadline.split('T')[0]}</td>
      <td>{`${minimumDonation}$`}</td>
      <td>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => navigate(`/update_campaign/${_id}`)}
            className="text-teal hover:text-coral px-2 rounded-md cursor-pointer"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="text-teal hover:text-coral px-2 rounded-md cursor-pointer"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CampaignRow;
