import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../features/AuthProvider';
import MainLayout from '../../../layouts/MainLayout';

import foodIcon from '../../../assets/icons/food.png';
import medicalIcon from '../../../assets/icons/medical.png';
import socialIcon from '../../../assets/icons/social.png';
import eduIcon from '../../../assets/icons/book.png';
import coralArrow from '../../../assets/icons/arrow-coral.png';
import tealArrow from '../../../assets/icons/arrow-teal.png';

const Categories = () => {
  const { darkTheme } = useContext(AuthContext);

  return (
    <section className="bg-[#5DADAA0e] pt-16 pb-8">
      <MainLayout>
        <h1
          className={`text-4xl leading-[44px] font-semibold text-center mb-4 ${
            darkTheme ? 'text-light2' : 'text-dark'
          }`}
        >
          Categories
        </h1>
        <p className="text-coral3 text-lg font-semibold text-center">
          Program to Empower others
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
          {/* Healthy Food */}
          <div
            className={`text-center p-6 hover:shadow-xl rounded-2xl ${
              darkTheme ? 'hover:bg-dark4' : 'hover:bg-white'
            }`}
          >
            <div className="bg-[#ffaf6d6b] size-20 p-4 mb-6 mx-auto rounded-full flex justify-center items-center">
              <img className="w-full" src={foodIcon} alt="Clothes" />
            </div>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-gray-800'
              }`}
            >
              Healthy Food
            </h3>
            <p className={darkTheme ? 'text-gray-300' : 'text-gray-600'}>
              Donate to charity for those who need healthy and nutritious food.
            </p>
            <Link className="group" to="/all_campaigns">
              <p className="text-teal hover:text-coral text-lg font-semibold mt-6 inline-flex items-center gap-3">
                Read More{' '}
                <span>
                  <img
                    className="w-3.5 group-hover:hidden"
                    src={tealArrow}
                    alt="->"
                  />
                  <img
                    className="w-3.5 hidden group-hover:block"
                    src={coralArrow}
                    alt="->"
                  />
                </span>
              </p>
            </Link>
          </div>

          {/* Medical Help */}
          <div
            className={`text-center p-6 hover:shadow-xl rounded-2xl ${
              darkTheme ? 'hover:bg-dark4' : 'hover:bg-white'
            }`}
          >
            <div className="bg-[#5fbcff4a] size-20 p-4 mb-6 mx-auto rounded-full flex justify-center items-center">
              <img className="w-full" src={medicalIcon} alt="Clothes" />
            </div>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-gray-800'
              }`}
            >
              Medical Help
            </h3>
            <p className={darkTheme ? 'text-gray-300' : 'text-gray-600'}>
              Donate to charity for those who need better medical care.
            </p>
            <Link className="group" to="/all_campaigns">
              <p className="text-teal hover:text-coral text-lg font-semibold mt-6 inline-flex items-center gap-3">
                Read More{' '}
                <span>
                  <img
                    className="w-3.5 group-hover:hidden"
                    src={tealArrow}
                    alt="->"
                  />
                  <img
                    className="w-3.5 hidden group-hover:block"
                    src={coralArrow}
                    alt="->"
                  />
                </span>
              </p>
            </Link>
          </div>

          {/* Social Service */}
          <div
            className={`text-center p-6 hover:shadow-xl rounded-2xl ${
              darkTheme ? 'hover:bg-dark4' : 'hover:bg-white'
            }`}
          >
            <div className="bg-[#be8fff96] size-20 p-4 mb-6 mx-auto rounded-full flex justify-center items-center">
              <img className="w-full" src={socialIcon} alt="Clothes" />
            </div>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-gray-800'
              }`}
            >
              Social Service
            </h3>
            <p className={darkTheme ? 'text-gray-300' : 'text-gray-600'}>
              Support charitable causes to help people in need around the world.
            </p>
            <Link className="group" to="/all_campaigns">
              <p className="text-teal hover:text-coral text-lg font-semibold mt-6 inline-flex items-center gap-3">
                Read More{' '}
                <span>
                  <img
                    className="w-3.5 group-hover:hidden"
                    src={tealArrow}
                    alt="->"
                  />
                  <img
                    className="w-3.5 hidden group-hover:block"
                    src={coralArrow}
                    alt="->"
                  />
                </span>
              </p>
            </Link>
          </div>

          {/* Education */}
          <div
            className={`text-center p-6 hover:shadow-xl rounded-2xl ${
              darkTheme ? 'hover:bg-dark4' : 'hover:bg-white'
            }`}
          >
            <div className="bg-[#ff91b04a] size-20 p-4 mb-6 mx-auto rounded-full flex justify-center items-center">
              <img className="w-full" src={eduIcon} alt="Clothes" />
            </div>
            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkTheme ? 'text-light2' : 'text-gray-800'
              }`}
            >
              Education
            </h3>
            <p className={darkTheme ? 'text-gray-300' : 'text-gray-600'}>
              Donating to charity for chilren who need quality education.
            </p>
            <Link className="group" to="/all_campaigns">
              <p className="text-teal hover:text-coral text-lg font-semibold mt-6 inline-flex items-center gap-3">
                Read More{' '}
                <span>
                  <img
                    className="w-3.5 group-hover:hidden"
                    src={tealArrow}
                    alt="->"
                  />
                  <img
                    className="w-3.5 hidden group-hover:block"
                    src={coralArrow}
                    alt="->"
                  />
                </span>
              </p>
            </Link>
          </div>
        </div>
      </MainLayout>
    </section>
  );
};

export default Categories;
