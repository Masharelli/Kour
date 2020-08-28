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
                videoId='G1IbRujko-A' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="banner-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-content">
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <h1>Soluciones para retail</h1>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <p>Servicios confiables de sistemas para la administración integral de su negocio (Ventas, Control de Inventarios, Control de Efectivo, Facturación).</p>
                                </ReactWOW>

                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <div className="btn-box">
                                        <Link href="/about-us">
                                            <a className="default-btn">
                                                <i className="flaticon-right"></i> 
                                                Acerca de nosotros <span></span>
                                            </a>
                                        </Link>

                                        <Link href="#play-video">
                                            <a
                                                onClick={e => {e.preventDefault(); openModal()}}
                                                className="video-btn popup-youtube"
                                            > 
                                                <i className="flaticon-google-play"></i> Ver video
                                            </a>
                                        </Link>
                                    </div>
                                </ReactWOW>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="banner-animation-image">
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-1.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-2.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-3.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-4.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-5.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-6.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-7.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-8.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInDown'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-9.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInRight'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-10.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInLeft'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-11.png" alt="image" />
                                </ReactWOW>
                                <ReactWOW delay='.1s' animation='fadeInUp'>
                                    <img src="/img/main-banner/banner-two/banner-two-shape-12.png" alt="image" />
                                </ReactWOW>

                                <img src="/img/main-banner/banner-two/banner-two-main-img1.png" alt="image" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainBanner;