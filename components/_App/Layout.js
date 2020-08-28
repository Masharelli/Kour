import React from 'react';
import Head from "next/head";
import GoTop from './GoTop';

// Layout

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Kour - Retail Solutions</title>
                <meta name="description" content="Kour - Retail Solutions" />
                <meta name="og:title" property="og:title" content="Kour - Retail Solutions"></meta>
                <meta name="twitter:card" content="Kour - Retail Solutions"></meta>
                <link rel="canonical" href=""></link>
                <meta property="og:image" content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg" />
            </Head>

            {children}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;