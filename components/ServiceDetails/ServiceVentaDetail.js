import React from 'react';
import Link from 'next/link';
import ServiceSidebarSoftware from './ServiceSidebarSoftware';

const ServiceVentaDetail = () => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-venta.png" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            <span className="sub-title">Software ERP</span>
                            <h3>Acerca de este servicio</h3>
                            <p>
                            El punto de venta labora con un modelo distribuido para que cada sucursal
                            tenga una base de datos local que se replica automáticamente al
                            servidor central y viceversa. La solución es compatible con dispositivos de hardware de un punto de ventas, tales como un escáner de códigos de barras, impresora de
                            tickets, cajón de valores, entre otros.
                            </p>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/project10.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Datos Importantes</h3>
                                        <ul>
                                            <li>Promociones avanzadas.</li>
                                            <li>Certificados de regalo.</li>
                                            <li>Tarjetas de puntos.</li>
                                            <li>Compras.</li>
                                            <li>Requisición de materiales.</li>
                                            <li>Tiempo aire y pago servicios.</li>
                                            <li>Multi-moneda.</li>
                                            <li>Diversidad de lenguaje.</li>
                                            <li>Básculas.</li> 
                                            <li>Fast-food y restaurantes.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p>Está hecho para que cada sucursal esté en línea constantemente actualizando el servidor central. Si hay un cambio en el servidor central este se replica a cada sucursal (precio, artículos), aun sin conexión sigue trabajando igual, cuando regrese los cambios son hechos.</p>
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

export default ServiceVentaDetail;