import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';
 
const ServicesTwo = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Services Two" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services Two" 
            />
            <ServicesStyleTwo />
            <StartProject />
            <Footer />
        </React.Fragment>
    );
}

export default ServicesTwo;