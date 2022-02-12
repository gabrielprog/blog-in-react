import react from 'react'

import './style.css'

import Logo from '../../assets/image/logo.svg'
import {FaSearchengin} from 'react-icons/fa'

import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="menu">
                <div className="menu__logo">

                    <img 
                    src={Logo} 
                    alt="Logo"/>

                </div>

                <div className="menu__search">
                    <FaSearchengin />
                    <input 
                    type="text" 
                    name="search" 
                    placeholder="Buscar artigos, podcast, destaque"/>

                </div>

                <ul>
                    <Link to="/categories"><li>Categories</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </>
    )
}