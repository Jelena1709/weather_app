import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Logo from './logo/logo.png'
import Form from './Form'

const Header = () => {
    return (
        <header>
            <Link to='/'><img src={Logo} alt= ''className='Logo'/>
            </Link>
          
           <Form/>
             <Nav />

           
        </header>
    );
};

export default Header;