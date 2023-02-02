import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiHeartLine, RiShoppingCartFill } from "react-icons/ri";
import { Cartcontext } from '../../Context/Context';
import { toast, Toaster } from 'react-hot-toast';
const SliderProduct = ({ product }) => {
    const navigate = useNavigate()
    const redirectToDetails = (id) => {
        navigate(`/single-product/${product.id}`)
    }

    const [added, setAdded] = useState(false)
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;

    const handleClick = () => {

        if (added) {
            dispatch({ type: 'REMOVE', payload: product });
            toast("Remove to cart")
      
        } else {
            dispatch({ type: 'ADD', payload: product });
            toast("Added to cart")
   
        }
        setAdded(!added);

    };


    return (
        <div className="bg-white group hover:shadow-xl transition ease-in-out delay-150 duration-300">
            <div className="relative h-52 bg-cover  bg-no-repeat bg-center">
                <img src={product?.main?.original_url} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                    <Link to="/"
                        className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                        title="view product">
                        <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                    </Link>
                    <Link to="/"
                        className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                        title="add to wishlist">
                        <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                    </Link>
                </div>
            </div>
            <div className="pt-4 pb-3 px-4">
                <button onClick={() => redirectToDetails(product.id)} className='link no-underline'>
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product?.name}</h4>
                </button>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold">${product?.offer_price}</p>
                    <p className="text-sm text-gray-400 line-through">${product?.price}</p>
                </div>
            </div>
            <button onClick={handleClick} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">
                {added ? 'Remove to Cart' : 'Add to Cart'}
            </button>
            <Toaster></Toaster>
            {/* <button onClick={() => dispatch({type: 'ADD', payload: product})} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">Add to cart</button> */}
        </div>
    );
};

export default SliderProduct;