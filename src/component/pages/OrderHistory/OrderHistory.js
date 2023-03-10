import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';




const OrderHistory = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://wehatbazar.thecell.tech/api/user-details', {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }, []);

    const userId = user?.data


    const { data, isLoading } = useQuery("history", () => fetch('https://wehatbazar.thecell.tech/api/user/order', {
        method: "GET",
        headers: {
            'content-type': "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => res.json()
    )
    )

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    const history = data?.data
    console.log(history)
    

    const filteredHistory = Array.isArray(history) ? history.filter(historyItem => user && userId?.id === historyItem?.user_id) : [];

    console.log(filteredHistory)
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


                            {filteredHistory.map((historyItem) => (
                                <tr key={historyItem?.id}>
                                    <td>{historyItem?.id}</td>
                                    <td>{new Date(historyItem?.created_at).toLocaleDateString()}</td>
                                    <td>Mirpur, Dhaka</td>
                                    <td>
                                        <span className="badge bg-[#FB767D] rounded-none border-none">{historyItem?.order_status}</span>
                                    </td>
                                    <td>
                                    <span className='text-[25px] font-bold'>???</span>{historyItem?.total}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                navigate(`/order-details/${historyItem?.id}`);
                                                localStorage.setItem("id", historyItem?.id)

                                            }} className="btn btn-sm bg-primary rounded-none">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default OrderHistory;