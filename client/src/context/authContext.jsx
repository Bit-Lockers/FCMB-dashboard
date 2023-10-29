import React, { useContext, createContext, useState } from "react";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  //function to register user
  const registerUser = async (upload) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`/register`, upload);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={(user, setUser, registerUser, loading)}>
      {children}
    </AuthContext.Provider>
  );
};

export const authState = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
