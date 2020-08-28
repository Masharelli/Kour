import React from 'react';
import Link from 'next/link';

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>Dirección</h3>
                            <p>Paseo de los Insurgentes 1304, Jardines del Moral, 37300 León, Gto.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Contact</h3>
                            <p>Teléfono: <a href="tel:+44457895789">(+44) - 45789 - 5789</a></p>
                            <p>E-mail: <a href="mailto:hello@tracer.com">contacto@kour.mx</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>Horario</h3>
                            <p>Lunes - Viernes: 09:00 - 20:00</p>
                            <p>Domingo & Sabado: 10:30 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;