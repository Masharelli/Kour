import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaModas from '../components/CaseStudiesDetails/IndustriaModa';
import Footer from '../components/_App/Footer';

const IndustriaModa = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Moda y Calzado" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Moda y Calzado" 
            />
            <IndustriaModas />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaModa;