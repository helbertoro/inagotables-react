import React from 'react';
import logoIdcbis from '../assets/static/logo_idcbis.png';
import logoInagotables from '../assets/static/logo_inagotables.png';
import logoAlcaldia from '../assets/static/logo_alcaldia.png';
import '../assets/styles/components/Footer.sass';

const Footer = () => (
    <>
        <footer>
            <div className="row">
                <div className="col-12 py-2 back-grey text-center">
                    <p className="m-0"><b>Dirección:</b> Carrera 32 # 12-81 <b>Teléfono:</b> 364 9620 <b>Ext:</b> 9441 contacto@idcbis.org.co l www.idcbis.org.co</p>
                </div>
            </div>
            <div className="row py-3 justify-content-between align-items-center">
                <div className="col-4 col-md-3">
                    <img className="img-fluid" src={logoIdcbis} alt="Logo Instituto de ciencia biotecnologia e innovación en salud - IDCBIS" />
                </div>
                <div className="col-4 col-md-3">
                    <img className="img-fluid" src={logoInagotables} alt="Logo inagotables" />
                </div>
                <div className="col-4 col-md-3">
                    <img className="img-fluid" src={logoAlcaldia} alt="Logo Alcaldia de Bogota" />
                </div>
            </div>
        </footer>
    </>
);

export default Footer;