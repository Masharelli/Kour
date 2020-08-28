import React from 'react';
import ReactWOW from 'react-wow';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="main-banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h1>Data Science Consulting Services</h1>
                                </ReactWOW>
                                
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs. Enjoy stress free decesion making!</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <div className="btn-box">
                                        <Link href="/about-us">
                                            <a className="default-btn">
                                                <i className="flaticon-structure"></i> 
                                                About Us <span></span>
                                            </a>
                                        </Link>

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-google-play"></i> Watch Video
                                            </a>
                                        </Link>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-animation-image">
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape1.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape2.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape3.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape4.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape5.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape6.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape7.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape8.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape9.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape10.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape11.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <img src="/img/main-banner/banner-one/banner-one-shape12.png" alt="image" />
                                </ReactWOW>

                                <img src="/img/main-banner/banner-one/banner-one-main-img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainBanner;