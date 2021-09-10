import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/cards.css';
import { Modal} from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Container,Row,Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { responsive2 } from "./CardSlider";
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import axios from 'axios';
const url = "http://localhost:3001/images/";
class Cards extends Component{
  constructor(props)
    {
        super(props);
        this.state = {
            showHide : false
        }
    }
    handleModalShowHide() 
    {
          this.setState({ showHide: !this.state.showHide })
    }
    render(){
        var {CardData} = this.props;
        const imgUrl = ("http://localhost:3001/images/" + CardData.imageFile);
return (<>
  <div>
      <div>
         <div className="card card-outer" >
          <Link className="Link-Style-2" to={`/Post/${CardData._id}`}>
            <img className="card-img-top card-img" src={imgUrl} alt={CardData.title}/>
            <div className="card-body">
            <div id={CardData._id}>
            <h5 className="card-title head-flow" style={{fontSize:"14px",height:"20px"}}>{CardData.title}</h5>
              <p className="card-text text-flow" style={{fontSize:"11px",textAlign:"left",height:"95px"}}>{CardData.Text}</p>
            </div>
            </div>
          </Link>
          { this.props.Access==="public" && <div className="card-footer" style={{height:"60px"}}>
          <Link to="#" className="btn btn-sm Post-Icons" style={{height:"65px"}}> <i className="fas fa-edit"> </i></Link>
          <Link to="#" className="btn btn-sm Post-Icons" style={{height:"65px"}}> <i className="fas fa-times"> </i></Link>
          </div> }
</div>
      </div>
      
  </div>
        </>)
    }
}
export default Cards;