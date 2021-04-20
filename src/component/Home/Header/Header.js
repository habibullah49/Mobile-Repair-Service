import React from 'react';
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Professional from '../Professional/Professional';
import Blog from '../Blog/Blog'
import './Header.css'
import Service from '../Service/Service';
import Testomonial from '../Testomonial/Testomonial'
import Contact from '../Contact/Contact';
const Header = () => {
    return (
        <div>
            <section className='banner'>
                < Navbar></Navbar>
                <Banner></Banner>

            </section>
            <Blog />
            <Service />
            <Professional />
            <Testomonial />           
           <Contact/>
        </div>
    );
};

export default Header;