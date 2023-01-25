import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <div className="container grid lg:grid-cols-12 sm:grid-cols-1 items-start pb-16 pt-4 gap-4">

                <div className="lg:col-span-8 sm:col-span-6 bg-white border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4 text-black">Shopping Details</h3>
                    <div className="space-y-4">
                        {/* <div className="grid  grid-cols-1 gap-4"> */}

                        <div className="p-6 w-full">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group mb-6">
                                    <label for="email" className="text-[#0364BE] mb-2 block">Email address</label>
                                    <input type="email" name="email" id="email"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="youremail.@gmail.com" />
                                </div>
                                <div className="form-group mb-6">
                                    <label for="email" className="text-[#0364BE] mb-2 block">Email address</label>
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

                <div className="lg:col-span-4 sm:col-span-6 bg-white w-full border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-medium">T-Shirt</h5>
                                <p className="text-sm text-gray-600">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-medium">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-medium">Huddy</h5>
                                <p className="text-sm text-gray-600">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-medium">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-medium">Casual</h5>
                                <p className="text-sm text-gray-600">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-medium">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-medium">Boxer</h5>
                                <p className="text-sm text-gray-600">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-medium">$320</p>
                        </div>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>subtotal</p>
                        <p>$1280</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                        <p>shipping</p>
                        <p>Free</p>
                    </div>

                    <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
                        <p className="font-semibold">Total</p>
                        <p>$1280</p>
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
        </div>


    );
};

export default Checkout;