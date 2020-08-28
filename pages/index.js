import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/DataAnalyticsAIStartup/MainBanner';
import FeaturedService from '../components/DataAnalyticsAIStartup/FeaturedService';
import AboutUs from '../components/DataAnalyticsAIStartup/AboutUs';
import Funfacts from '../components/DataAnalyticsAIStartup/Funfacts';
import OurServices from '../components/DataAnalyticsAIStartup/OurServices';
import HowItWork from '../components/DataAnalyticsAIStartup/HowItWork';
import TeamMembers from '../components/DataAnalyticsAIStartup/TeamMembers';
import StartProject from '../components/DataAnalyticsAIStartup/StartProject';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            <FeaturedService />
            <AboutUs />
            <Funfacts />
            <OurServices />
            <HowItWork />
            <TeamMembers />
            <StartProject />
            <Footer />
        </React.Fragment>
    );
}

export default Index;