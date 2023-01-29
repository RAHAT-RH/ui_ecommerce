import React, { useEffect, useState } from 'react';
import { RiHeartLine, RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import product1 from '../../assets/products/t-shirt.jpeg';
import product2 from '../../assets/products/t-shirt2.jpg';
import product3 from '../../assets/products/t-shirt3.jpg';
import product4 from '../../assets/products/t-shirt4.png';
import product5 from '../../assets/products/hudi1.png';
import product6 from '../../assets/products/hudi2.png';
import product7 from '../../assets/products/hudi3.png';
import product8 from '../../assets/products/hudi4.png';
import product10 from '../../assets/products/hudi5.png';
import product11 from '../../assets/products/hudi6.png';
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
                {products.map((product) => (
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