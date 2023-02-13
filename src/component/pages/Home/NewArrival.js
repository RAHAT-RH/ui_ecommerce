import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import SliderProduct from './SliderProduct';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';

const NewArrival = () => {

    const { data, isLoading } = useQuery("latestProducts", () => fetch('https://wehatbazar.thecell.tech/api/latest-product?include=media', {
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

    let content;
    const latestProducts = data?.data

    const products = latestProducts.map(product => ({ ...product, quantity: 1 }))
    console.log(products)

    if (!isLoading && products.length) {
        content = products.map((product) => (
            <SwiperSlide key={product.id} className="pb-16 mr-2">
                <SliderProduct key={product.id} product={product}></SliderProduct>
            </SwiperSlide>
        ))
    }

    return (
        <div>
            <div className="container pb-10 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Latest Products</h2>
                    <button className="btn btn-primary btn-xs">See More</button>
                </div>
                {/* gird system */}

                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        250: {
                            width: 250,
                            slidesPerView: 1,
                        },
                        640: {
                            width: 640,
                            slidesPerView: 2.5,
                        },
                        // when window width is >= 768px
                        1000: {
                            width: 1000,
                            slidesPerView: 3.5,
                        },
                    }}
                    slidesPerView={3.1}
                    spaceBetween={20}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    grabCursor={true}
                >
                    {content}
                </Swiper>

            </div>
        </div>
    );
};

export default NewArrival;