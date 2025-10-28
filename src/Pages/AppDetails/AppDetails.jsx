import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../../assets/icon-downloads.png'
import ratingsImg from '../../assets/icon-ratings.png'
import reviewsImg from '../../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { addToDB, getStoredApp } from '../../Utility/AddToDB';
import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
    const {appId} = useParams();
    const ID = parseInt(appId);
    console.log(ID);
    const data = useLoaderData();
    const targetApp = data.find((App) => App.id === ID);

    const {id, image, title, companyName, downloads, ratingAvg, reviews, description, ratings, size} = targetApp;

    const [installed, setInstalled] = useState(false);
    useEffect(() => {
        const installedApps = getStoredApp();
        if (installedApps.includes(id)) {
        setInstalled(true);
        }
    }, [id]);

    const handleInstall = (num) =>{
        setInstalled(true);
        addToDB(num);
        toast("Wow!! App Installed Successfully!!")
    }

    return (
        <div className='py-5 md:py-10 px-[30px] md:px-[80px] text-center space-y-4'>
            <ToastContainer />
            <div className=' flex flex-col md:flex-row items-center gap-10'>
                <img className='w-[350px] h-[350px] ' src={image} alt="" />
                <div className='space-y-5 text-left'>
                    <h1 className='font-bold text-[32px]'>{title}</h1>
                    <h4 className='font-normal text-[20px]'>Developed by <span className='text-purple-500'>{companyName}</span></h4>
                    <div className='border border-gray-400'></div>
                    <div className='flex justify-between items-center gap-10'>
                        <div className='flex flex-col gap-3'>
                            <img className='w-[40px] h-[40px] ' src={downloadImg} alt="" />
                            <p className='font-normal text-[12px] md:text-[20px]'>Downloads</p>
                            <h1 className='font-extrabold text-[25px] md:text-[40px]'>{downloads}M</h1>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <img className='w-[40px] h-[40px] ' src={ratingsImg} alt="" />
                            <p className='font-normal text-[12px] md:text-[20px]'>Average Ratings</p>
                            <h1 className='font-extrabold text-[25px] md:text-[40px]'>{ratingAvg}</h1>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <img className='w-[40px] h-[40px] ' src={reviewsImg} alt="" />
                            <p className='font-normal text-[12px] md:text-[20px]'>Total Reviews</p>
                            <h1 className='font-extrabold text-[25px] md:text-[40px]'>{reviews}K</h1>
                        </div>
                    </div>

                    <button onClick={() => handleInstall(id)} disabled={installed} className='bg-green-400 py-2 px-5 rounded-2xl text-white '>{installed ? "installed" : `Install Now (${size} MB)`}</button>
                </div>
            </div>

            <div className='border border-gray-400'></div>

            <div className="my-5 w-full h-[300px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={ratings}
                    layout="vertical"
                    barCategoryGap="10%"
                    >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" reversed />
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='border border-gray-400'></div>
            <div className='space-y-3 text-left'>
                <h1 className='font-semibold text-[24px]'>Description</h1>
                <p className='font-normal text-[20px]'>{description}</p>
            </div>
            
        </div>
    );
};

export default AppDetails;