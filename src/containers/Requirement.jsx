import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Requirement = () => (
    <>
        <div className="container">
            <Header />
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-12 mb-3 text-center">
                    <h2>Requisitos</h2>
                </div>
                <div className="col-12 col-md-6">
                    <ul>
                        <li> Pesar 50 kilos o más </li>
                        <li> Buen estado de salud </li>
                        <li> No haber tomado antibiótico 15 días antes </li>
                        <li> No tener tatuajes o piercing realizados en el último año </li>
                        <li> Haber dormido mínimo 5 horas la noche anterior </li>
                        <li> No tener un ayuno de más de 4 horas </li>
                        <li> No​ ​tener​ ​síntomas​ ​de​ ​gripa​ ​al​ ​momento​ ​de​ ​donar </li>
                        <li> No​ ​haber​ ​sufrido​ ​hepatitis​ ​después​ ​de​ ​los​ ​11​ ​años​ ​de​ ​edad </li>
                        <li> No​ ​haber​ ​ingerido​ ​antiparasitarios​ ​en​ ​el​ ​último​ ​mes </li>
                        <li> No​ ​haber​ ​recibido​ ​sangre​ ​en​ ​el​ ​último​ ​año </li>
                        <li> Tener​ ​un​ ​comportamiento​ ​sexual​ ​responsable </li>
                        <li> No​ ​estar​ ​embarazada </li>
                        <li> Si​ ​está​ ​lactando,​ ​que​ ​su​ ​hijo​ ​o​ ​hija​ ​tenga​ ​más​ ​de​ ​1​ ​año </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=kq4zZi7FCe4"></iframe>
                    </div>
                </div>
                <div className="col-12 col-md-8 mt-3 text-center">
                    <Link to="/" className="btn-red-light">
                        Regresar
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    </>
);

export default Requirement;