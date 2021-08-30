import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/cards.css';
import { Button,Modal} from 'react-bootstrap';
import {InputGroup,FormControl} from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
class Card extends Component{
  constructor(props)
    {
        super(props);
        this.state = {
            showHide : false
        }
    }
    render(){
        var {CardData} = this.props;
return (<>
  <div>
  <div className="card card-outer">
  <img className="card-img-top card-img" src={CardData.image.default} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{CardData.title}</h5>
  <div id={CardData.Id}>
  <p className="card-text text-flow" style={{fontSize:"12px",textAlign:"left"}}>{CardData.text}</p>
    </div>
    <a href="#" className="btn card-btn"> <i className="fas fa-eye mr-3"> </i> Show More</a>
    <a href="#" className="btn btn-sm" style={{color:"grey",marginTop:"30px"}}> <i className="fas fa-edit"> </i></a>
    <a href="#" className="btn btn-sm" style={{color:"grey",marginTop:"30px"}}> <i className="fas fa-times"> </i></a>
  </div>
  </div>
  </div>
        </>)
    }
}
export default Card;