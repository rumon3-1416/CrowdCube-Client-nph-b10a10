import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../features/AuthProvider';

import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

import googleIcon from '../../assets/icons/google.png';
import githubIcon from '../../assets/icons/github.png';
import fbIcon from '../../assets/icons/fb.png';
import {
  emailPassSignIn,
  facebookSignIn,
  githubSignIn,
  googleSignIn,
} from '../../features/authFunc';
import MainLayout from '../../layouts/MainLayout';

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [errMessage, setErrMessage] = useState(null);
  const [inpEmail, setInpEmail] = useState('');

  const { setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  const desired = location.state?.pathname || '/';

  // Email Password Log In Handler
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    emailPassSignIn(email, password)
      .then(() => {
        setIsLoading(false);
        navigate(desired);
      })
      .catch(err => setErrMessage(err.message));
  };

  // Popup Log In Handler
  const handlePopup = pop => {
    (pop === 'google'
      ? googleSignIn()
      : pop === 'github'
      ? githubSignIn()
      : pop === 'fb' && facebookSignIn()
    )
      .then(() => {
        setIsLoading(false);
        navigate(desired);
      })
      .catch(err => setErrMessage(err.message));
  };

  useEffect(() => {
    document.title = 'Log In | Crowdcube';
  }, []);

  return (
    <div className="bg-[#5DADAA0e] pb-24">
      <MainLayout>
        <section className="min-h-[80vh] p-6 md:p-10 flex justify-center items-center">
          <div className="text-[#403F3F bg-[#fff7f7] w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 pt-12 md:pt-16 pb-16 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
              Log In to Continue
            </h3>
            {/* border */}
            <div className="border border-[#E7E7E7] my-8"></div>

            {/* Email Password Sign In */}
            <form
              onSubmit={handleSubmit}
              className="md:px-6 flex flex-col gap-6"
            >
              {/* Email */}
              <div>
                <p className="text-xl font-semibold mb-4">Email</p>
                <input
                  onChange={e => setInpEmail(e.target.value)}
                  className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <p className="text-xl font-semibold mb-4">Password</p>
                <input
                  className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md mb-3"
                  id="password"
                  name="password"
                  type={showPass ? `text` : `password`}
                  placeholder="Enter password"
                  required
                />
                <button
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-16 right-4 rounded-full"
                  type="button"
                >
                  {showPass ? (
                    <IoEyeOutline className="text-2xl" />
                  ) : (
                    <FaRegEyeSlash className="text-2xl" />
                  )}
                </button>
              </div>

              {/* Error message */}
              <p className="text-red-500">{errMessage || ''}</p>

              {/* Submit */}
              <button
                className="bg-teal hover:bg-coral2 text-white text-xl font-semibold px-5 py-4 rounded-full"
                type="submit"
              >
                Log In
              </button>
            </form>

            <p className="text-[#706F6F] text-center font-semibold mt-7">
              Don’t Have An Account ?{' '}
              <Link className="text-coral whitespace-nowrap" to="/signup">
                Register
              </Link>
            </p>

            {/* or border */}
            <div className="my-6 grid grid-cols-[1fr,_40px,_1fr] items-center">
              <div className="border border-[#8d8b8b]"></div>
              <p className="text-[#403F3F] text-2xl font-medium text-center">
                or
              </p>
              <div className="border border-[#8d8b8b]"></div>
            </div>

            {/* PopUp Buttons */}
            <div>
              {/* Google Sign In */}
              <button
                onClick={() => handlePopup('google')}
                className="w-full sm:text-xl font-semibold p-4 border-2 border-teal hover:border-coral rounded-full flex justify-center items-center gap-2 sm:gap-4"
              >
                <img className="w-6 sm:w-8" src={googleIcon} alt="G" />
                <span>Continue With Google</span>
              </button>

              {/* Github Sign In */}
              <button
                onClick={() => handlePopup('github')}
                className="w-full sm:text-xl font-semibold p-4 border-2 border-teal hover:border-coral mt-5 rounded-full flex justify-center items-center gap-2 sm:gap-4"
              >
                <img className="w-6 sm:w-8" src={githubIcon} alt="G" />
                <span>Continue With Github</span>
              </button>

              {/* Facebook Sign In */}
              <button
                onClick={() => handlePopup('fb')}
                className="w-full sm:text-xl font-semibold p-4 border-2 border-teal hover:border-coral mt-5 rounded-full flex justify-center items-center gap-2 sm:gap-4"
              >
                <img className="w-6 sm:w-8" src={fbIcon} alt="G" />
                <span>Continue With Facebook</span>
              </button>
            </div>
          </div>
        </section>
      </MainLayout>
    </div>
  );
};

export default SignIn;
