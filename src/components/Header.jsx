import React from 'react';
import Banner from '../assets/static/logo_idcbis.png';

const Header = () => (
    <>
        <header>
            <div className="row">
                <div className="col-7 col-lg-12 py-2 mb-2 text-center">
                    <img className="img-fluid" src={Banner} alt="" />
                </div>
            </div>
        </header>
    </>
);

export default Header;