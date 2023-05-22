import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'
const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div>
            <section id="footer" className='bg-blue-500 md:px-28'>
                <div className='container flex flex-col items-cneter justify-between px-6 py-24 mx-auto space-y-0 md:py-12 md:flex-row md:space-y-0'>
                    <h2 className='md:text-4xl font-bold leading-tight text-center text-2xl text-white md:text-left md:max-w-xl'>Need to speak with an expert?</h2>
                    <div className='flex justify-center md:justify-start pt-6'>
                        <Link to="/contact" className='px-6 py-2 text-blue-500 rounded-full bg-white shadow-2xl hover:bg-gray-300 hover:text-black'>Contact Us</Link>
                    </div>
                </div>
            </section>
            <div className='bg-gray-900 md:px-26'>
                <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:spay-y-0'>
                    <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                        <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; {year} all rights reserved
                        </div>
                        <div className='mx-auto'>
                            <img src="../images/rocket.png" alt="company logo" className='w-28'/>
                        </div>
                        <div className='flex justify-center space-x-4'>
                            <Link to="https://twitter.com"><FaTwitter className='text-3xl text-white'/></Link>
                            <Link to="https://www.whatsapp.com/"><FaWhatsapp className='text-3xl text-white'/></Link>
                            <Link to="https://www.facebook.com"><FaFacebook className='text-3xl text-white'/></Link>
                            <Link to="https://instagram.com"><FaInstagram className='text-3xl text-white'/></Link>
                        </div>
                    </div>
                    <div className='flex justify-around gap-4'>
                        <div>
                            <h2 className='text-center text-white text-3xl pb-3'>Contact Us</h2>
                            <div className='flex justify-between text-center'>
                                <h3 className='text-white px-0 space-y-2 pt-3 text-clip'>123 Main Street</h3>
                            </div>
                            <div className='flex justify-between text-center'>
                                <h3 className='text-white px-0 space-y-2 pt-3 text-clip'>Any Town, USA</h3>
                            </div>
                            <div className='flex justify-between text-center'>
                                <h3 className='text-white px-0 space-y-2 pt-3 text-clip'>+1 123 456 7890</h3>
                            </div>


                        </div>

                        <div className='flex flex-col space-y-3 text-white md:pl-4'>
                            <Link to="/">Home</Link>
                            <Link to="/about" >About</Link>
                            <Link to="/products">Products</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    {/* Third Column */}
                    <div className='flex flex-col justify-between'>
                        <form>
                            <div className='flex space-x-3'>
                                <input type="text" placeholder='Please subscribe' className='flex-1 px-4 rounded-full focus:outline-none'/>
                                <button className='px-6 py-2 text-white rounded-full bg-blue-500 hover:bg-gray-500 focus:outline-none'>Subscribe</button>
                            </div>
                        </form>
                        <div className='hidden text-white md:block'>
                            Copyright &copy; {year} all rights reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer