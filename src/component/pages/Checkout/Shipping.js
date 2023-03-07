import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { actionTypes } from '../../Context/actionTypes';
import { useProducts } from '../../Context/ProductProvider';
import Loading from '../Loading/Loading';

const Shipping = () => {
    const navigate = useNavigate();
    const { state: { cart }, dispatch } = useProducts();


    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
    };

    const [isCheckboxCheckedTerms, setIsCheckboxCheckedTerms] = useState(false);

    const handleCheckboxChangeTerms = (event) => {
        setIsCheckboxCheckedTerms(event.target.checked);
    };

    // const [cost, setCost] = useState();
    const dataShipping = localStorage.getItem("selectedData")
    // console.log(dataShipping)
    const getData = JSON.parse(dataShipping)
    // console.log(getData)

    const costDetails = {
        user_division_id: JSON.stringify(getData[0]),
        user_district_id: JSON.stringify(getData[1]),
        products: cart.map(item => ({ id: item.id, quantity: item.quantity, price: item.price}))
    }

    const { data, isLoading } = useQuery("costShipping", () => fetch('https://wehatbazar.thecell.tech/api/shipping-rate', {
        method: "POST",
        headers: {
            'content-type': "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(costDetails),
    }).then((res) => res.json()
    )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const costShipping = data?.data

    const total = cart.reduce((total, product) => {
        return (total + (product.offer_price === null ? product?.price : product?.offer_price) * (product?.quantity))
    }, 0)

    console.log(cart)

    const placeOrder = () => {
        const order = {
            user_division_id: JSON.stringify(getData[0]),
            user_district_id: JSON.stringify(getData[1]),
            products: cart.map(item => ({ id: item.id, shop_id: item.shop_id, quantity: item.quantity }))
        }

        console.log(order)

        fetch("https://wehatbazar.thecell.tech/api/user/order", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    console.log(data)
                    swal({
                        title: "Successfully Order!",
                        text: "Thank you for your shopping",
                        icon: "success",
                        button: {
                            text: "Continue Shopping",
                            value: true,
                            visible: true,
                            className: "",
                            closeModal: true
                        }

                    }).then((value) => {
                        if (value) {
                            navigate('/')
                        }
                    });
                    localStorage.removeItem('phone');
                    dispatch({ type: actionTypes.CLEAR_CART });

                } else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <div className="container grid lg:grid-cols-12 sm:grid-cols-1 items-start pb-16 pt-4 gap-4">
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
                                    {cart.map((product, index) => (
                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{product.quantity}</td>
                                            <td><span className='text-[25px] font-bold'>৳</span>{product?.offer_price === null ? product?.quantity * product?.price : product?.quantity * product?.offer_price}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                            <p>shipping</p>
                            <p><span className='text-[20px] font-bold'>৳</span>{costShipping?.cost}</p>
                        </div>

                        <div className="flex  justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p><span className='text-[25px] font-bold'>৳</span>{total + costShipping?.cost}</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox" checked={isCheckboxChecked}
                            onChange={handleCheckboxChange}
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label className="text-gray-600 ml-3 cursor-pointer text-sm">{costShipping?.type}</label>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input name='terms' type="checkbox" checked={isCheckboxCheckedTerms}
                            onChange={handleCheckboxChangeTerms}
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label htmlFor='terms' className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link to="/terms-condition" className="text-primary">terms & conditions</Link></label>
                    </div>


                    {/* <button
                        disabled={!isCheckboxChecked}
                        className={`block w-full py-3 px-4 text-center text-white ${!isCheckboxChecked ? 'bg-red' : 'bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition'
                            } font-medium`}
                    >
                        Place order
                    </button> */}
                    {isCheckboxChecked && isCheckboxCheckedTerms === true ?
                        (
                            <button onClick={placeOrder} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">
                                Place Order
                            </button>
                        ) : (
                            
                            <button className="block cursor-not-allowed w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-red-500 to-[#52a3eb] hover:from-[red] hover:to-primary ease-in-out delay-150 duration-300 transition">
                                 Place Order
                            </button>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Shipping;