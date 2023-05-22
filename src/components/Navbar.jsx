import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <header> 
        <section className='flex max-w-7xl mx-auto p-4 justify-between items-center'>
            <h1 className='text-3xl font-medium'>
                <a href="/">🚀 Rocket Innovation</a>
            </h1>
            <div>
                <button id="hamburger-button" className='text-3xl md:hidden cursor-pointer' onClick={() => setNavbarOpen((prev) => !prev)}>
                    &#9776;
                </button>

                <nav className='hidden md:block space-x-8 text-xl' aria-label="main">
                    <Link to="/" className='hover:opacity-90'>Home</Link>
                    <Link to="/about" className='hover:opacity-90'>About</Link>
                    <Link to="/products" className='hover:opacity-90'>Products</Link>
                    <Link to="/services" className='hover:opacity-90'>Services</Link>
                    <Link to="/contact" className='hover:opacity-90'>Contact</Link>
                </nav>
            </div>

        </section> 
        <section id="mobile-menu" className={`${navbarOpen ? 'flex': 'hidden'} absolute top-0 bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu text-white`}>
            <button className='text-8xl self-end px-6' onClick={() => setNavbarOpen((prev) => !prev)}>
                &times;
            </button>
            <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                <Link to="/" className='w-full text-center py-6 hover:opacity-90' onClick={() => setNavbarOpen(false)}>Home</Link>
                <Link to="/about" className='w-full text-center py-6 hover:opacity-90' onClick={() => setNavbarOpen(false)}>About</Link>
                <Link to="/products" className='w-full text-center py-6 hover:opacity-90' onClick={() => setNavbarOpen(false)}>Products</Link>
                <Link to="/services" className='w-full text-center py-6 hover:opacity-90' onClick={() => setNavbarOpen(false)}>Services</Link>
                <Link to="/contact" className='w-full text-center py-6 hover:opacity-90' onClick={() => setNavbarOpen(false)}>Contact</Link>
            </nav>
        </section>
        </header>


    )
}

export default Navbar