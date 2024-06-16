import React from 'react'
import SidebarIcon from './SidebarIcon'
import { FaShoppingCart } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";
import { FaSprayCan } from "react-icons/fa6";
import { MdPestControlRodent } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='justify-center fixed top-0 left-0 h-screen w-[8vw] m-0
                    flex flex-col 
                    shadow-lg'>
            <SidebarIcon icon={<IoMdHome />} text="Home" link="/" />
            <SidebarIcon icon={<FaTractor />} text="Buy Tools" link="/explore/tools" />
            <SidebarIcon icon={<FaSeedling />} text="Buy Seeds" link="/explore/seeds" />
            <SidebarIcon icon={<FaShoppingCart />} text="Check Kart" link="/kart" />
            <SidebarIcon icon={<FaSprayCan />} text="Buy Fertilizers" link="/explore/fertilizers" />
            <SidebarIcon icon={<MdPestControlRodent />} text="Buy Pesticides" link="/explore/pesticides" />
        </div>
    )
}

export default Sidebar