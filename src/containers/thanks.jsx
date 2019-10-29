import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Form.sass';

const Thanks = () => (
    <>
        <div className="container">
            <Header />
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-8 text-center fs-25">
                    <p><b>¡Ya eres parte de nuestra red de donantes Inagotables!</b></p>
                    <p>Pronto te enviaremos un correo electrónico en el cual te informaremos la próxima jornada de donanción de sangre de impacto.</p>
                </div>
            </div>
            <Footer />
        </div>
    </>
);

export default Thanks;