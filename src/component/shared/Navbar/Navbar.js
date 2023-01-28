import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import signLogo from '../../assets/logo/signup.png';
import { RiShoppingCart2Line } from "react-icons/ri";
import { toast, Toaster } from 'react-hot-toast';
import { Cartcontext } from '../../Context/Context';
const Navbar = ({ children }) => {

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;

    // console.log(token)

    const logOut = () => {
        fetch("https://wehatbazar.thecell.tech/api/logout", {
            method: "POST",
            headers: {
                'X-Requested-With': 'XMLHttpRequest',

                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                // console.log(data.data)
                if (data.success === true) {
                    toast.success("Logout Successfully")
                    localStorage.removeItem('token')
                    console.log(data)
                } else {
                    console.log(data)
                }
            })
    }
    return (
        <div>
            {/* header  */}
            <div className='fixed w-full z-10 top-0 left-0'>
            <header className="py-4  shadow-sm bg-white">
                <div className="container flex items-center justify-between">
                    <Link to="/">
                        <img src={logo} className="lg:w-full sm:w-28 xs-w-28" alt="Logo" />
                    </Link>

                    <div className="flex items-center space-x-6">
                        <Link to='/cart' className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <RiShoppingCart2Line />
                            </div>

                            <div className="absolute left-4 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{state.length}</div>
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
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="link">
                               Profile
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/* navbarEnd */}
            </div>
            {children}
            <Toaster />
        </div>
    );
};

export default Navbar;