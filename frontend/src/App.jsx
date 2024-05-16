import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Error from './pages/Error'
import Success from './pages/Success'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/payment/success' element={<Success/>}/>
          <Route path='/payment/failed' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App