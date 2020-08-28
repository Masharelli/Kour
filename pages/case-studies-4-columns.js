import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FourColumns from '../components/CaseStudies/FourColumns';
import Footer from '../components/_App/Footer';

const CaseStudies4Columns = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Industrias" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Indstrias" 
            />
            <FourColumns />
            <Footer />
        </React.Fragment>
    );
}

export default CaseStudies4Columns;