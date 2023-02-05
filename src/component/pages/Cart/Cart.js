import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import NewArrival from '../Home/NewArrival';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProducts } from '../../Context/ProductProvider';
import Loading from '../Loading/Loading';
import { actionTypes } from '../../Context/actionTypes';


const Cart = () => {
    // const Globalstate = useContext(Cartcontext);
    // const state = Globalstate.state;
    // const dispatch = Globalstate.dispatch
    // // console.log(state)

    // const [cart, setCart] = useState([])
    const navigate = useNavigate();

    const reDriectToCheckOut = () => {
        navigate('/checkout')
    }

    const {  state: {cart, loading, error}, dispatch  } = useProducts();

    let content;

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        content = <h1>Something went wrong</h1>
    }
    const total = cart.reduce((total, product) => {
        return (total + product.offer_price * (product.quantity))
    }, 0)




    const subTotal = cart.map((product) => {
        return ((product.quantity) * product.offer_price)
    })

    // console.log(subTotal)

    return (
        <div className='py-16'>
            <div className="container">

                <div className='flex  pt-10 flex-col lg:flex-row gap-4'>
                    {/* first part */}
                    <div className="overflow-x-auto w-full rounded-none">
{content}
                        <table className="table  w-full rounded-none">
                            <thead className=''>
                                <tr className='z-0'>
                                    <th className='bg-blue-400 text-white rounded-none z-0'>Products</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Price</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Qty</th>
                                    <th className='bg-blue-400 text-white rounded-none'>SubTotal</th>
                                    <th className='bg-blue-400 text-white rounded-none'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='rounded-none'>
                                {cart.map((product) => (
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
                                                    if ((product.quantity) > 1) {
                                                        dispatch({ type: actionTypes.DECREASE, payload: product });
                                                    } else {
                                                        dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product });
                                                    }
                                                }}
                                                >
                                                    -
                                                </div>
                                                <p className="h-8 w-8 text-base flex items-center border-0 outline-none justify-center bg-white p-2">{(product.quantity)}</p>

                                                <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                                                onClick={() => dispatch({ type: actionTypes.INCREASE, payload: product })} 
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </td>
                                        <td className='border-none'>
                                            {(product.quantity) * (product.offer_price)}
                                        </td>
                                        <td className='border-none'><button onClick={() => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product })} className=' outline-none border-none bg-white btn-sm'><RiDeleteBin6Line className='text-2xl text-red-600 hover:text-red-700' /></button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* first part end*/}
                    {/* 2nd  part start*/}
                    <div className="card lg:max-w-md sm:w-full  bg-base-100 rounded-none mb-20">
                        {cart.length > 0 &&
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
                                    <h5 className='text-[18px] font-[500]'>Total: {total}</h5>
                                    <span className='text-[18px] font-[500]'></span>
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