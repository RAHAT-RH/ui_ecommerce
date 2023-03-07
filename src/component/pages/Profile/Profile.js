import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { RiPencilLine } from "react-icons/ri";
import EditProfile from './EditProfile';
const Profile = () => {

    const { data, isLoading } = useQuery("userDetails", () => (fetch('https://wehatbazar.thecell.tech/api/user-details', {
        method: "GET",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "content-type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}`
        },
    }).then((res) => res.json())
    ))
    if (isLoading) {
        return <Loading></Loading>
    }

    const details = data?.data
    if (details) {
        (localStorage.setItem("user_id", details?.id))
        localStorage.setItem("information", JSON.stringify(details))
    }
    




    return (
        <div className="contain py-16 ">
            <div className="max-w-xl bg-white mx-auto shadow px-6 py-9 rounded overflow-hidden">
                <div className=''>
                    <div>
                        <h2 className="text-2xl uppercase font-medium mb-1  text-black">{details?.name}</h2>
                        <div className='flex justify-between items-baseline flex-col lg:flex-row'>
                            <p className="text-gray-600 mb- text-sm ">
                                Dhaka, Bangladesh
                            </p>
                            <div className='text-blue-600'>
                                <p>
                                    <Link to='/edit-profile' className='text-sm flex justify-between'>
                                        <span className='text-[20px] pr-2'>
                                            <RiPencilLine />
                                        </span>
                                        <span>
                                            Edit Profile
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <p className="font-normal text-gray-700 py-3 dark:text-gray-400">Name : {details?.name}</p>
                <p className="font-normal text-gray-700 py-3 dark:text-gray-400">Phone: {details?.phone}</p>
            </div>
       
        </div>
    );
};

export default Profile;