import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import SliderProduct from './SliderProduct';
import { useProducts } from '../../Context/ProductProvider';
import Loading from '../Loading/Loading';

const NewArrival = () => {

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
        content = products.sort(() => Math.random() - 0.7).map((product) => (
            <SwiperSlide key={product.id} className="pb-16 mr-2">
                <SliderProduct key={product.id} product={product}></SliderProduct>
            </SwiperSlide>
        ))
    }

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
                    {content}
                </Swiper>

            </div>
        </div>
    );
};

export default NewArrival;