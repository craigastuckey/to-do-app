import React from 'react'
import Greeting from './Greeting'
import logo from './cherry-donut.png'

function Header() {
    return(
        <div className='App-header'>
            <img className='App-logo' src={logo} alt='Logo' />
            <Greeting />    
        </div>
    )
}

export default Header
