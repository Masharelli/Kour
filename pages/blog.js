import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/_App/Footer';

const Blog = () => {
    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Blog" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog" 
            />
            <BlogCard />
            <Footer />
        </React.Fragment>
    );
}

export default Blog;