import React from 'react';
import { GoArrowLeft, GoSearch } from 'react-icons/go';
import logoo from '../Images/flipkartlogo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Nav2() {
    const navigate = useNavigate();

    return (
        <div className='absolute flex flex-col flex-wrap w-full bg-white'>
            <nav className='items-start h-[100px] w-full  p-4 bg-blue-500 flex justify-between relative'>
                <div className='relative flex'>
                    {/* bar */}
                    <div className='absolute flex w-10'>
                        <button onClick={() => navigate('/')}>
                            <GoArrowLeft />
                        </button>
                    </div>
                    <div className='w-[100px] left-11 flex absolute top-0'>
                        <img src={logoo} alt='logo' />
                    </div>
                </div>

                {/* cartIcon */}
                <div className='relative flex gap-40'>
                    <div>
                        <GoSearch />
                    </div>
                    <div className='relative flex scale-150 '>
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
        </div>
    );
}
