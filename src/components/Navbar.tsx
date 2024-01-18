import React, { useState } from 'react'
import FBlogo from '../assets/logo.png'
import { FaSearch } from 'react-icons/fa';
import { NavList } from '../types/types';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Navbar = () => {
    const [Hide, SetHide] = useState<boolean>(false);
    return (
        <div className='Navbar'>
            <div className="fb_logo">
                <img src={FBlogo} alt="" />
                <h2>Facebook</h2>
            </div>
            <div className="searchbar">
                <input type="text" placeholder='Search' />
                <FaSearch className='search' />
            </div>
            <div className="nav_items">
                {NavList.map((items, i) => {
                    return <div className="li" key={i}>
                        <h3>{items.icon}</h3>
                        <h3>{items.name}</h3>
                        <h4>{items.icon_extra}</h4>
                    </div>
                })}
            </div>
            <div className="notification_center">
                {Hide ? null : <>
                    <h2><IoIosNotificationsOutline className='bell' /> Notification Center</h2>
                    <h2 className='delete' onClick={() => SetHide(true)}>X</h2>
                    <div className="notify">
                        <h4>Friend Requests <br /> Waiting in the list</h4>
                        <h3>2</h3>
                    </div></>}
            </div>
        </div>
    )
}

export default Navbar
