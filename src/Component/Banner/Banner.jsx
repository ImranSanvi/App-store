import React from "react";
import googlePlay from "../../assets/playStore.png";
import appStore from "../../assets/AppSore.png";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="flex flex-col">
      <div className="pt-5 px-[30px] md:px-[80px] flex flex-col items-center text-center">
        <h1 className="font-bold text-[36px] md:text-[72px]">We Build</h1>
        <h1 className="font-bold text-[36px] md:text-[72px]">
          <span className="text-purple-500">Productive</span> Apps
        </h1>
        <p className="font-normal text-[20px] mt-3">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-5 my-5 md:my-8">
          <button className="py-2 px-4 border border-gray-400 rounded-2xl flex gap-3 items-center">
            <img className="w-[32px] h-[32px]" src={googlePlay} alt="" />
            Google Play
          </button>
          <button className="py-2 px-4 border border-gray-400 flex gap-3 items-center rounded-2xl">
            <img className="w-[32px] h-[32px]" src={appStore} alt="" />
            App store
          </button>
        </div>
        <img src={bannerImg} alt="" />
      </div>
      
      <div className="w-full bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-center space-y-5 py-8">
        <h1 className="font-bold text-[24px] md:text-[48px] text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <p className="font-normal text-[16px] text-white">
              Total Downloads
            </p>
            <h1 className="font-extrabold text-[32px] md:text-[64px] text-white">29.6M</h1>
            <p className="font-normal text-[16px] text-white">
              21% more than last month
            </p>
          </div>
          <div>
            <p className="font-normal text-[16px] text-white">Total Reviews</p>
            <h1 className="font-extrabold text-[32px] md:text-[64px] text-white">906K</h1>
            <p className="font-normal text-[16px] text-white">
              46% more than last month
            </p>
          </div>
          <div>
            <p className="font-normal text-[16px] text-white">Active Apps</p>
            <h1 className="font-extrabold text-[32px] md:text-[64px] text-white">132+</h1>
            <p className="font-normal text-[16px] text-white">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
