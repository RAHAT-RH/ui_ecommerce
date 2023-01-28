
import { useEffect, useState } from 'react';

import { Link,  } from 'react-router-dom';


import SliderProduct from './SliderProduct';

// import SliderProduct from './SliderProduct';
const TrandingProducts = () => {

    


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://wehatbazar.thecell.tech/api/product?include=media", {
            method: "GET",
            headers: {
                'content-type': "application/json",
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {

                setProducts(data?.data)
            })
    }, [])


    // const Globalstate = useContext(Cartcontext);
    // const dispatch = Globalstate.dispatch;
    // console.log(Globalstate)
    return (
        <div>
            <div className="container pb-10 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">all products</h2>
                    <button className="btn btn-primary btn-xs">See More</button>
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {/* single product */}

                    {products.map((product) => (
                        <SliderProduct product = {product} key={product.id}></SliderProduct>
                        // <div key={product.id} className="bg-white group hover:shadow-xl transition ease-in-out delay-150 duration-300">
                        //     <div className="relative h-52 bg-cover  bg-no-repeat bg-center">
                        //         <img src={product?.main?.original_url} alt="product 1" className="p-3 item-thumbnail w-full h-full object-contain" />
                        //         <div className="absolute inset-0  flex p-2 justify-between gap-2  transition">
                        //             <Link to="/"
                        //                 className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center  transition"
                        //                 title="view product">
                        //                 <RiHeartLine className="group-hover:text-primary transition font-extrabold text-2xl" />
                        //             </Link>
                        //             <Link to="/"
                        //                 className="text-[#e0e0e0] text-lg w-9 h-8 font-bold flex items-center justify-center transition"
                        //                 title="add to wishlist">
                        //                 <RiShoppingCartFill className="group-hover:text-primary transition font-extrabold text-2xl" />
                        //             </Link>
                        //         </div>
                        //     </div>
                        //     <div className="pt-4 pb-3 px-4">
                        //         <button onClick={() =>redirectToDetails(product.id)} className='link no-underline'>
                        //             <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product?.name}</h4>
                        //         </button>
                        //         <div className="flex items-baseline mb-1 space-x-2">
                        //             <p className="text-xl text-primary font-semibold">${product?.offer_price}</p>
                        //             <p className="text-sm text-gray-400 line-through">${product?.price}</p>
                        //         </div>
                        //     </div>
                        //     <button onClick={() => dispatch({type: 'ADD', payload: product})} className="block w-full mt-4 py-2 text-center text-white bg-gradient-to-l from-primary to-[#52a3eb] hover:from-[#52a3eb] hover:to-primary ease-in-out delay-150 duration-300 transition">Add to cart</button>
                        // </div>
                    ))}
                    {/* single product */}




                </div>
                <div className='text-center py-16'>
                    <Link to='/shop' className="btn btn-primary text-center rounded-none">Show More</Link>
                </div>
            </div>

        </div>
    );
};

export default TrandingProducts;