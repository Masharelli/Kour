import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/img/about/about-us1.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> 
                                    Nosotros
                                </span>
                                <h2>Implementando la tecnología para la toma de decisiones</h2>
                                <p> Nuestras soluciones, brindan un excelente producto y un aliado de valor.</p>
                                
                                <ul className="features-list">
                                    <li>
                                        <img src="/img/icons/icon4.png" alt="image" />
                                        <h3>+8 </h3>
                                        <p> Industrias aplicables</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon5.png" alt="image" />
                                        <h3>100%</h3>
                                        <p>Equipo confiable</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon6.png" alt="image" />
                                        <h3>Sistema SAP</h3>
                                        <p> Reconocido mundialmente</p>
                                    </li>
                                    <li>
                                        <img src="/img/icons/icon7.png" alt="image" />
                                        <h3>Partners </h3>
                                        <p> Para apoyarte. </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3> Nuestra Visión</h3>
                                <p>Dar servicio a las industrias a través de nuestros productos, servicios y asociados, siendo reconocidos como una empresa de tecnología de alto nivel. </p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Nuestra Misión</h3>
                                <p>Ser una empresa de tecnología especializada en mejorar operaciones de empresas a través de nuestros productos y servicios, permitiendo la mejor toma de decisiones en todos los niveles involucrados. </p>
                            </div>
                        </div>
    
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="about-text">
                                <h3>Nuestros valores</h3>
                                <ul className="features-list">
                                    <li><i className="flaticon-tick"></i> Innovación</li>
                                    <li><i className="flaticon-tick"></i> Trabajo en equipo</li>
                                    <li><i className="flaticon-tick"></i> Calidad</li>
                                    <li><i className="flaticon-tick"></i> Transparencia </li>
                                    <li><i className="flaticon-tick"></i> Compromiso </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src="/img/shape/circle-shape1.png" alt="image" />
            </div>
        </section>
    )
}

export default AboutUsContent;