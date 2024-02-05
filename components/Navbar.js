import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <h1 className='logo'>KratinHealth</h1>
        <ul className='navbar-content'>
            <li className='Home'><a href='/'>Home</a></li>
            <li className='Routine'><a href='/Routine'>Routine</a></li>
            <li className='Service'><a href='/Service'>Service</a></li>
            <li className='Profile'><a href='/Profile'>Profile</a></li>
        </ul>

        
    </div>
    {/* <div>
        <section>
            <h1 className='Welcome'>Welcome to KratinHealth</h1>
        </section>
    </div>
     */}
    </>
    
  )
    
}

export default Navbar
