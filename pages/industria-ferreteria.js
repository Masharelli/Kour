import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaFerreterias from '../components/CaseStudiesDetails/IndustriaFerreteria';
import Footer from '../components/_App/Footer';

const IndustriaFerreteria = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Ferretería y construcción" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Ferretería y construcción" 
            />
            <IndustriaFerreterias />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaFerreteria;