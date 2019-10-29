import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCheck from '../components/FormCheck';

class Register extends React.Component {
    render () {
        return (
            <div className="container">
                <Header />
                <div className="row justify-content-center my-4">
                    <div className="col-12 col-lg-8 mb-4">
    
                        <p>Los Inagotables son donantes con una misión, suplir componentes sanguíneos en las fechas que más se necesita. Sabemos que estos donantes tienen una característica especial, cuéntanos cómo actuarías en las siguientes situaciones y podrás saber si eres un Inagotable</p>
    
                        <form action="">
                            <div className="mb-4">
                                <p><b className="color-black">1. Quiero donar, pero vivo lejos del lugar de donación.</b></p>
                                <FormCheck name="p1" identifer="p1r1" value="1" label="Organizo mi tiempo para poder asistir a la jornada"/>
                                <FormCheck name="p1" identifer="p1r2" value="0" label="Espero a que me informen de una jornada de donación más cerca de mi ubicación" />
                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">2. En mi trabajo tengo una semana en que los horarios son más extensos y soy llamado para hacer mi donación de sangre</b></p>  
                                <FormCheck name="p2" identifer="p2r1" value="0" label="Espero a que mi carga laboral baje y busco una forma de acercarme al banco de sangre" />
                                <FormCheck name="p2" identifer="p2r2" value="1" label="Converso con mis superiores para buscar una alternativa y asistir" />
                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">3. Tengo la oportunidad de decidir a quién llega la sangre que he donado</b></p>
                                <FormCheck name="p3"  identifer="p3r2" value="1" label="No la acepto" />
                                <FormCheck name="p3"  identifer="p3r1" value="0" label="La acepto" />
                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">4. El informe meteorológico dice que el día de la donación va a llover</b></p>
                                <FormCheck name="p4" identifer="p4r1" value="0" label="Programo mi donación para otro día" />
                                <FormCheck name="p4" identifer="p4r2" value="1" label="Me pongo ropa para lluvia y asisto a la jornada" />
                            </div>
    
                            <div className="col-12 text-center">
                                <button className="btn-red" type="submit">Completar</button>
                            </div>
                        </form> 
    
                    </div>
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;