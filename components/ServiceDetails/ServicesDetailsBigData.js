import React from 'react';
import Link from 'next/link';
import ServiceSidebarSoftware from './ServiceSidebarSoftware';

const ServicesDetailsBigData = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-big.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Software ERP</span>
                            <h3>Acerca de este servicio</h3>
                            <p>
                            Plataforma analitica que permite al equipo, un análisis interactivo, mediante un tablero, que ayuda a resolver preguntas del negocio, y llegar a lo que lleve a tu negocio adelante. Información inteligente que a través del aprendizaje del sistema, estadística, es fácil para todo el equipo.
                            </p>

                            <p>Utilice la información del sistema para resolver cualquier cosa a la velocidad de un pensamiento; digite su pregunta y reciba su respuesta en gráficos diversos. Toda la información de la empresa al alcance en una computadora.
                                Organice, monitoree y administre su tablero para que el negocio, esté operando con información actualizada a la fecha. 
                            </p>
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

export default ServicesDetailsBigData;