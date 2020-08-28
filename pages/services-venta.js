import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceSoftwareDetail from '../components/ServiceDetails/ServiceSoftwareDetail';
import Footer from '../components/_App/Footer';
import ServiceVentaDetail from '../components/ServiceDetails/ServiceVentaDetail';
 
const ServicesVenta = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Punto de Venta (POS)" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Punto de Venta" 
            />
            <ServiceVentaDetail/>
            <Footer />
        </React.Fragment>
    );
}

export default ServicesVenta;