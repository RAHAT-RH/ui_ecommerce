import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import SliderProduct from '../Home/SliderProduct';
import Loading from '../Loading/Loading';

const ShopProducts = () => {
    const { shopId, shopName } = useParams()

    const { data, isLoading } = useQuery("shopProducts", () => fetch(`https://wehatbazar.thecell.tech/api/product?include=,shop,media&filter[shop_id]=${shopId}`, {
        method: "GET",
        headers: {
            'content-type': "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => res.json()
    )
    )

   

    if (isLoading) {
        return <Loading></Loading>
    }

    const products = data?.data
    

    return (
        <div>
            <div className="container py-24 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">{shopName}</h2>
                    {/* <button className="btn btn-primary btn-xs">See More</button> */}
                </div>
                {/* gird system */}
                <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                   
                    {products.map((product) => (
                        <SliderProduct product={product} key={product.id}></SliderProduct>
                    ))}

                </div>
               

            </div>
        </div>
    );
};

export default ShopProducts;