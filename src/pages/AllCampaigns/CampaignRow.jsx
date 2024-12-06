import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';

const CampaignRow = ({ campaign, index }) => {
  const { _id, title, type, deadline } = campaign;

  const { darkTheme } = useContext(AuthContext);

  return (
    <tr
      className={`hover:bg-[#FF74680e] border-x border-b border-teal2 ${
        darkTheme && 'text-gray-300'
      }`}
    >
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{type}</td>
      <td>{deadline.split('T')[0]}</td>
      <td>
        <Link
          className="text-teal hover:text-coral text-nowrap"
          to={`/campaign/${_id}`}
        >
          See More
        </Link>
      </td>
    </tr>
  );
};

export default CampaignRow;
