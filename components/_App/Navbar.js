import React from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                    <img src="/img/Transparent-01.png" alt="logo Kuor" width = "250" height="200" style = {{paddingTop: "20px"}}/>
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={() => setCollapsed(true)} className="nav-link">
                                                Home    
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us" activeClassName="active">
                                            <a onClick={() => setCollapsed(true)} className="nav-link">
                                                Nosotros
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services-four" activeClassName="active">
                                            <a onClick={() => setCollapsed(true)} className="nav-link">
                                                Servicios <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services-software" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Software ERP</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-venta" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Punto de Venta (POS)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-infraestructura" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Infraestructura</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/services-big-data" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-link">Big Data Dashboard</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/case-studies-4-columns" activeClassName="active">
                                            <a onClick={()=> setCollapsed(true)} className="nav-link">
                                                Industrias
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={()=> setCollapsed(true)} className="nav-link">
                                                Contáctanos
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
