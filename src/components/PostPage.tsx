import React, { useEffect, useState } from 'react'
import { BiLike } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { FaHeart, FaShare, FaUserSecret } from 'react-icons/fa';
import { LiaCommentsSolid } from 'react-icons/lia';
import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '../Contexts/CustomHooks';
import axios from 'axios';

const PostPage = () => {
    const [posts, Setposts] = useState([]);
    const { id } = useParams();
    const { userData, HandleLike, UserComment, SetUserComment } = useAuth();
    const FetchPost = async () => {
        const res = await axios.get(`https://facebookapi-uuab.onrender.com/Facebook/api/v1/post/${id}`);
        if (res.data) {
            Setposts(res?.data?.Post)
        } else {
            console.log(res?.data?.error)
        }
    }
    const CommentOnPost = async (userId: string) => {
        try {
            const res = await axios.post(`https://facebookapi-uuab.onrender.com/Facebook/api/v1/post/${id}/comment`, {
                userId: userId,
                commentText: UserComment,
            })
            console.log(res.data);
            FetchPost();
            SetUserComment('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }
    useEffect(() => {
        FetchPost()
    }, [CommentOnPost])

    const timeAgo = posts?.createdAt ? formatDistanceToNow(new Date(posts.createdAt), { addSuffix: true }) : '';

    return (
        <div className='PostPage'>
            <div className='p_card'>
                <div className="first">
                    <div className="user">
                        <FaUserSecret className='img_user' />
                        <span>
                            <h2>{posts?.userId?.name}</h2>
                            <small>{timeAgo}</small>
                        </span>
                    </div>
                    <BsThreeDots className='logo_nav' />
                </div>
                <div className="second">
                    <img src={`https://facebookapi-uuab.onrender.com/images/${posts?.Image}`} alt="" />
                </div>
                <div className="captions">
                    <h3>{posts?.caption}</h3>
                </div>
                <div className="third">
                    <button onClick={() => HandleLike(posts?._id, userData?.msg?._id)}><BiLike />Like <span>{posts?.likes?.length || 0}</span></button>
                    <button><LiaCommentsSolid />Comments <span>{posts?.comments?.length}</span></button>
                    <button><FaShare />Share</button>
                </div>
                <hr />
                <div className="commments_box">
                    <div className="commment_input">
                        <input
                            type="text"
                            placeholder='Comment Here'
                            value={UserComment || ''}
                            onChange={(e) => SetUserComment(e.target.value)}
                        />
                        <button onClick={() => CommentOnPost(userData?.msg?._id)}>Comment</button>
                    </div>
                    <div className="commments_list">
                        {
                            posts?.comments?.map((comment) => {
                                return <div className="comments_span">
                                    <img src={`https://facebookapi-uuab.onrender.com/images/image-1705308706106.jpg`} alt="" width={"50px"} />
                                    <div className="comments_texts">
                                        <small>{comment?.userId?.name}</small>
                                        <h4>{comment?.commentText}</h4>
                                    </div>

                                    <div className="comment_like">
                                        <FaHeart color={1 === 0? "white" : "red"}/>
                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPage
