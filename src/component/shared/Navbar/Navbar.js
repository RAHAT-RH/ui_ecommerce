import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import signLogo from '../../assets/logo/signup.png';
import { RiShoppingCart2Line } from "react-icons/ri";
const Navbar = ({children}) => {
    return (
        <div>
            {/* header  */}
            <header className="py-4 shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link href="/">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <div className="flex items-center space-x-6">
                        <Link to='/' className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <RiShoppingCart2Line />
                            </div>

                            <div className="absolute left-4 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">8</div>
                        </Link>
                        <Link to="/sign-up" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <img src={signLogo} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </header>

            {/* header end */}

            {/* navBar */}
            <nav className="bg-primary">
                <div className="container flex">
                    <div className="flex items-center justify-between flex-grow px-0 py-4">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link to="/" className="text-gray-200 hover:text-white transition">Home</Link>
                            <Link to="/shop" className="text-gray-200 hover:text-white transition">Shop</Link>
                            {/* <Link to="#" className="text-gray-200 hover:text-white transition">About us</Link>
                            <Link to="#" className="text-gray-200 hover:text-white transition">Contact us</Link> */}
                        </div>
                        <Link to="/login" className="text-gray-200 hover:text-white transition">Login</Link>
                    </div> 
                </div>
            </nav>
            {/* navbarEnd */}
            {children}
        </div>
    );
};

export default Navbar;