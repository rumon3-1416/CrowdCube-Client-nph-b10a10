import React, { useContext } from 'react';

import fbIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instIcon from '../../assets/icons/instagram.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';

const Footer = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <footer
      className={`bg-gradient-to-tr mt-[100px] ${
        darkTheme
          ? 'from-[#303030] to-[#606060]'
          : 'from-[#ecdad9] to-[#d3ebea]'
      }`}
    >
      <div className="w-[95%] max-w-[1280px] mx-auto">
        <div className="pt-24 pb-10 grid grid-cols-1 md:grid-cols-[2fr,_3fr] gap-8">
          {/* Intro */}
          <div>
            <h2
              className={`text-2xl font-semibold mb-3 ${
                darkTheme ? 'text-light2' : 'text-dark'
              }`}
            >
              CrowdCube
            </h2>
            <p
              className={`max-w-80 text-sm font-medium text-justify ${
                darkTheme ? 'text-[#b0b0b0]' : 'text-[#09080F99]'
              }`}
            >
              CrowdCube is a digital platform for collecting donations to be
              distributed to people in need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[2fr,_2fr,_3fr] gap-4">
            {/* Menu */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                Menu
              </p>
              <ul
                className={`cursor-pointer ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/campaigns">Campaign</Link>
                </li>
                <li>
                  <Link to="/add_campaign">Add Campaign</Link>
                </li>
                <li>
                  <Link to="/my_campaign">My Campaign</Link>
                </li>
                <li>
                  <Link to="/my_donation">My Donation</Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                About Us
              </p>
              <ul
                className={`cursor-pointer ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                <li>About Us</li>
                <li>FAQ</li>
                <li>Help</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p
                className={`text-lg font-semibold mb-4 ${
                  darkTheme ? 'text-light2' : 'text-[#0e1513]'
                }`}
              >
                Contact Us
              </p>
              <p
                className={`mb-2 ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                House 12, Road 5, Dhanmondi, Dhaka
              </p>
              <p
                className={`mb-1 ${
                  darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
                }`}
              >
                crowd@cube.com
              </p>
              <p className={darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'}>
                Call: 01512345678
              </p>
              {/* Social links */}
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={() => window.open('https://facebook.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={fbIcon} alt="fb" />
                </button>
                <button
                  onClick={() => window.open('https://x.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={twitterIcon} alt="x" />
                </button>
                <button
                  onClick={() => window.open('https://instagram.com')}
                  className="rounded-md"
                >
                  <img className="w-6" src={instIcon} alt="instagram" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <div
        className={`border ${darkTheme ? 'border-[#252525]' : 'border-white'}`}
      ></div>

      {/* Copyright */}
      <div
        className={`w-[95%] max-w-[1280px] mx-auto py-6 flex justify-between ${
          darkTheme ? 'text-[#bfbfbf]' : 'text-[#0e151399]'
        }`}
      >
        <p>Copyright &copy; 2024. All Right Reserved.</p>

        <ul className="flex gap-6">
          <li>TErms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
