import React, { useState } from 'react'


export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [listProductCart, setListProductCart] = useState([])


    return (
        <AppContext.Provider value={{ listProductCart, setListProductCart }}>
            {children}
        </AppContext.Provider>
    )
}
