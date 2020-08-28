import React from 'react';

const Funfacts = () => {
    return (
        <div className="funfacts-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src="/img/funfacts/fun-icon1.png" alt="image" />
                            </div>
                            <h3>+8</h3>
                            <p>Industrias aplicables</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src="/img/funfacts/fun-icon2.png" alt="image" />
                            </div>
                            <h3>100%</h3>
                            <p>Equipo confiable</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src="/img/funfacts/fun-icon3.png" alt="image" />
                            </div>
                            <h4>Sistema SAP</h4>
                            <p>Reconocido mundialmente</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-6 col-md-3">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <img src="/img/funfacts/fun-icon4.png" alt="image" />
                            </div>
                            <h3>Partners</h3>
                            <p>Para apoyarte</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfacts;