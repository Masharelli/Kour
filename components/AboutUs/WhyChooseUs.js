import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src="/img/star-icon.png" alt="image" /> 
                                La gente nos ama
                            </span>
                            <h2>¿Por qué escogernos?</h2>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Optimización</h3>
                                    <p>Optimizamos la administración y operación  de la empresa con la instalación de soluciones.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Simplificar</h3>
                                    <p>Simplificar y mejorar la experiencia del cliente en el punto de venta.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Soporte</h3>
                                    <p>Soporte y servicio pre y post venta dirigidos a hacer crecer su negocio. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src="/img/how-its-work.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;