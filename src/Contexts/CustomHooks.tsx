import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  const [Loading, setloading] = useState(false);
  const [    UserComment ,SetUserComment  ] = useState(' ');

  const login = (userData) => {
    setAuthenticated(true);
    setUserData(userData);
  };


  const HandleLike = async (postId: string, userId: string) => {
    try {
      const res = await axios.post(`https://facebookapi-uuab.onrender.com/Facebook/api/v1/post/${postId}/like`, {
        userId
      });
      const data = await res.data || null;
      console.log(data)

    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const logout = () => {
    setAuthenticated(false);
    setUserData([]);
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated, HandleLike, Loading, UserComment,
      SetUserComment,
      setloading, userData, setAuthenticated, login, logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

