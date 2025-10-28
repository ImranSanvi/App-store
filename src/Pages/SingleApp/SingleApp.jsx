import React from 'react';
import { Download, Star } from 'lucide-react';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='p-3 bg-white rounded-2xl space-y-5 text-left'>
                <img className='rounded-2xl w-[316px] h-[250px]' src={image} alt="" />
                <h1>{title}</h1>
                <div className='flex justify-between items-center'>
                    <button className='bg-gray-400 rounded-2xl text-green-400 py-2 px-3 text-[16px] font-medium flex gap-2'><Download></Download>{downloads}M</button>
                    <button className='bg-pink-400 rounded-2xl text-amber-400 py-2 px-3 text-[16px] font-medium flex gap-2'><Star></Star>{ratingAvg}M</button>
                </div>
            </div>
        </Link>
    );
};

export default SingleApp;