import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import facebook from '../../assets/icon/facebook.png'
import instagram from '../../assets/icon/instagram.png'
import youtube from '../../assets/icon/youtube.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white pt-16 border-t border-gray-100">
                <div className="container pb-5">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2">


                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Download</h3>
                            <div className="mt-4 space-y-4">
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    <img src={logo} style={{width: "150px"}} alt="" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Company</h3>
                            <div className="mt-4 space-y-2">
                                <Link to="/about-us" className="text-base text-gray-500 hover:text-gray-900 block">About Us</Link>
                                <Link to="/privacy-policy" className="text-base text-gray-500 hover:text-gray-900 block">Privacy Policy</Link>
                                <Link to="/warranty-policy" className="text-base text-gray-500 hover:text-gray-900 block">Warranty Policy</Link>
                                <Link to="/return-policy" className="text-base text-gray-500 hover:text-gray-900 block">Return Policy</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Contact Us</h3>
                            <div className="mt-4 space-y-4">
                                <p className="text-base text-gray-500 pr-10 hover:text-gray-900 block">
                                    House # KA 15/6 Rasulbagh, Haji Shahab Uddin Complex (8th floor) <br />
                                    Mohakhali, Dhaka # 1212 <br />
                                    {/* Shipping Policy: <br /> */}
                                    2-7 Days standard Shipping 
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Get In Touch</h3>
                            {/* <img src={logo} alt="logo" className="w-30 py-4" /> */}
                            {/* <div className="mr-2">
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                                </p>
                            </div> */}
                            <div className="flex mt-4 space-x-6 pt-2 pb-5">
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    <img src={facebook} alt="" />
                                </Link>
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    <img src={instagram} alt="" />
                                </Link>
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    <img src={youtube} alt="" />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-primary'>
                    <p className="p-5 text-center font-medium text-white">&copy; 2023 - All Right Reserved by <Link to='/'>www.wehatbazar.com</Link></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;