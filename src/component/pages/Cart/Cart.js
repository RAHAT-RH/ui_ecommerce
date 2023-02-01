import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cartcontext } from '../../Context/Context';
import NewArrival from '../Home/NewArrival';
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch
    // console.log(state)

    // const [cart, setCart] = useState([])
    const navigate = useNavigate();

    const reDriectToCheckOut = () => {
        navigate('/checkout')
    }




    const total = state.reduce((total, product) => {
        return (total + product.offer_price * (product.is_popular + 1))
    }, 0)



    // console.log(state)
    // const subTotal = state.map((product) => {
    //     return ((product.is_popular + 1) * product.offer_price)
    // })

    // console.log(subTotal)

    return (
        <div className='py-16'>
            <div className="container">

                <div className='flex  pt-10 flex-col lg:flex-row gap-4'>
                    {/* first part */}
                    <div className="overflow-x-auto w-full rounded-none">

                        <table className="table  w-full rounded-none">
                            <thead className=''>
                                <tr className=''>
                                    <th className='bg-blue-400 text-white rounded-none'>Products</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Price</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Qty</th>
                                    <th className='bg-blue-400 text-white rounded-none'>SubTotal</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='rounded-none'>
                                {state.map((product) => (
                                    <tr key={product.id} className='border-none'>
                                        <td className='border-none'>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={product?.main?.original_url} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{product?.name}</div>
                                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border-none'>
                                            ${product.offer_price}
                                        </td>
                                        <td className='border-none'>
                                            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                                                    onClick={() => {
                                                        if ((product.is_popular + 1) > 1) {
                                                            dispatch({ type: 'DECREASE', payload: product });
                                                        } else {
                                                            dispatch({ type: "REMOVE", payload: product });
                                                        }
                                                    }}>
                                                    -
                                                </div>
                                                <p className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2">{(product.is_popular + 1)}</p>

                                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                                                    onClick={() => dispatch({ type: 'INCREASE', payload: product })} >
                                                    +
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border-none'>
                                            {(product.is_popular + 1) * (product.offer_price)}
                                        </td>
                                        <td className='border-none'><button onClick={() => dispatch({ type: "REMOVE", payload: product })} className=' outline-none border-none bg-white btn-sm'><RiDeleteBin6Line className='text-2xl text-red-600 hover:text-red-700'/></button></td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* first part end*/}
                    {/* 2nd  part start*/}
                    <div className="card lg:max-w-md sm:w-full  bg-base-100 rounded-none mb-20">
                        {state.length > 0 &&
                            <div className="card-body">
                                <div className='shadow-md p-5'>
                                    <p className='font-[500] text-normal'> Have a coupon? <Link className='link text-blue-500' to='/'>Click Here to enter your code</Link></p>
                                </div>
                                <div className="divider"></div>
                                <h4 className='font-[500]'>Shipping:</h4>
                                <div className="form-control items-start">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio " />
                                        <span className="label-text pl-2">Flat Rate</span>
                                    </label>
                                </div>
                                <div className="form-control items-start">
                                    <label className="label cursor-pointer">
                                        <input type="radio" name="radio-10" className="radio " />
                                        <span className="label-text pl-2">Free Shipping</span>
                                    </label>
                                </div>
                                <div className="divider"></div>
                                <div className='flex justify-between'>
                                    <h5 className='text-[18px] font-[500]'>Total:</h5>
                                    <span className='text-[18px] font-[500]'>{total}</span>
                                </div>

                            </div>
                        }
                        <div className="block ">
                            <button onClick={reDriectToCheckOut} className="btn w-full btn-primary bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition rounded-none border-none">Process to Checkout</button>
                        </div>
                    </div>

                    {/* 2nd  part end*/}
                </div>
                <NewArrival className='py-16'></NewArrival>
            </div>
        </div>
    );
};

export default Cart;