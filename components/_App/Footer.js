import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src="/img/Transparent-01.png" alt="logo" width = "250" height="200"/>
                            </a>
                            <p>Servicios confiables de sistemas para la administración integral de su negocio (Ventas, Control de Inventarios, Control de Efectivo, Facturación).</p>

                            <ul className="social-link">
                                <li>
                                    <Link href="#">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-instagram'></i>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a className="d-block" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Conoce Más</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                    <li>
                                    <Link href="/about-us">
                                        <a>Nosotros</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies-4-columns">
                                        <a>Industrias</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a href="contact.html">Contacto</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Recursos</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/services-four">
                                        <a>Servicios</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies-4-columns">
                                        <a>Industrias</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Dirección</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    Paseo de los Insurgentes 1304, Jardines del Moral, 37300 León, Gto
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">aqui va tu numero</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:contacto@kour.com">contacto@kour.mx</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong>Kour</strong> All rights reserved <a target="_blank" href="https://trentz.com.mx/">Design by Trentz</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src="/img/footer-map.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;