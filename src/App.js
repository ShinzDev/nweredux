import React from 'react'
import Home from './pages/Home'
import Update from './pages/Update'
import Create from './pages/Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/update' element={<Update/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
