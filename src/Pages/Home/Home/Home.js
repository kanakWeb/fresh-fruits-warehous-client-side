import React from 'react';
import Details from '../../Details/Details';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import Items from '../Items/Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Details></Details>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;