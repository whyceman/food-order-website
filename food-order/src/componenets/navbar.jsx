import React from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSafeFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { useState } from "react";
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="w-[90%] mx-auto flex justify-between items-center p-4">
            <div className='flex items-center'>
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} onClick={() => setMenu(true)} />
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl p-2">
                    Best <span className="font-bold">Eats</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]">
                <AiOutlineSearch size={20} />
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder="search foods" />
            </div>
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>

            {/* {mobile menu} */}
            {/* {overlay} */}
            {menu && <div className="bg-black/80 fixed top-0 left-0 z-10 w-full h-screen "></div>}

            {/* {side drawer menu} */}
            {menu && <div className="fixed left-0 top-0 w-[300px] bg-white h-screen z-10 duration-300">
                <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setMenu(false)} />
                <h1 className="text-xl p-4">Best <span className="font-bold">Eats</span></h1>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex">
                            <TbTruckDelivery size={25} className='mr-4' />
                            <span>Orders</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdFavorite size={25} className='mr-4' />
                            <span>Favorites</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaWallet size={25} className='mr-4' />
                            <span>Wallets</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <MdHelp size={25} className='mr-4' />
                            <span>Help</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <AiFillTag size={25} className='mr-4' />
                            <span>Promotions</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <BsFillSafeFill size={25} className='mr-4' />
                            <span>Best ones</span>
                        </li>
                        <li className="text-xl py-4 flex">
                            <FaUserFriends size={25} className='mr-4' />
                            <span>Invite friends</span>
                        </li>
                    </ul>
                </nav>
            </div>}
        </div>
    );
}

export default Navbar;