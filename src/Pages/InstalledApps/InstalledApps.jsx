import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromDB } from '../../Utility/AddToDB';
import InstallApp from '../InstallApp/InstallApp';

const InstalledApps = () => {

    const data = useLoaderData();
    const [myApp, setMyApp] = useState([]);

    const handleUninstall = (id) => {
        removeFromDB(id); // remove from local storage
        setMyApp((prevApps) => prevApps.filter((app) => app.id !== id)); // remove from UI
    };


    useEffect(() => {
        const storedAppData = getStoredApp();
        const convertedApp = storedAppData.map((id) => parseInt(id));
        const myAppList = data.filter((app) =>
        convertedApp.includes(app.id)
        );
        setMyApp(myAppList);
    }, []);


    return (
        <div className='py-5 md:py-10 px-[30px] md:px-[80px]'>
           <div className='flex justify-between items-center mb-5'>
                <h1 className='font-semibold text-[24px]'>{myApp.length} Apps Found</h1>
                <div className="dropdown dropdown-open">
                <div tabIndex={0} role="button" className="btn m-1">Sort bY Downloads</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>High</a></li>
                        <li><a>Low</a></li>
                    </ul>
                </div>

           </div>
            {
                myApp.map(app => <InstallApp key={app.id} app={app} Uninstall={handleUninstall}></InstallApp>)
            }
        </div>
    );
};

export default InstalledApps;