import React from 'react';
import Link from 'next/link';

const OurServices = () => {
    return (
        <section className="services-area ptb-100 bg-e3fbff">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Nuestros Servicios
                    </span>
                    <h2>We Offer Professional Solutions For Business</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-3">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src="/img/services/service-icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-software">
                                    <a>Software ERP</a>
                                </Link>
                            </h3>
                            <p>Sistema de planificación de recursos empresariales (ERP) inteligentes de SAP.</p>
                                
                            <Link href="/services-software">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>

                            <div className="shape1">
                                <img src="/img/services/service-shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-3 col-sm-3">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src="/img/services/service-icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-venta">
                                    <a>Punto de Venta (POS)</a>
                                </Link>
                            </h3>
                            <p> Control de venta de tu negocio.</p>

                            <Link href="/services-venta">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
                            
                            <div className="shape1">
                                <img src="/img/services/service-shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-3 col-sm-3">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src="/img/services/service-icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-infraestructura">
                                    <a>Infraestructura</a>
                                </Link>
                            </h3>
                            <p>Soluciones para una mejor infraestructura tecnológica de tu empresa.</p>
                            
                            <Link href="/services-infraestructura">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
                            
                            <div className="shape1">
                                <img src="/img/services/service-shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="single-services-item">
                            <div className="icon">
                                <img src="/img/services/service-icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-big-data">
                                    <a>Big Data Dashboard</a>
                                </Link>
                            </h3>
                            <p> Análisis de información financiera, tableros de control para la toma de decisiones.</p>
                            
                            <Link href="/services-big-data">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
                            
                            <div className="shape1">
                                <img src="/img/services/service-shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="load-more-btn text-center">
                            <Link href="/services-four">
                                <a className="default-btn">
                                    <i className="flaticon-refresh"></i> 
                                    Cargar más <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices;