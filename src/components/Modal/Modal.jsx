import React, { useContext } from 'react';
import { AuthContext } from '../../features/AuthProvider';
import successIcon from '../../assets/icons/success.png';
import warnIcon from '../../assets/icons/warning.png';
import errorIcon from '../../assets/icons/error.png';

const Modal = ({ property, children }) => {
  const modalIcon =
    property.res === 'success'
      ? successIcon
      : property.res === 'warn'
      ? warnIcon
      : property.res === 'error' && errorIcon;

  const { darkTheme } = useContext(AuthContext);

  return property.show ? (
    <div className="bg-[#00000053] w-full min-h-screen backdrop-blur-sm p-12 fixed inset-x-0 top-0 z-20 flex justify-center items-center">
      <div
        className={`animate__animated animate__bounceIn min-w-[18rem] shadow-lg p-8 rounded-xl flex flex-col items-center ${
          darkTheme ? 'bg-dark5' : 'bg-[#fffcfc]'
        }`}
      >
        <img className="w-16" src={modalIcon || successIcon} alt="" />
        <h2
          className={`text-2xl font-bold mt-6 mb-4 ${
            darkTheme ? 'text-gray-200' : 'text-dark3'
          }`}
        >
          {property.title || 'Success'}
        </h2>

        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
