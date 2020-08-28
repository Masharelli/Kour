import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaAutos from '../components/CaseStudiesDetails/IndustriaAuto';
import Footer from '../components/_App/Footer';

const IndustriaAuto = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Autopartes" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Autopartes" 
            />
            <IndustriaAutos />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaAuto;