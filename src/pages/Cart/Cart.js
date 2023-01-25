import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../assets/products/hudi1.png'
import product2 from '../../assets/products/hudi2.png'
import product3 from '../../assets/products/hudi3.png'
import product4 from '../../assets/products/hudi4.png'
import NewArrival from '../Home/NewArrival';

const Cart = () => {
    return (
        <div className='py-16'>
            <div className="container">
                <div className='flex  pt-10 flex-col lg:flex-row gap-4'>
                    {/* first part */}
                    <div className="overflow-x-auto w-full rounded-none">
                        <table className="table  w-full rounded-none">
                            <thead className=''>
                                <tr className=''>
                                    <th className='bg-blue-400 text-white rounded-none'>Products</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Price</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Qty</th>
                                    <th className='bg-blue-400 text-white rounded-none'>SubTotal</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='rounded-none'>

                                <tr className='border-none'>
                                    <td className='border-none'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product1} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">T-shirt</div>
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $45
                                    </td>
                                    <td className='border-none'>
                                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                            <input type='text' className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2" value='01' />
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $49
                                    </td>
                                    <td className='border-none'>Delete</td>

                                </tr>

                                <tr>
                                    <td className='border-none'>
                                        <div className="flex items-center  space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product2} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Polo Shirt</div>
                                                {/* <div className="text-sm opacity-50">China</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $80
                                    </td>
                                    <td className='border-none'>
                                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                            <input type='text' className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2" value='01' />
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $85
                                    </td>
                                    <td>Delete</td>
                                </tr>

                                <tr>
                                    <td className='border-none'>
                                        <div className="flex items-center  space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product3} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Polo Shirt</div>
                                                {/* <div className="text-sm opacity-50">China</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $80
                                    </td>
                                    <td className='border-none'>
                                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                            <input type='text' className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2" value='01' />
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $85
                                    </td>
                                    <td className='border-none'>Delete</td>
                                </tr>

                                <tr>
                                    <td className='border-none'>
                                        <div className="flex items-center  space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product4} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Polo Shirt</div>
                                                {/* <div className="text-sm opacity-50">China</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $80
                                    </td>
                                    <td className='border-none'>
                                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                            <input type='text' className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2" value='01' />
                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                        </div>
                                    </td>
                                    <td className='border-none'>
                                        $85
                                    </td>
                                    <td className='border-none'>Delete</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* first part end*/}
                    {/* 2nd  part start*/}
                    <div className="card lg:max-w-md sm:w-full  bg-base-100 rounded-none mb-20">
                        <div className="card-body">
                            <div className='shadow-md p-5'>
                                <p className='font-[500] text-normal'> Have a coupon? <Link className='link text-blue-500' to='/'>Click Here to enter your code</Link></p>
                            </div>
                            <div className="divider"></div>
                            <h4 className='font-[500]'>Shipping:</h4>
                            <div className="form-control items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                    <span className="label-text pl-2">Flat Rate</span>
                                </label>
                            </div>
                            <div className="form-control items-start">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    <span className="label-text pl-2">Free Shipping</span>
                                </label>
                            </div>
                            <div className="divider"></div>
                            <div className='flex justify-between'>
                                <h5 className='text-[18px] font-[500]'>Total:</h5>
                                <span className='text-[18px] font-[500]'>1200</span>
                            </div>

                        </div>
                        <div className="block ">
                            <button className="btn w-full btn-primary bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition rounded-none border-none">Process to Checkout</button>
                        </div>
                    </div>

                    {/* 2nd  part end*/}
                </div>

                <NewArrival className='py-16'></NewArrival>

            </div>
        </div>
    );
};

export default Cart;