import { Download, Star } from 'lucide-react';
import React from 'react';

const InstallApp = ({app}) => {
    const {image, title, downloads, ratingAvg, size} = app;
    return (
        <div className='my-3 p-2 flex flex-col md:flex-row justify-between items-center bg-white rounded-2xl gap-5'>
            <div className='flex flex-col md:flex-row gap-10 items-center'>
                <img className='w-[80px] h-[80px] rounded-2xl ' src={image} alt="" />
                <div className='flex flex-col gap-3'>
                    <h1>{title}</h1>
                    <div className='flex gap-5'>
                        <button className='bg-gray-400 rounded-2xl text-green-400 py-1 px-2 text-[16px] font-medium flex gap-2'>
                        <Download></Download>{downloads}M</button>
                        <button className='bg-pink-400 rounded-2xl text-amber-400 py-1 px-2 text-[16px] font-medium flex gap-2'><Star></Star>{ratingAvg}M</button>
                        <button className='bg-pink-400 rounded-2xl text-gray-400 py-1 px-2 text-[16px] font-medium flex gap-2'>{size}
                            MB</button>
                    </div>
                </div>
            </div>
            <button className='text-white font-bold text-[16px] py-2 px-4 bg-green-400 rounded-2xl'>Uninstall</button>
        </div>
    );
};

export default InstallApp;