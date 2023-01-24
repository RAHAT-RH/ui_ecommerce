import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../assets/banner/banner-two.png'
const Banner = () => {
    return (
        <div>
            <div class="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${bannerBg})`}}>
                <div class="container">
                    <span class="text-5xl font-thin text-white">Upto 30% OFF</span>
                    <h1 class="text-5xl text-white uppercase font-medium mb-4">
                        Summer Sale <br />on Selected Items
                    </h1>
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                        accusantium perspiciatis, sapiente
                        magni eos dolorum ex quos dolores odio</p> */}
                    <div class="mt-12">
                        <Link to="/" class="bg-white border border-primary text-black px-8 py-4
                    rounded-none hover:bg-[#f1f1f1] hover:text-black text-xl font-normal">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;