import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Routers from '../routes/Routes'
import { AppProvider } from './AppProvider'


const Layout = () => {






    return (
        <BrowserRouter>
            <AppProvider>
                <Route render={props => (
                    <div>
                        <Header {...props} />
                        <div className="container">

                            <div className="main">
                                <Routers />
                            </div>

                        </div>
                        <Footer />
                    </div>
                )} />
            </AppProvider>




        </BrowserRouter>
    )
}

export default Layout
