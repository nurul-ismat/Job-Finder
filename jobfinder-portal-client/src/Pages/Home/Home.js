import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import HowItWork from './HowItWork';
import Footer from '../Shared/Footer/Footer'
import NewJobs from './NewJobs';
import Reviews from '../Reviews/Review';
const Home = () => {
    return (
        <main>
            <Banner />
            <Categories />
            <NewJobs />
            <HowItWork />
            <Reviews/>
            <Footer />
        </main>
    );
};

export default Home;