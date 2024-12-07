import React from 'react';
import Lottie from 'lottie-react';

import loadingHand from './loadingHand.json';

const Loading = () => {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center">
      <Lottie animationData={loadingHand} />
    </div>
  );
};

export default Loading;
