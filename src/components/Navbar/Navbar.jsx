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

  const { user, darkTheme, setDarkTheme } = useContext(AuthContext);
  const navigate = useNavigate();

  const img = new Image();
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);
  img.src = user?.photoURL;

  const handleTheme = () => {
    document.body.style.backgroundColor = darkTheme ? '#f7f7f7' : '#303030';
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="w-full fixed top-0 inset-x-0 z-10">
      <div className="w-full">
        <nav
          className={`${
            darkTheme ? 'bg-dark3' : 'bg-lightTrans'
          } w-[95%] max-w-[1280px] backdrop-blur-md py-6 mx-auto flex justify-between items-center gap-2 relative`}
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
            className={`text-white bg-tealTrans md:bg-transparent backdrop-blur-md md:backdrop-blur-none font-medium py-8 md:py-0 rounded-xl overflow-hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-2 lg:gap-4 xl:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20 ${
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
              <NavLink to="/help">Add Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)} className="text-nowrap">
              <NavLink to="/dashboard">My Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)} className="text-nowrap">
              <NavLink to="/my_donation">My Donation</NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Button */}
            <button
              onClick={handleTheme}
              className="bg-transparent w-12 h-12 p-0.5 bd-dark rounded-full"
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
                  className="bg-transparent w-12 h-12 p-0.5 border-2 border-teal rounded-full"
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={isValidUrl ? user.photoURL : userIcon}
                    alt=""
                  />
                </button>
                {/* <button
                  onClick={signOutUser}
                  className="text-teal text-lg font-medium px-5 py-2 border-2 border-teal rounded-full hidden md:block"
                >
                  Log Out
                </button> */}
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
