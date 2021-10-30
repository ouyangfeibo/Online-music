import React from 'react'
import { BrowserRouter} from 'react-router-dom';
import{ renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import {store} from './store/index'

import routes from './router/index'
import Header from './componments/app-header/header'
import Footer from './componments/app-footer/index'
import Palyer from './pages/player/player-bar';
import './assets/css/base.css'

export default function App() {
    return (
    <Provider store={store}>
        <BrowserRouter>
            <Header></Header>
            {renderRoutes(routes)}
            <Footer></Footer>  
            <Palyer />
        </BrowserRouter>
    </Provider>    
    )
}
