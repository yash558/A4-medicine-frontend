import React from 'react';

const PanelHero = () => {
  return (
    <div className="bg-[--main-color] flex items-center justify-center  mt-12 h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Join Our Panelist Community
          </h1>
          <p className="text-lg text-white mb-8">
            Share your expertise, connect with others, and make an impact!
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default PanelHero;
