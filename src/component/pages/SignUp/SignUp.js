import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const userHandle = async (data) => {
        const user = {
            name: data.name,
            phone: data.phone
        }
        console.log(user)
       const phoneData = data.phone;
        fetch("https://wehatbazar.thecell.tech/api/user-register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.success === true) {
                    toast.success(data.message);
                    navigate('/otp-verify')
                    localStorage.setItem('phone', phoneData)
                } else {
                    toast.error(data.message);
                    console.log(data)
                }
                reset()
            })
    }




    return (
        <div>
            <div className="contain py-16">
                <div className="max-w-md bg-white mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium text-center text-black mb-1">Create an account</h2>
                    <p className="text-gray-600 mb-6 text-center text-sm">
                        Register for new customer
                    </p>
                    <div className="divider"></div>
                    <form onSubmit={handleSubmit(userHandle)}>
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="name" className="text-[#0364BE] mb-2 block">Full Name</label>
                                <input type="text" name="name" id="name"
                                    className="block bg-white w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Your Name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is Required"
                                        },
                                        pattern: {
                                            value: /[a-z]/,
                                            message: "only letter."
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Al least 3 characters"
                                        },
                                    })}
                                />
                                <span className='text-xs text-red-500 text-left'>{errors.name?.message}</span>
                            </div>
                            <div>
                                <label htmlFor="number" className="text-[#0364BE] mb-2 block">Phone Number</label>
                                <input type="text" name="number"
                                    className="block bg-white w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="012345678901"
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
                        {/* <div className="mt-6">
                            <div className="flex items-center">
                                <input type="checkbox" name="aggrement" id="aggrement"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                        href="#" className="text-primary">terms & conditions</a></label>
                            </div>
                        </div> */}
                        <div className="mt-4">
                            <button type="submit"
                                className="block w-full py-2 text-center text-white  border border-primary rounded bg-gradient-to-r from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition uppercase font-roboto font-medium">create
                                account</button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-gray-600">Already have account? <Link to="/login"
                        className="text-primary">Login now</Link></p>
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default SignUp;