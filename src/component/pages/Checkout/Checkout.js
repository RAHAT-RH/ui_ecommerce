import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../../Context/Context';

const Checkout = () => {

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;

    const total = state.reduce((total, product) => {
        return (total + product.offer_price * product.is_popular)
    }, 0)


    return (
        <div>
            <div className="container grid lg:grid-cols-12 sm:grid-cols-1 items-start pb-16 pt-4 gap-4">

                <div className="lg:col-span-7 sm:col-span-6 bg-white border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4 text-black">Shopping Details</h3>
                    <div className="space-y-4">
                        {/* <div className="grid  grid-cols-1 gap-4"> */}

                        <div className="p-6 w-full">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group mb-6">
                                    <label htmlFor="email" className="text-[#0364BE] mb-2 block">Email address</label>
                                    <input type="email" name="email" id="email"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="youremail.@gmail.com" />
                                </div>
                                <div className="form-group mb-6">
                                    <label htmlFor="email" className="text-[#0364BE] mb-2 block">Email address</label>
                                    <input type="email" name="email" id="email"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="youremail.@gmail.com" />
                                </div>
                            </div>
                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>
                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>

                            <div className="flex justify-between py-3">
                                <h4 className="text-black">Billing Information</h4>
                                <span className='text-primary '><input type="checkbox" className="bg-white outline-none" name="same" value='same' id="" /> Same as shipping details</span>
                            </div>

                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>
                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>
                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>


                        </div>
                        {/* </div> */}

                    </div>
                </div>

                <div className="lg:col-span-5 sm:col-span-6 bg-white w-full border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
                    <div className="space-y-2">
                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Qty</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.map((product, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{product.is_popular}</td>
                                            <td>{(product.is_popular) * (product.offer_price)}</td>
                                        </tr>
                                    ))}
                                   
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                            <p>shipping</p>
                            <p>Free</p>
                        </div>

                        <div className="flex  justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p>${total}</p>
                        </div>
                    </div>



                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link to="/" className="text-primary">terms & conditions</Link></label>
                    </div>

                    <Link to=""
                        className="block w-full py-3 px-4 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition font-medium">Place
                        order</Link>
                </div>


            </div>
        </div >


    );
};

export default Checkout;