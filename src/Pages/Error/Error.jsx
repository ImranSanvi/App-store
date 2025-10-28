import React from 'react';
import errorImg from '../../assets/error-404.png'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-6 m-[40px] md:m-[80px]'>
            <title>Error - 404</title>
            <img src={errorImg} alt="" />
            <div className='space-y-3 text-center'>
                <h1 className='font-semibold text-[48px]'>Oops, page not found!</h1>
                <p className='font-normal text-[20px]'>Oops, page not found!</p>
                <button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-3 text-white rounded-2xl '>Go Back!</button>
            </div>
        </div>
    );
};

export default Error;