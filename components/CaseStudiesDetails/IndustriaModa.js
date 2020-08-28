import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { Container } from 'react-bootstrap';

<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width"
/>

const IndustriaModa = () => {
    return (
        <section className="case-studies-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="case-studies-details-image">
                            <img src="/img/projects/industria7.jpg" alt="image" />
                        </div>
                        <div className="case-studies-details-desc">
                            <h3>Especificaciónes</h3>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header style = {{alignItems: 'center',}}>
                                    <Accordion.Toggle as={Button}  eventKey="0" style = {{margin: "20px"}}>
                                        Beneficios
                                    </Accordion.Toggle>
                                    
                                    <Accordion.Toggle as={Button}  eventKey="1" style = {{margin: "20px"}}>
                                        Funcionalidades
                                    </Accordion.Toggle> 

                                    <Accordion.Toggle as={Button}  eventKey="2" style = {{margin: "20px"}}>
                                        Características
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <ul>
                                            <li>Punto de venta certificado por SAP B1.</li>
                                            <li>Interfaz amigable e intuitiva.</li>
                                            <li>Compatibilidad con hardware de punto de venta.</li>
                                            <li>Control de tu inventario.</li>
                                            <li>Integridad de tu información.</li>
                                            <li>Variedad de módulos para controlar todos los flujos de operación requeridos.</li>
                                            <li>Funcionalidades específicas para la gestión de tu negocio.</li>

                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>

                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ul>
                                            <li>Promociones avanzadas.</li>
                                            <li>Tarjetas de regalo.</li>
                                            <li>Lealtad (Tarjeta de puntos).</li>
                                            <li>Compras.</li>
                                            <li>Traspaso de inventario entre sucursales.</li>
                                            <li>Integración con bancos.</li>
                                            <li>Venta de tiempo aire y pago de servicios.</li>
                                            <li>Administración de inventarios.</li>
                                            <li>Multi-moneda.</li>
                                            <li>Facturación electrónica.</li>
                                            <li>Conteo de inventario con dispositivos móviles.</li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>

                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        <ul>
                                            <li>Controla tus «Franquicias»</li>
                                            <li> Controla tus entradas y salidas de dinero</li>
                                            <li> Controla los depósitos bancarios de las ventas del día</li>
                                            <li> Audita a tus cajeros con los arqueos de caja</li>
                                            <li> Evita que el cajero cobre de más con los cortes ciegos</li>
                                            <li>Lleva una bitácora de autorizaciones de los usuarios</li>
                                            <li> Lleva un seguimiento de tus ventas perdidas</li>
                                            <li> Consolida tus ventas a público general en una sola factura</li>
                                            <li> Controla tu inventario</li>
                                            <li> Realiza tus conteos de inventario por secciones</li>
                                            <li> Solicita y traspasa inventario entre sucursales y SAP</li>
                                            <li> R1 te puede sugerir cuánto comprar en base a tu histórico de ventas</li>
                                            <li> Realiza promociones en días y horarios específicos</li>
                                            <li>Realiza kits de venta, combos de venta, entre varias promociones</li>
                                            <li>Precios en base a volumen</li>
                                            <li> Realiza descuentos especiales a tus empleados</li>
                                            <li> Genera vales de descuento</li>
                                            <li> Premia a tus clientes con puntos en sus membresías</li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>

                                </Card>
                            </Accordion>
                               
                            <h3>Módulos Específicos</h3>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/projects/industria8.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <ul>
                                            <li>Búsquedas especializadas para talla y color</li>
                                            <li> Consulta existencias de otras sucursales</li>
                                            <li>Maneja diferentes listas de precios (menudeo, medio mayoreo, mayoreo, etc.)</li>
                                            <li>Realiza promociones a clientes específicos</li>
                                            <li>Genera flujo de gente con tarjeta de lealtad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriaModa;