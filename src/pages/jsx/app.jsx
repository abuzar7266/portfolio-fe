import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './home';
import About from './about';
import Contact from './contact';
import PostDetail from './PostDetails';
import Footer from '../../components/jsx/Footer';

import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from '../../redux/configureStore';
const store = ConfigureStore();
class App extends Component{
    render()
    {
    return (<>  
    <Provider store={store}>
    <Switch>
    <Route exact path="/" exact={true} component={() => <Home/>}/>
    <Route exact path="/Post/:id" render={(props) => <PostDetail {...props} />}/>
    <Route exact path="/about" exact={true} component={() => <About/>}/>
    <Route exact path="/contact" exact={true} component={() => <Contact/>}/>
    <Redirect to="/"/>
    </Switch>
    <Footer/>
    </Provider>
    </>);
    }
};
export default App;