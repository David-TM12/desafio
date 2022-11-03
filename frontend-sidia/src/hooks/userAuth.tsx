import { createContext, useState, ReactNode, useContext } from "react";
import { api } from "../service/api";

interface ContextProps {
    children: ReactNode;
}

interface Response {
    status?:number;
    message?: string;
    error?: boolean;
}

interface UserProps {
    id: string;
    email: string;
    name: string;
    senha: string;
}

type UserResponse  =  Omit<UserProps, 'senha'>;
type UserSignin  =  Omit<UserProps, 'id' | 'name'>;
type UserSignup  =  Omit<UserProps, 'id'>;


type  UserContextProps = { 
    user: UserResponse ,
    signin: ({ email, senha }: UserSignin) => Promise<void>
    signup: ({ email, senha, name }: UserSignup) => Promise<Response>
}

export const AuthContext = createContext<UserContextProps>({} as UserContextProps);

export function AuthProvider({ children }: ContextProps) {

    const [user, setUser] = useState<UserResponse>({} as UserResponse);

    async function signin({ email, senha }: UserSignin) {

        const response = await api.post('/alunos/login', { email, senha });

        if (!response.data.email) {
            return response.data;
        }

        const id = response.data.id;
        const name = response.data.name;
        setUser({ id, email, name });
    }

    async function signup ({email, senha, name}: UserSignup)  {
        /**Responsavel por cadastrar o usuario */

        const response = await api.post('/alunos', { email, senha, name });
        
        return response.data;
    };
    
    const signout = () => {
        /**Responsavel por deslogar usuario */
        //setUser(null);
    };


    return (
        <AuthContext.Provider
            value={{ user, signin, signup }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
} 
