import React from 'react'
import {Link} from "react-router-dom";
import './Header.scss'

export const Header = ()=>{
    return(
        <header className='header'>
           <div className='container'>
               <nav className='nav'>
                   <ul className='navlist'>
                       <li>
                           <Link to='/' className='navlinks'>Main</Link>
                       </li>
                       <li>
                           <Link to='colorPicker' className='navlinks'>ColorPicker</Link>
                       </li>
                   </ul>
               </nav>
           </div>
        </header>
    )
}