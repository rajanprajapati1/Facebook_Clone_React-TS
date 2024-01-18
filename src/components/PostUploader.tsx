import React, { useEffect, useState } from 'react';
import { CiCamera } from 'react-icons/ci';
import { SiFacebooklive } from 'react-icons/si';
import PostShowSec from './PostShowSec';
import { FcPicture, FcPlus, FcSelfie } from 'react-icons/fc';
import { useAuth } from '../Contexts/CustomHooks';
import { useAlert } from 'react-alert';

export type PostDet = {
    postname?: string | null,
    image: File | null,
    createadAt: string
}

const PostUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [InputText, SetInputText] = useState<string | "">('');
  const {  logout  ,userData} = useAuth();
  const alert = useAlert();



    const FileUploader = () => {
        const fileInput = document.getElementById('fileUploader');
        fileInput?.click();
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
            event.target.value = '';
        }
    };
   
    const HandlePost = async (e: React.MouseEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userid',userData?.msg?._id);
        formData.append('image', selectedFile);
        formData.append('caption', InputText);
    
        const response = await fetch('https://facebookapi-uuab.onrender.com/Facebook/api/v1/post/upload', {
            method: 'POST',
            body: formData,  // No need to stringify, use FormData directly
        });
    
        setSelectedFile(null);
        SetInputText('');
    
        if (response.ok) {
            const data = await response.json();
            alert.success("Post Uploaded Successfully")
            console.log('Signup Response:', data);
        } else {
            console.error('Failed to sign up');
        }
    };
    return (
        <div className="warraper">
            <div className='PostUploader'>
                <div className='post_bar'>
                    <section>
                        <div className='inputbox'>
                            <h3>What's on your mind ? {userData?.msg?.name}</h3>
                            <textarea onChange={(e) => SetInputText(e.target.value)} rows={2.5} cols={54} placeholder='Post Details' />
                        </div>
                        <div className='media_options'>
                            <FcSelfie className='Mo_logo' />
                            <span className='imagecounter'>{selectedFile ? "1" : "0"}</span>
                            <FcPicture  className='Mo_logo' onClick={FileUploader} />
                            <FcPlus  className='Mo_logo' onClick={(e) => HandlePost(e)} />
                            <input
                                type='file'
                                name='image'
                                id='fileUploader'
                                onChange={handleFileChange}
                                style={{ display: 'none' }} 
                                 formEncType="multipart/form-data"
                            />
                        </div>
                    </section>
                    <div className='other_sec'>
                        <button>
                            <CiCamera className='Os_loso' />
                        </button>
                        <button>
                            <SiFacebooklive className='Os_loso' />
                        </button>
                    </div>
                </div>
            </div>
            <PostShowSec HandlePost={HandlePost}  />
        </div>

    );
};

export default PostUploader;
