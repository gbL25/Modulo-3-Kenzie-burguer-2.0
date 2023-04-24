import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { IRegisterFormData } from "../components/Form/RegisterForm";
import { ILoginFormData } from "../components/Form/LoginForm";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
    children: React.ReactNode;
}

interface IUserContext {
    userLogin: (formData: ILoginFormData) => Promise<void>;
    userRegister: (formData: IRegisterFormData) => Promise<void>;
    user: IUser | null;
    userLogout: () => void;
}

interface IUser {
    id: string;
    name: string;
    email: string;
}

interface IUserLoginResponse {
    accessToken: string,
    user: IUser;
}

interface IUserRegisterResponse {
    accessToken: string;
    user: IUser;
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID")
        const autoLogin = async () => {
            try {
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate('/')
            } catch (error) {
                console.log(error)
                localStorage.removeItem("@TOKEN");
                localStorage.removeItem("@USERID");
            }
        }

        if (token && userId) {
            autoLogin();
        }
    }, [])


    const navigate = useNavigate();

    const userRegister = async (formData: IRegisterFormData) => {
        try {
            const response = await api.post<IUserRegisterResponse>('/users', formData)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const userLogin = async (formData: ILoginFormData) => {
        try {
            const { data } = await api.post<IUserLoginResponse>('/login', formData)
            localStorage.setItem("@TOKEN", data.accessToken)
            localStorage.setItem("@USERID", data.user.id)
            setUser(data.user)
            navigate('/shop')
        } catch (error) {
            console.log(error)
        }
    }

    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUser(null)
        navigate('/')
    }

    return <UserContext.Provider value={{ userRegister, userLogin, user, userLogout }}>{children}</UserContext.Provider>

}
