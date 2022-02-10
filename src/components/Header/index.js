import react from 'react'

import './style.css'

import Logo from '../../assets/image/logo.svg'
import {FaSearchengin} from 'react-icons/fa'

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
                    <a href="#"><li>Categories</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </div>
        </>
    )
}