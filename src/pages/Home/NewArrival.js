import React from 'react';
import { Link } from 'react-router-dom';
import { RiHeartLine, RiShoppingCartFill } from "react-icons/ri";
import product1 from '../../assets/products/t-shirt.jpeg';
import product2 from '../../assets/products/t-shirt2.jpg';
import product3 from '../../assets/products/t-shirt3.jpg';
import product4 from '../../assets/products/t-shirt4.png';
const NewArrival = () => {
    return (
        <div>
            <div class="container pb-10 overflow-hidden">
                <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
                {/* gird system */}
                <div class="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {/* single product */}
                    <div class="bg-white group">
                        <div class="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product1} alt="product 1" class="p-3 item-thumbnail w-full h-full object-contain" />
                            <div class="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" class="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div class="bg-white group">
                        <div class="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product3} alt="product 1" class="p-3 item-thumbnail w-full h-full object-contain" />
                            <div class="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" class="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] transition">Add to cart</Link>
                    </div>
                    {/* single product 22 */}
                    <div class="bg-white group">
                        <div class="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product2} alt="product 1" class="p-3 item-thumbnail w-full h-full object-contain" />
                            <div class="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" class="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div class="bg-white group">
                        <div class="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product1} alt="product 1" class="p-3 item-thumbnail w-full h-full object-contain" />
                            <div class="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" class="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div class="bg-white group">
                        <div class="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product4} alt="product 1" class="p-3 item-thumbnail w-full h-full object-contain" />
                            <div class="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    class="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill class="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div class="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div class="flex items-baseline mb-1 space-x-2">
                                <p class="text-xl text-primary font-semibold">$45.00</p>
                                <p class="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" class="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] transition">Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;