
import { useLoaderData } from 'react-router';
import Banner from '../../Component/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    const trendingApp = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div className='py-5 md:py-10 px-[30px] md:px-[80px] text-center'>
                <h1 className='font-bold text-[30px] md:text-[48px]'>Trending Apps</h1>
                <p className='font-normal text-[12px] md:text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 md:mt-10'>
                    {
                        trendingApp.map(trendApp => <TrendingApps key={trendApp.id} trendApp={trendApp}></TrendingApps>)
                    }
                </div>
                <button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-3 text-white rounded-2xl mt-5'>Show all</button>
            </div>
        </div>
    );
};

export default Home;