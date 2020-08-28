import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Contacto" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Contacto" 
            />
            <ContactInfo />
            <ContactForm />
            <Footer />
        </React.Fragment>
    );
}

export default Contact;