import React from 'react'
import '../assets/styles/Register.sass';

const Form = () => (
    <div className="col-12 col-md-8">
        <form className="inscription" action="">
            <div className="col-12 px-0 inscription__container">
                <input className="inscription__container--input" type="text" name="nombre" placeholder="Tu nombre*" />
            </div>
            <div className="col-12 px-0 inscription__container">
                <input className="inscription__container--input" type="email" name="correo" placeholder="Tu correo electrónico*" />
            </div>
            <div className="col-12 px-0 inscription__container">
                
                <label for="grupo">Grupo Sanguíneo</label>
                <select class="inscription__container--select" name="grupo" id="grupo">
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
                <label className="form-check-label" for="habeasdata">Acepto inscribime a la base de datos de Inagotables.
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
);

export default Form;