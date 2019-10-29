import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Register from '../containers/Register';
import noInagotable from '../containers/noInagotable';
import Form from '../containers/Form';


const App = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/registrarme" component={Register} />
        <Route exact path="/no-eres" component={noInagotable} />
        <Route exact path="/formulario" component={Form} />
    </BrowserRouter>
);

export default App;