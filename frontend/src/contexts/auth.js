import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const sendData = async (email, password) => {

    const data = {
      email,
      password
    }

     await api.post('http://localhost:3333/alunos', data)
     .then(response => {
        console.log(response.data);
      })
     .catch(error => console.log(error));
    
  }


  const signin = (email, password) => {
    /**responsavel por realizar o login */
  };

  const signup = async (email, password) => {
  /**Responsavel por cadastrar o usuario */
     await sendData(email, password);

  };

  const signout = () => {
    /**Responsavel por deslogar usuario */
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
