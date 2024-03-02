import React from 'react'
import './App.css';
import {Link} from 'react-scroll';


export default function Navbar() {
  return (
    <>
    <header>
    <div class="logo">Harshit</div>
    <input type="checkbox" id="nav_check" hidden/>
    <nav>
        <ul>
            <li>
                <Link to="home" smooth={true} duration={500} offset={-30}>home</Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={500} offset={-30}>about</Link>
            </li>
            <li>
            <Link to="skill" smooth={true} duration={500} offset={-30}>skill</Link>
            </li>
            <li>
            <Link to="project" smooth={true} duration={500} offset={-30}>projects</Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500} offset={-30}>contact</Link>
            </li>
        </ul>
    </nav>
    <label for="nav_check" class="hamburger">
        <div></div>
        <div></div>
        <div></div>
    </label>
</header>
<div className='class1' id="home"><h1>home</h1>
  </div>
  <div className='class1' id="about"><h1>about</h1>
  </div>
  <div className='class1' id="skill"><h1>skills</h1>
  </div>
  <div className='class1' id="project"><h1>project</h1>
  </div>
  <div className='class1' id="contact"><h1>contact</h1>
  </div>



</>
)
}
