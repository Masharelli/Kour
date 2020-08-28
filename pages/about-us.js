import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
import OurHistory from '../components/AboutUs/OurHistory';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import HowItWork from '../components/AboutUs/HowItWork';
import TeamMembers from '../components/AboutUs/TeamMembers';
import Testimonials from '../components/AboutUs/Testimonials';
import Partner from '../components/AboutUs/Partner';
import Footer from '../components/_App/Footer';
 
const AboutUs = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Nosotros" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Nosotros" 
            />
            <AboutUsContent />
            <WhyChooseUs />
            <TeamMembers />
            <Footer />
        </React.Fragment>
    );
}

export default AboutUs;