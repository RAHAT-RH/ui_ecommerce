import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../Context/ProductProvider';
import Select from 'react-select';
import axios from 'axios';


const Checkout = () => {
    const navigate = useNavigate();
    const { state: { cart } } = useProducts();
    const total = cart.reduce((total, product) => {
        return (total + (product.offer_price === null ? product?.price : product?.offer_price) * (product?.quantity))
    }, 0)

    const [divisionOptions, setDivisionOptions] = useState([]);
    const [districtOptions, setDistrictOptions] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    const handleDivisionChange = (option) => {
        setSelectedDivision(option);
        setSelectedDistrict(null);
    };

    const handleDistrictChange = (option) => {
        setSelectedDistrict(option);
    };

    useEffect(() => {
        const fetchDivisionOptions = async () => {
            const response = await axios.get('https://wehatbazar.thecell.tech/api/division');
            const divisionOptionsData = response.data.data.map((option) => ({
                label: option.name,
                value: option.id,
            }));
            setDivisionOptions(divisionOptionsData);
        };

        fetchDivisionOptions();
    }, []);

    useEffect(() => {
        const fetchDistrictOptions = async () => {
            if (selectedDivision) {
                const response = await axios.get(`https://wehatbazar.thecell.tech/api/district?division_id=${selectedDivision.value}`);
                const districtOptionsData = response.data.data.map((option) => ({
                    label: option.name,
                    value: option.id,
                }));
                setDistrictOptions(districtOptionsData);
            }
        };

        fetchDistrictOptions();
    }, [selectedDivision]);

    
    // console.log(cart)
    const handleClick = () => {
        const data = [
            selectedDivision.value,
            selectedDistrict.value
        ];
        localStorage.setItem("selectedData", JSON.stringify(data));
        const costDetails = {
            user_division_id: selectedDivision.value,
            user_district_id: selectedDistrict.value,
            products: cart.map(item => ({ id: item.id, quantity: item.quantity, total: total }))
        }
        console.log(costDetails)

        fetch("https://wehatbazar.thecell.tech/api/shipping-rate", {
            method: "POST",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(costDetails),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))

        navigate("/shipping");
    };


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
                                    <input type="text" name="division" id="phone"
                                        className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                        placeholder="phone" />
                                </div>
                            </div>

                            <div className="form-group mb-6">
                                <textarea cols={7} type="text" name="division" id="address"
                                    className="block w-full border bg-white border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                    placeholder="Address" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div className="form-group mb-6">
                                    <Select
                                        options={divisionOptions}
                                        value={selectedDivision}
                                        onChange={handleDivisionChange}
                                        isSearchable
                                        placeholder="Select a division"
                                    />
                               
                                </div>

                                <div className="form-group mb-6">
                               
                                        <Select
                                            options={districtOptions}
                                            value={selectedDistrict}
                                            onChange={handleDistrictChange}
                                            isSearchable
                                            placeholder="Select a district"
                                            isDisabled={!selectedDivision}
                                        />
                                    
                                    
                                </div>

                            </div>
                        </div>
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
                                            <td><span className='text-[25px] font-bold'>৳</span>{product?.offer_price === null ? product?.quantity * product?.price : product?.quantity * product?.offer_price}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        {/* <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
                            <p>shipping</p>
                            <p>Free</p>
                        </div> */}

                        <div className="flex  justify-between text-gray-800 font-medium py-3 uppercase">
                            <p className="font-semibold">Total</p>
                            <p><span className='text-[25px] font-bold'>৳</span>{total}</p>
                        </div>
                    </div>





                    {/* <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link to="/" className="text-primary">terms & conditions</Link></label>
                    </div> */}

                    
                    

                    {selectedDistrict  ? 
                        (
                            <button onClick={handleClick} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">
                                Confirm Order
                            </button>
                        ) : (
                            
                            <button className="block cursor-not-allowed w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-red-500 to-[#52a3eb] hover:from-[red] hover:to-primary ease-in-out delay-150 duration-300 transition">
                                 Confirm Order
                            </button>

                        )
                    }
                </div>
            </div>
        </div >


    );
};

export default Checkout;