import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Form.sass';

const Form = () => (
    <>
        <div className="container">
            <Header />
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-8 text-center">
                    <p><b>Tal vez aún no eres un Inagotable.</b></p>
                    <p>Queremos que sepas que la misión de llevar nuevos componentes sanguíneos a pacientes en hospitales públicos de Distrito nunca termina. Te invitamos a conocer todas las jornadas de donación del Banco Distrital de Sangre IDCBIS en el siguiente <a href="https://idcbis.org.co/banco-distrital-de-sangre/">enlace.</a></p>
                    <Link className="btn-red" to="/registrarme">
                        Quiero volver a intentarlo
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    </>
);

export default Form;