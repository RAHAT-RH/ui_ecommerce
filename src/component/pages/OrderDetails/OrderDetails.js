import React from 'react';
import { RiMapPinLine } from "react-icons/ri";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import getProductData from '../../../getProductData/getProductData';
import Loading from '../Loading/Loading';



const OrderDetails = () => {
    // console.log(props.id)
    const { data, isLoading } = useQuery("history", () => getProductData())

    if (isLoading) {
        return <Loading></Loading>
    }

    const details = data?.data
    // console.log(details)



    return (
        <div className='py-16'>
            <h1 className='text-center font-bold lg:text-4xl sm:text-2xl pb-8'>Order Details</h1>
            <div className="container">
                <div className='lg:px-4 py-8 bg-white'>
                    <div className="header flex items-center justify-between">
                        <div>
                            <h2 className='text-2xl font-[500]'>Order No <span className='text-blue-400'>{details.id}</span></h2>
                            <p className='italic text-sm'>Jan 8, 2023</p>
                            <div className="badge badge-md text-xs rounded-none border-none bg-[#F8951B]">Processing</div>
                        </div>
                        <div>
                            <p className='text-sm font-[600] text-black'>Shipped To</p>
                            <span className='flex items-center text-xs italic text-primary'>
                                <RiMapPinLine />
                                Dhaka, Bangladesh
                            </span>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="divider"></div>
                    {/* divider end */}
                    <div className='flex  pt-10 flex-col lg:flex-row gap-4'>
                        {/* first part */}
                        <div className="overflow-x-auto w-full rounded-none">
                            <table className="table  w-full rounded-none">
                                <thead className=''>
                                    <tr className=''>
                                        <th className='bg-white text-black rounded-none'>Products</th>
                                        <th className='bg-white text-black rounded-none'>Price</th>
                                        <th className='bg-white text-black rounded-none'>Qty</th>
                                        <th className='bg-white text-black rounded-none'>SubTotal</th>
                                        <th className='bg-white text-black rounded-none'>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='rounded-none'>

                                    {!Array.isArray(details) && details.order_items ? details.order_items.map((item) => (
                                        <tr key={item.id} className='border-none'>
                                            <td className='border-none'>
                                                <div className="flex items-center space-x-3">
                                                    <div>
                                                        <div className="font-bold">{item.name}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className='border-none'>
                                            <span className='text-[25px] font-bold'>৳</span>{item.price}
                                            </td>
                                            <td className='border-none'>
                                                {item.quantity}
                                            </td>
                                            <td className='border-none'>
                                            <span className='text-[25px] font-bold'>৳</span>{item.quantity * item.price}
                                            </td>
                                            <td className='border-none'>
                                                <div class="badge badge-sm rounded-none bg-[green]">{details.order_status}</div>
                                            </td>

                                        </tr>
                                    )) : (<h4 className='text-xl text-red-500'>Sorry No Data Found</h4>)}

                                    {/* <tr className='border-none'>
                                        <td className='border-none'>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product1} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold"></div>
                                                    
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border-none'>
                                            $45
                                        </td>
                                        <td className='border-none'>
                                            4
                                        </td>
                                        <td className='border-none'>
                                            $49
                                        </td>
                                        <td className='border-none'>Delete</td>

                                    </tr> */}



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

                                {/* content */}
                                <div className='divide-y divide-slate-200'>
                                    <div className="flex items-center py-4 justify-between">
                                        <p>Sub Total</p>
                                        <p><span className='text-[25px] font-bold'>৳</span>{details.total}.00</p>
                                    </div>
                                    <div className="flex items-center py-4 justify-between">
                                        <p>Shipping</p>
                                        <p className='text-red-500 italic'>Free Shipping</p>
                                    </div>
                                    <div className="flex items-center py-4 justify-between">
                                        <p className='font-bold'>Paid Total</p>
                                        <p className='font-bold'><span className='text-[15px] font-[800]'>৳</span> {details?.total}</p>
                                    </div>
                                </div>


                            </div>
                            <div className="text-right ">
                                <button className="text-end btn btn-md btn-primary bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition rounded-none border-none">Print Invoice</button>
                            </div>
                        </div>

                        {/* 2nd  part end*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;