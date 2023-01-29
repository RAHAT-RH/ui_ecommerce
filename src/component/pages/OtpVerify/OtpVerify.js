import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import TokenAuth from '../../../Authentication/TokenAuth/TokenAuth';
import Navbar from '../../shared/Navbar/Navbar';


// interface Props {}



const OtpVerify = ({ data }) => {
    const { token, setToken } = TokenAuth()
    const number = localStorage.getItem('phone')
    console.log(number)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const verifyOtp = async (data) => {
        const user = {
            otp: data.otp,
            phone: number
        }
        console.log(user)

        fetch("https://wehatbazar.thecell.tech/api/verify-otp", {
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
                    toast.success("Successfully Login");
                    setToken(data.data.access_token)
                    localStorage.removeItem('phone')
                } else {
                    toast.error(data.message);
                    console.log(data)
                }

                reset()
            })
    }

    console.log(data)

    return (
        <div>
            <div className="contain py-16">
                <div className="max-w-md bg-white mx-auto shadow px-6 py-7 rounded overflow-hidden">
                    <h2 className="text-2xl uppercase font-medium text-center text-black mb-1">OTP</h2>
                    <p className="text-gray-600 mb-6 text-center text-sm">
                        Register for new customer
                    </p>
                    <div className="divider"></div>
                    <form onSubmit={handleSubmit(verifyOtp)}>
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="otp" className="text-[#0364BE] mb-2 block">OTP</label>
                                <input type="text" name="otp"
                                    className="block bg-white w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="012345678901"
                                    {...register("otp", {
                                        required: {
                                            value: true,
                                            message: "otp is Required"
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: "Only give number."
                                        },
                                        minLength: {
                                            value: 4,
                                            message: "Must be 4 digits"
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: "No more than 4 digits can be given"
                                        }
                                    })}
                                />
                                <span className='text-xs text-red-500 text-left'>{errors.otp?.message}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button type="submit"
                                className="block w-full py-2 text-center text-white  border border-primary rounded bg-gradient-to-r from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition uppercase font-roboto font-medium">Verify</button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-gray-600">Reset otp <Link to="/login"
                        className="text-primary">Reset otp</Link></p>
                </div>
            </div>
            <Toaster />


        </div>
    );
};

export default OtpVerify;