import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="bg-[#00000053] w-full backdrop-blur-sm fixed inset-0 z-20 flex justify-center items-center">
      <div className="bg-[#fff7f7] p-6 rounded-xl flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
