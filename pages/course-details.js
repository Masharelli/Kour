import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CourseDetailsContent from '../components/CourseDetails/CourseDetailsContent';
import RelatedCourses from '../components/CourseDetails/RelatedCourses';
import Footer from '../components/_App/Footer';

const CourseDetails = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Course Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Course Details" 
            />
            <CourseDetailsContent />
            <RelatedCourses />
            <Footer />
        </React.Fragment>
    );
}

export default CourseDetails;