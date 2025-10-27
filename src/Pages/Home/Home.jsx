
import { useLoaderData } from 'react-router';
import Banner from '../../Component/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    const trendingApp = useLoaderData()
    console.log(trendingApp);

    return (
        <div>
            <Banner></Banner>
            <div className='py-5 md:py-10 px-[30px] md:px-[80px] text-center'>
                <h1 className='font-bold text-[30px] md:text-[48px]'>Trending Apps</h1>
                <p className='font-normal text-[12px] md:text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5 md:mt-10'>
                    {
                        trendingApp.map(trendApp => <TrendingApps key={trendApp.id} trendApp={trendApp}></TrendingApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;