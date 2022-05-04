import React from 'react';
import AboutHealth from '../../AboutHealth/AboutHealth';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';
import Items from '../Items/Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Review></Review>
            <AboutHealth></AboutHealth>
        </div>
    );
};

export default Home;