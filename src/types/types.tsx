import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaNewspaper, FaFacebookMessenger, FaYoutube, FaFacebook, FaGamepad, FaCompass, FaCalendarAlt, FaUsers, FaBookmark } from 'react-icons/fa';
import { FcSettings ,FcSlrBackSide ,FcStackOfPhotos   ,FcVoicePresentation  } from "react-icons/fc";
import { FcUndo } from "react-icons/fc";

type Nav = {
    name: string;
    icon: React.ReactNode;
    icon_extra?: React.ReactNode;
};
export const nav:Nav[]  = [{
   name : "Memories" , 
   icon : <FcSlrBackSide/> ,
  },
  {
    name : "Settings" , 
    icon : <FcSettings/> ,
   },{
    name : "Help & Support" , 
    icon : <FcVoicePresentation/> ,
   }
   ,{
    name : "See More " , 
    icon : <FcStackOfPhotos /> ,
   },{
    name : "Log Out" , 
    icon : <FcUndo /> ,
    
   }
  
  
  ]
  

export const NavList: Nav[] = [
    {
        name: "News Feed",
        icon: <FaNewspaper className='logo_nav' />,
        icon_extra : <BsThreeDots className='logo_nav' />,
    }, {
        name: "Messenger",
        icon: <FaFacebookMessenger className='logo_nav' />,
        icon_extra : <span className='msg_count'>0</span>
    }, {
        name: "Watch",
        icon: <FaYoutube className='logo_nav' />,
    }, {
        name: "Pages",
        icon: <FaFacebook className='logo_nav' />,
    }, {
        name: "Games",
        icon: <FaGamepad className='logo_nav' />,
    }, {
        name: "Explore",
        icon: <FaCompass className='logo_nav' />,
    },
    {
        name: "Events",
        icon: <FaCalendarAlt className='logo_nav' />,
    }, {
        name: "Groups",
        icon: <FaUsers className='logo_nav' />,
    }, {
        name: "Collection",
        icon: <FaBookmark className='logo_nav' />,
    },
];

