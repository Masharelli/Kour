import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleFour from '../components/Services/ServicesStyleFour';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';
 
const ServicesFour = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Servicios" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Servicios" 
            />
            <ServicesStyleFour />
            <StartProject />
            <Footer />
        </React.Fragment>
    );
}

export default ServicesFour;