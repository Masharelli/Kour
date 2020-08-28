import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaVinos from '../components/CaseStudiesDetails/IndustriaVino';
import Footer from '../components/_App/Footer';

const IndustriaVino = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Vinos y Licores" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Vinos y Licores" 
            />
            <IndustriaVinos />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaVino;