import React from 'react';

import fbIcon from '../../assets/icons/facebook.png';
import twitterIcon from '../../assets/icons/twitter.png';
import instIcon from '../../assets/icons/instagram.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#F3E7D3] to-[#D3E3DC] mt-[100px]">
      <div className="w-[95%] max-w-[1280px] mx-auto">
        <div className="pt-24 pb-10 grid grid-cols-1 md:grid-cols-[2fr,_3fr] gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              <span className="text-[#EC922D]">Clothing</span>
              <span className="text-[#0a7558]">Donation</span>
            </h2>
            <p className="text-[#09080F99] max-w-80 text-sm font-medium text-justify">
              Clothing Donation is a digital platform for collecting donations
              to be distributed to people in need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[2fr,_2fr,_3fr] gap-4">
            <div>
              <p className="text-[#0e1513] text-lg font-semibold mb-4">Menu</p>
              <ul className="text-[#0e151399] cursor-pointer">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/campaigns">Campaign</Link>
                </li>
                <li>
                  <Link to="/help">Help</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#0e1513] text-lg font-bold mb-4">About Us</p>
              <ul className="text-[#0e151399] cursor-pointer">
                <li>About Us</li>
                <li>FAQ</li>
                <li>Help</li>
              </ul>
            </div>

            <div>
              <p className="text-[#0e1513] text-lg font-bold mb-4">
                Contact Us
              </p>
              <p className="text-[#0e151399] mb-2">
                House 12, Road 5, Dhanmondi, Dhaka
              </p>
              <p className="text-[#0e151399] mb-1">cloth@don.com</p>
              <p className="text-[#0e151399]">Call: 01512345678</p>
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
      <div className="border border-light"></div>

      {/* Copyright */}
      <div className="w-[95%] max-w-[1280px] mx-auto text-[#0e151399] py-6 flex justify-between">
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
