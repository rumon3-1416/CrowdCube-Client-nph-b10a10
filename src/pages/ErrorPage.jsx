import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Error 404 | Page Not Found';
  }, []);

  return (
    <div className="min-w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-red-500 text-2xl md:text-5xl font-bold text-center">
        404 Page Not Found
      </h2>
      <button
        onClick={() => navigate('/')}
        className="bg-[#0a755829] text-sm md:text-base font-medium px-3 md:px-6 py-1 md:py-3 mt-8 border-2 border-[#0a7558] rounded-full"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
