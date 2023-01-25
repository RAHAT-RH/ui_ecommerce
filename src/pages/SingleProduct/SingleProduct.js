import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../assets/products/product1.jpg';
import NewArrival from '../Home/NewArrival';
import TrandingProducts from '../Home/TrandingProducts';
import { RiFacebookFill, RiInstagramLine, RiTwitterLine, RiShoppingBagFill   } from "react-icons/ri";
const SingleProduct = () => {
    return (
        <div>
            <div className="container shadow-xl my-16 grid lg:grid-cols-2 sm:grid-cols-1 py-16 bg-white gap-6">
                <div className="w-full bg-cover bg-no-repeat bg-center">
                    <img src={product1} alt="product" className="item-thumbnail w-full h-full object-contain" />
                </div>

                <div className=''>
                    <h2 className="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            Best Product
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Brand: </span>
                            <span className="text-gray-600">Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">Category: </span>
                            <span className="text-gray-600">Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className="text-gray-800 font-semibold">SKU: </span>
                            <span className="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">$45.00</p>
                        <p className="text-base text-gray-400 line-through">$55.00</p>
                    </div>

                    <p className="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>

                    <div className="pt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label for="size-xs"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label for="size-sm"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label for="size-m"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label for="size-l"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label for="size-xl"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector">
                                <input type="radio" name="color" id="red" className="hidden" />
                                <label for="red"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fefefe" }}></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="black" className="hidden" />
                                <label for="black" className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "red" }}></label>
                            </div>
                            <div className="color-selector">
                                <input type="radio" name="color" id="white" className="hidden" />
                                <label for="white"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#000" }}></label>
                            </div>

                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <input type='text' className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2" value='01'/>
                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>

                    <div className="mt-6 gap-3 border-b border-gray-200 pb-5 pt-5">
                        <Link to="/checkout" className="rounded-none border border-primary text-white px-8 py-4 text-center font-medium uppercase flex items-center justify-center bg-gradient-to-l from-primary to-[#52a3eb] gap-2 hover:from-[#52a3eb] hover:to-primary transition">
                            <RiShoppingBagFill/> Add to cart
                        </Link>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <Link to="/" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <RiFacebookFill/>
                        </Link>
                        <Link to="/" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <RiTwitterLine />
                        </Link>
                        <Link to="/" className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <RiInstagramLine/>
                        </Link>
                    </div>
                </div>
            </div>
            <NewArrival></NewArrival>
            <TrandingProducts></TrandingProducts>
        </div>
    );
};

export default SingleProduct;