import React from 'react';
import { RiHeartLine, RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import product1 from '../../assets/products/t-shirt.jpeg';
import product2 from '../../assets/products/t-shirt2.jpg';
import product3 from '../../assets/products/t-shirt3.jpg';
import product4 from '../../assets/products/t-shirt4.png';
import product5 from '../../assets/products/hudi1.png';
import product6 from '../../assets/products/hudi2.png';
import product7 from '../../assets/products/hudi3.png';
import product8 from '../../assets/products/hudi4.png';
import product10 from '../../assets/products/hudi5.png';
import product11 from '../../assets/products/hudi6.png';
const TrandingProducts = () => {
    return (
        <div>
            <div className="container pb-10 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">all products</h2>
                    <button className="btn btn-primary btn-xs">See More</button>
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product11} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product10} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product8} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product7} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product6} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product5} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product1} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product3} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product 22 */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product2} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product1} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                    {/* single product */}
                    <div className="bg-white group">
                        <div className="relative h-52 bg-cover bg-no-repeat bg-center">
                            <img src={product4} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                            <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                                    title="view product">
                                    <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                                <Link to="/"
                                    className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                                    title="add to wishlist">
                                    <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="/">
                                <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl text-primary font-semibold">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                        </div>
                        <Link to="/" className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition">Add to cart</Link>
                    </div>
                </div>
                <div className='text-center py-16'>
                    <button type="submit" className="btn btn-primary text-center rounded-none">Show More</button>
                </div>
            </div>
        </div>
    );
};

export default TrandingProducts;