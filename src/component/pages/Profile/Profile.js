import React from 'react';
import { useQuery } from 'react-query';

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
        return <h1>Loading...</h1>
    }
    console.log(data)
    return (
        <div className='py-20'>
            <div className='container flex items-center justify-center'>
                <div className="card w-96 bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{data?.data?.name}</h2>
                        <p><span className='text-bold'>Phone:</span>{data?.data?.phone}</p>
                        <div className="badge rounded-none badge-sm lg:badge-lg">{data?.data?.status}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;