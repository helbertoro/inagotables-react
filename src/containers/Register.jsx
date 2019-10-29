import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Register.sass';

const Register = () => (
    <>
        <div className="container">
            <Header />
            <div className="row justify-content-center my-4">
                <div className="col-12 col-md-8">
                    <form className="inscription" action="">
                        <div className="col-12 px-0 inscription__container">
                            <input className="inscription__container--input" type="text" name="nombre" placeholder="Tu nombre*" />
                        </div>
                        <div className="col-12 px-0 inscription__container">
                            <input className="inscription__container--input" type="email" name="correo" placeholder="Tu correo electrónico*" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="habeasdata" />
                            <label className="form-check-label" for="habeasdata">Acepto inscribime a esta base de datos. 
                                <br /> 
                                <i className="msj-idcbis">Nos comprometemos a pensar en ti antes de enviar cada correo.</i>
                            </label>
                        </div>
                        <div className="col-12 text-center">
                            <button className="btn btn-light" type="submit">
                                Inscribirme
                                <i className="fas fa-caret-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    </>
);

export default Register;