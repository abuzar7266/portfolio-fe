
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Card from '../../components/jsx/Cards';
import '../css/home.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
      Data:state.HomeData
    }
}

class Home extends Component
{
render(){ 
    return (<>
    <div className="Main-Outer">
    <div className="container-fluid Main-Inner" style={{padding:"250px 0px 250px 0px"}}>
        <div className="container" >
            <div className="row row-header">
                <div className="col-12 align-self-center" style={{ textAlign:"center" }}>
                    <h1>Hello, World.</h1>
                    <p>I am <strong>{this.props.Data.AboutData.name}</strong><br/> {this.props.Data.AboutData.pageText} </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:"transparent"}} style={{textAlign:"center",alignItems:"center"}}>
    <div className="row">
            <br />
            <br />
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Latest Featured Posts </h1>
        </div>
    </div>
        <div className="row " style={{alignText:"center"}}>
        {
            this.props.Data.Cards.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2" style={{overflow:"auto"}}>
                <Card CardData={data}/>
                </div>);
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Web-Development Projects</h1>
        </div>
    </div>
        <div className="row " style={{alignText:"center"}}>
        {
            this.props.Data.Cards.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2" style={{overflow:"auto"}}>
                <Card CardData={data}/>
                </div>);
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Data Science Projects</h1>
        </div>
    </div>
        <div className="row " style={{alignText:"center"}}>
        {
            this.props.Data.Cards.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2" style={{overflow:"auto"}}>
                <Card CardData={data}/>
                </div>);
            })
        }
    </div>
    <div className="row" style={{backgroundColor:"black",color:"white",textAlign:"center"}}>
        <div className="col-auto align-self-center" style={{color:"white",textAlign:"center"}}>
            <h1 style={{marginBottom:"30px",color:"white",textAlign:"center"}}> <i class="fa fa-certificate" aria-hidden="true"></i> Ideation Block</h1>
        </div>
    </div>
        <div className="row " style={{alignText:"center"}}>
        {
            this.props.Data.Cards.map((data,idx)=>
            {
                return(
                <div className="col-sm-10 offset-2 col-md-6 offset-md-0 col-lg-4 col-xl-3 col-xxl-2" style={{overflow:"auto"}}>
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
export default withRouter(connect(mapStateToProps)(Home));