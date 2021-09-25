import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                    <a className="navbar-brand fs-3 fw-bolder" href="/logo">Food Village</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item mx-3">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/about">Our Foods</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/about">About Us</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;