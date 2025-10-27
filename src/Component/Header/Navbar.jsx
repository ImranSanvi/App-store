import React from 'react';
import logoImg from '../../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center py-5 px-[30px] md:px-[80px] bg-white'>
            <div className='flex justify-between items-center gap-1'>
                <img className='w-[40px] h-[40px] ' src={logoImg} alt="" />
                <h1 className='font-bold text-[16px]'>HERO.IO</h1>
            </div>
            <div className='flex justify-between items-center gap-5'>
                <a className='font-semibold text-[16px]' href="">Home</a>
                <a className='font-semibold text-[16px]' href="">Apps</a>
                <a className='font-semibold text-[16px]' href="">Installation</a>
            </div>
           <button className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] py-2 px-3 text-white rounded-2xl flex'><Github></Github> Contribution</button>
        </div>
    );
};

export default Navbar;