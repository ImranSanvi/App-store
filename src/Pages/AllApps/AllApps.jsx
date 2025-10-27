import React from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = () => {
    const Apps = useLoaderData();
    return (
        <div className='py-5 md:py-10 px-[30px] md:px-[80px] text-center'>
            <h1 className='font-bold text-[30px] md:text-[48px]'>Our All Applications</h1>
            <p className='font-normal text-[12px] md:text-[20px]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-[24px]'>{Apps.length} Apps Found</h1>
                <input className='font-normal text-[16px]' type="button" value="search Apps" />
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 md:mt-10'>
                {
                    Apps.map(app => <SingleApp key={app.id} app={app}></SingleApp>)
                }
            </div>

        </div>
    );
};

export default AllApps;