import React from 'react';
import logoImg from '../../assets/logo.png'
import { Github } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {

    const handleContributionBtn = () => {
        window.open("https://github.com/ImranSanvi", "_blank")
    }

    return (
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-5 px-[30px] md:px-[80px] bg-white'>
            <div className='flex justify-between items-center gap-1'>
               <Link to={'/'}><img className='w-[40px] h-[40px] ' src={logoImg} alt="" /></Link>
                <h1 className='font-bold text-[16px]'>HERO.IO</h1>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <Link to={'/'}><h1 className='font-semibold text-[16px]'>Home</h1></Link>
                <Link to={'/apps'}><h1 className='font-semibold text-[16px]'>Apps</h1></Link>
                <Link to={'/installedApps'}><h1 className='font-semibold text-[16px]'>Installation</h1></Link>
            </div>
           <button onClick={handleContributionBtn} className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-3 text-white rounded-2xl flex'><Github></Github> Contribution</button>
        </div>
    );
};

export default Navbar;