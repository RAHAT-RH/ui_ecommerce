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
            <footer class="bg-white pt-16 pb-12 border-t border-gray-100">
                <div class="container">
                    <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-2">


                        <div>
                            <h3 class="text-[20px] font-bold text-black uppercase tracking-wider">Download</h3>
                            <div class="mt-4 space-y-4">
                                <Link to="/" class="text-gray-400 hover:text-gray-500">
                                    <img src={playStore} alt="" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-[20px] font-bold text-black uppercase tracking-wider">Company</h3>
                            <div class="mt-4 space-y-4">
                                <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Privacy Policy</Link>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-[20px] font-bold text-black uppercase tracking-wider">Contact Us</h3>
                            <div class="mt-4 space-y-4">
                                <p class="text-base text-gray-500 pr-10 hover:text-gray-900 block">
                                    Mailing Address of the Company. <br />
                                    Street, City, State <br />
                                    Phone Number: +8801221321321 <br />
                                    Email: company@mail.com
                                </p>
                            </div>
                        </div>

                        <div class="">
                            <h3 class="text-[20px] font-bold text-black uppercase tracking-wider">Get In Touch</h3>
                            <img src={logo} alt="logo" class="w-30 py-5" />
                            <div class="mr-2">
                                <p class="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                                </p>
                            </div>
                            <div class="flex space-x-6 py-2">
                                <Link to="/" class="text-gray-400 hover:text-gray-500">
                                    <img src={facebook} alt="" />
                                </Link>
                                <Link to="/" class="text-gray-400 hover:text-gray-500">
                                    <img src={instagram} alt="" />
                                </Link>
                                <Link to="/" class="text-gray-400 hover:text-gray-500">
                                    <img src={youtube} alt="" />
                                </Link>

                            </div>
                        </div>



                    </div>
                    {/* <div class="col-span-1 space-y-8">
                        <img src="assets/images/logo.svg" alt="logo" class="w-30" />
                            <div class="mr-2">
                                <p class="text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                                </p>
                            </div>
                            <div class="flex space-x-6">
                                <Link to="/" class="text-gray-400 hover:text-gray-500"><i
                                    class="fa-brands fa-facebook-square"></i></Link>
                                <Link to="/" class="text-gray-400 hover:text-gray-500"><i
                                    class="fa-brands fa-instagram-square"></i></Link>
                                <Link to="/" class="text-gray-400 hover:text-gray-500"><i
                                    class="fa-brands fa-twitter-square"></i></Link>
                                <Link to="/" class="text-gray-400 hover:text-gray-500">
                                    <i class="fa-brands fa-github-square"></i>
                                </Link>
                            </div>
                    </div>

                    <div class="lg:col-span-2 grid lg:grid-cols-2 sm:gird-cols-1 sm:col-col-span-2 gap-8">
                        <div class="grid grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                                <div class="mt-4 space-y-4">
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Marketing</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Analitycs</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Commerce</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Insights</Link>
                                </div>
                            </div>

                            <div>
                                <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                                <div class="mt-4 space-y-4">
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Pricing</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Documentation</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">Guides</Link>
                                    <Link to="/" class="text-base text-gray-500 hover:text-gray-900 block">API Status</Link>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Footer;