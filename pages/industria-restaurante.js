import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaRestauranteDetail from '../components/CaseStudiesDetails/IndustriaCarnico';
import Footer from '../components/_App/Footer';

const IndustriaRestaurante = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Restaurante" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Restaurante" 
            />
            <IndustriaRestauranteDetail />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaRestaurante;