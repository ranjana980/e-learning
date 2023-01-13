import React from 'react'
import Search from '@material-ui/icons/Search'
import Email from '@material-ui/icons/Email'
export default function Navbar() {
    return (
        <div className='d-flex justify-content-around '>
            <a className='navbar-logo mt-3'>
                <img src="https://cherrilearn.fun/static/media/whiteLogo.42028c47.png" style={{ height: '50px', width: '50px' }} />
            </a>
            <ul className='nav-menu mt-3'>
                <li className='nav-items'>Home</li>
                <li className='nav-items'>About</li>
                <li className='nav-items-search'><Search/></li>
                <li className='nav-items-email'><Email style={{color:'rgb(112 123 184)'}}/>Contact</li>
            </ul>
        </div>
    )
}
