import React from 'react';
import { useNavigate } from 'react-router-dom';
import barr from '../Images/bars.svg';
import logoo from '../Images/flipkartlogo.png';
import { FaShoppingCart } from 'react-icons/fa';
import SearchBar from '../Component/SearchBar';

function Navbar() {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate('/form');
    };

    return (
        <div className="absolute flex flex-col flex-wrap w-full bg-white">
            <nav className="items-start h-[100px] w-full p-4 bg-blue-500 flex justify-between relative">
                <div className="relative flex">
                    {/* bar */}
                    <div className="absolute flex w-10">
                        <img src={barr} alt="bar" className="scale-75" />
                    </div>
                    <div className="w-[100px] left-11 flex absolute top-0">
                        <img src={logoo} alt="logo" />
                    </div>
                </div>
                {/* cartIcon */}
                <div className="flex items-center justify-between gap-4">
                    <div className="relative flex scale-150">
                        <FaShoppingCart />
                    </div>
                </div>
            </nav>
            <div className="relative flex items-center justify-center bg-center bottom-12">
                <SearchBar />
            </div>
        </div>
    );
}

export default Navbar;
