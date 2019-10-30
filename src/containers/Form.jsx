import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/Form.sass';

class Form extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            grupo: "",
            habeas: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange (e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit (e) {
       e.preventDefault();
        console.log('Entro');
        this.props.history.push(`/gracias`);
    }
    render() {
        return (
            <>
                <div className="container">
                    <Header />
                    <div className="row justify-content-center my-5">
                        <div className="col-12 col-md-8 text-center">
                            <p className="fs-25"><b>¡Tienes el espíritu de un Inagotable!</b> Por favor completa tu inscripción a continuación</p>
                        </div>
                        <div className="col-12 col-md-8">
                            <form className="inscription" action="https://idcbis.org.co/msj/send.php" method="post">
                                
                                <div className="row inscription__container no-gutters">
                                    <label className="col-12 no-gutters" htmlFor="genero">Identificación</label>
                                    <select className="col-4 inscription__container--select" name="tipoIdentificacion" id="tipoIdentificacion">
                                        <option value="CC">CC</option>
                                        <option value="NUIP">NUIP</option>
                                        <option value="PA">PA</option>
                                        <option value="CE">CE</option>
                                    </select>

                                    <input className="col-8 inscription__container--input" type="text" name="identificacion" placeholder="Tu documento de identificación*" />
                                </div>    
                                    
                                <div className="col-12 px-0 inscription__container">
                                    <input className="inscription__container--input" type="text" name="nombre" placeholder="Tu nombre*" />
                                </div>

                                <div className="col-12 px-0 inscription__container">
                                    
                                    <label htmlFor="genero">Género</label>
                                    <select className="inscription__container--select" name="genero" id="genero">
                                        <option value="Femenino">Femenino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    
                                </div>
                                <div className="col-12 px-0 inscription__container">
                                    <input className="inscription__container--input" type="text" name="celular" placeholder="Tu número celular*" />
                                    <i className="msj-idcbis">Nos comprometemos a pensar en ti antes de enviar cada correo.</i>
                                </div>
                                <div className="col-12 px-0 inscription__container">
                                    <input className="inscription__container--input" type="email" name="email" placeholder="Tu correo electrónico*" />
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
                                    <input type="checkbox" className="form-check-input" id="habeasdata" name="habeas" />
                                    <label className="form-check-label" htmlFor="habeasdata">Acepto inscribime a la base de datos de Inagotables.
                                        <br /> 
                                        <i className="msj-idcbis">Nos comprometemos a pensar en ti antes de enviar cada correo.</i>
                                    </label>
                                </div>
                                <div className="col-12 text-center">
                                    <input type="hidden" name="asunto" value="Lead inagotable" />
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
        )
    }
}

export default Form;