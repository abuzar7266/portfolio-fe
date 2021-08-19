import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import background from '../../images/background.jpg';
import Accordion from '../../components/jsx/Accordions';
const About = ()=>{
    return (<>
    {/*<div className="container-fluid bg-primary" style={{backgroundImage: `url("${background}")`,margin:"0px 0px 50px 0px",padding:"100px 0px 100px 0px" ,zIndex:"2"}}>*/}
        <div className="container-fluid">
            <div className="row">
                <br /><br /><br />
            </div>
            <div className="row">
                <div className="col-md-4 col-12">
                    <Accordion/>
                </div>
                <div className="col-6">
                    <img />
                </div>
            </div>
        </div>
    </>);
};
export default About;