import React from 'react';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;