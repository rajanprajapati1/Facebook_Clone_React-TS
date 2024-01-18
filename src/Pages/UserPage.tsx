import React from 'react'
import { Link, useParams } from 'react-router-dom'
import FBlogo from '../assets/logo.png'
import { useAuth } from '../Contexts/CustomHooks'

interface Props {

}

const UserPage = (props: Props) => {
    const { userData } = useAuth()
    console.log(userData)
    const { id } = useParams();
    return (
        <div className='UserPage'>
            <div className="fb_logo">
                <img src={FBlogo} alt="" width={70} />
                <h2>
                    <Link to={'/'}>
                        Facebook
                    </Link>
                </h2>
            </div>
            <div className="main_users_page">
                <div className="user_id_section">
                    <div className="bg_profile">
                        <img src="https://i0.wp.com/quartelgeneral.com/wp-content/uploads/2023/08/Monkey-D-Luffy.jpg?fit=1920%2C1080&ssl=1" alt="" className='bg' />
                        <div className="front_profile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyZvk1gaZftOzvzUK_AY09WqIIa3rQUkD8Q&usqp=CAU" alt="" />
                        </div>
                    </div>
                    <div className="users_details">
                        <center>
                            <h2>{userData?.msg?.name}</h2>
                            <small>Unknown Place</small>
                        </center>
                        <div className="other_details">
                            <span>
                                <strong>Bio</strong> Something Good Comings
                            </span><span>
                                <strong>Email</strong> {userData?.msg?.email}
                            </span><span>
                                <strong>Birthday </strong> {userData?.msg?.Birthday}
                            </span>
                        </div>
                        <div className="friends">
                            <button>Friends <strong>{"0"}</strong></button>
                            <button>Following <strong>{"0"}</strong></button>
                            <button>Photos <strong>{userData?.msg?.posts?.length}</strong></button>
                        </div>
                    </div>
                </div>
                <div className="user_id_post_section">
                    <h2>Posts</h2>
                    <div className="users_posts">
                        <div className="user_posts_card">
                            {userData?.msg?.posts?.length === 0 ?  (<><div style={{
                                width:'100%',
                                height:'50vh',
                                display:'grid',
                                placeItems:'center'
                            }}><h2>No Post Yet ?</h2> </div></>)  :
                                userData?.msg?.posts?.map((post) => {
                                    console.log(userData)
                                    return <div className="cards" key={post?._id}>
                                        <img src={`https://facebookapi-uuab.onrender.com/images/${post?.Image}`} width={"100%"} height={"100%"} alt="" />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
