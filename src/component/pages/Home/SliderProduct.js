import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiHeartLine, RiShoppingCartFill } from "react-icons/ri";
import { useProducts } from '../../Context/ProductProvider';
import { actionTypes } from '../../Context/actionTypes';
import { toast } from 'react-hot-toast';

const SliderProduct = ({ product }) => {
    const navigate = useNavigate()
    const redirectToDetails = () => {
        navigate(`/single-product/${product.id}`)
    }

    const { state: { cart }, dispatch } = useProducts();

    const addToCart = () => {
        dispatch({ type: actionTypes.ADD_TO_CARD, payload: product })
        toast.success('Add to cart successfully', {
            style: {
                padding: '10px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    }
    const removeToCart = () => {
        dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product })

        toast.success('Remove from cart', {
            style: {
                // border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    }
    return (
        <div className="bg-white group hover:shadow-sm transition">
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
                    <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition truncate w-52">{product?.name}</h4>
                </button>
                <div className="flex items-baseline mb-1 space-x-2">
                    <p className="text-xl text-primary font-semibold"><span className='text-[25px] font-bold'>৳</span>{product?.offer_price ? product?.offer_price : product?.price}</p>
                    <p className="text-sm text-gray-400 line-through">{product?.offer_price ? "৳" + product?.price : ""}</p>

                </div>
            </div>

            {
                cart?.some(cartProduct => cartProduct?.id === product?.id) ? (
                    <button onClick={removeToCart} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-red-500 to-[#52a3eb] hover:from-[red] hover:to-primary ease-in-out delay-150 duration-300 transition">
                        Remove From Cart
                    </button>
                ) : (
                    <button onClick={addToCart} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">
                        Add To Cart
                    </button>
                )
            }

        </div>
    );
};

export default SliderProduct;

// onClick={handleClick}
//  {/* {added ? 'Remove to Cart' : 'Add to Cart'} */}