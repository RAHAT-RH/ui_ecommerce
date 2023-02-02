import React, { useEffect, useState } from 'react';
import NewArrival from '../Home/NewArrival';
import TrandingProducts from '../Home/TrandingProducts';
import SliderProduct from '../Home/SliderProduct';


const Shop = () => {
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
                // console.log(data.data)
                setProducts(data?.data)
            })
    }, [])


    return (
        <div>
            <div className="container py-24 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">all products</h2>
                    {/* <button className="btn btn-primary btn-xs">See More</button> */}
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                {products.sort(()=> Math.random() - 0.7).map((product) => (
                       <SliderProduct product={product} key={product.id}></SliderProduct>
                    ))}
                </div>
                <div className='text-center py-16'>
                    <button type="submit" className="btn btn-primary text-center rounded-none">Show More</button>
                </div>
                <NewArrival></NewArrival>
                <TrandingProducts></TrandingProducts>

            </div>
        </div>
    );
};

export default Shop;