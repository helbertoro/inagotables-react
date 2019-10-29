import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../assets/styles/App.sass';
import quienesSon from '../assets/static/quienes-son.jpg';
import requisito1 from '../assets/static/requisito-1.png';
import requisito2 from '../assets/static/requisito-2.png';
import requisito3 from '../assets/static/requisito-3.png';
import reto from '../assets/static/reto.jpg';

const Home = () => (
    <>
        <div className="container">
            <Header />
            <Banner />
            <section className="row align-items-center">
                <div className="col-12 text-center px-0">
                    <h2>¿Quiénes son los inagotables?</h2>
                </div>
                <div className="row justify-content-center align-items-center py-4">
                    <div className="col-12 col-lg-5 text-center py-4">
                        <img className="img-fluid" src={quienesSon} alt="" />
                    </div>
                    <div className="col-12 col-lg-5 text-justify">
                        <p><b>Los Inagotables son donantes de sangre de impacto.</b>  Dan un poco de sí de manera organizada, en el momento en que más se necesita y como debe ser: sin esperar nada a cambio.</p>
                        <p>Eres inagotable cuando cuidas de ti mismo para poder compartir tu vida con más personas; cuando eres consciente de que tu ayuda no solo le llega al paciente transfundido, también a su familia.</p>
                        <p><b>Los Inagotables donan en el Banco Distrital de Sangre IDCBIS,</b> que provee los componentes sanguíneos a pacientes en hospitales públicos del Distrito.</p>
                    </div>
                </div>
            </section>
            <section className="row align-items-center justify-content-center back-grey">
                <div className="col-12 text-center px-0">
                    <h2>¿Cómo ser un inagotable?</h2>
                </div>
                <div className="col-12 col-lg-7 text-center py-4">
                    <h3>Inscríbete en nuestra red</h3>
                    <p>Recibirás información muy importante y  agendaremos una cita para que tu donación sea en la época en que generará un mayor impacto.</p>
                    <a className="btn-red" href="#" data-toggle="modal" data-target="#datos">Quiero inscribirme <i className="fas fa-caret-right"></i></a>
                </div>
            </section>
            <section className="py-3">
                <div className="row justify-content-center">
                    <div className="col-12 text-center py-4">
                        <a className="btn-light" href="#" data-toggle="modal" data-target="#datos">Requisitos</a>
                    </div>
                    <div className="col-12 col-lg-8 align-self-center text-center">
                        <p>Además de cumplir con los requisitos básicos de donación de sangre, que encontrarás en este enlace, es muy importante que cumplas las siguientes condiciones:</p>
                    </div>
                </div>
                <div className="row justify-content-center pt-4 requisitos">
                    <div className="col-7 col-md-3 text-center mb-3">
                        <img className="img-fluid mb-3 requisitos__img" src={requisito1} alt="" />
                        <p>Dona siempre con una sonrisa, enviando con tu donación tu mejor energía</p>
                    </div>
                    <div className="col-7 col-md-3 text-center mb-3">
                        <img className="img-fluid mb-3 requisitos__img" src={requisito2} alt="" />
                        <p>Invita a tus amigos y conocidos a vivir la experiencia de la donación de sangre</p>
                    </div>
                    <div className="col-7 col-md-3 text-center">
                        <img className="img-fluid mb-3 requisitos__img" src={requisito3} alt="" />
                        <p>Mantén hábitos de vida saludable</p>
                    </div>
                </div>
            </section>
            <section className="row align-items-center">
                <div className="col-12 px-0 text-center">
                    <h2>¿Un reto por cumplir?</h2>
                </div>
                <div className="row justify-content-center align-items-center py-4">
                    <div className="col-12 col-lg-5">
                        <img className="img-fluid" src={reto} alt="" />
                    </div>
                    <div className="col-12 col-lg-5 pt-3">
                        <h4 className="text-center">Hay momentos del año en que más pacientes necesitan transfusiones</h4>
                        <p>En vacaciones de  mitad de año y en fiestas de fin de año hay un crecimiento en la necesidad de componentes sanguíneos y las donaciones de sangre se reducen debido a que se hace más difícil encontrar a grupos de donantes frecuentes reunidos en un solo sitio, por ejemplo, a las comunidades universitarias.</p>
                        <p>La misión de los Inagotables es programar su donación para que esta sea en el momento de mayor impacto. Gracias a tu compromiso cumpliremos el reto de llevar nuevos componentes sanguíneos a los pacientes que más lo necesitan en hospitales públicos del Distrito.</p>
                    </div>
                    <div className="col-12 py-4 text-center">
                        <a className="btn-red" href="#" data-toggle="modal" data-target="#datos">¿Cumplirías el reto? <i className="fas fa-caret-down"></i></a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </>
)

export default Home;