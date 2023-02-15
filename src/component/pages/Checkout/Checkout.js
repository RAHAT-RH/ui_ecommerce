import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { actionTypes } from '../../Context/actionTypes';
import { useProducts } from '../../Context/ProductProvider';

const Checkout = () => {
    const navigate = useNavigate();
    const { state: { cart }, dispatch } = useProducts();
    const total = cart.reduce((total, product) => {
        return (total + (product.offer_price ? product?.offer_price : product?.price) * (product?.quantity))
    }, 0)


    // Division Field

    const [searchTerm, setSearchTerm] = useState("");
    const [divisionData, setDivisionData] = useState([]);
    const [filteredDivisionData, setFilteredDivisionData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    console.log(searchTerm)

    useEffect(() => {
        fetch("https://wehatbazar.thecell.tech/api/division", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(res => setDivisionData(res.data))
            .catch(error => console.error(error));
    }, []);

    const handleSearchDivision = event => {
        setSearchTerm(event.target.value);
        const filteredDivisionData = divisionData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDivisionData(filteredDivisionData);

    };

    // end division


    // start district
    const [searchTermDistrict, setSearchTermDistrict] = useState("");
    const [districtData, setDistrictData] = useState([]);
    const [filteredDistrictData, setFilteredDistrictData] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    console.log(searchTermDistrict)

    useEffect(() => {
        fetch("https://wehatbazar.thecell.tech/api/district", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(res => setDistrictData(res.data))
            .catch(error => console.error(error));
    }, []);

    const handleSearchDistrict = event => {
        setSearchTermDistrict(event.target.value);
        const filteredDistrictData = districtData.filter(item =>
            item.name.toLowerCase().includes(searchTermDistrict.toLowerCase())
        );
        setFilteredDistrictData(filteredDistrictData);
    };

    // end district

    // start upazila
    const [searchTermUpazila, setSearchTermUpazila] = useState("");
    const [upazilaData, setUpazilaData] = useState([]);
    const [filteredUpazilaData, setFilteredUpazilaData] = useState([]);
    const [selectedUpazila, setSelectedUpazila] = useState(null);


    useEffect(() => {
        fetch("https://wehatbazar.thecell.tech/api/upazila", {
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(res => setUpazilaData(res.data))
            .catch(error => console.error(error));
    }, []);

    const handleSearchUpazila = event => {
        setSearchTermUpazila(event.target.value);
        const filteredUpazilaData = upazilaData.filter(item =>
            item.name.toLowerCase().includes(searchTermUpazila.toLowerCase())
        );
        setFilteredUpazilaData(filteredUpazilaData);
    };

    // end upazila

    console.log(cart)
    const placeOrder = () => {
        const order = {
            shop_id: 2,
            products: cart.map(item => ({ id: item.id, quantity: item.quantity }))
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

                <div className="lg:col-span-7 sm:col-span-6 bg-white border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4 text-black">Shopping Details</h3>
                    <div className="space-y-4">
                        {/* <div className="grid  grid-cols-1 gap-4"> */}

                        <div className="p-6 w-full">

                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-group mb-6">
                                    <input type="text" name="division" id="email"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="Name" />
                                </div>

                                <div className="form-group mb-6">

                                    <input type="text" name="division" id="email"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="phone" />
                                    {/* <div>

                                        <ul className="dropdown-content menu p-2 bg-base-100 w-52 absolute ">
                                            {filteredDistrictData.map(item => (
                                                <li key={item.id} style={{ display: selectedDistrict === filteredDistrictData ? 'none' : 'block' }}>
                                                    <button onClick={() => {
                                                        setSearchTermDistrict(item.name);
                                                        setSelectedDistrict(filteredDistrictData);
                                                    }}>{item.name}</button>
                                                </li>
                                            ))}
                                        </ul>

                                    </div> */}
                                </div>
                            </div>
                            <div className="form-group mb-6">

                                <input type="text" name="division" id="email" 
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address Line 1" />
                               
                            </div>
                            <div className="form-group mb-6">

                                <input type="text" name="address" id="address"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address line 2" />
                            </div>
                            <div className="form-group mb-6">

                                <input type="text" name="address" id="address"
                                    value={searchTerm} onChange={handleSearchDivision}
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Division" />
                                <div>

                                    <ul className="dropdown-content menu  bg-base-100 w-full">

                                        {filteredDivisionData.map(item => (
                                            <li key={item.id} style={{ display: selectedId === filteredDivisionData ? 'none' : 'block' }}>
                                                <button onClick={() => {
                                                    setSearchTerm(item.name);
                                                    setSelectedId(filteredDivisionData);
                                                }}>{item.name}</button>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                            <div className="form-group mb-6">

                                <input type="text" name="address" id="address"
                                    value={searchTermDistrict} onChange={handleSearchDistrict}
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="District" />
                                <div>

                                    <ul className="dropdown-content menu p-2 bg-base-100 w-52 absolute ">
                                        {filteredDistrictData.map(item => (
                                            <li key={item.id} style={{ display: selectedDistrict === filteredDistrictData ? 'none' : 'block' }}>
                                                <button onClick={() => {
                                                    setSearchTermDistrict(item.name);
                                                    setSelectedDistrict(filteredDistrictData);
                                                }}>{item.name}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group mb-6">

                                <input type="text" name="address" id="address"
                                    value={searchTermUpazila} onChange={handleSearchUpazila}
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Sbu District" />
                                    <div>

                                        <ul className="dropdown-content menu bg-base-100 w-52 absolute ">
                                            {filteredUpazilaData.map(item => (
                                                <li key={item.id} style={{ display: selectedUpazila === filteredUpazilaData ? 'none' : 'block' }}>
                                                    <p className='cursor-pointer active:bg-white' onClick={() => {
                                                        setSearchTermUpazila(item.name);
                                                        setSelectedUpazila(filteredUpazilaData);
                                                    }}>{item.name}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>  
                            </div>

                            {/* <div className="flex justify-between py-3">
                                <h4 className="text-black">Billing Information</h4>
                                <span className='text-primary '><input type="checkbox" className="bg-white outline-none" name="same" value='same' id="" /> Same as shipping details</span>
                            </div> */}

                            {/* <div className="form-group mb-6">

                                <input type="text" name="address" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address 1..." />
                            </div>
                            <div className="form-group mb-6">

                                <input type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address 2..." />
                            </div>
                            <div className="form-group mb-6">

                                <textarea type="email" name="email" id="email"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address 3..." />
                            </div>
 */}

                        </div>
                        {/* </div> */}

                    </div>
                </div>

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
                                            <td><span className='text-[25px] font-bold'>৳</span>{product?.offer_price ? product?.quantity * product?.offer_price : product?.quantity * product?.price}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                            <p>shipping</p>
                            <p>Free</p>
                        </div>

                        <div className="flex  justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p><span className='text-[25px] font-bold'>৳</span>{total}</p>
                        </div>
                    </div>



                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link to="/" className="text-primary">terms & conditions</Link></label>
                    </div>

                    <button onClick={placeOrder}
                        className="block w-full py-3 px-4 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary transition font-medium">Place
                        order</button>
                </div>


            </div>
            <Toaster />
        </div >


    );
};

export default Checkout;