
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import Card from '../../components/jsx/Cards';
import '../css/home.css';
import {CardData} from '../../components/jsx/content';
class Home extends Component{
render(){ 
        
    return (<>
    <div className="Main-Outer">
    <div className="container-fluid Main-Inner" style={{padding:"250px 0px 250px 0px"}}>
        <div className="container" >
            <div className="row row-header">
                <div className="col-12 align-self-center" style={{ textAlign:"center" }}>
                    <h1>Hello, World.</h1>
                    <p>I am <strong>Abuzar</strong><br/>Welcome to my Portifolio Website.I hope you find itinteresting and make sure to<br/>check my latest projects on github in the link provided</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:"white"}}>
    <div className="row">
            <br />
    </div>

        <div className="row offset-md-1" style={{alignText:"center"}}>
        {
            CardData.map((data,idx)=>
            {
                return(
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{padding:"10px", alignText:"center"}}>
                <Card CardData={data}/>
                </div>);
            })
        }
        </div>
    <div className="row">
            <br />
    </div>
    </div>
    </>);
    }
};
export default Home;