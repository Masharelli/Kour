import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceSoftwareDetail from '../components/ServiceDetails/ServiceSoftwareDetail';
import RelatedServices from '../components/ServiceDetails/RelatedServices';
import Footer from '../components/_App/Footer';
 
const ServicesSoftware = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Software ERP" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Software ERP" 
            />
            <ServiceSoftwareDetail/>
            <Footer />
        </React.Fragment>
    );
}

export default ServicesSoftware;