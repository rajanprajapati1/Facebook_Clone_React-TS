import React from 'react'
import PostUploader from './PostUploader'

interface Props {
  
}

const PostSection = (props: Props) => {
  return (
    <div className='PostSection'>
      <PostUploader/>
    </div>
  )
}

export default PostSection
