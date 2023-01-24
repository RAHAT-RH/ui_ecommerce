import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div class="contain py-16">
                <div class="max-w-md bg-white mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 class="text-2xl uppercase font-medium text-center text-black mb-1">Create an account</h2>
                    <p class="text-gray-600 mb-6 text-center text-sm">
                        Register for new customer
                    </p>
                    <div className="divider"></div>
                    <form action="#" autocomplete="off">
                        <div class="space-y-2">
                            <div>
                                <label for="name" class="text-[#0364BE] mb-2 block">Full Name</label>
                                <input type="text" name="name" id="name"
                                    class="block bg-white w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Your Name" />
                            </div>
                            <div>
                                <label for="email" class="text-[#0364BE] mb-2 block">Email address</label>
                                <input type="email" name="email"
                                    class="block bg-white w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="youremail.@gmail.com" />
                            </div>
                            <div>
                                <label for="password" class="text-[#0364BE] mb-2 block">Password</label>
                                <input type="password" name="password" id="password"
                                    class="block w-full bg-white border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="*******" />
                            </div>
                            <div>
                                <label for="confirm" class="text-[#0364BE] mb-2 block">Confirm password</label>
                                <input type="password" name="confirm" id="confirm"
                                    class="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="*******" />
                            </div>
                        </div>
                        {/* <div class="mt-6">
                            <div class="flex items-center">
                                <input type="checkbox" name="aggrement" id="aggrement"
                                    class="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="aggrement" class="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                        href="#" class="text-primary">terms & conditions</a></label>
                            </div>
                        </div> */}
                        <div class="mt-4">
                            <button type="submit"
                                class="block w-full py-2 text-center text-white  border border-primary rounded bg-gradient-to-r from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition uppercase font-roboto font-medium">create
                                account</button>
                        </div>
                    </form>
                    <p class="mt-4 text-center text-gray-600">Already have account? <Link to="/login"
                        class="text-primary">Login now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;