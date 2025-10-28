import React from "react";
import noImg from '../../assets/App-Error.png'
import { Link } from "react-router";

const NoApps = () => {

  return (
    <div className="flex flex-col justify-center items-center space-y-6 m-[40px] md:m-[80px]">
      <img src={noImg} alt="" />
      <div className="space-y-3 text-center">
        <h1 className="font-semibold text-[48px]">Oops!! Apps not found!</h1>
        <p className="font-normal text-[20px]">The App you are requesting is not found on our system.  please try another apps</p>
        <Link to={'/apps'}>
            <button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-3 text-white rounded-2xl mt-5'>Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NoApps;
