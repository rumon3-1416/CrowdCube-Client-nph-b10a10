import React, { useContext } from 'react';
import { AuthContext } from '../../features/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CampaignRow = ({ campaign, index }) => {
  const { _id, title, deadline, minimumDonation } = campaign;

  const navigate = useNavigate();
  const { darkTheme } = useContext(AuthContext);

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
      <td
        onClick={() => navigate(`/update_campaign/${_id}`)}
        className="text-teal hover:text-coral cursor-pointer"
      >
        Update
      </td>
      <td className="text-teal hover:text-coral cursor-pointer">Delete</td>
    </tr>
  );
};

export default CampaignRow;
