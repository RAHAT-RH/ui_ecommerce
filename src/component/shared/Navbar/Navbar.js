import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import signLogo from '../../assets/logo/signup.png';
import { RiShoppingCart2Line } from "react-icons/ri";
import { toast, Toaster } from 'react-hot-toast';
import { RiUserSettingsLine } from "react-icons/ri";
import { useProducts } from '../../Context/ProductProvider';
import Loading from '../../pages/Loading/Loading';

const Navbar = ({ children }) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');

    const { state: { cart }, loading, error } = useProducts();

    // console.log("ki ase:", cart)
    let content;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        content = <h1>Something went wrong</h1>
    }

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
                    navigate('/')
                    localStorage.removeItem('user_id')
                } else {
                    console.log(data)
                }
            })
            localStorage.removeItem('token')
    }
    return (
        <div>
            {/* header  */}
            <div className='sticky top-0 z-20'>
                <header className="py-4  shadow-sm bg-white">
                    <div className="container flex items-center justify-between">
                        <Link to="/">
                            <img src={logo} style={{width: "150px"}} className="lg:w-full" alt="Logo" />
                        </Link>

                        <div className="flex items-center space-x-6">
                            <Link to='/cart' className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-lg lg:text-2xl">
                                    <RiShoppingCart2Line />
                                </div>

                                <div className="absolute left-4 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{cart?.length} {content}</div>
                            </Link>
                            <Link to="/sign-up" className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <img src={signLogo} alt="" className='w-[60px] lg:w-full' />
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
                                <Link to="/products" className="text-gray-200 hover:text-white transition">Products</Link>
                                {/* <Link to="#" className="text-gray-200 hover:text-white transition">About us</Link>
                            <Link to="#" className="text-gray-200 hover:text-white transition">Contact us</Link> */}
                            </div>


                            {
                              token && token ? (<div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="link text-white no-underline flex items-center">
                                        <RiUserSettingsLine />
                                        <span className='pl-1'>Profile</span>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 w-52">
                                        <li>
                                            <Link to='/profile' className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </Link>
                                        </li>
                                        <li><Link to='/order-history'>Order History</Link></li>
                                        <li><button onClick={logOut}>Logout</button></li>
                                    </ul>
                                </div>) :( <div>
                                    <Link to="/login" className='text-white'>Login</Link>
                                </div>)
                            }

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