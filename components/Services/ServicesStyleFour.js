import React from 'react';
import Link from 'next/link';

const ServicesStyleFour = () => {
    return (
        <div className="services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-3 col-sm-3">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/services/service-icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-software">
                                    <a>Software ERP</a>
                                </Link>
                            </h3>
                            <p> Sistema de planificación de recursos empresariales (ERP) </p>
                                
                            <Link href="/services-software">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
 
                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
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
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/services/service-icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-infraestructura">
                                    <a>Infraestructura</a>
                                </Link>
                            </h3>
                            <p> soluciones para una mejor infraestructura tecnológica de tu empresa. </p>
                            
                            <Link href="/services-infraestructura">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
                            
                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/services/service-icon4.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-big-data">
                                    <a>Big Data Dashboard</a>
                                </Link>
                            </h3>
                            <p> análisis de información financiera, tableros de control para la toma de decisiones. </p>
                            
                            <Link href="/services-big-data">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Leer más <span></span>
                                </a>
                            </Link>
                            
                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesStyleFour;