import React from 'react';
import Link from 'next/link';

const TwoColumns = () => {
    return (
        <div className="projects-area pt-100 pb-70">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria1.jpg" alt="image" />

                                <Link href="/industria-restaurante">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-restaurante">
                                        <a>Restaurantes</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria2.jpg" alt="image" />

                                <Link href="/industria-auto">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-auto">
                                        <a>Autopartes</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria3.jpg" alt="image" />

                                <Link href="/industria-carnicos">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-carnicos">
                                        <a>Cárnicos</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria4.jpg" alt="image" />

                                <Link href="/industria-electronico">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-electronico">
                                        <a>Electrónicos</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria5.jpg" alt="image" />

                                <Link href="/industria-ferreteria">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-ferreteria">
                                        <a>Ferretería y construcción</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria6.jpg" alt="image" />

                                <Link href="/industria-abarrotes">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-abarrotes">
                                        <a>Abarrotes</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria8.jpg" alt="image" />

                                <Link href="/industria-moda">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-moda">
                                        <a>Moda y Calzado</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/industria9.jpg" alt="image" />

                                <Link href="/industria-vinos">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/industria-vinos">
                                        <a>Vinos y Licores</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumns;