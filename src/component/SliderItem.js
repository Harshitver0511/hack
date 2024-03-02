import React from 'react';
import { Link } from "react-router-dom";

export default function SliderItem({items}) {
  return (
  <>  <div className='slider-items'>
    <img className='slider-img' src={items.icon}/>
    < div className='slider-items-text'>
  <div className='harshit'>{items.description}</div>
<p>{items.text}{items.text1}<br/>{items.text2}</p>
< Link to={items.path}>
<button className='his'>Explore </button></Link>

</div>
  </div>
 
</>
  )
}
