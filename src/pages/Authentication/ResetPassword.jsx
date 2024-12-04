import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { resetPassword } from '../../features/authFunc';

const ResetPassword = () => {
  const [errMessage, setErrMessage] = useState(null);

  const { state } = useLocation();

  // Email Password Log In Handler
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => window.open('https://mail.google.com'))
      .catch(err => setErrMessage(err.message));

    e.target.reset();
  };

  useEffect(() => {
    document.title = 'Reset Password | Clothing Donation';
  }, []);

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 pt-12 md:pt-16 pb-16 rounded-2xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
          Reset Password
        </h3>
        {/* border */}
        <div className="border border-[#E7E7E7] my-8"></div>

        {/* Email Password Sign In */}
        <form onSubmit={handleSubmit} className="md:px-6 flex flex-col gap-6">
          {/* Email */}
          <div>
            <p className="text-xl font-semibold mb-4">Email</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              defaultValue={state ? state : ''}
              required
            />
          </div>
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#0a7558] text-white text-xl font-semibold px-5 py-4 mt-6 rounded-xl"
            type="submit"
          >
            Reset Password
          </button>
        </form>

        <p className="text-[#706F6F] text-center font-semibold mt-7">
          OR{' '}
          <Link className="text-[#EC922D] whitespace-nowrap" to="/signin">
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
