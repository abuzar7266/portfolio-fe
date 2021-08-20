import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import NavBar from '../../components/jsx/NavBar';
import Home from './home';
import About from './about';
import Contact from './contact';
import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import Footer from '../../components/jsx/Footer';
const App = ()=>{
    return (<>
    
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>
    </Switch>
    <Footer/>

    </>);
};
export default App;