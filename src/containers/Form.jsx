import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Form.sass';

const Form = () => (
    <>
        <div className="container">
            <Header />
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-8 text-center">
                    <p className="fs-25"><b>¡Tienes el espíritu de un Inagotable!</b> Por favor completa tu inscripción a continuación</p>
                </div>
                <div className="col-12 col-md-8">
                    <form className="inscription" action="">
                        <div className="col-12 px-0 inscription__container">
                            <input className="inscription__container--input" type="text" name="nombre" placeholder="Tu nombre*" />
                        </div>
                        <div className="col-12 px-0 inscription__container">
                            <input className="inscription__container--input" type="email" name="correo" placeholder="Tu correo electrónico*" />
                        </div>
                        <div className="col-12 px-0 inscription__container">
                            
                            <label htmlFor="grupo">Grupo Sanguíneo</label>
                            <select className="inscription__container--select" name="grupo" id="grupo">
                                <option value="O-">O-</option>
                                <option value="O+">O+</option>
                                <option value="B-">B-</option>
                                <option value="B+">B+</option>
                                <option value="A-">A-</option>
                                <option value="A+">A+</option>
                                <option value="AB-">AB-</option>
                                <option value="AB+">AB+</option>
                            </select>
                            
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="habeasdata" />
                            <label className="form-check-label" htmlFor="habeasdata">Acepto inscribime a la base de datos de Inagotables.
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

export default Form;