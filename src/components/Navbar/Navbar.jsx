import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../features/AuthProvider';
import { signOutUser } from '../../features/authFunc';

import lightIcon from '../../assets/icons/light.png';
import darkIcon from '../../assets/icons/night.png';
import menuIcon from '../../assets/icons/menu.png';
import userIcon from '../../assets/icons/user.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { user, darkTheme, setDarkTheme } = useContext(AuthContext);
  const navigate = useNavigate();

  const img = new Image();
  img.src = user?.photoURL;
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);

  const handleTheme = () => {
    document.body.style.backgroundColor = darkTheme ? '#f7f7f7' : '#303030';
    window.document.documentElement.classList.add(
      darkTheme ? 'bg-[#f7f7f7]' : 'bg-dark3'
    );
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="w-full fixed top-0 inset-x-0 z-10">
      <div
        className={`w-full ${darkTheme ? 'bg-dark5Trans' : 'bg-lightTrans'}`}
      >
        <nav
          className={`w-[95%] max-w-[1280px] backdrop-blur-md py-6 mx-auto flex justify-between items-center gap-2 relative`}
        >
          <h2
            onClick={() => navigate('/')}
            className={`${
              darkTheme ? 'text-white' : 'text-black'
            } text-xl font-bold cursor-pointer`}
          >
            CrowdCube
          </h2>

          <ul
            className={`text-white bg-tealTrans md:bg-transparent backdrop-blur-md md:backdrop-blur-none md:text-sm lg:text-base font-medium py-8 md:py-0 rounded-xl overflow-hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20 ${
              showNav ? 'flex' : 'hidden'
            }
            ${darkTheme ? 'md:text-lightTrans' : 'md:text-[#32443f]'}`}
          >
            <li onClick={() => setShowNav(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setShowNav(false)}>
              <NavLink to="/campaigns">Campaigns</NavLink>
            </li>
            <li onClick={() => setShowNav(false)} className="text-nowrap">
              <NavLink to="/add_campaign">Add Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)} className="text-nowrap">
              <NavLink to="/my_campaign">My Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)} className="text-nowrap">
              <NavLink to="/my_donation">My Donation</NavLink>
            </li>
            {!user && (
              <li
                onClick={() => setShowNav(false)}
                className="text-nowrap md:hidden"
              >
                <NavLink to="/signup">Register</NavLink>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2 lg:gap-3 relative">
            {/* Theme Button */}
            <button
              onClick={handleTheme}
              className="bg-transparent w-12 h-12 p-2.5 bd-dark rounded-full"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={darkTheme ? lightIcon : darkIcon}
                alt=""
              />
            </button>

            {user ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  onMouseOver={() => setShowProfile(true)}
                  onMouseOut={() => setShowProfile(false)}
                  className="bg-transparent w-12 h-12 p-0.5 border-2 border-teal rounded-full"
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={isValidUrl ? user.photoURL : userIcon}
                    alt=""
                  />
                </button>

                {/* Profile Info */}
                <div
                  onMouseOver={() => setShowProfile(true)}
                  onMouseOut={() => setShowProfile(false)}
                  className={`p-2 top-10 right-2 absolute ${
                    showProfile ? 'block' : 'hidden'
                  }`}
                >
                  <div
                    className={`text-center p-4 pb-5 rounded-lg shadow-md shadow-[#7b7b7b] ${
                      darkTheme ? 'bg-dark4 text-light2' : 'bg-light2 text-dark'
                    }`}
                  >
                    <h2 className="font-semibold text-nowrap">
                      {user.displayName}
                    </h2>
                    <button
                      onClick={() => signOutUser()}
                      className="text-teal font-medium px-3 py-1 mt-3 border-2 border-teal rounded-full"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* User */}
                <button
                  onClick={() => navigate('/signin')}
                  className={`${
                    darkTheme ? 'bg-dark3' : 'bg-light2'
                  } w-12 h-12 p-0.5 border-2 border-teal rounded-full lg:hidden`}
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={userIcon}
                    alt="profile"
                  />
                </button>

                <div className="hidden lg:flex items-center">
                  {/* Login */}
                  <button
                    onClick={() => navigate('/signin')}
                    className="text-teal text-lg font-medium ps-5 xl:ps-9 pe-1.5 xl:pe-5 py-2 border-2 border-teal rounded-s-full"
                  >
                    Login
                  </button>
                  {/* Register */}
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-teal text-white text-lg font-medium ps-1.5 xl:ps-5 pe-5 xl:pe-9 py-2  border-2 border-teal rounded-e-full"
                  >
                    Register
                  </button>
                </div>
              </>
            )}

            {/* Menubar */}
            <button
              onClick={() => setShowNav(!showNav)}
              className="p-2.5 border-2 border-teal rounded-full md:hidden"
            >
              <img className="w-6" src={menuIcon} alt="menu" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
