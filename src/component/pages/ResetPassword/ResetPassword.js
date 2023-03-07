import React from 'react';

const ResetPassword = () => {
    return (
        <div>
            <div className="contain py-16 ">
                <div className="max-w-md bg-white mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium mb-1 text-center text-black">Reset Password</h2>
                    {/* <p className="text-gray-600 mb-6 text-sm text-center">
                        welcome back customer
                    </p> */}
                    <div className="divider"></div>
                    <form>
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="phone" className="text-[#0364BE] mb-2 block">Password</label>
                                <input type="text" name="phone" 
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Password"
                                />
                                {/* <span className='text-xs text-red-500 text-left'>{errors.phone?.message}</span> */}
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-[#0364BE] mb-2 block">Type Re-Password</label>
                                <input type="text" name="phone" 
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Re-Password"
                                />
                                {/* <span className='text-xs text-red-500 text-left'>{errors.phone?.message}</span> */}
                            </div>
                            
                        </div>
                        <div className="flex items-center justify-between mt-6">
                            <div className="flex items-center">
                                {/* <input type="checkbox" name="remember" id="remember"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" /> */}
                                {/* <label for="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label> */}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button type="submit"
                                className="block w-full py-2 text-center text-white bg-gradient-to-r from-primary to-[#52a3eb] border border-primary rounded hover:from-[#52a3eb] hover:to-primary transition uppercase font-roboto font-medium">Login</button>
                        </div>
                    </form>
                    {/* <p className="mt-4 text-center text-gray-600">Don't have account? <Link to="/sign-up"
                        className="text-primary">Register
                        now</Link></p> */}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;