import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { BiLike } from "react-icons/bi";
import { LiaCommentsSolid } from "react-icons/lia";
import { FaShare } from "react-icons/fa6";
import { PostDet } from './PostUploader';
import { formatDistanceToNow } from 'date-fns';
import axios from 'axios';
import { useAuth } from '../Contexts/CustomHooks';
import { Link } from 'react-router-dom';

type PostProps = {
    posts: {
      Image: string;
      caption: string;
      likes: number;
      userId: {
        name: string;
      };
    }
    HandleLike: (postId: string, userId: string) => void;
  };
const PostCARD: React.FC<PostProps> = ({ posts, HandleLike })=> {
    const {  userData} = useAuth();
  
    const timeAgo = formatDistanceToNow(new Date(posts?.createdAt), { addSuffix: true });

    return (
        <div className='p_card'>
            <div className="first">
                <div className="user">
                    <FaUserSecret className='img_user' />
                    <span>
                        <h2>{posts?.userId.name}</h2>
                        <small>{timeAgo}</small>
                    </span>
                </div>
                <BsThreeDots className='logo_nav' />
            </div>
                <Link to={`/post/${posts?._id}`}>
            <div className="second">
                <img src={`https://facebookapi-uuab.onrender.com/images/${posts.Image}`} alt="" />
            </div>
                </Link>
            <div className="captions">
                <h3>{posts?.caption}</h3>
            </div>
            <div className="third">
                <button onClick={() => HandleLike(posts?._id, userData?.msg?._id)}><BiLike />Like <span>{posts?.likes.length}</span></button>
                <button><LiaCommentsSolid />Comments <span>{posts?.comments?.length}</span></button>
                <button><FaShare />Share</button>
            </div>
        </div>
    )
}

export default PostCARD
