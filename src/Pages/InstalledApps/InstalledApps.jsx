import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp, removeFromDB } from '../../Utility/AddToDB';
import InstallApp from '../InstallApp/InstallApp';

const InstalledApps = () => {

    const data = useLoaderData();
    const [myApp, setMyApp] = useState([]);

    const handleSort = (type) => {
        setMyApp((prevApps) => {
            const sortedApps = [...prevApps];
            if (type === "high") {
                sortedApps.sort((a, b) => b.downloads - a.downloads);
            } else if (type === "low") {
                sortedApps.sort((a, b) => a.downloads - b.downloads);
            }
            return sortedApps;
        });
    };


    const handleUninstall = (id) => {
        removeFromDB(id);
        setMyApp((prevApps) => prevApps.filter((app) => app.id !== id));
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
            <title>Installed Apps</title>
           <div className='flex flex-col md:flex-row justify-between items-center mb-5'>
                <h1 className='font-semibold text-[24px]'>{myApp.length} Apps Found</h1>

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1">Sort bY Downloads</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("high")}>High</a></li>
                            <li><a onClick={() => handleSort("low")}>Low</a></li>

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