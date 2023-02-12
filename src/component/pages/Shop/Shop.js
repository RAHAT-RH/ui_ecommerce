import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';



const Shop = () => {

    const { data, isLoading } = useQuery("details", () => fetch('https://wehatbazar.thecell.tech/api/shop?include=media', {
        method: "GET",
        headers: {
            'content-type': "application/json",
            "X-Requested-With": "XMLHttpRequest",
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => res.json()
    )
    )

    const navigate = useNavigate();

    const redirectToShopProducts = (shopId, shopName) => {
        navigate(`/shop-products/${shopId}/${shopName}`);
    };

    if (isLoading) {
        return <Loading></Loading>
    }


    const shopList = data.data

    console.log(shopList)


    return (
        <div>
            <div className="container py-5">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        shopList.map((shop, index) => (
                            <div key={index} className="card card-compact rounded-none bg-base-100 shadow-sm">
                                <figure className='avatar h-56'>
                                    {shop && shop.banner && shop.banner[0] ? (
                                    <img className='w-full' src={shop.banner[0].original_url} alt="banner" />
                                    ) : (
                                    <Loading></Loading>
                                    )}
                                    {/* <img className='w-full' src={shop?.banner[0]?.original_url} alt="banner" /> */}
                                </figure>
                                {/* avatar */}
                                <div className="avatar absolute bottom-16 left-2">
                                    <div className="w-16 rounded">
                                        <img src={shop?.profile?.original_url} alt="" />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <span onClick={() => redirectToShopProducts(shop.id, shop.name)} className="cursor-pointer card-title justify-between">
                                        <span>{shop?.name}</span>
                                    </span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Shop;