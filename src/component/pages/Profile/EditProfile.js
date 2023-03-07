import React from 'react';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const login = async (data) => {
        console.log(data.phone)
    }
    const information = localStorage.getItem("information")
    const detailsProfile = JSON.parse(information)
    console.log(detailsProfile.name)

    return (
        <div className="contain py-16 ">
            <div className="max-w-xl bg-white mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1  text-black">{detailsProfile?.name}</h2>
                    <p className="text-gray-600 mb- text-sm ">
                        Dhaka, Bangladesh
                    </p>
                <div className="divider"></div>
                <form onSubmit={handleSubmit(login)}>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="text-[#0364BE] mb-2 block">Name</label>
                                <input type="text" name="Name"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder={detailsProfile?.name}
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        }
                                        // minLength: {
                                        //     value: 11,
                                        //     message: "Must be 11 digits"
                                        // },
                                        // maxLength: {
                                        //     value: 11,
                                        //     message: "No more than 11 digits can be given"
                                        // }
                                    })}
                                />
                                <span className='text-xs text-red-500 text-left'>{errors?.name?.message}</span>
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-[#0364BE] mb-2 block">Your Phone Number</label>
                                <input type="text" name="phone"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder={detailsProfile?.phone}
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Number is Required"
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: "Only give number."
                                        },
                                        minLength: {
                                            value: 11,
                                            message: "Must be 11 digits"
                                        },
                                        maxLength: {
                                            value: 11,
                                            message: "No more than 11 digits can be given"
                                        }
                                    })}
                                />
                                <span className='text-xs text-red-500 text-left'>{errors.phone?.message}</span>
                            </div>
                        </div>
                        <div className='space-y-2'>
                                <label htmlFor="phone" className="text-[#0364BE] mb-2 block">Address</label>
                                <input type="text" name="phone" 
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address Line 1..."
                                    {...register("addressOne", {
                                        required: {
                                            value: true,
                                            message: "Address is Required"
                                        }
                                    })}
                                />
                                <input type="text" name="phone" 
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address Line 2..."
                                    {...register("phone")}
                                    //     required: {
                                    //         value: true,
                                    //         message: "Address is Required"
                                    //     },
                                    //     pattern: {
                                    //         value: /^[0-9]*$/,
                                    //         message: "Only give number."
                                    //     },
                                    //     minLength: {
                                    //         value: 11,
                                    //         message: "Must be 11 digits"
                                    //     },
                                    //     maxLength: {
                                    //         value: 11,
                                    //         message: "No more than 11 digits can be given"
                                    //     }
                                    // })}
                                />
                                <span className='text-xs text-red-500 text-left'>{errors.addressOne?.message}</span>
                            </div>

                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            {/* <input type="checkbox" name="remember" id="remember"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" /> */}
                            {/* <label for="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label> */}
                        </div>
                        {/* <Link to="/reset-password" className="text-primary">Forget Number</Link> */}
                    </div>
                    <div className="mt-4">
                        <button type="submit"
                            className="block w-full py-2 text-center text-white bg-gradient-to-r from-primary to-[#52a3eb] border border-primary rounded hover:from-[#52a3eb] hover:to-primary transition uppercase font-roboto font-medium">Updated</button>
                    </div>
                </form>
                {/* <p className="mt-4 text-center text-gray-600">Don't have account? <Link to="/sign-up"
                        className="text-primary">Register
                        now</Link></p> */}
            </div>
        </div>
    );
};

export default EditProfile;