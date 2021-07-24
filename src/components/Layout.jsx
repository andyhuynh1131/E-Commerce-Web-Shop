
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routers from '../routes/Routes'
import { AppProvider } from '../ConText/AppProvider'
import Footer from './Footer'
import Header from './Header'
import AuthProvider from '../ConText/AuthProvider'



const Layout = () => {



    return (
        <BrowserRouter>
            <AuthProvider>

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

            </AuthProvider>



        </BrowserRouter>
    )
}

export default Layout
