import React from 'react'
import  Slider from './component/Slider.js';
import './component/slider.css';
import AjantaCave from './component/AjantaCave.js';

import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Tajmahal from './component/Tajmahal.js';
import Vally from './component/Vally.js';
import unesco from "./component/unesco.png";


export default function App() { 
  return (
    <> 
    <div className='navbar'>
   <div className='com'><img src={unesco}/></div>
     <div >UNESCO INDIAN HERITAGE SITES</div>
    </div>
    

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Slider/>}/>
      <Route path="/Tajmahal" element={<Tajmahal/>}/>
      <Route path="/Vally" element={<Vally/>}/>
      <Route path="/AjantaCave" element={<AjantaCave/>}/>
    </Routes>
    </BrowserRouter>

</>
)
}
