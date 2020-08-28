import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CoursesGridContent from '../components/Courses/CoursesGridContent';
import Footer from '../components/_App/Footer';

const CoursesGrid = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Course Grid" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Grid" 
            />
            <CoursesGridContent />
            <Footer />
        </React.Fragment>
    );
}

export default CoursesGrid;