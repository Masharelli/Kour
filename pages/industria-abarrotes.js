import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaAbarrote from '../components/CaseStudiesDetails/IndustriaAbarrotes';
import Footer from '../components/_App/Footer';

const IndustriaAbarrotes = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Abarrotes" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Abarrotes" 
            />
            <IndustriaAbarrote />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaAbarrotes;