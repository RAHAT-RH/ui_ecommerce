import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../assets/banner/banner-bg.jpg'
const Banner = () => {
    return (
        <div>
            <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${bannerBg})`}}>
                <div className="container">
                    <span className="text-2xl lg:text-5xl font-thin text-[#1E375A]">Upto 30% OFF</span>
                    <h1 className="text-2xl lg:text-5xl text- uppercase text-[#1E375A] font-medium mb-4">
                        Summer Sale <br />on Selected Items
                    </h1>
                    <div className="mt-8 lg:mt-12">
                        <Link to="/" className="bg-primary border border-primary text-white px-4 py-3 lg:px-8 lg:py-4
                    rounded-none hover:bg-[#B872F7] hover:text-white text-xl transition font-normal">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;