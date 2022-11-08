import React from 'react';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;