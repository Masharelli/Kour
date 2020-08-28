import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaElectronicos from '../components/CaseStudiesDetails/IndustriaElectronico';
import Footer from '../components/_App/Footer';

const IndustriaElectronico = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Electrónicos" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Electrónicos" 
            />
            <IndustriaElectronicos />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaElectronico;