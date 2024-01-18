import React, { useEffect, useState } from 'react'
import PostCARD from './PostCARD'
import { PostDet } from './PostUploader';
import axios from 'axios';
import { useAuth } from '../Contexts/CustomHooks';

type Posts ={
  Image : string
caption :string
likes : number
userId : string
}

const PostShowSec = ({HandlePost}) => {
  const [Post,SetPost] = useState<Posts[]>([]);
  const {HandleLike ,UserComment} = useAuth()

  const GetPosts = async()=>{
    try {
      const res = await axios.get('https://facebookapi-uuab.onrender.com/Facebook/api/v1/post');
      
      const sortedPosts = res.data.Posts.sort((a: Posts, b: Posts) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      SetPost(sortedPosts)

    } catch (error) {
      console.log(error?.response?.data     )

    }
  }
  
  useEffect(()=>{
    GetPosts();
  },[HandlePost , HandleLike])
  return (
    <div className='post_Show'>
      {Post?.map((posts,i)=>{
        return <PostCARD posts={posts} key={i} HandleLike={HandleLike}/>
      })}
    </div>
  )
}

export default PostShowSec
