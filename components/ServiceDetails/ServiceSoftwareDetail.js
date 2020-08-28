import React from 'react';
import Link from 'next/link';
import ServiceSidebarSoftware from './ServiceSidebarSoftware';

const ServiceSoftwareDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-software.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Software ERP</span>
                            <h3>Acerca de este servicio</h3>
                            <p>
                            El sistema ERP (sistema de planificación de recursos empresariales) es un nucleo que permite unir todos los departamentos de tu empresa, finanzas, recursos humanos, almacén, contabilidad, y producción. Planear o automatizar los procesos y/o controlar lo que hay (inventario) y lo que se debe hacer. Se puede visualizar el proceso de compra y venta de un producto o servicio. Comunican información entre departamentos con una sola base de datos, para responder más rápido ante las tendencias del mercado.
                            </p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/project9.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Datos Importantes</h3>
                                        <ul>
                                            <li>Incrementa el rendimiento y la rentabilidad de la empresa.</li>
                                            <li>Junta y esquematiza los procesos de la organización.</li>
                                            <li>Controla la cadena de suministro.</li>
                                            <li>Disminuye los costos y aumenta el valor de la empresa.</li>
                                            <li>Obtén información instantánea y en tiempo real para tomar mejores decisiones y aumentar la productividad.</li>
                                            <li>Propone soluciones en áreas con base en un análisis predictivo de datos.</li>
                                            <li>Mayor control de almacén.</li>
                                            <li>Entiende a tus clientes, para brindarles un mejor servicio.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p>Variedad de módulos para controlar todos los flujos de operación requeridos a todo nivel y en cada departamento involucrado en el laventa dependiendo del caso Mejor control de: Gastos Administrativos, Inventarios, Ventas, presupuestos.</p>
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

export default ServiceSoftwareDetail;