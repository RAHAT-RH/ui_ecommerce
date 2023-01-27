import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import NewArrival from './NewArrival';
import TrandingProducts from './TrandingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NewArrival></NewArrival>
            <TrandingProducts></TrandingProducts>
        </div>
    );
};

export default Home;