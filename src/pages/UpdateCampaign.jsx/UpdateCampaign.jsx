import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import MainLayout from '../../layouts/MainLayout';
import { AuthContext } from '../../features/AuthProvider';
import { useParams } from 'react-router-dom';
import { get, patch } from '../../services/api';

const UpdateCampaign = () => {
  const [campaign, setCampaign] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  const { title, type, minimumDonation, image, description, name, email } =
    campaign;

  const { id } = useParams();
  const { darkTheme, serverUrl } = useContext(AuthContext);

  const labelColor = darkTheme ? 'text-gray-300' : 'text-gray-700';
  const inputColor = darkTheme
    ? 'bg-dark3 text-gray-200'
    : 'bg-light2 text-gray-800';

  useEffect(() => {
    get(`${serverUrl}/campaigns/${id}`).then(data => {
      setCampaign(data);
      setStartDate(new Date(data.deadline));
    });
  }, [serverUrl, id]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const minimumDonation = form.amount.value;
    const image = form.url.value;
    const deadline = startDate.toISOString();
    const description = form.description.value;
    const name = form.name.value;
    const email = form.email.value;

    patch(`${serverUrl}/campaigns/${id}`, {
      title,
      type,
      minimumDonation,
      image,
      deadline,
      description,
      name,
      email,
    }).then(res => console.log(res));
  };

  return (
    <div className="bg-[#5DADAA0e] pt-8 pb-24">
      <MainLayout>
        <div className="bg-[#FF74680e] px-8 py-10 rounded-xl shadow-lg">
          <h3
            className={`text-3xl font-bold text-center mb-12 ${
              darkTheme ? 'text-light2' : 'text-gray-800'
            }`}
          >
            Update Campaign
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="title"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Campaign Title
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                id="title"
                type="text"
                name="title"
                placeholder="Campaign Title"
                defaultValue={title}
                required
              />
            </div>

            {/* Type */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="type"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Campaign Type
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="type"
                name="type"
                placeholder="Campaign Type"
                defaultValue={type}
                required
              />
            </div>

            {/* Amount */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="amount"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Minimum Amount
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="number"
                id="amount"
                name="amount"
                placeholder="Minimum Donation Amount"
                defaultValue={minimumDonation}
                required
              />
            </div>

            {/* URL */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="url"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Image URL
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="url"
                name="url"
                placeholder="Campaign Image URL"
                defaultValue={image}
                required
              />
            </div>

            {/* Date */}
            <div className="mb-6 flex flex-col">
              <p className={`font-semibold mb-2 ${labelColor}`}>
                Campaign Deadline
              </p>
              <DatePicker
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>

            {/* description */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="description"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Description
              </label>
              <textarea
                className={`w-full px-4 py-3 rounded-lg outline-none resize-none ${inputColor}`}
                id="description"
                name="description"
                placeholder="Write a short description about you campaign"
                rows="4"
                defaultValue={description}
                required
              ></textarea>
            </div>

            {/* Name */}
            <div className="mb-6 flex flex-col">
              <label
                htmlFor="name"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Name
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                readOnly
              />
            </div>

            {/* Email */}
            <div className="mb-12 flex flex-col">
              <label
                htmlFor="email"
                className={`font-semibold mb-2 ${labelColor}`}
              >
                Email
              </label>
              <input
                className={`w-full px-4 py-3 rounded-lg outline-none ${inputColor}`}
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                readOnly
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal text-light2 hover:bg-coral2 text-xl font-semibold px-12 py-2.5 rounded-full"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </MainLayout>
    </div>
  );
};

export default UpdateCampaign;
