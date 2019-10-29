import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Banner.sass';
import fotoBanner from '../assets/static/banner-v2.jpg';
import logoInagotables from '../assets/static/inagotables.png';

const Banner = () => (
    <>
        <aside>
            <div className="row justify-content-end mb-3 px-0">
                <div className="col">
                    <img className="img-fluid d-none d-md-block" src={fotoBanner} alt="" />
                    <div className="bannerMsj text-center">
                        <img className="bannerMsj__logo img-fluid mb-3" src={logoInagotables} alt="Inagotables" />
                        <p className="bannerMsj__text">Una oportunidad para los donantes de sangre</p>
                        <div className="bannerMsj__title">
                            <p className="bannerMsj__title--one">DE IMPACTO</p>
                            <Link className="bannerMsj__title--button btn-red-light" to="/registrarme">
                                ¡Me interesa! 
                                <i className="fas fa-caret-down"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
);

export default Banner;