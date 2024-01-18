import React, { useEffect, useState } from 'react'
import { MdOutlineSort } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { FaFilter } from "react-icons/fa6";
import { FaCircle } from 'react-icons/fa';
import {nav}  from '../types/types'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { useAuth } from '../Contexts/CustomHooks';
import { useAlert } from 'react-alert';
import Loader from './Loader';

interface Props {

}


const User = (props: Props) => {
  const {  logout  ,userData ,Loading ,
    setloading} = useAuth();
  const alert = useAlert();
  const Navigate = useNavigate();
  const Online:boolean = false;

  const HandleLogout = async()=>{
    try {
      const response = await fetch('https://facebookapi-uuab.onrender.com/Facebook/api/v1/user/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data)
      setloading(true)
      setTimeout(() => {
        setloading(false)
        Navigate("/login")
        alert.success('Logout successful!');
        logout()
      }, 2000);
    } catch (error) {
      console.log(error)
    }
  }

  return (<>
  {Loading ? <Loader/> : 
    <div className='Usersection'>
     <Link to={`/user/${'65a4f1bf50409de41cb9f7c1'}`}>
      <div className="user_box">
     <img src="https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg" width={"50px"} height={"50px"} style={{ objectFit: 'cover', borderRadius: '50%' }} alt="" />
        <h2>{userData?.msg?.name}</h2>
        <MdOutlineSort className='line' />
      </div>
     </Link>
      <hr className='f_hr' />
      <div className="friends_list">
        <div className="bar_F">
          <h3>Friends</h3>
          <div className="icons">
            <TbSearch />
            <FaFilter />
          </div>
        </div>
        <div className="table_box">
          <table>
          <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>           <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>  <tbody>
              <tr>
                <td><img src={'https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg'} alt="" /> {userData?.msg?.name}</td>
                <td className='Online'><FaCircle color={Online ? "springgreen" : "red"} /></td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="group_list">
          <h3>Groups</h3>
          <div className="table_box">
          <table>
          <tbody>
              <tr>
                <td><img src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'} alt="" /> Gossip Clubs</td>
                <td className='Online'><FcPlus /></td>
              </tr>
            </tbody>              <tbody>
              <tr>
                <td><img src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww'} alt="" /> Fimy Talks</td>
                <td className='Online'><FcPlus /></td>
              </tr>
            </tbody>      
            </table>
          </div>
        </div>
        <div className="facebook_Settings">
        <div className="nav_items">
                {nav?.map((items, i) => {
                    return <div className="li" onClick={items.name === "Log Out" ?   HandleLogout : undefined} key={i}>
                        <h3>{items.icon}</h3>
                        <h3>{items.name}</h3>
                        <h4>{items.icon_extra}</h4>
                    </div>
                })}
            </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export default User
