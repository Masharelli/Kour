import React from 'react';
import Link from 'next/link';
import ServiceSidebarSoftware from './ServiceSidebarSoftware';

const ServiceInfraestructuraDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-inf.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Software ERP</span>
                            <h3>Acerca de este servicio</h3>
                            <p>
                            Una organización óptima, mediante nube pública y privada, soportada por Google Cloud, y AWS. Estas entienden la manera en la que trabajas. Este sistema te permite incorporar soluciones inteligentes mediante el uso de datos para tomar decisiones inteligentes. Amigable en los departamentos de:
                            </p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/project11.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Departamentos</h3>
                                        <ul>
                                            <li>Ventas y Mercadotecnia.</li>
                                            <li>Finanzas.</li>
                                            <li>Operaciones.</li>
                                            <li>Recursos Humanos.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebarSoftware />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceInfraestructuraDetail;