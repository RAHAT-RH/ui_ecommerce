import React from 'react';
import { useProducts } from '../../Context/ProductProvider';
import NewArrival from '../Home/NewArrival';
import SliderProduct from '../Home/SliderProduct';
import TrandingProducts from '../Home/TrandingProducts';
import Loading from '../Loading/Loading';


const Products = () => {
    const { state: { products, loading, error } } = useProducts();

    let content;

    if (loading) {
        content = <Loading></Loading>
    }
    if (error) {
        content = <h1>Something went wrong</h1>
    }

    if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show, Product list is empty</p>
    }

    if (!loading && !error && products.length) {
        content = products.map((product) => (
            // <SwiperSlide key={product.id} className="pb-16 mr-2">
            //     <SliderProduct key={product.id} product={product}></SliderProduct>
            // </SwiperSlide>
            <SliderProduct product={product} key={product.id}></SliderProduct>
        ))
    }
    return (
        <div>
            <div className="container py-24 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">all products</h2>
                    {/* <button className="btn btn-primary btn-xs">See More</button> */}
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {/* {products.sort(() => Math.random() - 0.7).map((product) => (
                        <SliderProduct product={product} key={product.id}></SliderProduct>
                    ))} */}
                    {content}
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

export default Products;