import React, { useContext } from 'react';
import MainLayout from '../../../layouts/MainLayout';
import { AuthContext } from '../../../features/AuthProvider';

import volunteerImg from '../../../assets/images/volunteer.png';
import volunteerIcon from '../../../assets/icons/volunteer.png';
import helpIcon from '../../../assets/icons/help.png';

const Volunteer = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <section className="bg-coralBg py-24">
      <MainLayout>
        <div className="grid md:grid-cols-[2fr,_3fr] items-center gap-8">
          {/* Images */}
          <div className="ps-10 md:order-2 relative">
            {/* 750+ */}
            <div
              className={`text-center px-6 py-3 rounded-xl shadow-lg absolute top-[7%] left-[5%] md:left-[15%] ${
                darkTheme ? 'bg-[#545454]' : 'bg-white'
              }`}
            >
              <p className="text-teal md:text-lg font-semibold">Volunteer</p>
              <p className="text-coral2 text-2xl md:text-3xl font-semibold md:mt-2">
                750+
              </p>
            </div>

            {/* Image */}
            <img
              className="w-full h-full aspect-square object-cover rounded-br-[14rem]"
              src={volunteerImg}
              alt="volunteer"
            />

            {/* volunteer */}
            <div
              className={`w-[18rem] p-3 rounded-xl shadow-lg flex items-center gap-4 absolute bottom-[20%] left-0 ${
                darkTheme ? 'bg-[#545454]' : 'bg-white'
              }`}
            >
              <div className="bg-[#5dadaa50] size-[50px] min-w-[50px] min-h-[50px] p-4 rounded-lg flex justify-center items-center">
                <img
                  className="w-full h-full aspect-square"
                  src={volunteerIcon}
                  alt=""
                />
              </div>
              <p
                className={`text-sm font-medium ${
                  darkTheme && 'text-gray-300'
                }`}
              >
                You can contribute your time, skills and knowledge.
              </p>
            </div>

            {/* hand */}
            <div
              className={`w-[18rem] p-3 rounded-xl shadow-lg flex items-center gap-4 absolute bottom-0 left-[10%] ${
                darkTheme ? 'bg-[#545454]' : 'bg-white'
              }`}
            >
              <div className="bg-[#FF746850] size-[50px] min-w-[50px] min-h-[50px] p-3.5 rounded-lg flex justify-center items-center">
                <img
                  className="w-full h-full aspect-square"
                  src={helpIcon}
                  alt=""
                />
              </div>
              <p
                className={`text-sm font-medium ${
                  darkTheme && 'text-gray-300'
                }`}
              >
                Helping Thousands Of People.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="md:order-1">
            <h1
              className={`text-4xl leading-[44px] font-semibold mb-2 ${
                darkTheme ? 'text-light2' : 'text-dark'
              }`}
            >
              Volunteer
            </h1>
            <p className="text-coral3 text-lg font-semibold">
              Participate In Charity Around The Whole World
            </p>
            <p
              className={`text-lg mt-6 ${
                darkTheme ? 'text-gray-200' : 'text-[#32443f]'
              }`}
            >
              Join Our community to volunteer and help people in need around the
              world.
            </p>
            <button className="bg-teal text-white font-medium px-6 py-2.5 mt-10 rounded-full">
              Become Volunteer
            </button>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default Volunteer;
