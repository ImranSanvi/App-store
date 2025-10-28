import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import SingleApp from '../SingleApp/SingleApp';
import NoApps from '../NoApps/NoApps';

const AllApps = () => {
    const Apps = useLoaderData();
    const [filteredApps, setFilteredApps] = useState([]);
    const [search, setSearch] = useState(false);
    const navigate = useNavigate()

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const searchTerm = e.target.name.value;
        const matched = Apps.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearch(true);
        setFilteredApps(matched);
    }
    const displayApps = search ? filteredApps : Apps;


    return (
        <div className='py-5 md:py-10 px-[30px] md:px-[80px] text-center'>
            <title>All Apps</title>
            {!search && (
                <>
                    <h1 className='font-bold text-[30px] md:text-[48px]'>Our All Applications</h1>
                    <p className='font-normal text-[12px] md:text-[20px]'> Explore All Apps on the Market developed by us. We code for Millions</p>
                </>
            )}

            <div className='flex justify-between items-center mt-5'>
                <h1 className='font-semibold text-[24px]'>{displayApps.length} Apps Found</h1>
                <form onSubmit={handleOnSubmit}>
                      <input className='font-normal text-[16px] border-2 border-gray-300 w-[150px] md:w-[400px] h-[30px] md:h-[44px] rounded-2xl hover:border-purple-400 text-gray-500 px-3' type="text" name='name' placeholder='Search Apps' />
                       
                       <button type="submit" className="hidden"></button>
                </form>
            </div>

            {
                search ? ( filteredApps.length===0 ? navigate('/noApps') : 
                            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 md:mt-10'>{filteredApps.map(app => <SingleApp key={app.id} app={app}></SingleApp>)}</div>) :
                        
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 md:mt-10'>{Apps.map(app => <SingleApp key={app.id} app={app}></SingleApp>)}</div>
            }

        </div>
    );
};

export default AllApps;