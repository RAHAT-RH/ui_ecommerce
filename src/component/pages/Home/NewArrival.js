import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import SliderProduct from './SliderProduct';

const NewArrival = () => {
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
    console.log(products)
    return (
        <div>
            <div className="container pb-10 overflow-hidden">
                <div className='flex justify-between items-baseline'>
                    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
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
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="pb-16 mr-2">
                            <SliderProduct product={product}></SliderProduct>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
                    {products.map((product) => (
                        <SliderProduct product={product}></SliderProduct>
                    ))}
                  

                </div> */}
            </div>
        </div>
    );
};

export default NewArrival;