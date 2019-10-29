import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            p1: "",
            p2: "",
            p3: "",
            p4: "",
            vacio: ""
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

        if (this.state.p1 == "" || this.state.p2 == "" || this.state.p3 == "" || this.state.p4 == "") {
            this.setState({vacio: true});
        }
        else {
            this.setState({vacio: false});
            if (this.state.p1 == "0" || this.state.p2 == "0" || this.state.p3 == "0" || this.state.p4 == "0") {
                console.log('no eres');
                this.props.history.push(`/no-eres`);
            }
            else {
                console.log('si eres');
                this.props.history.push(`/formulario`);
            }
        }
        
    }
    render () {
        return (
            <div className="container">
                <Header />
                <div className="row justify-content-center my-4">
                    <div className="col-12 col-lg-8 mb-4">
                        { this.state.vacio &&
                            <div className="alert alert-danger" role="alert">
                                Debes responder todas las preguntas
                            </div>
                        }

                        <p>Los Inagotables son donantes con una misión, suplir componentes sanguíneos en las fechas que más se necesita. Sabemos que estos donantes tienen una característica especial, cuéntanos cómo actuarías en las siguientes situaciones y podrás saber si eres un Inagotable</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <p><b className="color-black">1. Quiero donar, pero vivo lejos del lugar de donación.</b></p>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p1" id="p1r1" value="1" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p1r1">
                                        Organizo mi tiempo para poder asistir a la jornada
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p1" id="p1r2" value="0" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p1r2">
                                        Espero a que me informen de una jornada de donación más cerca de mi ubicación
                                    </label>
                                </div>   

                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">2. En mi trabajo tengo una semana en que los horarios son más extensos y soy llamado para hacer mi donación de sangre</b></p>  
                                
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p2" id="p2r1" value="0" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p2r1">
                                        Espero a que mi carga laboral baje y busco una forma de acercarme al banco de sangre
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p2" id="p2r2" value="1" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p2r2">
                                        Converso con mis superiores para buscar una alternativa y asistir
                                    </label>
                                </div>

                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">3. Tengo la oportunidad de decidir a quién llega la sangre que he donado</b></p>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p3" id="p3r1" value="1" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p3r1">
                                        No la acepto
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p3" id="p3r2" value="0" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p3r2">
                                        La acepto
                                    </label>
                                </div>

                            </div>
    
                            <div className="mb-4">
                                <p><b className="color-black">4. El informe meteorológico dice que el día de la donación va a llover</b></p>
                                
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p4" id="p4r1" value="0" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p4r1">
                                        Programo mi donación para otro día
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="p4" id="p4r2" value="1" onChange={this.handleInputChange} />
                                    <label className="form-check-label" htmlFor="p4r2">
                                        Me pongo ropa para lluvia y asisto a la jornada
                                    </label>
                                </div>

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