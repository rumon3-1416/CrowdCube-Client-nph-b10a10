import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../features/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { updateUserProfile } from '../../features/authFunc';

const UpdateProfile = () => {
  const [errMessage, setErrMessage] = useState(null);

  const { setIsLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { displayName: oName, photoURL: oUrl } = user;

  const handleSubmit = e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    // Update Name & Photo
    if (displayName !== oName || photoURL !== oUrl) {
      updateUserProfile(user, { displayName, photoURL })
        .then(() => navigate('/dashboard'))
        .catch(err => setErrMessage(err.message))
        .finally(setIsLoading(false));
    }
  };

  useEffect(() => {
    document.title = 'Update Profile | Clothing Donation';
  }, []);

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 py-16 rounded-2xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Update Information
        </h3>
        {/* border */}
        <div className="border border-[#E7E7E7] my-8"></div>

        <form onSubmit={handleSubmit} className="md:px-6 flex flex-col gap-6">
          {/* Name */}
          <div>
            <p className="text-xl font-semibold mb-4">Name</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="name"
              name="name"
              type="text"
              placeholder="Enter new name"
              defaultValue={oName || ''}
            />
          </div>
          {/* Photo */}
          <div>
            <p className="text-xl font-semibold mb-4">Photo URL</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter new photo url"
              defaultValue={oUrl || ''}
            />
          </div>
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#0a7558] text-white text-xl font-semibold px-5 py-4 mt-6 rounded-xl"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
