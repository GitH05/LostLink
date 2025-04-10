import { useContext, useEffect, useState } from "react"
import { UserContext } from "../provider/UserProvider"
import axiosInstance from "../utils/axios"

export const useAuth = () => {
    return useContext(UserContext)
}

const setItemsInLocalStorage = (key, value) => {
    if (!key || !value) {
      return console.error('Cannot store in LS');
    }
  
    const valueToStore =
      typeof value !== 'string' ? JSON.stringify(value) : value;
    localStorage.setItem(key, valueToStore);
  };
  

export const useProvideAuth = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false)
    }, [])

    const register = async (signupdata) => {
        const {  username,
            email,
            password,
            contact,
            address,
            college,
            course,
            enrollment, } = signupdata;

        try {
            const { data } = await axiosInstance.post('user/register', {
                username,
                email,
                password,
                contact,
                address,
                college,
                course,
                enrollment,
            });
            if (data.user && data.token) {
                setUser(data.user)
               
                // save user and token in local storage
                setItemsInLocalStorage('user', data.user)
                setItemsInLocalStorage('usertoken', data.token)
            }
            return { success: true, message: 'Registration successfull' }
        } catch (error) {
            const { message } = error.response.data
            return { success: false, message }
        }
    }

    const login = async (signindata) => {
        const { loginemail, loginpassword } = signindata;

        try {
            const { data } = await axiosInstance.post('user/login', {
                email:loginemail,
                password:loginpassword,
            });
            if (data.user && data.token) {
                setUser(data.user)
                // save user and token in local storage
                setItemsInLocalStorage('user', data.user)
                setItemsInLocalStorage('usertoken', data.token)
            }
            
            return { success: true, message: 'Login successfull' }
        } catch (error) {
            const { message } = error.response.data
            return { success: false, message }
        }
    }

    

    const logout = async () => {
        try {
            // const { data } = await axiosInstance.get('/user/logout');
            // if (data.success) {
                setUser(null);

                // Clear user data and token from localStorage when logging out
                localStorage.removeItem('user');
                localStorage.removeItem('usertoken');
            // }
            return { success: true, message: 'Logout successfull' }
        } catch (error) {
            console.log(error)
            return { success: false, message: 'Something went wrong!' }
        }
    }

    

    const updateUser = async (userDetails) => {
        const {  username,
            contact,
            address,
            college,
            course,
            enrollment,
              } = userDetails;
        const email = JSON.parse(localStorage.getItem('user')).email
        const password = JSON.parse(localStorage.getItem('user')).password
        try {
            const { data } = await axiosInstance.put('/user/update-user', {
                username,email,contact,address,college,course,enrollment, password,
            })
            return data;
        } catch (error) {
            console.log(error)
        }
    }


    return {
        user,
        setUser,
        register,
        login,
        logout,
        loading,
      
        updateUser,
    }
}