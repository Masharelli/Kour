import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import RelatedServices from '../components/ServiceDetails/RelatedServices';
import Footer from '../components/_App/Footer';
 
const ServiceDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Service Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Service Details" 
            />
            <ServiceDetailsContent />
            <RelatedServices />
            <Footer />
        </React.Fragment>
    );
}

export default ServiceDetails;