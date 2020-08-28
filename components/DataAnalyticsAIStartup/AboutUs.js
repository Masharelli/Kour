import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/img/about/about-img10.png" alt="image" />
                            <div className="shape">
                                <img src="/img/about/about-shape1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> 
                                    Acerca de Nosotros
                                </span>
                                <h2>Soluciones según tus necesidades.</h2>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Big Data
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        ERP
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Punto de Venta
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Tableros de Control
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Infraestructura
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Inteligencia de negocios
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                </ul>
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Más de Nosotros <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;