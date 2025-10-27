import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="py-5 px-[30px] md:px-[80px] flex flex-col bg-black space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-1">
          <img className="w-[40px] h-[40px] " src={logoImg} alt="" />
          <h1 className="font-bold text-[16px] text-white">HERO.IO</h1>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <h1 className="font-medium text-[20px] text-white">Social Links</h1>
          <div className="flex gap-4">
            <Twitter className="bg-white rounded-full p-1"></Twitter>
            <Linkedin className="bg-white rounded-full p-1"></Linkedin>
            <Facebook className="bg-white rounded-full p-1"></Facebook>
          </div>
        </div>
      </div>
      <p className="text-center font-normal text-[16px] text-white">Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
