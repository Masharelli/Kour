import React from 'react';
import Link from 'next/link';

const ServiceSidebarSoftware = () => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                <li>
                    <Link href="/services-software">
                        <a>Software ERP</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-venta">
                        <a>Punto de Venta(POS)</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-infraestructura">
                        <a>Infraestructura</a>
                    </Link>
                </li>
                <li>
                    <Link href="/services-big-data">
                        <a>Big Data Dashboard</a>
                    </Link>
                </li>
            </ul>

            <div className="download-file">
                <h3>Brochures</h3>

                <ul>
                    <li>
                        <a href = "/files/flyer.pdf" download>Descargar PDF <i className='bx bxs-file-pdf'></i></a>
                    </li>
                </ul>
            </div>

            <div className="services-contact-info">
                <h3>Contact Info</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Teléfono:</span>
                        <a href="tel:+21453545413" target="_blank">+2145 354 5413</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Dirección:</span>
                        Paseo de los Insurgentes 1304, Jardines del Moral, 37300 León, Gto
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>Correo:</span>
                        <a href="mailto:hello@tarn.com">contacto@kour.mx</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebarSoftware;