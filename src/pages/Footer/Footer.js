import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import facebook from '../../assets/icon/facebook.png'
import instagram from '../../assets/icon/instagram.png'
import youtube from '../../assets/icon/youtube.png'
import playStore from '../../assets/icon/playStore.png'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white pt-16 pb-0 border-t border-gray-100">
                <div className="container">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2">


                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Download</h3>
                            <div className="mt-4 space-y-4">
                                <Link to="/" className="text-gray-400 hover:text-gray-500">
                                    <img src={playStore} alt="" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Company</h3>
                            <div className="mt-4 space-y-4">
                                <Link to="/" className="text-base text-gray-500 hover:text-gray-900 block">Privacy Policy</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Contact Us</h3>
                            <div className="mt-4 space-y-4">
                                <p className="text-base text-gray-500 pr-10 hover:text-gray-900 block">
                                    Mailing Address of the Company. <br />
                                    Street, City, State <br />
                                    Phone Number: +8801221321321 <br />
                                    Email: company@mail.com
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <h3 className="text-[20px] font-bold text-black uppercase tracking-wider">Get In Touch</h3>
                            <img src={logo} alt="logo" className="w-30 py-4" />
                            <div className="mr-2">
                                <p className="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                                </p>
                            </div>
                            <div className="flex space-x-6 pt-2 pb-5">
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