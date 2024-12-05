import React from 'react';

import donateImage from '../../../assets/images/Donate.png';
import donateIcon from '../../../assets/icons/donate.png';
import volunteerIcon from '../../../assets/icons/handshake.png';

const About = () => {
  return (
    <section className="bg-[#5DADAA0e] mt-24">
      <div className="grid md:grid-cols-2 items-center">
        {/* Images */}
        <div className="py-6 px-6 grid grid-cols-2 grid-rows-2 gap-6">
          <img
            className="w-full h-full aspect-square object-cover rounded-s-full rounded-br-full"
            src="https://ceoworld.biz/wp-content/uploads/2020/06/Nurse-Practitioner.jpg"
            alt=""
          />
          <img
            className="w-full h-full aspect-square object-cover rounded-t-full rounded-bl-full"
            src="https://www.hrresolutions.com/wp-content/uploads/2017/06/volunteer.jpg"
            alt=""
          />
          <img
            className="w-full h-full aspect-square object-cover rounded-b-full rounded-tr-full"
            src="https://www.stonebridge.uk.com/blog/wp-content/uploads/2020/09/Primary-School-Teacher-Course.jpg"
            alt=""
          />
          <img
            className="w-full h-full aspect-square object-cover rounded-r-full rounded-tl-full"
            src="https://img1.wsimg.com/isteam/stock/4433/:/cr=t:0%25,l:0%25,w:100%25,h:100%25"
            alt=""
          />
        </div>

        {/* Description */}
        <div className="p-6">
          <h1 className="text-4xl leading-[44px] font-semibold mb-4">
            About Us
          </h1>
          <p className="text-coral3 text-lg font-semibold">
            Helping Each Other Can Make Our Country Better
          </p>
          <p className="text-[#32443f] text-lg mt-6">
            We help provide necessities to help people in need around Our
            Country.
          </p>

          {/* Donate */}
          <div className="mt-10 flex items-start gap-4">
            <div className="bg-[#85e9e66a] size-12 min-w-12 min-h-12 p-3 rounded-full flex justify-center items-center">
              <img className="w-full" src={donateIcon} alt="donate" />
            </div>
            <div>
              <h5 className="text-lg font-semibold">Campaign</h5>
              <p className="text-[#32443f] text-justify">
                Providing assistance in the form of money and idea to help
                others.
              </p>
            </div>
          </div>

          {/* Volunteer */}
          <div className="mt-10 flex items-start gap-4">
            <div className="bg-[#ff7a6e85] size-12 min-w-12 min-h-12 p-3 rounded-full flex justify-center items-center">
              <img className="w-full" src={volunteerIcon} alt="volunteer" />
            </div>
            <div>
              <h5 className="text-lg font-semibold">Volunteer</h5>
              <p className="text-[#32443f] text-justify">
                Providing assistance in the form of time, skills and knowledge
                to help others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
