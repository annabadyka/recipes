import { Link, NavLink } from 'react-router-dom';
import { FaAlignJustify, FaBowlRice,  FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import {useState} from 'react';

import '../assets/css/Navbar.css';


const Navbar = ()=> {
     const [isNavbarOpen, setIsNavbarOpen]= useState(false);
    return(
        <header className='header'>
            <div id='menu-btn' onClick={()=>setIsNavbarOpen(!isNavbarOpen)}><FaAlignJustify/></div>
            <Link to={'/'} className='logo'><FaBowlRice className='fa-rice'/> World of recipes</Link>            
         
            <nav className={isNavbarOpen ? 'navbar show-navbar' : 'navbar hide-navbar'}>
                <NavLink to={'/'} className={
                    ({ isActive}) => isActive ? 'active' : ''} 
                    >home</NavLink>               
                <NavLink to={'/about'} className={
                    ({ isActive}) => isActive ? 'active' : ''}
                    >about</NavLink>  
            </nav>
            <div className='soc-links'>
                <a href='https://github.com/annabadyka' className='fab fa-instagram' target='_blank' aria-label='Follow on Github'><FaGithub/></a>
                <a href='https://www.linkedin.com/in/anna-badyka-karpenko/' className='fab fa-linkedin' target='_blank' aria-label='Follow on Linkedin'><FaLinkedinIn/></a>
            </div>
        </header>
      );
  };
  
export default Navbar;