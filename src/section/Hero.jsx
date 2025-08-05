import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#d6c2c2] px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Content */}
      <div className="flex-1 min-w-[300px] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Shop the Latest Trends
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover the best deals on fashion, electronics, and more. Fast shipping & easy returns.
        </p>
        <button className="bg-[#ff6f61] hover:bg-[#e65a50] text-white px-8 py-3 rounded-md text-lg transition duration-300">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 min-w-[300px] text-center">
        <img
          src="/src/assets/banners-images/banner3.jpg"
          alt="Featured Product"
          className="w-full max-w-md mx-auto rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
