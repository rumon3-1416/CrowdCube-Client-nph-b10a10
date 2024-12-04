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
            darkTheme ? 'bg-dark3' : 'bg-light'
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
            className={`text-white bg-tealTrans md:bg-transparent backdrop-blur-md md:backdrop-blur-none font-medium py-8 md:py-0 rounded-xl md:flex flex-col md:flex-row items-center gap-4 md:gap-4 xl:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20 ${
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
            <li onClick={() => setShowNav(false)}>
              <NavLink to="/help">Add Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)}>
              <NavLink to="/dashboard">My Campaign</NavLink>
            </li>
            <li onClick={() => setShowNav(false)}>
              <NavLink to="/my_donation">My Donation</NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-2 lg:gap-3">
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
                <button
                  onClick={() => navigate('/signin')}
                  className="text-teal text-lg font-medium px-5 lg:px-9 py-2 border-2 border-teal rounded-full hidden md:block"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-teal text-white text-lg font-medium px-5 lg:px-9 py-2  border-2 border-teal rounded-full hidden md:block"
                >
                  Register
                </button>
              </>
            )}

            {!user && (
              <button
                onClick={() => navigate('/signin')}
                className="bg-[#f7f7f7] w-12 h-12 p-0.5 border-2 border-teal rounded-full md:hidden"
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={userIcon}
                  alt="profile"
                />
              </button>
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
