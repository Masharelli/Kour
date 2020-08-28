import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import IndustriaCarnicos from '../components/CaseStudiesDetails/IndustriaCarnico';
import Footer from '../components/_App/Footer';

const IndustriaCarnico = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Cárnicos" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Cárnicos" 
            />
            <IndustriaCarnicos />
            <Footer />
        </React.Fragment>
    );
}

export default IndustriaCarnico;