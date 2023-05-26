import React,{useState} from "react";
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  const [isMobile,setIsMobile]=useState(false);
  return (
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=>setIsMobile(false)}
        >
            <li> <Link to="/" className='home'>Home</Link></li>
            <li> <Link to="/about" className='about'>About</Link></li>
            <li> <Link to="/skills" className='skills'>Skills</Link></li>
            <li> <Link to="/contact" className='contact'>Contact</Link></li>
            <li> <Link to="/signup" className='signup'>Sign Up</Link></li>
        </ul>
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
            {isMobile? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
        </button>
    </nav>
  )
}

export default Navbar
