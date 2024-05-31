import {BrowserRouter, Route, Routes} from 'react-router-dom'

import React from 'react'
import Home from './pages/home/home'
import Checkout from './pages/checkout/Checkout'
import Historico from './pages/historico/Historico'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/historico' element={<Historico />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;