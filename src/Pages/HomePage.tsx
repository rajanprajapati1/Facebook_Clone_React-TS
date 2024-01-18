import React from 'react';
import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';
import User from '../components/User';

import UserPage from './UserPage';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
import { useAuth } from '../Contexts/CustomHooks';
import PostPage from '../components/PostPage';

const HomePage = () => {

  const { Loading } = useAuth()

  console.log(Loading)
  const location = useLocation();
  const isUserPage = /^\/user\/\w+$/.test(location.pathname);
  const isPostPage = /^\/post\/\w+$/.test(location.pathname);
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className='Homepage'>
          {isUserPage ? (
            <UserPage />
          ) : (
            <>
              <Navbar />
              {isPostPage ? <PostPage /> : <PostSection />}
            </>
          )}
          <User />
        </div>
      )}
    </>)
};


export default HomePage;
