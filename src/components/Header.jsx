import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../assets/static/logo_idcbis.png';

const Header = () => (
    <>
        <header>
            <div className="row">
                <div className="col-7 col-lg-12 py-2 mb-2 text-center">
                    <Link to="/">
                        <img className="img-fluid" src={Banner} alt="" />
                    </Link>
                </div>
            </div>
        </header>
    </>
);

export default Header;