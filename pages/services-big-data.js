import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceSoftwareDetail from '../components/ServiceDetails/ServicesDetailsBigData';
import Footer from '../components/_App/Footer';
 
const ServicesBigData = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Big Data" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Big Data" 
            />
            <ServiceSoftwareDetail/>
            <Footer />
        </React.Fragment>
    );
}

export default ServicesBigData;