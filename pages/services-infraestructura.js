import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceInfraestructuraDetail from '../components/ServiceDetails/ServiceInfraestructuraDetail';
import Footer from '../components/_App/Footer';
 
const ServicesInfraestructura = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Infraestructura" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Infraestructura" 
            />
            <ServiceInfraestructuraDetail/>
            <Footer />
        </React.Fragment>
    );
}

export default ServicesInfraestructura;