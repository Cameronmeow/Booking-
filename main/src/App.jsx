import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import SingleHotel from './pages/singlehotel/Hotel'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       
       <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotel" element={<SingleHotel/>} />

        </Routes>
      </BrowserRouter>
      </div>
      
  )
}

export default App
