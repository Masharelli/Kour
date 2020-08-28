import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/icons/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/services-software">
                                    <a>Software ERP</a>
                                </Link>
                            </h3>
                            <p>Sistema de planificación de recursos empresariales (ERP) inteligentes de SAP.    </p>

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
                                <img src="/img/icons/icon2.png" alt="image" />
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
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/icons/icon3.png" alt="image" />
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
                                    Read More <span></span>
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

export default FeaturedService;