import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../components/FireBase/Config'
import { Spin } from 'antd'


export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {

    const history = useHistory()
    const [user, setUser] = useState(null)
    const [isloading, setIsloading] = useState(true)


    useEffect(() => {
        const unsubccibed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, uid, photoURL } = user
                setUser({
                    displayName, email, uid, photoURL
                })
                console.log(user);
                setIsloading(false)
                history.push('/')
                return;
            }
            setIsloading(false)
            history.push('/dang-nhap')

        });

        return () => {
            unsubccibed();
        }
    }, [history])
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {isloading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
