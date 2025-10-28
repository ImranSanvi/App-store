import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../Utility/AddToDB';
import InstallApp from '../InstallApp/InstallApp';

const InstalledApps = () => {

    const data = useLoaderData();
    const [myApp, setMyApp] = useState([]);


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
           <div>
                <h1 className='font-semibold text-[24px]'>{myApp.length} Apps Found</h1>

           </div>
            {
                myApp.map(app => <InstallApp key={app.id} app={app}></InstallApp>)
            }
        </div>
    );
};

export default InstalledApps;