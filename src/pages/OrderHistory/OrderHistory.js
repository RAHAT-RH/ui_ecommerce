import React from 'react';
import NewArrival from '../Home/NewArrival';

const OrderHistory = () => {
    return (
        <div className='py-16'>
            <h1 className='text-center font-bold lg:text-4xl sm:text-2xl pb-8'>Order History</h1>
            <div className="container ">

                <div className="overflow-x-auto rounded-none pb-24">
                    <table className="table w-full rounded-none">

                        <thead>
                            <tr>
                                <th className='text-black bg-white rounded-none'>Order No:</th>
                                <th className='text-black bg-white rounded-none'>Date</th>
                                <th className='text-black bg-white rounded-none'>Ship to</th>
                                <th className='text-black bg-white rounded-none'>Status</th>
                                <th className='text-black bg-white rounded-none'>Total</th>
                                <th className='text-black bg-white rounded-none'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>#001</td>
                                <td>Jan 8, 2023</td>
                                <td>Mirpur, Dhaka</td>
                                <td>
                                    <span className="badge bg-[#C798EC] rounded-none border-none">Processing</span>
                                </td>
                                <td>
                                    $18.00
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-primary rounded-none">View</button>
                                </td>
                            </tr>

                            <tr>
                                <td>#001</td>
                                <td>Jan 8, 2023</td>
                                <td>Mirpur, Dhaka</td>
                                <td>
                                    <span className="badge bg-[#FB767D] rounded-none border-none">Cancelled</span>
                                </td>
                                <td>
                                    $18.00
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-primary rounded-none">View</button>
                                </td>
                            </tr>

                            <tr className='rounded-none'>
                                <td>#001</td>
                                <td>Jan 8, 2023</td>
                                <td>Mirpur, Dhaka</td>
                                <td>
                                    <span className="badge bg-[#F8B66F] rounded-none border-none">Pending</span>
                                </td>
                                <td>
                                    $18.00
                                </td>
                                <td>
                                    <button className="btn btn-sm bg-primary rounded-none">View</button>
                                </td>
                            </tr>

                            <tr className='rounded-none'>
                                <td className='rounded-none'>#001</td>
                                <td className='rounded-none'>Jan 8, 2023</td>
                                <td className='rounded-none'>Mirpur, Dhaka</td>
                                <td className='rounded-none'>
                                    <span className="badge bg-[#80D6A8] rounded-none border-none">Delivered</span>
                                </td>
                                <td className='rounded-none'>
                                    $18.00
                                </td>
                                <td className='rounded-none'>
                                    <button className="btn btn-sm bg-primary rounded-none">View</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <NewArrival></NewArrival>
        </div>
    );
};

export default OrderHistory;